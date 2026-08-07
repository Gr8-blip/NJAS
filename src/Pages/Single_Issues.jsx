import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import '../Components/Issues.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'
import memberImg from '../Img-db/member1.jpg'
import memberImg2 from '../Img-db/member2.jpg'
import PdfDownloadButton from '../Components/PdfDownloadButton';


const Single_Issues = () => {
    const { id } = useParams();

    // Initialize state as null because it fetches a single volume object
    const [volume, setVolume] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVolumeData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`https://jsppharm.com/api/api/volumes/${id}/`);

                if (!response.ok) {
                    throw new Error(`HTTP Error Status: ${response.status}`);
                }

                const data = await response.json();
                setVolume(data);
            } catch (err) {
                console.error("Failed to fetch volume details:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchVolumeData();
        }
    }, [id]);

    const articleList = Array.isArray(volume?.articles)
        ? volume.articles
        : Array.isArray(volume?.article_set)
            ? volume.article_set
            : [];

    const issueSources = Array.isArray(volume?.issues)
        ? volume.issues
        : Array.isArray(volume?.issue_set)
            ? volume.issue_set
            : Array.isArray(volume?.issue)
                ? volume.issue
                : [];

    const normalizeId = (value) => value === undefined || value === null ? undefined : String(value);

    const normalizeIssueLabel = (value) => {
        if (!value) return undefined;
        const normalized = String(value).trim();
        const issueNumberMatch = normalized.match(/issue\s*(\d+)/i);
        if (issueNumberMatch) {
            return `Issue ${issueNumberMatch[1]}`;
        }
        const volumeIssueMatch = normalized.match(/vol(?:ume)?\.?.*issue\s*(\d+)/i);
        if (volumeIssueMatch) {
            return `Issue ${volumeIssueMatch[1]}`;
        }
        return normalized;
    };

    const issueListFromVolume = issueSources.map((issue) => ({
        id: normalizeId(issue.id ?? issue.issue_id ?? issue.issue_number ?? issue.name ?? issue.issue_label ?? issue.label),
        label: normalizeIssueLabel(
            issue.issue_label || issue.label || issue.title || issue.name ||
            (issue.issue_number ? `Issue ${issue.issue_number}` : undefined) ||
            `Issue ${issue.id ?? issue.issue_number ?? 1}`
        )
    })).filter(Boolean);

    const issueListFromArticles = articleList.reduce((acc, article) => {
        const issueId = normalizeId(article.issue_id ?? article.issue_number ?? article.issue ?? article.issue_label ?? article.volume_label ?? article.id);
        const label = normalizeIssueLabel(
            article.issue_label ||
            (article.issue_number ? `Issue ${article.issue_number}` : undefined) ||
            article.issue ||
            article.volume_label ||
            `Issue ${article.issue_number ?? article.issue ?? article.id ?? 1}`
        );

        if (issueId && label && !acc.some((item) => item.id === issueId)) {
            acc.push({ id: issueId, label });
        }

        return acc;
    }, []);

    const issueGroups = articleList.reduce((groups, article) => {
        const issueId = normalizeId(article.issue_id ?? article.issue_number ?? article.issue ?? article.issue_label ?? article.volume_label ?? article.id);
        const label = normalizeIssueLabel(
            article.issue_label ||
            (article.issue_number ? `Issue ${article.issue_number}` : undefined) ||
            article.issue ||
            article.volume_label ||
            `Issue ${article.issue_number ?? article.issue ?? article.id ?? 1}`
        );

        if (!issueId) return groups;

        if (!groups[issueId]) {
            groups[issueId] = { id: issueId, label, articles: [] };
        }

        groups[issueId].articles.push(article);
        return groups;
    }, {});

    const issueListFinal = issueListFromVolume.length > 0
        ? issueListFromVolume
        : Object.values(issueGroups).length > 0
            ? Object.values(issueGroups)
            : [{ id: 'fallback-1', label: 'Issue 1' }];

    const [selectedIssueId, setSelectedIssueId] = useState(null);

    useEffect(() => {
        const updateSelectedIssueFromHash = () => {
            const currentHash = window.location.hash || '';
            const issueId = currentHash.startsWith('#issue-') ? currentHash.replace('#issue-', '') : null;
            setSelectedIssueId(issueId);
        };

        updateSelectedIssueFromHash();
        window.addEventListener('hashchange', updateSelectedIssueFromHash);
        return () => window.removeEventListener('hashchange', updateSelectedIssueFromHash);
    }, []);

    const articleCount = volume?.article_count ?? volume?.articles_count ?? volume?.articleCount ?? articleList.length ?? 0;
    const uploadCount = volume?.upload_count ?? volume?.uploads_count ?? volume?.uploadCount ?? volume?.upload_count ?? 0;

    if (loading) return <p>Loading volume data...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
    if (!volume) return <p>No volume data available.</p>;

    return (
        <>
            <section className="issue-hero container">
                <div className="hero-flex-layout">
                    <div className="hero-meta-details">
                        <h1 className="main-issue-heading">Volume {volume.volume_number}</h1>

                        <ul className="issue-list">
                            {issueListFinal.map((issue) => (
                                <li key={issue.id || issue.label}>
                                    <a
                                        href={`#issue-${issue.id}`}
                                        className={`issue-link ${selectedIssueId === issue.id ? 'active-issue' : ''}`}
                                        onClick={() => setSelectedIssueId(issue.id)}
                                    >
                                        {issue.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Link to="#" className="download-pdf-link">Download Full issue PDF</Link>
            </section >

            {/* <div className="container main-layout-split"> */}
            <div className="layout-grid" style={{ marginTop: '-30px' }}>

                <main className="primary-feed-pane">
                    <section>
                        <div className="articles-category-section">
                            <div className="category-section-header">
                                <h4 className="category-title">Articles</h4>
                            </div>

                            {issueListFinal.map((issue) => {
                                const group = issueGroups[issue.id];
                                const articlesForIssue = group?.articles ?? [];
                                return (
                                    <div key={issue.id || issue.label} id={`issue-${issue.id}`} className="issue-section">
                                        {articlesForIssue.length > 0 ? (
                                            articlesForIssue.map((article) => (
                                                <div key={article.id} className="journal-column">
                                                    <div className="article-row-card">
                                                        <div className="article-main-body">
                                                            <Link to={`/articles/${article.id}`} className="article-title-link">
                                                                <h4 className="article-row-title">{article.title}</h4>
                                                            </Link>

                                                            <h5 className="article-row-authors-heading">{article.authors || "Authors not available"}</h5>

                                                            <div className="article-row-metrics-footer">
                                                                <span>👁️ {article.view_count || article.views || 0}</span>
                                                                <span>⬇️ {article.download_count || article.downloads || 0}</span>
                                                                <span>📋 {article.citation_count || article.citations || 0} citations</span>
                                                            </div>
                                                        </div>

                                                        <div className="article-right-actions">
                                                            <Link to={`/articles/${article.id}`} className="btn-action-read">Read</Link>
                                                            <PdfDownloadButton article={article} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No articles found for {issue.label}.</p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </main>

                <aside className="sidebar-column-rail">

                    <div className="sidebar-widget">
                        <h4 className="widget-heading">ISSUE EDITORS</h4>
                        <div className="editors-vertical-stack">
                            <div className="editor-profile-item">
                                {/* <div className="monogram-avatar bg-purple">PVUO</div> */}
                                <div className="member-avatar">
                                    <img src={memberImg} alt="Professor Valentine U Odili" />
                                </div>
                                <div className="editor-bio-meta">
                                    <h5>Professor Valentine U Odili</h5>
                                    <p>Editor-in-Chief</p>
                                </div>
                            </div>
                            <div className="editor-profile-item">
                                {/* <div className="monogram-avatar bg-indigo">DMIO</div> */}
                                <div className="member-avatar">
                                    <img src={memberImg2} alt="Dr Monday I Osarenmwinda" />
                                </div>
                                <div className="editor-bio-meta">
                                    <h5>Dr Monday I Osarenmwinda</h5>
                                    <p>Associate Editor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="widget">
                        <h4 className="widget-title">QUICK LINKS</h4>
                        <ul className="widget-list">
                            <li><Link to="/submit-manuscript">Submit a manuscript <span className="arrow">›</span></Link></li>
                            <li><Link to="/author-guidelines">Author guidelines <span className="arrow">›</span></Link></li>
                            <li><Link to="/editorial-policies">Editorial policies <span className="arrow">›</span></Link></li>
                            <li><Link to="/products-payment">Product Payment <span className="arrow">›</span></Link></li>
                            <li><Link to='/publication-ethics'>Publication Ethics <span className="arrow">›</span></Link></li>
                            <li><Link to='/privacy-policy'>Privacy Policy <span className="arrow">›</span></Link></li>
                            <li><Link to='/reviewer-form'>Reviewer Form <span className="arrow">›</span></Link></li>
                        </ul>
                    </div>

                    <div className="widget">
                        <h4 className="widget-title">CONTACT</h4>
                        <div className="contact-box">
                            <div className="contact-item">
                                <span className="lbl">Email</span>
                                <a href="mailto:jsppharm@uniben.edu" className="val link">jsppharm@uniben.edu</a>
                            </div>
                            <div className="contact-item">
                                <span className="lbl">Phone</span>
                                <span className="val">+234 807 804 4144</span>
                            </div>
                            <div className="contact-item">
                                <span className="lbl">Address</span>
                                <span className="val">Faculty of Pharmacy, <br /> University of Benin,</span>
                                <span className="val">Edo State, Nigeria</span>
                            </div>
                            <div className="contact-item">
                                <span className="lbl">Office Hours</span>
                                <span className="val">Mon-Fri: 9am - 5pm EST</span>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-widget">
                        <h4 className="widget-heading">STAY CURRENT</h4>
                        <p className="widget-description">Get new issue alerts and table of contents emails.</p>
                        <div className="subscription-form">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn-subscribe">Subscribe</button>
                        </div>
                    </div>

                </aside>
            </div>

            <Footer />
        </>
    )
}

export default Single_Issues
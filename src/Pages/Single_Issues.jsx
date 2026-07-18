import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import '../Components/Issues.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'
import ShareBtn from '../Components/ShareBtn'
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

    const articleCount = volume?.article_count ?? volume?.articles_count ?? volume?.articleCount ?? articleList.length ?? 0;
    const uploadCount = volume?.upload_count ?? volume?.uploads_count ?? volume?.uploadCount ?? volume?.upload_count ?? 0;

    if (loading) return <p>Loading volume data...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
    if (!volume) return <p>No volume data available.</p>;

    return (
        <>
            <div className="breadcrumbs container">
                <Link to="/">Home</Link> › <Link to="/volume">Volumes</Link>
            </div>

            <section className="issue-hero container">
                <div className="hero-flex-layout">
                    <div className="journal-badge-cover">
                        <div className="badge-lines">
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <div className="badge-bottom">MAY 2026</div>
                        {/* <img src="" alt="volume-image" /> */}
                    </div>

                    <div className="hero-meta-details">
                        <h1 className="main-issue-heading">Volume {volume.volume_number}</h1>
                        <Link to="#" className="download-pdf-link">Download Full issue PDF</Link>
                    </div>
                </div>

                <div className="metrics-row container">
                    <div className="metrics-card">
                        <span className="metric-value color-blue">{articleCount}</span>
                        <span className="metric-label">Articles</span>
                    </div>
                    <div className="metrics-card">
                        <span className="metric-value color-purple">{uploadCount}</span>
                        <span className="metric-label">Upload</span>
                    </div>
                </div>

                <div className="action-buttons-group container">
                    <Link to="/volume" className="btn btn-filled">Browse all Volume</Link>
                    <ShareBtn />
                </div>
            </section >

            <hr className='section-divider container' />

            <div className="container main-layout-split">

                <main className="primary-feed-pane">
                    <div className="shelf-controls-bar">
                        <div className="search-box-input">
                            <input type="text" placeholder="🔍 Search this issue..." />
                        </div>
                        <select><option>All sections</option></select>
                        <select><option>Sort: page order</option></select>
                        <span className="count-badge">{articleCount} articles</span>
                    </div>

                    <section>
                        <div className="articles-category-section">
                            <div className="category-section-header">
                                <h4 className="category-title">Related Issues</h4>
                            </div>

                            {articleList.length > 0 ? (
                                articleList.map((article) => (
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
                                                {/* <a href="https://jsppharm.com/media/manuscripts/jsppharm.v13i1.7.pdf" download="Custom_Filename.pdf" className="btn">
                                                    Download PDF
                                                </a> */}
                                                {/* <a href={article.manuscript_file} className="btn-action-pdf" target="_blank" rel="noreferrer" download="https://jsppharm.com/media/manuscripts/jsppharm.v13i1.7.pdf">PDF</a> */}
                                                {/* <Link to={article.manuscript_file || "https://jsppharm.com/media/manuscripts/jsppharm.v13i1.7.pdf"} className="btn-action-pdf" target="_blank" rel="noreferrer">PDF</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No articles found for this volume.</p>
                            )}
                        </div>
                    </section>
                </main>

                <aside className="sidebar-column-rail">

                    <div className="sidebar-widget">
                        <h4 className="widget-heading">ISSUE EDITORS</h4>
                        <div className="editors-vertical-stack">
                            <div className="editor-profile-item">
                                <div className="monogram-avatar bg-purple">DSC</div>
                                <div className="editor-bio-meta">
                                    <h5>Dr. Sarah Chen</h5>
                                    <p>Editor-in-Chief</p>
                                </div>
                            </div>
                            <div className="editor-profile-item">
                                <div className="monogram-avatar bg-indigo">PJW</div>
                                <div className="editor-bio-meta">
                                    <h5>Prof. James Wilson</h5>
                                    <p>Associate Editor</p>
                                </div>
                            </div>
                            <div className="editor-profile-item">
                                <div className="monogram-avatar bg-pink">DAO</div>
                                <div className="editor-bio-meta">
                                    <h5>Dr. Amara Okonkwo</h5>
                                    <p>Associate Editor</p>
                                </div>
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
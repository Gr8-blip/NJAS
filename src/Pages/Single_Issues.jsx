import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import '../Components/Issues.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'
import ShareBtn from '../Components/ShareBtn'


const Single_Issues = () => {
    const { id } = useParams();

    // Initialize state as null because it fetches a single volume object
    const [volume, setVolume] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVolumeDataFromMasterList = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch the full working list endpoint
                const response = await fetch("https://jsppharm.com/api/api/volumes/");

                if (!response.ok) {
                    throw new Error(`HTTP Error Status: ${response.status}`);
                }

                const allVolumesList = await response.json();

                // Extract ONLY the specific item matching our URL parameter ID
                // Number(id) ensures we don't hit string/integer type check conflicts
                const targetedVolume = allVolumesList.find(vol => Number(vol.id) === Number(id));

                if (!targetedVolume) {
                    throw new Error(`Volume with ID ${id} was not found in the list.`);
                }

                setVolume(targetedVolume);
            } catch (err) {
                console.error("Backup fetch failed:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchVolumeDataFromMasterList();
        }
    }, [id]);


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
                        <img src="" alt="volume-image" />
                    </div>

                    <div className="hero-meta-details">
                        <h1 className="main-issue-heading">Volume {volume.title}</h1>
                        <Link to="#" className="download-pdf-link">Download Full issue PDF</Link>
                    </div>
                </div>

                <div className="metrics-row container">
                    <div className="metrics-card">
                        <span className="metric-value color-blue">{volume.article_count}</span>
                        <span className="metric-label">Articles</span>
                    </div>
                    <div className="metrics-card">
                        <span className="metric-value color-indigo">152</span>
                        <span className="metric-label">Pages</span>
                    </div>
                    <div className="metrics-card">
                        <span className="metric-value color-purple">{volume.upload_count}</span>
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
                        <span className="count-badge">{volume.article_count} articles</span>
                    </div>

                    <section>
                        <div className="articles-category-section">
                            <div className="category-section-header">
                                <h4 className="category-title">Journal for Science and Practice of Phamarcy</h4>
                            </div>

                            <Link to={`/volumes/${volume.id}`} key={volume.id} className="journal-column">
                                <div className="article-row-card">
                                    <div className="article-main-body">
                                        <h4 className="article-row-title">Volume {volume.title}</h4>
                                        <h4 className="article-row-title">{volume.authors}</h4>
                                        <p className="article-row-authors"></p>
                                        <p className="article-row-abstract">
                                            We introduce a neuromorphic chip architecture optimised for sparse, event-driven simulation of atmospheric dynamics, reducing energy consumption by 78% while maintaining sub-1%...
                                        </p>
                                        <div className="article-row-metrics-footer">
                                            <span>👁️ 12,847</span>
                                            <span>⬇️ 4,312</span>
                                            <span>📋 41 citations</span>
                                        </div>
                                    </div>
                                    <div className="article-right-actions">
                                        <Link to="#" className="btn-action-read">Read</Link>
                                        <Link to="#" className="btn-action-pdf">PDF</Link>
                                    </div>
                                </div>
                            </Link>


                            {volume.articles && volume.articles.length > 0 ? (
                                volume.articles.map((article) => (
                                    // FIX 1: Wrap your card block layout in a standard div instead of a parent Link
                                    <div key={article.id} className="journal-column">
                                        <div className="article-row-card">
                                            <div className="article-main-body">
                                                FIX 2: Turn only the specific title text into the redirect link to the individual article view page
                                                <Link to={`/articles/${article.id}`} className="article-title-link">
                                                    <h4 className="article-row-title">Volume {article.title}</h4>
                                                </Link>

                                                Render authors correctly (make sure your backend uses the string property "authors" vs "author")
                                                <h5 className="article-row-authors-heading">{article.authors}</h5>
                                                <p className="article-row-authors"></p>

                                                Render dynamic abstracts if your API has them, or keep your template fallback text
                                                <p className="article-row-abstract">
                                                    {article.abstract || "We introduce a neuromorphic chip architecture optimised for sparse, event-driven simulation of atmospheric dynamics, reducing energy consumption by 78% while maintaining sub-1%..."}
                                                </p>

                                                <div className="article-row-metrics-footer">
                                                    <span>👁️ {article.views || "12,847"}</span>
                                                    <span>⬇️ {article.downloads || "4,312"}</span>
                                                    <span>📋 {article.citations || "41"} citations</span>
                                                </div>
                                            </div>

                                            <div className="article-right-actions">
                                                FIX 3: Target the specific article detail dynamic routing configurations cleanly
                                                <Link to={`/articles/${article.id}`} className="btn-action-read">Read</Link>
                                                <Link to={article.pdf_url || "#"} className="btn-action-pdf" target="_blank" rel="noreferrer">PDF</Link>
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
                        <h4 className="widget-heading">RECENT ISSUES</h4>
                        <div className="recent-issues-list">
                            <div className="issue-row">
                                <span className="vol-text">Vol. 14, Issue 3</span>
                                <span className="date-text">May 2026</span>
                            </div>
                            <div className="issue-row">
                                <span className="vol-text">Vol. 14, Issue 2</span>
                                <span className="date-text">Feb 2026</span>
                            </div>
                            <div className="issue-row">
                                <span className="vol-text">Vol. 14, Issue 1</span>
                                <span className="date-text">Nov 2025</span>
                            </div>
                            <div className="issue-row">
                                <span className="vol-text">Vol. 13, Issue 4</span>
                                <span className="date-text">Aug 2025</span>
                            </div>
                            <div className="issue-row">
                                <span className="vol-text">Vol. 14, Issue 3</span>
                                <span className="date-text">May 2024</span>
                            </div>
                        </div>
                    </div>

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
import React from 'react'
import '../Components/Issues.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'


const Issues = () => {
    return (
        <>
            <section className="issue-hero container">
                <div className="hero-flex-layout">
                    <div className="journal-badge-cover">
                        <div className="badge-top">JAST</div>
                        <div className="badge-volume">14·3</div>
                        <div className="badge-lines">
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <div className="badge-bottom">MAY 2026</div>
                    </div>

                    <div className="hero-meta-details">
                        <span className="current-issue-badge">CURRENT ISSUE</span>
                        <h1 className="main-issue-heading">Volume 13, Issue 1 — May 2026</h1>
                        <p className="issue-abstract-summary">
                            Featuring original research in artificial intelligence, materials science, biotechnology, and environmental modelling. This issue includes a special section on neuromorphic computing for physical simulation.
                        </p>
                        <div className="metadata-row">
                            <span>📅 Published: 14 May 2026</span>
                            <span>📄 Pages 189–340</span>
                            <span>🧬 ISSN 2398-4412</span>
                            <span>🔓 Open access</span>
                        </div>
                        <Link to="#" className="download-pdf-link">Download Full issue PDF</Link>
                    </div>
                </div>

                <div className="metrics-row container">
                    <div className="metrics-card">
                        <span className="metric-value color-blue">18</span>
                        <span className="metric-label">Articles</span>
                    </div>
                    <div className="metrics-card">
                        <span className="metric-value color-indigo">152</span>
                        <span className="metric-label">Pages</span>
                    </div>
                    <div className="metrics-card">
                        <span className="metric-value color-purple">47,300</span>
                        <span className="metric-label">Downloads</span>
                    </div>
                    {/* <div className="metrics-card">
                        <span className="metric-value color-slate">214</span>
                        <span className="metric-label">Citations</span>
                    </div> */}
                </div>

                {/* <div className="action-buttons-group container">
                    <Link to="#" className="btn btn-filled">Browse all articles</Link>
                    <Link to="#" className="btn btn-outline">Share issue</Link>
                    <Link to="#" className="btn btn-outline">AI overview ↗</Link>
                </div> */}
            </section>

            <hr className='section-divider container' />

            <div className="container main-layout-split">

                <main className="primary-feed-pane">

                    {/* <div className="editorial-banner-card">
                        <span className="editorial-tag">🖋️ EDITORIAL</span>
                        <h3>Energy-efficient computation and the future of scientific infrastructure</h3>
                        <p className="editorial-byline">Prof. Elena Vasquez, Editor-in-Chief · pp. 189–192 · <a href="#">Read ➔</a></p>
                    </div> */}

                    <div className="shelf-controls-bar">
                        <div className="search-box-input">
                            <input type="text" placeholder="🔍 Search this issue..." />
                        </div>
                        <select><option>All sections</option></select>
                        <select><option>Sort: page order</option></select>
                        <span className="count-badge">3 articles</span>
                    </div>

                    <section>
                        <div className="articles-category-section">
                            <div className="category-section-header">
                                <h4 className="category-title">ARTIFICIAL INFERENCE & COMPUTING</h4>
                                <span className="category-meta">6 ARTICLES · PP. 193–248</span>
                            </div>
                            <div className="article-row-card">
                                <div className="article-left-sidebar">
                                    <span className="page-stamp">p. 193</span>
                                </div>
                                <div className="article-main-body">
                                    <div className="article-badge-row">
                                        <span className="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 className="article-row-title">Neuromorphic computing architectures for real-time climate modelling at scale</h4>
                                    <p className="article-row-authors">A. Okafor · J. Lindqvist · R. Sharma · M. Torres</p>
                                    <p className="article-row-abstract">
                                        We introduce a neuromorphic chip architecture optimised for sparse, event-driven simulation of atmospheric dynamics, reducing energy consumption by 78% while maintaining sub-1%...
                                    </p>
                                    <div className="article-row-metrics-footer">
                                        <span>👁️ 12,847</span>
                                        <span>⬇️ 4,312</span>
                                        <span>📋 41 citations</span>
                                        <span className="star-badge">⭐ Editor's choice</span>
                                    </div>
                                </div>
                                <div className="article-right-actions">
                                    <Link to="#" className="btn-action-read">Read</Link>
                                    <Link to="#" className="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                            <div className="article-row-card">
                                <div className="article-left-sidebar">
                                    <span className="page-stamp">p. 232</span>
                                </div>
                                <div className="article-main-body">
                                    <div className="article-badge-row">
                                        <span className="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 className="article-row-title">Sparse attention transformers for long-horizon scientific time series forecasting</h4>
                                    <p className="article-row-authors">Y. Chen · H. Balogun · F. Müller</p>
                                    <p className="article-row-abstract">
                                        A novel transformer variant leveraging structured sparsity patterns to achieve accurate multi-step forecasting on geophysical and astronomical time series with reduced memory footprint.
                                    </p>
                                    <div className="article-row-metrics-footer">
                                        <span>👁️ 8,934</span>
                                        <span>⬇️ 2,158</span>
                                        <span>📋 23 citations</span>
                                    </div>
                                </div>
                                <div className="article-right-actions">
                                    <Link to="#" className="btn-action-read">Read</Link>
                                    <Link to="#" className="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                            <div className="article-row-card">
                                <div className="article-left-sidebar">
                                    <span className="page-stamp">p. 248</span>
                                </div>
                                <div className="article-main-body">
                                    <div className="article-badge-row">
                                        <span className="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 className="article-row-title">Graph neural networks for molecular property prediction in drug discovery</h4>
                                    <p className="article-row-authors">S. Patel · M. Zhang · K. O'Brien</p>
                                    <p className="article-row-abstract">
                                        We demonstrate that message-passing GNNs with attention mechanisms outperform traditional QSAR models on a curated dataset of 50,000 drug candidates, with 94% accuracy...
                                    </p>
                                    <div className="article-row-metrics-footer">
                                        <span>👁️ 6,543</span>
                                        <span>⬇️ 1,676</span>
                                        <span>📋 15 citations</span>
                                    </div>
                                </div>
                                <div className="article-right-actions">
                                    <Link to="#" className="btn-action-read">Read</Link>
                                    <Link to="#" className="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                        </div>

                        <div className="articles-category-section">
                            <div className="category-section-header">
                                <h4 className="category-title">BIOTECHNOLOGY & LIFE</h4>
                                <span className="category-meta">5 ARTICLES · PP. 249–298</span>
                            </div>
                            <div className="article-row-card">
                                <div className="article-left-sidebar">
                                    <span className="page-stamp">p. 193</span>
                                </div>
                                <div className="article-main-body">
                                    <div className="article-badge-row">
                                        <span className="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 className="article-row-title">Neuromorphic computing architectures for real-time climate modelling at scale</h4>
                                    <p className="article-row-authors">A. Okafor · J. Lindqvist · R. Sharma · M. Torres</p>
                                    <p className="article-row-abstract">
                                        We introduce a neuromorphic chip architecture optimised for sparse, event-driven simulation of atmospheric dynamics, reducing energy consumption by 78% while maintaining sub-1%...
                                    </p>
                                    <div className="article-row-metrics-footer">
                                        <span>👁️ 12,847</span>
                                        <span>⬇️ 4,312</span>
                                        <span>📋 41 citations</span>
                                        <span className="star-badge">⭐ Editor's choice</span>
                                    </div>
                                </div>
                                <div className="article-right-actions">
                                    <Link to="#" className="btn-action-read">Read</Link>
                                    <Link to="#" className="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                            <div className="article-row-card">
                                <div className="article-left-sidebar">
                                    <span className="page-stamp">p. 232</span>
                                </div>
                                <div className="article-main-body">
                                    <div className="article-badge-row">
                                        <span className="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 className="article-row-title">Sparse attention transformers for long-horizon scientific time series forecasting</h4>
                                    <p className="article-row-authors">Y. Chen · H. Balogun · F. Müller</p>
                                    <p className="article-row-abstract">
                                        A novel transformer variant leveraging structured sparsity patterns to achieve accurate multi-step forecasting on geophysical and astronomical time series with reduced memory footprint.
                                    </p>
                                    <div className="article-row-metrics-footer">
                                        <span>👁️ 8,934</span>
                                        <span>⬇️ 2,158</span>
                                        <span>📋 23 citations</span>
                                    </div>
                                </div>
                                <div className="article-right-actions">
                                    <Link to="#" className="btn-action-read">Read</Link>
                                    <Link to="#" className="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                            <div className="article-row-card">
                                <div className="article-left-sidebar">
                                    <span className="page-stamp">p. 248</span>
                                </div>
                                <div className="article-main-body">
                                    <div className="article-badge-row">
                                        <span className="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 className="article-row-title">Graph neural networks for molecular property prediction in drug discovery</h4>
                                    <p className="article-row-authors">S. Patel · M. Zhang · K. O'Brien</p>
                                    <p className="article-row-abstract">
                                        We demonstrate that message-passing GNNs with attention mechanisms outperform traditional QSAR models on a curated dataset of 50,000 drug candidates, with 94% accuracy...
                                    </p>
                                    <div className="article-row-metrics-footer">
                                        <span>👁️ 6,543</span>
                                        <span>⬇️ 1,676</span>
                                        <span>📋 15 citations</span>
                                    </div>
                                </div>
                                <div className="article-right-actions">
                                    <Link to="#" className="btn-action-read">Read</Link>
                                    <Link to="#" className="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                        </div>

                        <div className="articles-category-section">
                            <div className="category-section-header">
                                <h4 className="category-title">MATERIALS SCIENCE & PHYSICS</h4>
                                <span className="category-meta">6 ARTICLES · PP. 299–340</span>
                            </div>
                            <div className="article-row-card">
                                <div className="article-left-sidebar">
                                    <span className="page-stamp">p. 299</span>
                                </div>
                                <div className="article-main-body">
                                    <div className="article-badge-row">
                                        <span className="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 className="article-row-title">Neuromorphic computing architectures for real-time climate modelling at scale</h4>
                                    <p className="article-row-authors">A. Okafor · J. Lindqvist · R. Sharma · M. Torres</p>
                                    <p className="article-row-abstract">
                                        We introduce a neuromorphic chip architecture optimised for sparse, event-driven simulation of atmospheric dynamics, reducing energy consumption by 78% while maintaining sub-1%...
                                    </p>
                                    <div className="article-row-metrics-footer">
                                        <span>👁️ 12,847</span>
                                        <span>⬇️ 4,312</span>
                                        <span>📋 41 citations</span>
                                        <span className="star-badge">⭐ Editor's choice</span>
                                    </div>
                                </div>
                                <div className="article-right-actions">
                                    <Link to="#" className="btn-action-read">Read</Link>
                                    <Link to="#" className="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                            <div className="article-row-card">
                                <div className="article-left-sidebar">
                                    <span className="page-stamp">p. 232</span>
                                </div>
                                <div className="article-main-body">
                                    <div className="article-badge-row">
                                        <span className="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 className="article-row-title">Sparse attention transformers for long-horizon scientific time series forecasting</h4>
                                    <p className="article-row-authors">Y. Chen · H. Balogun · F. Müller</p>
                                    <p className="article-row-abstract">
                                        A novel transformer variant leveraging structured sparsity patterns to achieve accurate multi-step forecasting on geophysical and astronomical time series with reduced memory footprint.
                                    </p>
                                    <div className="article-row-metrics-footer">
                                        <span>👁️ 8,934</span>
                                        <span>⬇️ 2,158</span>
                                        <span>📋 23 citations</span>
                                    </div>
                                </div>
                                <div className="article-right-actions">
                                    <Link to="#" className="btn-action-read">Read</Link>
                                    <Link to="#" className="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                            <div className="article-row-card">
                                <div className="article-left-sidebar">
                                    <span className="page-stamp">p. 248</span>
                                </div>
                                <div className="article-main-body">
                                    <div className="article-badge-row">
                                        <span className="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 className="article-row-title">Graph neural networks for molecular property prediction in drug discovery</h4>
                                    <p className="article-row-authors">S. Patel · M. Zhang · K. O'Brien</p>
                                    <p className="article-row-abstract">
                                        We demonstrate that message-passing GNNs with attention mechanisms outperform traditional QSAR models on a curated dataset of 50,000 drug candidates, with 94% accuracy...
                                    </p>
                                    <div className="article-row-metrics-footer">
                                        <span>👁️ 6,543</span>
                                        <span>⬇️ 1,676</span>
                                        <span>📋 15 citations</span>
                                    </div>
                                </div>
                                <div className="article-right-actions">
                                    <Link to="#" className="btn-action-read">Read</Link>
                                    <Link to="#" className="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
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
                        <h4 className="widget-heading">TOPICS</h4>
                        <div className="topics-pills-cloud">
                            <span className="topic-pill">Artificial Intelligence</span>
                            <span className="topic-pill">Climate Science</span>
                            <span className="topic-pill">Neuromorphic Computing</span>
                            <span className="topic-pill">Materials Science</span>
                            <span className="topic-pill">Biotechnology</span>
                            <span className="topic-pill">Energy Efficiency</span>
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

export default Issues
import React from 'react'
import '../Components/Issues.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'


const Issues = () => {
    return (
        <>
            <section class="issue-hero container">
                <div class="hero-flex-layout">
                    <div class="journal-badge-cover">
                        <div class="badge-top">JAST</div>
                        <div class="badge-volume">14·3</div>
                        <div class="badge-lines">
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <div class="badge-bottom">MAY 2026</div>
                    </div>

                    <div class="hero-meta-details">
                        <span class="current-issue-badge">CURRENT ISSUE</span>
                        <h1 class="main-issue-heading">Volume 14, Issue 3 — May 2026</h1>
                        <p class="issue-abstract-summary">
                            Featuring original research in artificial intelligence, materials science, biotechnology, and environmental modelling. This issue includes a special section on neuromorphic computing for physical simulation.
                        </p>
                        <div class="metadata-row">
                            <span>📅 Published: 14 May 2026</span>
                            <span>📄 Pages 189–340</span>
                            <span>🧬 ISSN 2398-4412</span>
                            <span>🔓 Open access</span>
                        </div>
                        <Link to="#" class="download-pdf-link">📥 Full issue PDF</Link>
                    </div>
                </div>

                <div class="metrics-row container">
                    <div class="metrics-card">
                        <span class="metric-value color-blue">18</span>
                        <span class="metric-label">Articles</span>
                    </div>
                    <div class="metrics-card">
                        <span class="metric-value color-indigo">152</span>
                        <span class="metric-label">Pages</span>
                    </div>
                    <div class="metrics-card">
                        <span class="metric-value color-purple">47,300</span>
                        <span class="metric-label">Downloads</span>
                    </div>
                    <div class="metrics-card">
                        <span class="metric-value color-slate">214</span>
                        <span class="metric-label">Citations</span>
                    </div>
                </div>

                <div class="action-buttons-group container">
                    <Link to="#" class="btn btn-filled">Browse all articles</Link>
                    <Link to="#" class="btn btn-outline">Share issue</Link>
                    <Link to="#" class="btn btn-outline">AI overview ↗</Link>
                </div>
            </section>

            <hr className='section-divider container' />

            <div class="container main-layout-split">

                <main class="primary-feed-pane">

                    <div class="editorial-banner-card">
                        <span class="editorial-tag">🖋️ EDITORIAL</span>
                        <h3>Energy-efficient computation and the future of scientific infrastructure</h3>
                        <p class="editorial-byline">Prof. Elena Vasquez, Editor-in-Chief · pp. 189–192 · <a href="#">Read ➔</a></p>
                    </div>

                    <div class="shelf-controls-bar">
                        <div class="search-box-input">
                            <input type="text" placeholder="🔍 Search this issue..." />
                        </div>
                        <select><option>All sections</option></select>
                        <select><option>Sort: page order</option></select>
                        <span class="count-badge">3 articles</span>
                    </div>

                    <section>
                        <div class="articles-category-section">
                            <div class="category-section-header">
                                <h4 class="category-title">ARTIFICIAL INFERENCE & COMPUTING</h4>
                                <span class="category-meta">6 ARTICLES · PP. 193–248</span>
                            </div>
                            <div class="article-row-card">
                                <div class="article-left-sidebar">
                                    <span class="page-stamp">p. 193</span>
                                </div>
                                <div class="article-main-body">
                                    <div class="article-badge-row">
                                        <span class="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 class="article-row-title">Neuromorphic computing architectures for real-time climate modelling at scale</h4>
                                    <p class="article-row-authors">A. Okafor · J. Lindqvist · R. Sharma · M. Torres</p>
                                    <p class="article-row-abstract">
                                        We introduce a neuromorphic chip architecture optimised for sparse, event-driven simulation of atmospheric dynamics, reducing energy consumption by 78% while maintaining sub-1%...
                                    </p>
                                    <div class="article-row-metrics-footer">
                                        <span>👁️ 12,847</span>
                                        <span>⬇️ 4,312</span>
                                        <span>📋 41 citations</span>
                                        <span class="star-badge">⭐ Editor's choice</span>
                                    </div>
                                </div>
                                <div class="article-right-actions">
                                    <Link to="#" class="btn-action-read">Read</Link>
                                    <Link to="#" class="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                            <div class="article-row-card">
                                <div class="article-left-sidebar">
                                    <span class="page-stamp">p. 232</span>
                                </div>
                                <div class="article-main-body">
                                    <div class="article-badge-row">
                                        <span class="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 class="article-row-title">Sparse attention transformers for long-horizon scientific time series forecasting</h4>
                                    <p class="article-row-authors">Y. Chen · H. Balogun · F. Müller</p>
                                    <p class="article-row-abstract">
                                        A novel transformer variant leveraging structured sparsity patterns to achieve accurate multi-step forecasting on geophysical and astronomical time series with reduced memory footprint.
                                    </p>
                                    <div class="article-row-metrics-footer">
                                        <span>👁️ 8,934</span>
                                        <span>⬇️ 2,158</span>
                                        <span>📋 23 citations</span>
                                    </div>
                                </div>
                                <div class="article-right-actions">
                                    <Link to="#" class="btn-action-read">Read</Link>
                                    <Link to="#" class="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                            <div class="article-row-card">
                                <div class="article-left-sidebar">
                                    <span class="page-stamp">p. 248</span>
                                </div>
                                <div class="article-main-body">
                                    <div class="article-badge-row">
                                        <span class="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 class="article-row-title">Graph neural networks for molecular property prediction in drug discovery</h4>
                                    <p class="article-row-authors">S. Patel · M. Zhang · K. O'Brien</p>
                                    <p class="article-row-abstract">
                                        We demonstrate that message-passing GNNs with attention mechanisms outperform traditional QSAR models on a curated dataset of 50,000 drug candidates, with 94% accuracy...
                                    </p>
                                    <div class="article-row-metrics-footer">
                                        <span>👁️ 6,543</span>
                                        <span>⬇️ 1,676</span>
                                        <span>📋 15 citations</span>
                                    </div>
                                </div>
                                <div class="article-right-actions">
                                    <Link to="#" class="btn-action-read">Read</Link>
                                    <Link to="#" class="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                        </div>

                        <div class="articles-category-section">
                            <div class="category-section-header">
                                <h4 class="category-title">BIOTECHNOLOGY & LIFE</h4>
                                <span class="category-meta">5 ARTICLES · PP. 249–298</span>
                            </div>
                            <div class="article-row-card">
                                <div class="article-left-sidebar">
                                    <span class="page-stamp">p. 193</span>
                                </div>
                                <div class="article-main-body">
                                    <div class="article-badge-row">
                                        <span class="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 class="article-row-title">Neuromorphic computing architectures for real-time climate modelling at scale</h4>
                                    <p class="article-row-authors">A. Okafor · J. Lindqvist · R. Sharma · M. Torres</p>
                                    <p class="article-row-abstract">
                                        We introduce a neuromorphic chip architecture optimised for sparse, event-driven simulation of atmospheric dynamics, reducing energy consumption by 78% while maintaining sub-1%...
                                    </p>
                                    <div class="article-row-metrics-footer">
                                        <span>👁️ 12,847</span>
                                        <span>⬇️ 4,312</span>
                                        <span>📋 41 citations</span>
                                        <span class="star-badge">⭐ Editor's choice</span>
                                    </div>
                                </div>
                                <div class="article-right-actions">
                                    <Link to="#" class="btn-action-read">Read</Link>
                                    <Link to="#" class="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                            <div class="article-row-card">
                                <div class="article-left-sidebar">
                                    <span class="page-stamp">p. 232</span>
                                </div>
                                <div class="article-main-body">
                                    <div class="article-badge-row">
                                        <span class="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 class="article-row-title">Sparse attention transformers for long-horizon scientific time series forecasting</h4>
                                    <p class="article-row-authors">Y. Chen · H. Balogun · F. Müller</p>
                                    <p class="article-row-abstract">
                                        A novel transformer variant leveraging structured sparsity patterns to achieve accurate multi-step forecasting on geophysical and astronomical time series with reduced memory footprint.
                                    </p>
                                    <div class="article-row-metrics-footer">
                                        <span>👁️ 8,934</span>
                                        <span>⬇️ 2,158</span>
                                        <span>📋 23 citations</span>
                                    </div>
                                </div>
                                <div class="article-right-actions">
                                    <Link to="#" class="btn-action-read">Read</Link>
                                    <Link to="#" class="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                            <div class="article-row-card">
                                <div class="article-left-sidebar">
                                    <span class="page-stamp">p. 248</span>
                                </div>
                                <div class="article-main-body">
                                    <div class="article-badge-row">
                                        <span class="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 class="article-row-title">Graph neural networks for molecular property prediction in drug discovery</h4>
                                    <p class="article-row-authors">S. Patel · M. Zhang · K. O'Brien</p>
                                    <p class="article-row-abstract">
                                        We demonstrate that message-passing GNNs with attention mechanisms outperform traditional QSAR models on a curated dataset of 50,000 drug candidates, with 94% accuracy...
                                    </p>
                                    <div class="article-row-metrics-footer">
                                        <span>👁️ 6,543</span>
                                        <span>⬇️ 1,676</span>
                                        <span>📋 15 citations</span>
                                    </div>
                                </div>
                                <div class="article-right-actions">
                                    <Link to="#" class="btn-action-read">Read</Link>
                                    <Link to="#" class="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                        </div>

                        <div class="articles-category-section">
                            <div class="category-section-header">
                                <h4 class="category-title">MATERIALS SCIENCE & PHYSICS</h4>
                                <span class="category-meta">6 ARTICLES · PP. 299–340</span>
                            </div>
                            <div class="article-row-card">
                                <div class="article-left-sidebar">
                                    <span class="page-stamp">p. 299</span>
                                </div>
                                <div class="article-main-body">
                                    <div class="article-badge-row">
                                        <span class="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 class="article-row-title">Neuromorphic computing architectures for real-time climate modelling at scale</h4>
                                    <p class="article-row-authors">A. Okafor · J. Lindqvist · R. Sharma · M. Torres</p>
                                    <p class="article-row-abstract">
                                        We introduce a neuromorphic chip architecture optimised for sparse, event-driven simulation of atmospheric dynamics, reducing energy consumption by 78% while maintaining sub-1%...
                                    </p>
                                    <div class="article-row-metrics-footer">
                                        <span>👁️ 12,847</span>
                                        <span>⬇️ 4,312</span>
                                        <span>📋 41 citations</span>
                                        <span class="star-badge">⭐ Editor's choice</span>
                                    </div>
                                </div>
                                <div class="article-right-actions">
                                    <Link to="#" class="btn-action-read">Read</Link>
                                    <Link to="#" class="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                            <div class="article-row-card">
                                <div class="article-left-sidebar">
                                    <span class="page-stamp">p. 232</span>
                                </div>
                                <div class="article-main-body">
                                    <div class="article-badge-row">
                                        <span class="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 class="article-row-title">Sparse attention transformers for long-horizon scientific time series forecasting</h4>
                                    <p class="article-row-authors">Y. Chen · H. Balogun · F. Müller</p>
                                    <p class="article-row-abstract">
                                        A novel transformer variant leveraging structured sparsity patterns to achieve accurate multi-step forecasting on geophysical and astronomical time series with reduced memory footprint.
                                    </p>
                                    <div class="article-row-metrics-footer">
                                        <span>👁️ 8,934</span>
                                        <span>⬇️ 2,158</span>
                                        <span>📋 23 citations</span>
                                    </div>
                                </div>
                                <div class="article-right-actions">
                                    <Link to="#" class="btn-action-read">Read</Link>
                                    <Link to="#" class="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                            <div class="article-row-card">
                                <div class="article-left-sidebar">
                                    <span class="page-stamp">p. 248</span>
                                </div>
                                <div class="article-main-body">
                                    <div class="article-badge-row">
                                        <span class="badge-pill bg-blue">Artificial Intelligence</span>
                                    </div>
                                    <h4 class="article-row-title">Graph neural networks for molecular property prediction in drug discovery</h4>
                                    <p class="article-row-authors">S. Patel · M. Zhang · K. O'Brien</p>
                                    <p class="article-row-abstract">
                                        We demonstrate that message-passing GNNs with attention mechanisms outperform traditional QSAR models on a curated dataset of 50,000 drug candidates, with 94% accuracy...
                                    </p>
                                    <div class="article-row-metrics-footer">
                                        <span>👁️ 6,543</span>
                                        <span>⬇️ 1,676</span>
                                        <span>📋 15 citations</span>
                                    </div>
                                </div>
                                <div class="article-right-actions">
                                    <Link to="#" class="btn-action-read">Read</Link>
                                    <Link to="#" class="btn-action-pdf">PDF</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <aside class="sidebar-column-rail">

                    <div class="sidebar-widget">
                        <h4 class="widget-heading">RECENT ISSUES</h4>
                        <div class="recent-issues-list">
                            <div class="issue-row">
                                <span class="vol-text">Vol. 14, Issue 3</span>
                                <span class="date-text">May 2026</span>
                            </div>
                            <div class="issue-row">
                                <span class="vol-text">Vol. 14, Issue 2</span>
                                <span class="date-text">Feb 2026</span>
                            </div>
                            <div class="issue-row">
                                <span class="vol-text">Vol. 14, Issue 1</span>
                                <span class="date-text">Nov 2025</span>
                            </div>
                            <div class="issue-row">
                                <span class="vol-text">Vol. 13, Issue 4</span>
                                <span class="date-text">Aug 2025</span>
                            </div>
                            <div class="issue-row">
                                <span class="vol-text">Vol. 14, Issue 3</span>
                                <span class="date-text">May 2024</span>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-widget">
                        <h4 class="widget-heading">TOPICS</h4>
                        <div class="topics-pills-cloud">
                            <span class="topic-pill">Artificial Intelligence</span>
                            <span class="topic-pill">Climate Science</span>
                            <span class="topic-pill">Neuromorphic Computing</span>
                            <span class="topic-pill">Materials Science</span>
                            <span class="topic-pill">Biotechnology</span>
                            <span class="topic-pill">Energy Efficiency</span>
                        </div>
                    </div>

                    <div class="sidebar-widget">
                        <h4 class="widget-heading">ISSUE EDITORS</h4>
                        <div class="editors-vertical-stack">
                            <div class="editor-profile-item">
                                <div class="monogram-avatar bg-purple">DSC</div>
                                <div class="editor-bio-meta">
                                    <h5>Dr. Sarah Chen</h5>
                                    <p>Editor-in-Chief</p>
                                </div>
                            </div>
                            <div class="editor-profile-item">
                                <div class="monogram-avatar bg-indigo">PJW</div>
                                <div class="editor-bio-meta">
                                    <h5>Prof. James Wilson</h5>
                                    <p>Associate Editor</p>
                                </div>
                            </div>
                            <div class="editor-profile-item">
                                <div class="monogram-avatar bg-pink">DAO</div>
                                <div class="editor-bio-meta">
                                    <h5>Dr. Amara Okonkwo</h5>
                                    <p>Associate Editor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-widget">
                        <h4 class="widget-heading">STAY CURRENT</h4>
                        <p class="widget-description">Get new issue alerts and table of contents emails.</p>
                        <div class="subscription-form">
                            <input type="email" placeholder="Enter your email" />
                            <button class="btn-subscribe">Subscribe</button>
                        </div>
                    </div>

                </aside>
            </div>

            <Footer />
        </>
    )
}

export default Issues
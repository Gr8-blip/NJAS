import React from 'react'
import '../Components/Single_Issues.css'
import { Link } from 'react-router'

const Single_Issues = () => {
    return (
        <>
            <section className="hero-section">
                <h2 className="hero-title">Volume</h2>
            </section>

            <section className="layout-grid">

                <main className="primary-content">
                    <div className="issues-boxes">
                        <div class="journal-grid">
                            <Link to='/' class="journal-column">
                                <div class="journal-card theme-current">
                                    <div class="card-meta">
                                        <span>REF: NJAS-2026-11</span>
                                        <span>VOL 35 NO. 1</span>
                                    </div>
                                    <div class="card-header">
                                        <h2>NIGERIAN JOURNAL OF APPLIED SCIENCE</h2>
                                    </div>
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="3" />
                                            <circle cx="12" cy="5" r="2" />
                                            <circle cx="12" cy="19" r="2" />
                                            <circle cx="5" cy="12" r="2" />
                                            <circle cx="19" cy="12" r="2" />
                                            <path d="M12 7v2M12 15v2M7 12h2M15 12h2" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div class="info-panel">
                                            <div class="status-badge">Current Volume</div>
                                            <div class="volume-title">Mesophilic Optimization & Computational Water Modelling</div>
                                            <div class="publish-date">Published January 2026</div>
                                        </div>
                                        <div class="card-footer">ASAN Publication Series</div>
                                    </div>
                                </div>
                                <h3>Volume 35</h3>
                            </Link>

                             <Link to='/' class="journal-column">
                                <div class="journal-card theme-archived-white">
                                    <div class="card-meta">
                                        <span>REF: NJAS-2025-13</span>
                                        <span>VOL 34 NO. 3</span>
                                    </div>
                                    <div class="card-header">
                                        <h2>NIGERIAN JOURNAL OF APPLIED SCIENCE</h2>
                                    </div>
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round">
                                            <path d="M12 22V10M12 10c0-4 3-7 6-7M12 10c0-4-3-7-6-7M12 14c2-1 4-1 6-3M12 16c-2-1-4-1-6-3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="info-panel">
                                            <div class="status-badge white-badge-color">Archived Volume</div>
                                            <div class="volume-title">Botanical Extracts & Clinical Phytochemistry</div>
                                            <div class="publish-date">Published September 2025</div>
                                        </div>
                                        <div class="card-footer white-footer-color">ASAN Publication Series</div>
                                    </div>
                                </div>
                             <h3>Volume 34</h3>
                            </Link>

                             <Link to='/' class="journal-column">
                                <div class="journal-card theme-archived-green">
                                    <div class="card-meta">
                                        <span>REF: NJAS-2025-12</span>
                                        <span>VOL 34 NO. 2</span>
                                    </div>
                                    <div class="card-header">
                                        <h2>NIGERIAN JOURNAL OF APPLIED SCIENCE</h2>
                                    </div>
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="info-panel">
                                            <div class="status-badge">Archived Volume</div>
                                            <div class="volume-title">Nitrogen-Doped Supercapacitor Electrolytes</div>
                                            <div class="publish-date">Published May 2025</div>
                                        </div>
                                        <div class="card-footer">ASAN Publication Series</div>
                                    </div>
                                </div>
                             <h3>Volume 34</h3>
                            </Link>

                             <Link to='/' class="journal-column">
                                <div class="journal-card theme-legacy">
                                    <div class="card-meta">
                                        <span>REF: NJAS-2024-13</span>
                                        <span>VOL 33 NO. 3</span>
                                    </div>
                                    <div class="card-header">
                                        <h2>NIGERIAN JOURNAL OF APPLIED SCIENCE</h2>
                                    </div>
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l-.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3-1.57-3-3.5s1.07-3.5 3-3.5 3 1.57 3 3.5-1.07 3.5-3 3.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="info-panel">
                                            <div class="status-badge">Legacy Archive</div>
                                            <div class="volume-title">Hydrogeological Formations & Complex Geophysics</div>
                                            <div class="publish-date">Published September 2024</div>
                                        </div>
                                        <div class="card-footer">ASAN Publication Series</div>
                                    </div>
                                </div>
                             <h3>Volume 33</h3>
                            </Link>

                             <Link to='/' class="journal-column">
                                <div class="journal-card theme-legacy">
                                    <div class="card-meta">
                                        <span>REF: NJAS-2024-13</span>
                                        <span>VOL 33 NO. 3</span>
                                    </div>
                                    <div class="card-header">
                                        <h2>NIGERIAN JOURNAL OF APPLIED SCIENCE</h2>
                                    </div>
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l-.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3-1.57-3-3.5s1.07-3.5 3-3.5 3 1.57 3 3.5-1.07 3.5-3 3.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="info-panel">
                                            <div class="status-badge">Legacy Archive</div>
                                            <div class="volume-title">Hydrogeological Formations & Complex Geophysics</div>
                                            <div class="publish-date">Published September 2024</div>
                                        </div>
                                        <div class="card-footer">ASAN Publication Series</div>
                                    </div>
                                </div>
                             <h3>Volume 35</h3>
                            </Link>

                             <Link to='/' class="journal-column">
                                <div class="journal-card theme-archived-green">
                                    <div class="card-meta">
                                        <span>REF: NJAS-2025-12</span>
                                        <span>VOL 34 NO. 2</span>
                                    </div>
                                    <div class="card-header">
                                        <h2>NIGERIAN JOURNAL OF APPLIED SCIENCE</h2>
                                    </div>
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="info-panel">
                                            <div class="status-badge">Archived Volume</div>
                                            <div class="volume-title">Nitrogen-Doped Supercapacitor Electrolytes</div>
                                            <div class="publish-date">Published May 2025</div>
                                        </div>
                                        <div class="card-footer">ASAN Publication Series</div>
                                    </div>
                                </div>
                             <h3>Volume 35</h3>
                            </Link>

                        </div>
                    </div>
                </main >

                {/* <aside className="sidebar-rail">
                    <div className="widget">
                        <h4 className="widget-title">QUICK LINKS</h4>
                        <ul className="widget-list">
                            <li><Link to="/submit">Submit a manuscript <span className="arrow">›</span></Link></li>
                            <li><Link to="/author-guidelines">Author guidelines <span className="arrow">›</span></Link></li>
                            <li><Link to="/contact">Contact us <span className="arrow">›</span></Link></li>
                        </ul>
                    </div>
                </aside> */}
            </section >
        </>
    )
}

export default Single_Issues
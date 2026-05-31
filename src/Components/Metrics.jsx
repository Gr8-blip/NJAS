import React from 'react'
import './Metrics.css'

const Metrics = () => {
    return (
        <>
            <section id='metrics'>
                <div className='metrics-container'>
                    <div className="metrics-column">
                        <h1>Journal Metrics</h1>

                        <div className="metric-card">
                            <span className="metric-label parent-label">IMPACT FACTOR (2025)</span>
                            <div className="metric-value">7.41</div>
                            <p className="metric-sub">Top 8% in multidisciplinary science</p>
                        </div>

                        <div className="metric-card">
                            <span className="metric-label acceptance">ACCEPTANCE RATE</span>
                            <div className="metric-value">18%</div>
                            <p className="metric-sub">Rigorous double-blind peer review</p>
                        </div>

                        <div className="metric-card">
                            <span className="metric-label decision">MEDIAN TIME TO FIRST DECISION</span>
                            <div className="metric-value">21 days</div>
                            <p className="metric-sub">From submission to editorial decision</p>
                        </div>

                        <div className="metric-card">
                            <span className="metric-label published">ARTICLES PUBLISHED (2025)</span>
                            <div className="metric-value">312</div>
                            <p className="metric-sub">Across 4 issues</p>
                        </div>
                    </div>

                    <div className="submit-panel">
                        <h2>Submit a Manuscript</h2>
                        <p>JAST welcomes original research, review articles, and letters in all areas of science and technology. Submissions must report novel, reproducible findings not under consideration elsewhere.</p>
                        <ul className="submit-links">
                            <li><a href="#">➔ Author guidelines</a></li>
                            <li><a href="#">➔ Editorial board</a></li>
                        </ul>
                        <a href="#" className="submit-action-btn">Submit manuscript ➔</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Metrics
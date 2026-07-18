import React from 'react'
import './Metrics.css'
import { Link } from 'react-router'

const Metrics = () => {
    return (
        <>
            <section id='metrics'>
                <div className='metrics-container'>
                    {/* <div className="metrics-column">
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
                    </div> */}
                    <div className="metrics-column">
                        {/* <h1>Journal Metrics</h1> */}

                        <article className="guildelines-content" id="journal-overview">
                            <h3>Journal Overview</h3>
                            <p>The <b>Journal of Science and Practice of Pharmacy</b> is an online international journal allowing
                                free unlimited access to abstract and full-text of published articles. The journal is devoted to the
                                promotion of health sciences and related disciplines (including medicine, pharmacy, nursing, biotechnology,
                                cell and molecular biology, and related engineering and social sciences fields).
                            </p>

                            <p>It seeks particularly (but not exclusively) to encourage multidisciplinary research and collaboration
                                among scientists, the industry and the healthcare professionals. It also provides an international forum
                                for the communication and evaluation of data, methods and findings in health sciences and related disciplines.
                                The journal welcomes original research papers, reviews and case reports on current topics of special interest
                                and relevance.
                            </p>
                        </article>

                        <article className="guildelines-content" id="publication-charges">
                            <h3>Publication Charges</h3>
                            <p>
                                There is no payment to submit manuscript for review but authors will be required to pay US$150.00 (from developing countries) or US$200.00 (from developed countries) and N40,000.00 (from Nigeria) for each manuscript accepted before publication. Authors who fail to pay the required amount
                                will forfeit their accepted manuscript to the Publishers.
                            </p>
                        </article>
                    </div>

                    <div>
                        <div className="submit-panel">
                            <h2>Submit a Manuscript</h2>
                            <p>Journal of Science and Practice of Phamarcy (JSPP) welcomes original research, review articles, and letters in all areas of science and technology. Submissions must report novel, reproducible findings not under consideration elsewhere.</p>
                            <ul className="submit-links">
                                <li><Link to='/author-guildelines'>➔ Author guidelines</Link></li>
                                <li><Link to='/open-access-policy'>➔ Open Access Policy</Link></li>
                                <li><Link to='/advertising'>➔ Advertising</Link></li>
                            </ul>
                            <Link to='/submit-manuscript' className="submit-action-btn">Submit manuscript ➔</Link>
                        </div> <br /> <br />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Metrics
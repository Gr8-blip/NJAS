import React from 'react'
import '../Components/Article_page.css'
import { Link } from 'react-router'


const Article = () => {
    return (
        <>
            <div class="breadcrumbs container">
                <Link to="/">Home</Link> › <Link to="/articles/ai">Artificial Intelligence</Link> › Neuromorphic computing...
            </div>

            <section id='article'>
                <div className="article-top">
                    <p><span>ARTIFICIAL INTELLIGENCE</span> VOL. 14, ISSUE 3, pp. 214–231</p>
                </div>
                <h1>Neuromorphic Computing Architectures for Real-Time Climate Modelling at Scale</h1>
                <ul className='author'>
                    <li><strong>Authors:</strong> A. Okafor, J. Lindqvist, P. Sharma, M. Torres</li>
                    <li>📅 Received 12 Jan 2026</li>
                    <li>✓ Accepted 02 Apr 2026</li>
                    <li>📤 Published 14 May 2026</li>
                </ul>

                <div class="actions-bar">
                    <button class="btn btn-primary" id="btn-download">⬇️ Download PDF</button>
                    <button class="btn btn-secondary" id="btn-cite">📋 Cite article</button>
                    <button class="btn btn-secondary" id="btn-share">🔗 Share</button>
                    <button class="btn btn-secondary" id="btn-save">💾 Save</button>
                    <button class="btn btn-secondary" id="btn-ai">✨ AI summary</button>
                </div>
            </section>

            <section id='article-content'>
                <div className="content-container">
                    <article class="article-content-box">
                        <div class="abstract-box">
                            <h2>ABSTRACT</h2>
                            <p>We introduce a neuromorphic chip architecture optimised for sparse, event-driven simulation of atmospheric dynamics. Benchmarked against GPU clusters across five continental climate zones, our approach reduces energy consumption by 78% while maintaining sub-1% RMSE against ERA5 reanalysis data. The architecture exploits temporal sparsity inherent in meteorological signals via asynchronous spiking neural networks (SNNs), enabling real-time planetary-scale climate prediction without sacrificing physical fidelity.</p>

                            <div class="keywords-row">
                                <span class="keyword">neuromorphic computing</span>
                                <span class="keyword">climate modelling</span>
                                <span class="keyword">spiking neural networks</span>
                                <span class="keyword">atmospheric simulation</span>
                                <span class="keyword">energy-efficient AI</span>
                                <span class="keyword">ERA5</span>
                            </div>
                        </div>

                        <h3>1. Introduction</h3>
                        <p>The escalating computational demands of numerical weather prediction (NWP) have made energy
                            consumption a critical bottleneck in climate science. Current GPU-based ensemble systems consume
                            upward of 4 GWh per annum for a single national forecasting centre, a figure projected to double
                            by 2030 as ensemble sizes grow to accommodate uncertainty quantification at higher resolutions.</p>
                        <p>Neuromorphic processors, inspired by the sparse, event-driven computation of biological neural
                            circuits, offer a fundamentally different energy profile. Unlike dense matrix operations on GPUs,
                            spiking neural networks (SNNs) activate only when input signals exceed a threshold, yielding
                            near-zero idle power.</p>

                        <blockquote class="pull-quote">
                            "Unlike dense matrix operations on conventional accelerators, event-driven spiking architectures activate only when signals exceed threshold — yielding near-zero idle power during quiescent atmospheric states."
                        </blockquote>

                        <h3>2. Methods</h3>
                        <p>Our architecture, termed ClimatoCore-1, comprises 128 neuromorphic tiles arranged in a mesh topology, each tile housing 1,024 integrate-and-fire neurons with programmable synaptic delays. Input ERA5 reanalysis fields are encoded as Poisson spike trains at 10 ms temporal resolution and routed via on-chip mesh routing.</p>

                        <h3>3. Results</h3>
                        <p>ClimatoCore-1 achieved a global mean RMSE of 0.81 K for 2 m temperature at 5-day lead time, compared to 0.79 K for the GPU ensemble and 0.76 K for IFS — a 7% accuracy gap accompanied by an 88% reduction in energy usage. Skill scores over tropical regions exceeded those of the GPU ensemble, attributable to the SNN architecture's
                            ability to capture sharp convective onset events.</p>

                        <h3>References</h3>
                        <ol class="references-list">
                            <li>Krizhevsky, A., Sutskever, I., Hinton, G. E. (2012). Imagenet classification with deep convolutional neural networks. <em>Advances in Neural Information Processing Systems</em>, 25.</li>
                            <li>LeCun, Y., Bengio, Y., Hinton, G. (2015). Deep learning. <em>Nature</em>, 521(7553), 436-444.</li>
                            <li>Goodfellow, I., Pouget-Abadie, J., Mirza, M., et al. (2014). Generative adversarial networks. <em>Advances in Neural Information Processing Systems</em>, 27.</li>
                        </ol>
                    </article>
                    <aside class="article-sidebar">
                        <div class="sidebar-card">
                            <h4 class="card-title">ARTICLE METRICS</h4>
                            <div class="metrics-list">
                                <div class="metric-row">
                                    <span class="metric-label">Views</span>
                                    <span class="metrics-value">1,247</span>
                                </div>
                                <div class="metric-row">
                                    <span class="metric-label">Downloads</span>
                                    <span class="metrics-value">156</span>
                                </div>
                                <div class="metric-row">
                                    <span class="metric-label">Citations</span>
                                    <span class="metrics-value">23</span>
                                </div>
                                <div class="metric-row">
                                    <span class="metric-label">Read time</span>
                                    <span class="metrics-value">18 min</span>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-card">
                            <h4 class="card-title">ARTICLE INFO</h4>
                            <div class="metrics-list">
                                <div class="metric-row">
                                    <p class="doi-text"><b>DOI:</b> 10.1038/s41586-026-00847-x</p>
                                </div>
                                <div class="metric-row">
                                    <span class="license-badge">CC BY</span>
                                    <span class="license-text">Open access free to reuse</span>
                                </div>
                                <div className="metric-row">
                                    <span>University of Lagos; KTH Stockholm; IIT Bombay; UNAM</span>
                                </div>
                                <div className="metric-row">
                                    <Link to={'mailto:a.okafor@unilag.edu.ng'}>a.okafor@unilag.edu.ng</Link>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-card">
                            <h4 class="card-title">SEARCH THE ARTICLE</h4>
                            <div class="metrics-list">
                                <div class="metric-row">
                                    <button>Copy link</button>
                                </div>
                                <div class="metric-row">
                                    <button>Email</button>
                                </div>
                                <div class="metric-row">
                                    <button>Linkedin</button>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-card">
                            <h4 class="card-title related-title">RELATED ARTICLES</h4>
                            <hr class="card-divider"></hr>
                            <div class="related-list">
                                <div class="related-item">
                                    <span class="related-tag">AI & CLIMATE</span>
                                    <a href="#" class="related-link">Energy-efficient neural networks for climate prediction</a>
                                    <span class="related-date">May 2026</span>
                                </div>

                                <hr class="card-divider-light"></hr>
                                <div class="related-item">
                                    <span class="related-tag">AI & CLIMATE</span>
                                    <a href="#" class="related-link">Spiking neural networks in atmospheric modeling</a>
                                    <span class="related-date">May 2026</span>
                                </div>

                                <hr class="card-divider-light"></hr>
                                <div class="related-item">
                                    <span class="related-tag">ENV. & SCI.</span>
                                    <a href="#" class="related-link">Deep Learning Emulators for Sub-Seasonal Precipitation Forecasting</a>
                                    <span class="related-date">May 2026</span>
                                </div>

                                <hr class="card-divider-light"></hr>
                                <div class="related-item">
                                    <span class="related-tag">AI & CLIMATE</span>
                                    <a href="#" class="related-link">Spiking neural networks in atmospheric modeling</a>
                                    <span class="related-date">May 2026</span>
                                </div>
                            </div>
                        </div>

                    </aside>
                </div>

            </section>


            <section class="references-section">

            </section>

            <footer class="main-footer">
                <div class="container footer-grid">
                    <div>
                        <h4>Journal of Advances in Science & Technology</h4>
                        <p>Published by the Institute for Scientific Research</p>
                    </div>
                    <div>
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Advertise</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>LEGAL</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>ISSN 2398-4473 (Print) | ISSN 2398-4481 (Online) © 2026 Institute for Scientific Research. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}

export default Article



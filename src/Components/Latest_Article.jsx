import React from 'react'
import './Latest_Article.css'

const Latest_Article = () => {
    return (
        <>
            <section id="latest-articles">
                <div className="latest-articles-header">
                    <h1>Latest Articles</h1>
                    <a href="#" className="view-all-btn">View all issues ➔</a>
                </div>

                <div className="articles-grid">
                    <div className="article-card highlighted">
                        <span className="category-tag ai">ARTIFICIAL INTELLIGENCE</span>
                        <h3>Sparse Attention Transformers for Long-Horizon Scientific Time Series</h3>
                        <p className="authors">Y. Chen, R. Satapan, F. Müller</p>
                        <div className="meta-row">
                            <span>May 2026</span>
                            <span>👁️ 2,201 views</span>
                            <span>📄 9 pages</span>
                        </div>
                    </div>

                    <div className="article-card highlighted">
                        <span className="category-tag biotech">BIOTECHNOLOGY</span>
                        <h3>Lipid Nanoparticle Formulation Optimisation for mRNA Delivery Across Tissue Barriers</h3>
                        <p className="authors">Adegoke, S. Park, L. Rousseau</p>
                        <div className="meta-row">
                            <span>May 2026</span>
                            <span>👁️ 2,940 views</span>
                            <span>📄 4 pages</span>
                        </div>
                    </div>

                    <div className="article-card">
                        <span className="category-tag materials">MATERIALS SCIENCE</span>
                        <h3>Room-Temperature Superconductivity in Hydrogen-Rich Chalcides Under Moderate Pressure</h3>
                        <p className="authors">M. Isomura, T. Nakamura</p>
                        <div className="meta-row">
                            <span>Apr 2026</span>
                            <span>👁️ 8,115 views</span>
                            <span>📄 23 pages</span>
                        </div>
                    </div>

                    <div className="article-card">
                        <span className="category-tag ai">ARTIFICIAL INTELLIGENCE</span>
                        <h3>Causal Discovery in Observational High-Dimensional Genomics Data</h3>
                        <p className="authors">D. Osei, W. Li, A. Bhatt</p>
                        <div className="meta-row">
                            <span>Apr 2026</span>
                            <span>👁️ 1,874 views</span>
                            <span>📄 5 pages</span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Latest_Article
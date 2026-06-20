import React, { useState } from 'react'
import '../Components/Article_page.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'

const Single_Article = () => {
    const [showShareMenu, setShowShareMenu] = useState(false);

    // Article details for sharing
    const articleTitle = "";
    const articleUrl = window.location.href;
    const shareText = `Check out this article: ${articleTitle}`;

    // Handle share to different platforms
    const handleShare = (platform) => {
        let shareUrl = '';

        switch (platform) {
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + articleUrl)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(shareText)}`;
                break;
            default:
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_parent');
        }
        setShowShareMenu(false);
    };
    return (
        <>
            <div className="breadcrumbs container">
                <Link to="/">Home</Link> › <Link to="/articles/ai">Article</Link>
            </div>

            <section id='article'>
                <div className="article-top">
                    <p style={{ color: '#000' }}><span>VOL. 13, ISSUE 1</span></p>
                </div>
                <h1>Neuromorphic Computing Architectures for Real-Time Climate Modelling at Scale</h1>
                <div className='author'>
                    <span><strong style={{ color: '#000' }}>Authors: </strong> A. Okafor, J. Lindqvist, P. Sharma, M. Torres</span>
                    <span><strong style={{ color: '#000' }}>Author affiliation: </strong>University of Lagos; KTH Stockholm; IIT Bombay; UNAM</span>
                    <span><strong style={{ color: '#000' }}>Published: </strong>May 2026</span>
                </div>

                <div className="actions-bar">
                    <button className="btn btn-primary" id="btn-download">Download PDF</button>
                    <button className="btn btn-secondary" id="btn-cite">Cite article</button>
                    
                    {/* Share Button with Dropdown Menu */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <button 
                            className="btn btn-secondary" 
                            id="btn-share"
                            onClick={() => setShowShareMenu(!showShareMenu)}
                            style={{ cursor: 'pointer' }}
                        >
                            Share
                        </button>
                        
                        {showShareMenu && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: '0',
                                backgroundColor: '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                minWidth: '180px',
                                zIndex: 1000,
                                marginTop: '8px'
                            }}>
                                <button
                                    onClick={() => handleShare('whatsapp')}
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        color: '#334155',
                                        transition: 'background-color 0.2s ease',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                >
                                    WhatsApp
                                </button>
                                <button
                                    onClick={() => handleShare('facebook')}
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        color: '#334155',
                                        transition: 'background-color 0.2s ease',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                >
                                    Facebook
                                </button>
                                <button
                                    onClick={() => handleShare('linkedin')}
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        color: '#334155',
                                        transition: 'background-color 0.2s ease',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                >
                                    LinkedIn
                                </button>
                                <button
                                    onClick={() => handleShare('twitter')}
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        color: '#334155',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                >
                                    Twitter
                                </button>
                            </div>
                        )}
                    </div>

                    <button className="btn btn-secondary" id="btn-ai">AI summary</button>
                </div>
            </section>

            <section id='article-content'>
                <div className="content-container">
                    <article className="article-content-box">
                        <div className="abstract-box">
                            <h2>ABSTRACT</h2>
                            <p>We introduce a neuromorphic chip architecture optimised for sparse, event-driven simulation of atmospheric dynamics. Benchmarked against GPU clusters across five continental climate zones, our approach reduces energy consumption by 78% while maintaining sub-1% RMSE against ERA5 reanalysis data. The architecture exploits temporal sparsity inherent in meteorological signals via asynchronous spiking neural networks (SNNs), enabling real-time planetary-scale climate prediction without sacrificing physical fidelity.</p>

                            <div className="keywords-row">
                                <span className="keyword">neuromorphic computing</span>
                                <span className="keyword">climate modelling</span>
                                <span className="keyword">spiking neural networks</span>
                                <span className="keyword">atmospheric simulation</span>
                                <span className="keyword">energy-efficient AI</span>
                                <span className="keyword">ERA5</span>
                            </div>
                        </div>
                    </article>


                    <aside className="article-sidebar">
                        <div className="sidebar-card">
                            <h4 className="card-title">ARTICLE METRICS</h4>
                            <div className="metrics-list">
                                <div className="metric-row">
                                    <span className="metric-label">Views</span>
                                    <span className="metrics-value">1,247</span>
                                </div>
                                <div className="metric-row">
                                    <span className="metric-label">Downloads</span>
                                    <span className="metrics-value">156</span>
                                </div>
                                <div className="metric-row">
                                    <span className="metric-label">Citations</span>
                                    <span className="metrics-value">23</span>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-card">
                            <h4 className="card-title">ARTICLE INFO</h4>
                            <div className="metrics-list">
                                <div className="metric-row">
                                    <p className="doi-text"><b>DOI:</b> 10.1038/s41586-026-00847-x</p>
                                </div>
                                <div className="metric-row">
                                    <span className="license-badge">CC BY</span>
                                    <span className="license-text">Open access free to reuse</span>
                                </div>
                                <div className="metric-row">
                                    <span>University of Lagos; KTH Stockholm; IIT Bombay; UNAM</span>
                                </div>
                                <div className="metric-row">
                                    <Link to={'mailto:a.okafor@unilag.edu.ng'}>a.okafor@unilag.edu.ng</Link>
                                </div>
                            </div>
                        </div>

                        <div className="widget">
                            <h4 className="widget-title">QUICK LINKS</h4>
                            <ul className="widget-list">
                                <li><Link to="/submit">Submit a manuscript <span className="arrow">›</span></Link></li>
                                <li><Link to="/author-guidelines">Author guidelines <span className="arrow">›</span></Link></li>
                                <li><Link to="/contact">Contact us <span className="arrow">›</span></Link></li>
                            </ul>
                        </div>
                        <div className="widget">
                            <h4 className="widget-title">CONTACT</h4>
                            <div className="contact-box">
                                <div className="contact-item">
                                    <span className="lbl">Email</span>
                                    <a href="mailto:contact@mcgillard.com" className="val link">contact@mcgillard.com</a>
                                </div>
                                <div className="contact-item">
                                    <span className="lbl">Phone</span>
                                    <span className="val">+234 906 802 2212</span>
                                </div>
                                <div className="contact-item">
                                    <span className="lbl">Address</span>
                                    <span className="val">Tantua Road, Amassoma, Wilberforce Island,</span>
                                    <span className="val">Bayelsa State, Nigeria</span>
                                </div>
                                <div className="contact-item">
                                    <span className="lbl">Office Hours</span>
                                    <span className="val">Mon-Fri: 9am - 5pm EST</span>
                                    <button className="btn-subscribe">Schedule a Meeting</button>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-card">
                            <h4 className="card-title related-title">RELATED ARTICLES</h4>
                            <hr className="card-divider"></hr>
                            <div className="related-list">
                                <div className="related-item">
                                    <span className="related-tag">AI & CLIMATE</span>
                                    <a href="#" className="related-link">Energy-efficient neural networks for climate prediction</a>
                                    <span className="related-date">May 2026</span>
                                </div>

                                <hr className="card-divider-light"></hr>
                                <div className="related-item">
                                    <span className="related-tag">AI & CLIMATE</span>
                                    <a href="#" className="related-link">Spiking neural networks in atmospheric modeling</a>
                                    <span className="related-date">May 2026</span>
                                </div>

                                <hr className="card-divider-light"></hr>
                                <div className="related-item">
                                    <span className="related-tag">ENV. & SCI.</span>
                                    <a href="#" className="related-link">Deep Learning Emulators for Sub-Seasonal Precipitation Forecasting</a>
                                    <span className="related-date">May 2026</span>
                                </div>

                                <hr className="card-divider-light"></hr>
                                <div className="related-item">
                                    <span className="related-tag">AI & CLIMATE</span>
                                    <a href="#" className="related-link">Spiking neural networks in atmospheric modeling</a>
                                    <span className="related-date">May 2026</span>
                                </div>
                            </div>
                        </div>

                    </aside>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default Single_Article
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import '../Components/Article_page.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'
import ShareBtn from '../Components/ShareBtn'

const Single_Article = () => {

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch("https://jsppharm.com/api/api/articles/");

            // Always check if the response status is 200-299
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setArticles(data)
        }

        fetchArticle();

    }, [])


    const { id } = useParams();

    // Initialize state as null because it fetches a single volume object
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticleDataFromMasterList = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch the full working list endpoint
                const response = await fetch("https://jsppharm.com/api/api/articles/");

                if (!response.ok) {
                    throw new Error(`HTTP Error Status: ${response.status}`);
                }

                const allArticleList = await response.json();

                // Extract ONLY the specific item matching our URL parameter ID
                // Number(id) ensures we don't hit string/integer type check conflicts
                const targetedArticles = allArticleList.find(art => Number(art.id) === Number(id));

                if (!targetedArticles) {
                    throw new Error(`Articles with ID ${id} was not found in the list.`);
                }

                setArticles(targetedArticles);
            } catch (err) {
                console.error("Backup fetch failed:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchArticleDataFromMasterList();
        }
    }, [id]);


    if (loading) return <p>Loading article data...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
    if (!articles) return <p>No article data available.</p>;

    return (
        <>
            <div className="breadcrumbs container">
                <Link to="/">Home</Link> › <Link to="/article">Article</Link>
            </div>

            <section id='article'>
                <div className="article-top">
                    <p style={{ color: '#000' }}><span>{articles.volume_label}</span></p>
                </div>
                <h1>{articles.title}</h1>
                <div className='author'>
                    <span><strong style={{ color: '#000' }}>Authors: </strong>{articles.authors}</span>
                    <span><strong style={{ color: '#000' }}>Author affiliation: </strong>{articles.author_affiliations}</span>
                    <span><strong style={{ color: '#000' }}>Published: </strong>{articles.date_approved}</span>
                </div>

                <div className="actions-bar">
                    <button className="btn btn-primary" id="btn-download">Download PDF</button>
                    <button className="btn btn-secondary" id="btn-cite">Cite article</button>
                    <ShareBtn />
                </div>
            </section>

            <section id='article-content'>
                <div className="content-container">
                    <article className="article-content-box">
                        <div className="abstract-box">
                            <h2>ABSTRACT</h2>
                            <p>{articles.abstract}</p>
                            <div className="keywords-row">
                                <span className="keyword">{articles.keywords}</span>
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
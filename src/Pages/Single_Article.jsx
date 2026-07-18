import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import '../Components/Article_page.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'
import ShareBtn from '../Components/ShareBtn'
import PdfDownloadButton from '../Components/PdfDownloadButton'

const Single_Article = () => {
    const { id } = useParams();

    const [allArticles, setAllArticles] = useState([]);
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticleData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch("https://jsppharm.com/api/api/articles/");

                if (!response.ok) {
                    throw new Error(`HTTP Error Status: ${response.status}`);
                }

                const allArticleList = await response.json();
                const articleList = Array.isArray(allArticleList) ? allArticleList : [];

                setAllArticles(articleList);

                const targetedArticle = articleList.find(art => Number(art.id) === Number(id));

                if (!targetedArticle) {
                    throw new Error(`Articles with ID ${id} was not found in the list.`);
                }

                setArticle(targetedArticle);
            } catch (err) {
                console.error("Failed to fetch article data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchArticleData();
        }
    }, [id]);

    const relatedArticles = article
        ? allArticles.filter((item) => Number(item.id) !== Number(article.id)).filter((item) => {
            if (article.volume_label && item.volume_label) {
                return item.volume_label === article.volume_label;
            }
            if (article.authors && item.authors) {
                return item.authors === article.authors;
            }
            return true;
        }).slice(0, 4)
        : [];

    if (loading) return <p>Loading article data...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
    if (!article) return <p>No article data available.</p>;

    return (
        <>
            <div className="breadcrumbs container">
                <Link to="/">Home</Link> › <Link to="/article">Article</Link>
            </div>

            <div className='article-section'>
                <section id='article'>
                    <div className="article-top">
                        <span className='article-volume-label'>{article.volume_label}</span>

                    </div>
                    <h1>{article.title}</h1>
                    <div className='author'>
                        <span><strong>Authors: </strong>{article.authors}</span>
                    </div>

                    <div className="actions-bar">
                        <button className="btn btn-secondary" id="btn-cite">Cite article</button>
                        <ShareBtn />
                        <PdfDownloadButton article={article} />
                    </div>
                </section>
            </div>

            <section id='article-content'>
                <div className="content-container">
                    <article className="article-content-box">
                        <div className="abstract-box">
                            <h2>ABSTRACT</h2>
                            <p>{article.abstract}</p>
                            <div className="keywords-row">
                                <span className="keyword">{article.keywords}</span>
                            </div>
                        </div>
                    </article>


                    <aside className="article-sidebar">
                        <div className="sidebar-card">
                            <h4 className="card-title">ARTICLE METRICS</h4>
                            <div className="metrics-list">
                                <div className="metric-row">
                                    <span className="metric-label">Views</span>
                                    <span className="metrics-value">{article.view_count || article.views || 0}</span>
                                </div>
                                <div className="metric-row">
                                    <span className="metric-label">Downloads</span>
                                    <span className="metrics-value">{article.download_count || article.downloads || 0}</span>
                                </div>
                                <div className="metric-row">
                                    <span className="metric-label">Citations</span>
                                    <span className="metrics-value">{article.citation_count || article.citations || 0}</span>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-card">
                            <h4 className="card-title related-title">RELATED ARTICLES</h4>
                            <hr className="card-divider"></hr>
                            <div className="related-list">
                                {relatedArticles.length > 0 ? (
                                    relatedArticles.map((item) => (
                                        <div key={item.id} className="related-item">
                                            <span className="related-tag">{item.volume_label || 'ARTICLE'}</span>
                                            <Link to={`/articles/${item.id}`} className="related-link">
                                                {item.title}
                                            </Link>
                                            <span className="related-date">{item.date_approved || item.published_at || 'Recent'}</span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="related-link">No related articles available.</p>
                                )}
                            </div>
                        </div>

                        <div className="widget">
                            <h4 className="widget-title">QUICK LINKS</h4>
                            <ul className="widget-list">
                                <li><Link to="/submit-manuscript">Submit a manuscript <span className="arrow">›</span></Link></li>
                                <li><Link to="/author-guidelines">Author guidelines <span className="arrow">›</span></Link></li>
                                <li><Link to="/editorial-policies">Editorial policies <span className="arrow">›</span></Link></li>
                                <li><Link to="/products-payment">Product Payment <span className="arrow">›</span></Link></li>
                                <li><Link to='/publication-ethics'>Publication Ethics <span className="arrow">›</span></Link></li>
                                <li><Link to='/privacy-policy'>Privacy Policy <span className="arrow">›</span></Link></li>
                                <li><Link to='/reviewer-form'>Reviewer Form <span className="arrow">›</span></Link></li>
                            </ul>
                        </div>
                        <div className="widget">
                            <h4 className="widget-title">CONTACT</h4>
                            <div className="contact-box">
                                <div className="contact-item">
                                    <span className="lbl">Email</span>
                                    <a href="mailto:jsppharm@uniben.edu" className="val link">jsppharm@uniben.edu</a>
                                </div>
                                <div className="contact-item">
                                    <span className="lbl">Phone</span>
                                    <span className="val">+234 807 804 4144</span>
                                </div>
                                <div className="contact-item">
                                    <span className="lbl">Address</span>
                                    <span className="val">Faculty of Pharmacy, <br /> University of Benin,</span>
                                    <span className="val">Edo State, Nigeria</span>
                                </div>
                                <div className="contact-item">
                                    <span className="lbl">Office Hours</span>
                                    <span className="val">Mon-Fri: 9am - 5pm EST</span>
                                    {/* <button className="btn-subscribe">Schedule a Meeting</button> */}
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
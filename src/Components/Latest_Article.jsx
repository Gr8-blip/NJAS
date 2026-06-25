import React, { useEffect, useState } from 'react'
import './Latest_Article.css'
import { Link } from 'react-router'
import PaginationBtn from './PaginationBtn';

const Latest_Article = () => {
    const [articles, setArticles] = useState([]);

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

    return (
        <>
            <section id="latest-articles">
                <div className="latest-articles-header">
                    <h1>Latest Articles</h1>
                    {/* <Link to='/article' className="view-all-btn">View all issues ➔</Link> */}
                </div>

                <div className="articles-grid">
                    {articles.map((article) => (
                        <Link to={`/articles/${article.id}`} key={article.id} className="articles-box">
                            <div className="article-card">
                                <h3>{article.title}</h3>
                                <p className="authors">{article.authors}</p>
                                <strong className="authors">{article.volume_label}</strong>      
                          
                                <div className="meta-row">
                                    <p className="authors">{article.date_approved}</p>
                                    <span>👁️ 5 views</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <PaginationBtn />
            </section >
        </>
    )
}

export default Latest_Article
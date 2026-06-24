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
                    <Link to='/article' className="view-all-btn">View all issues ➔</Link>
                </div>

                <div className="articles-grid">
                    <Link to='/single-article' className="article-card">
                        {articles.map((article) => (
                            <h3>{article.title}</h3>
                        ))}
                        {articles.map((article) => (
                            <p className="authors">{article.authors}</p>
                        ))}
                        <div className="meta-row">
                            {articles.map((article) => (
                            <p className="authors">{article.date_approved}</p>
                        ))}
                            <span>👁️ 2,201 views</span>
                        </div>
                    </Link>

                    <Link to='/single-article' className="article-card">
                        {articles.map((article) => (
                            <h3>{article.title}</h3>
                        ))}
                        {articles.map((article) => (
                            <p className="authors">{article.authors}</p>
                        ))}
                        <div className="meta-row">
                            {articles.map((article) => (
                            <p className="authors">{article.date_approved}</p>
                        ))}
                            <span>👁️ 2,201 views</span>
                        </div>
                    </Link>

                    <Link to='/single-article' className="article-card">
                        {articles.map((article) => (
                            <h3>{article.title}</h3>
                        ))}
                        {articles.map((article) => (
                            <p className="authors">{article.authors}</p>
                        ))}
                        <div className="meta-row">
                            {articles.map((article) => (
                            <p className="authors">{article.date_approved}</p>
                        ))}
                            <span>👁️ 2,201 views</span>
                        </div>
                    </Link>

                    <Link to='/single-article' className="article-card">
                        {articles.map((article) => (
                            <h3>{article.title}</h3>
                        ))}
                        {articles.map((article) => (
                            <p className="authors">{article.authors}</p>
                        ))}
                        <div className="meta-row">
                            {articles.map((article) => (
                            <p className="authors">{article.date_approved}</p>
                        ))}
                            <span>👁️ 2,201 views</span>
                        </div>
                    </Link>
                </div>
                
                <PaginationBtn />
            </section>
        </>
    )
}

export default Latest_Article
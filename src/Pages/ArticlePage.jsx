// import React from 'react'
import React, { useEffect, useState } from 'react'
import '../Components/Latest_Article.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'
import Search from '../Components/Search'
import PaginationBtn from '../Components/PaginationBtn'


const ArticlePage = () => {
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
            <Search />

            <section id="latest-articles">
                <div className="latest-articles-header">
                    <h1>Latest Articles</h1>
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

            <Footer />

        </>
    )
}

export default ArticlePage



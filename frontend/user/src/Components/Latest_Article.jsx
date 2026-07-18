import React, { useEffect, useState } from 'react'
import './Latest_Article.css'
import { Link, useLocation } from 'react-router'
import PaginationBtn from './PaginationBtn';

const Latest_Article = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const location = useLocation();
    const isArticlePage = location.pathname === '/article';
    const articlesPerPage = isArticlePage ? 8 : 4;

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch("https://jsppharm.com/api/api/articles/");

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setArticles(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Failed to fetch articles:', error);
                setArticles([]);
            }
        }

        fetchArticle();
    }, [])

    const totalPages = Math.max(1, Math.ceil(articles.length / articlesPerPage));
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const visibleArticles = articles.slice(startIndex, endIndex);
    const shouldShowPagination = isArticlePage && articles.length > articlesPerPage;
    const shouldShowViewAllButton = !isArticlePage;

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    return (
        <>
            <section id="latest-articles">
                <div className="latest-articles-header">
                    <h1>Latest Articles</h1>
                    {shouldShowViewAllButton && (
                        <Link to='/article' className="view-all-btn">View all issues ➔</Link>
                    )}
                </div>

                <div className="articles-grid">
                    {visibleArticles.map((article) => (
                        <Link to={`/articles/${article.id}`} key={article.id} className="articles-box">
                            <div className="article-card">
                                <h3>{article.title}</h3>
                                <p className="authors">{article.authors}</p>
                                <strong className="authors">{article.volume_label}</strong>
                                <p className="authors">DOI: {article.doi}</p>

                                <div className="meta-row">
                                    <span>Page 101 {article.pages}</span>
                                    <span>👁️ {article.view_count} views</span>
                                    <p className="authors">{article.date_approved}</p>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {shouldShowPagination && (
                    <PaginationBtn
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                )}
            </section >
        </>
    )
}

export default Latest_Article
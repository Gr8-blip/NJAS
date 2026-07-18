// import React from 'react'
import React, { useEffect, useState } from 'react'
import '../Components/Latest_Article.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'
import PaginationBtn from '../Components/PaginationBtn'
import Latest_Article from '../Components/Latest_Article'


const ArticlePage = () => {
    const [currentArticles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch("https://jsppharm.com/api/api/articles/current");

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
            
            <div class="" key={currentArticles.id}>
                <section class="recognition-text">
                    <div className="article-top">
                        <p>Current Article <span className='article-volume-label'>{currentArticles.volume_label}</span></p>
                    </div>
                    <h1 className='article-heading'>{currentArticles.title}</h1>
                    <ul className='author'>
                        <li><strong>Authors:</strong> {currentArticles.authors}</li>
                    </ul>
                    <div className="actions-bar">
                        <button><Link to={`/articles/${currentArticles.id}`}>Read</Link></button>
                        <button className="btn btn-secondary" id="btn-cite">Cite article</button>
                    </div>
                </section>
            </div>

            <Latest_Article />

            <Footer />

        </>
    )
}

export default ArticlePage



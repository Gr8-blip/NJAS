import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import './Current_Article.css'

const Current_Article = () => {
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
            <div class="journal-recognition" key={currentArticles.id}>
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

            <section class="recognition-logos">
                <div class="logo-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL124Owc4i1hOGUNyR0xk6Mu0FBEoIxiOlO6u90-sNDQ&s=10" alt="Web of Science Clarivate Logo" />
                </div>
                <div class="logo-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-K_LNb2-xAFiU2QGl2S66CPyEpIVNhbcNUo88-lN6Hg&s" alt="Google Scholar Logo" />
                </div>
                <div class="logo-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xLgyMZf8NBYAFLi1k1nQFs3ZIZ4Wu1k0jL2ARv8tRA&s=10" alt="Crossref Logo" />
                </div>
                <div class="logo-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl1eTsSmlfl63CnFPyT5mI9tfWHuMaFvbupuR3ZVsU1g&s=10" alt="Directory of Open Access Journals Logo" />
                </div>
                <div class="logo-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOg_LQerbtIWbgGeiT8QKo9bPmd6l7cU6kgORXxfFvQ&s=10" alt="PubMed Logo" />
                </div>
                <div className="logo-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzojgPi8EsWxJTVBjAno1nZA8Z3JwYyL841_SR0CzOAQ&s=10" alt="Scopus Logo" />
                </div>
                <div class="logo-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTau3dMSRxQmurYEAZpP47_6pLHmr6blwZMNaDGmONw&s=10" alt="EBSCO Host Logo" />
                </div>
            </section>

        </>
    )
}

export default Current_Article
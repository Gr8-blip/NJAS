// import React from 'react'
import React, { useEffect, useState } from 'react'
import '../Components/Latest_Article.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'
import PaginationBtn from '../Components/PaginationBtn'
import Latest_Article from '../Components/Latest_Article'


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
            
            <section className="hero-section">
                <h2 className="hero-title">Current Article</h2>
                <p className="hero-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquam nunc, vitae aliquet 
                nunc nisl eget nunc.</p>
            </section>

            <Latest_Article />

            <Footer />

        </>
    )
}

export default ArticlePage



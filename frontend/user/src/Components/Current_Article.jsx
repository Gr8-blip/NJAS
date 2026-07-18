import React from 'react'
import './Current_Article.css'

const Current_Article = () => {
    return (
        <>
            <div class="journal-recognition">
                <section class="recognition-text">
                    <div className="article-top">
                        <p>Current Article <span className='article-volume-label'>Volume 13, Issue 1</span></p>
                    </div>
                    <h1 className='article-heading'>Identification of drug therapy problems and interventions made by community pharmacists</h1>
                    <ul className='author'>
                        <li><strong>Authors:</strong> Joshua O Idiake*, Hanson O Enoruwa</li>
                    </ul>
                    <div className="actions-bar">
                        <button className="btn btn-secondary" id="btn-cite">Read full article</button>
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
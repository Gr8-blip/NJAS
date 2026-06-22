// import React from 'react'
import React, { useEffect, useState } from 'react'
import '../Components/Latest_Article.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'
import Search from '../Components/Search'


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

    // const [currentPage, setCurrentPage] = useState(1);
    // const articlesPerPage = 8;

    // // Sample articles data
    // const allArticles = [
    //     {
    //         id: 1,
    //         category: 'ARTIFICIAL INTELLIGENCE',
    //         categoryClass: 'ai',
    //         title: 'Sparse Attention Transformers for Long-Horizon Scientific Time Series',
    //         authors: 'Y. Chen, R. Satapan, F. Müller',
    //         date: 'May 2026',
    //         views: '2,201',
    //         pages: '9',
    //         highlighted: true
    //     },
    //     {
    //         id: 2,
    //         category: 'BIOTECHNOLOGY',
    //         categoryClass: 'biotech',
    //         title: 'Lipid Nanoparticle Formulation Optimisation for mRNA Delivery Across Tissue Barriers',
    //         authors: 'Adegoke, S. Park, L. Rousseau',
    //         date: 'May 2026',
    //         views: '2,940',
    //         pages: '4',
    //         highlighted: true
    //     },
    //     {
    //         id: 3,
    //         category: 'MATERIALS SCIENCE',
    //         categoryClass: 'materials',
    //         title: 'Room-Temperature Superconductivity in Hydrogen-Rich Chalcides Under Moderate Pressure',
    //         authors: 'M. Isomura, T. Nakamura',
    //         date: 'Apr 2026',
    //         views: '8,115',
    //         pages: '23',
    //         highlighted: false
    //     },
    //     {
    //         id: 4,
    //         category: 'ARTIFICIAL INTELLIGENCE',
    //         categoryClass: 'ai',
    //         title: 'Causal Discovery in Observational High-Dimensional Genomics Data',
    //         authors: 'D. Osei, W. Li, A. Bhatt',
    //         date: 'Apr 2026',
    //         views: '1,874',
    //         pages: '5',
    //         highlighted: false
    //     },
    //     {
    //         id: 5,
    //         category: 'ARTIFICIAL INTELLIGENCE',
    //         categoryClass: 'ai',
    //         title: 'Quantum Machine Learning for Molecular Structure Optimization',
    //         authors: 'R. Patel, K. Singh, M. Cohen',
    //         date: 'Mar 2026',
    //         views: '3,421',
    //         pages: '12',
    //         highlighted: true
    //     },
    //     {
    //         id: 6,
    //         category: 'BIOTECHNOLOGY',
    //         categoryClass: 'biotech',
    //         title: 'CRISPR Gene Editing in Vivo Using Modified AAV Vectors',
    //         authors: 'J. Lee, H. Wong, P. Kumar',
    //         date: 'Mar 2026',
    //         views: '5,632',
    //         pages: '8',
    //         highlighted: true
    //     },
    //     {
    //         id: 7,
    //         category: 'MATERIALS SCIENCE',
    //         categoryClass: 'materials',
    //         title: 'Self-Assembling Nanocomposites for Next-Generation Solar Cells',
    //         authors: 'A. Müller, G. Zhang',
    //         date: 'Feb 2026',
    //         views: '2,156',
    //         pages: '15',
    //         highlighted: false
    //     },
    //     {
    //         id: 8,
    //         category: 'ARTIFICIAL INTELLIGENCE',
    //         categoryClass: 'ai',
    //         title: 'Federated Learning Architecture for Privacy-Preserving Healthcare',
    //         authors: 'S. Nakamura, C. Evans',
    //         date: 'Feb 2026',
    //         views: '4,789',
    //         pages: '11',
    //         highlighted: false
    //     },
    //     {
    //         id: 9,
    //         category: 'BIOTECHNOLOGY',
    //         categoryClass: 'biotech',
    //         title: 'Synthetic Biology Approaches to Sustainable Biofuel Production',
    //         authors: 'M. Torres, L. Silva',
    //         date: 'Jan 2026',
    //         views: '1,943',
    //         pages: '13',
    //         highlighted: true
    //     },
    //     {
    //         id: 10,
    //         category: 'MATERIALS SCIENCE',
    //         categoryClass: 'materials',
    //         title: 'Graphene-Based Electrodes for High-Capacity Battery Storage',
    //         authors: 'T. Kim, H. Park',
    //         date: 'Jan 2026',
    //         views: '7,234',
    //         pages: '18',
    //         highlighted: true
    //     },
    //     {
    //         id: 11,
    //         category: 'ARTIFICIAL INTELLIGENCE',
    //         categoryClass: 'ai',
    //         title: 'Deep Reinforcement Learning for Climate Policy Optimization',
    //         authors: 'E. Brown, J. White',
    //         date: 'Dec 2025',
    //         views: '3,567',
    //         pages: '14',
    //         highlighted: false
    //     },
    //     {
    //         id: 12,
    //         category: 'BIOTECHNOLOGY',
    //         categoryClass: 'biotech',
    //         title: 'Personalized Medicine Using Multi-Omics Data Integration',
    //         authors: 'A. Gupta, S. Patel',
    //         date: 'Dec 2025',
    //         views: '5,123',
    //         pages: '16',
    //         highlighted: false
    //     },
    // ];

    // // Calculate pagination
    // const totalPages = Math.ceil(allArticles.length / articlesPerPage);
    // const startIndex = (currentPage - 1) * articlesPerPage;
    // const endIndex = startIndex + articlesPerPage;
    // const currentArticles = allArticles.slice(startIndex, endIndex);

    // Handle page changes
    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // };

    // const handlePreviousPage = () => {
    //     if (currentPage > 1) {
    //         handlePageChange(currentPage - 1);
    //     }
    // };

    // const handleNextPage = () => {
    //     if (currentPage < totalPages) {
    //         handlePageChange(currentPage + 1);
    //     }
    // };

    return (
        <>
            <Search />

            <section id="latest-articles">
                <div className="latest-articles-header">
                    <h1>Latest Articles</h1>
                </div>

                <div className="article-grid">
                    {articles.map((article) => (
                        <Link key={article.id} className={`article-card ${article.highlighted ? 'highlighted' : ''}`}>
                            <h1>{article.title}</h1>
                            <p>{article.authors}</p>
                            <p>{article.author_affiliations}</p>
                            <p>{article.authors}</p>
                        </Link>
                    ))}
                    
                    {articles.map((article) => (
                        <Link key={article.id} className={`article-card ${article.highlighted ? 'highlighted' : ''}`}>
                            <h1>{article.title}</h1>
                            <p>{article.authors}</p>
                            <p>{article.author_affiliations}</p>
                            <p>{article.authors}</p>
                        </Link>
                    ))}
                </div>

                

                {/* Pagination Controls */}
                {/* <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop: '50px',
                    marginBottom: '30px',
                    flexWrap: 'wrap'
                }}>
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: currentPage === 1 ? '#cbd5e1' : 'var(--primary)',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: '600',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                            opacity: currentPage === 1 ? 0.6 : 1,
                            transition: 'all 0.3s ease'
                        }}
                    >
                        ← Previous
                    </button>

                    <div style={{
                        display: 'flex',
                        gap: '6px',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                style={{
                                    minWidth: '40px',
                                    height: '40px',
                                    padding: '0',
                                    backgroundColor: currentPage === pageNumber ? 'var(--primary)' : '#ffffff',
                                    color: currentPage === pageNumber ? '#ffffff' : 'var(--primary)',
                                    border: `2px solid var(--primary)`,
                                    borderRadius: '6px',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {pageNumber}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: currentPage === totalPages ? '#cbd5e1' : 'var(--primary)',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: '600',
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                            opacity: currentPage === totalPages ? 0.6 : 1,
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Next →
                    </button>
                </div>

                <div style={{
                    textAlign: 'center',
                    fontSize: '13px',
                    color: '#718096',
                    marginTop: '16px',
                    marginBottom: '30px'
                }}>
                    Page {currentPage} of {totalPages}
                </div> */}
            </section>

            <Footer />

        </>
    )
}

export default ArticlePage



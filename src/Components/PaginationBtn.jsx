import React, { useEffect, useState } from 'react'

const PaginationBtn = () => {
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

    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 8;

    // Calculate pagination
    const totalPages = Math.ceil(articles.length / articlesPerPage);
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const currentArticles = articles.slice(startIndex, endIndex);

    // Handle page changes
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    return (
        <>
            {/* Pagination Controls */}
            <div style={{
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
            </div>
        </>
    )
}

export default PaginationBtn
import React from 'react'

const PaginationBtn = ({ currentPage = 1, totalPages = 1, onPageChange = () => {} }) => {
    const handlePageChange = (pageNumber) => {
        onPageChange(pageNumber);
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

    if (totalPages <= 1) {
        return null;
    }

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                marginTop: '50px',
                marginBottom: '20px',
                flexWrap: 'wrap'
            }}>
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    style={{
                        padding: '8px 14px',
                        backgroundColor: currentPage === 1 ? '#f1f5f9' : '#ffffff',
                        color: currentPage === 1 ? '#94a3b8' : 'var(--primary)',
                        border: '1px solid #dbe4f0',
                        borderRadius: '999px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                        boxShadow: currentPage === 1 ? 'none' : '0 4px 12px rgba(0,0,0,0.06)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    ← Prev
                </button>

                <div style={{
                    display: 'flex',
                    gap: '6px',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => {
                        const isActive = currentPage === pageNumber;

                        return (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                style={{
                                    minWidth: '42px',
                                    height: '42px',
                                    padding: '0',
                                    backgroundColor: isActive ? 'var(--primary)' : '#ffffff',
                                    color: isActive ? '#ffffff' : '#334155',
                                    border: isActive ? '1px solid var(--primary)' : '1px solid #dbe4f0',
                                    borderRadius: '999px',
                                    fontSize: '13px',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    boxShadow: isActive ? '0 6px 16px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    style={{
                        padding: '8px 14px',
                        backgroundColor: currentPage === totalPages ? '#f1f5f9' : '#ffffff',
                        color: currentPage === totalPages ? '#94a3b8' : 'var(--primary)',
                        border: '1px solid #dbe4f0',
                        borderRadius: '999px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                        boxShadow: currentPage === totalPages ? 'none' : '0 4px 12px rgba(0,0,0,0.06)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    Next →
                </button>
            </div>

            <div style={{
                textAlign: 'center',
                fontSize: '13px',
                color: '#64748b',
                marginBottom: '30px'
            }}>
                Showing page {currentPage} of {totalPages}
            </div>
        </>
    )
}

export default PaginationBtn
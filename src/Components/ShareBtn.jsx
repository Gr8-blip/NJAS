import React, { useState } from 'react'

const ShareBtn = () => {
    const [showShareMenu, setShowShareMenu] = useState(false);

    // Article details for sharing
    const articleTitle = "";
    const articleUrl = window.location.href;
    const shareText = `Check out this article: ${articleTitle}`;

    // Handle share to different platforms
    const handleShare = (platform) => {
        let shareUrl = '';

        switch (platform) {
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + articleUrl)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(shareText)}`;
                break;
            default:
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_parent');
        }
        setShowShareMenu(false);
    };
    return (
        <>
            {/* Share Button with Dropdown Menu */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <button
                    className="btn btn-secondary"
                    id="btn-share"
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    style={{ cursor: 'pointer' }}
                >
                    Share
                </button>

                {showShareMenu && (
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        minWidth: '180px',
                        zIndex: 1000,
                        marginTop: '8px'
                    }}>
                        <button
                            onClick={() => handleShare('whatsapp')}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: 'none',
                                backgroundColor: 'transparent',
                                textAlign: 'left',
                                cursor: 'pointer',
                                fontSize: '14px',
                                color: '#334155',
                                transition: 'background-color 0.2s ease',
                                borderBottom: '1px solid #f0f0f0'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                            WhatsApp
                        </button>
                        <button
                            onClick={() => handleShare('facebook')}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: 'none',
                                backgroundColor: 'transparent',
                                textAlign: 'left',
                                cursor: 'pointer',
                                fontSize: '14px',
                                color: '#334155',
                                transition: 'background-color 0.2s ease',
                                borderBottom: '1px solid #f0f0f0'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                            Facebook
                        </button>
                        <button
                            onClick={() => handleShare('linkedin')}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: 'none',
                                backgroundColor: 'transparent',
                                textAlign: 'left',
                                cursor: 'pointer',
                                fontSize: '14px',
                                color: '#334155',
                                transition: 'background-color 0.2s ease',
                                borderBottom: '1px solid #f0f0f0'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                            LinkedIn
                        </button>
                        <button
                            onClick={() => handleShare('twitter')}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: 'none',
                                backgroundColor: 'transparent',
                                textAlign: 'left',
                                cursor: 'pointer',
                                fontSize: '14px',
                                color: '#334155',
                                transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                            Twitter
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default ShareBtn
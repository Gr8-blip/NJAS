import React from 'react';
import './Issues.css'

// Supports either an `article` object or a direct `url` prop.
function PdfDownloadButton({ article, url }) {
  const pdfUrl = url || (article && (article.manuscript_url || article.manuscript_file || article.pdf_url));

  const handleDownload = (e) => {
    e.preventDefault();

    if (!pdfUrl) {
      alert('PDF link is not available for this article.');
      return;
    }

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    // Try to set a filename so the browser will download instead of open when possible.
    try {
      const parsed = new URL(pdfUrl);
      const pathname = parsed.pathname || '';
      const filename = pathname.substring(pathname.lastIndexOf('/') + 1) || 'download.pdf';
      link.download = filename;
    } catch (err) {
      // If URL parsing fails, leave download empty (browser will decide).
      link.download = '';
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="btn-action-pdf"
      disabled={!pdfUrl}
      style={{ cursor: pdfUrl ? 'pointer' : 'not-allowed' }}
      aria-disabled={!pdfUrl}
    >
      PDF
    </button>
  );
}

export default PdfDownloadButton;

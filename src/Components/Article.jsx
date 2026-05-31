import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './Article.css'

const Article = () => {
    const articles = [
        {
            id: 1,
            badge: "EDITOR'S CHOICE",
            volume: "VOL. 14, ISSUE 3",
            title: "Neuromorphic Computing Architectures for Real-Time Climate Modelling at Scale",
            authors: "A. Okafor, J. Lindqvist, P. Sharma, M. Torres",
            received: "12 Jan 2026",
            accepted: "02 Apr 2026",
            published: "14 May 2026",
            description: "We introduce a neuromorphic chip architecture optimized for sparse, event-driven simulation of atmospheric dynamics. Benchmarked against GPU clusters across five continental climate zones, our approach reduces energy consumption by 78% while maintaining sub-1% RMSE against ERA5 reanalysis data, opening a path to real-time planetary-scale climate prediction.",
            views: 12847,
            citations: 41,
            nextIssue: "Jun 30",
            issueVolume: "Vol. 14, Issue 4"
        },
        {
            id: 2,
            badge: "FEATURED",
            volume: "VOL. 14, ISSUE 2",
            title: "Quantum Machine Learning Applications in Drug Discovery",
            authors: "S. Chen, R. Williams, K. Patel",
            received: "05 Dec 2025",
            accepted: "20 Feb 2026",
            published: "10 Apr 2026",
            description: "This paper explores quantum-classical hybrid algorithms for molecular structure prediction. Our method achieves 45% faster convergence compared to classical approaches while reducing computational overhead by 60%.",
            views: 8945,
            citations: 28,
            nextIssue: "Jun 30",
            issueVolume: "Vol. 14, Issue 4"
        },
        {
            id: 3,
            badge: "TRENDING",
            volume: "VOL. 14, ISSUE 1",
            title: "Biodegradable Polymer Composites for Sustainable Packaging",
            authors: "M. Johnson, L. García, N. Singh",
            received: "20 Oct 2025",
            accepted: "15 Jan 2026",
            published: "28 Feb 2026",
            description: "Development of novel biodegradable polymer blends that match conventional plastic performance while achieving complete decomposition within 180 days in composting environments.",
            views: 15320,
            citations: 52,
            nextIssue: "Jun 30",
            issueVolume: "Vol. 14, Issue 4"
        }
    ]

    return (
        <>
            <section id='article'>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    spaceBetween={50}
                    slidesPerView={1}
                    className="article-swiper"
                >
                    {articles.map((article) => (
                        <SwiperSlide key={article.id}>
                            <div className="article-content">
                                <div className="article-main">
                                    <div className="article-top">
                                        <p><span>{article.badge}</span> {article.volume}</p>
                                    </div>
                                    <h1>{article.title}</h1>
                                    <ul className='author'>
                                        <li><strong>Authors:</strong> {article.authors}</li>
                                        <li>📅 Received {article.received}</li>
                                        <li>✓ Accepted {article.accepted}</li>
                                        <li>📤 Published {article.published}</li>
                                    </ul>
                                    <p>{article.description}</p>

                                    <div className="article-btn">
                                        <button>Read full article</button>
                                        <button>Download PDF</button>
                                        <button>Cite</button>
                                    </div>
                                </div>

                                <div className="article-sidebar">
                                    <div className="stat-box">
                                        <p className="stat-label">VIEWS</p>
                                        <p className="stat-number">{article.views.toLocaleString()}</p>
                                    </div>
                                    <div className="stat-box">
                                        <p className="stat-label">CITATIONS</p>
                                        <p className="stat-number">{article.citations}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default Article
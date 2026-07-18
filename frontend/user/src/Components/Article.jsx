import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './Article.css'

const Article = () => {
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
            <div className='article-section'>
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
                                            <span className='article-volume-label'>{article.volume_label}</span>
                                        </div>
                                        <h1 className='article-heading'>{article.title}</h1>
                                        <ul className='author'>
                                            <li><strong>Authors:</strong> {article.authors}</li>
                                        </ul>
                                        <p>{article.description}</p>
                                        <div className="actions-bar">
                                            <button className="btn btn-secondary" id="btn-cite">Read full article</button>
                                            <button className="btn btn-secondary" id="btn-cite">Cite article</button>
                                        </div>
                                    </div>

                                    <div className="article-sidebar">
                                        <div className="stat-box">
                                            <p className="stat-label">VIEWS</p>
                                            <p className="stat-number">{article.view_count}</p>
                                        </div>
                                        {/* <div className="stat-box">
                                            <p className="stat-label">CITATIONS</p>
                                            <p className="stat-number">{article.citation}</p>
                                        </div> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>
        </>
    )
}

export default Article
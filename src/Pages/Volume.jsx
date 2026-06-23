// import React from 'react'
import React, { useEffect, useState } from 'react'
import '../Components/Volume.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'
import Search from '../Components/Search'


const Volume = () => {
    const [volumes, setVolumes] = useState([]);

    useEffect(() => {
        const fetchVolume = async () => {
            const response = await fetch("https://jsppharm.com/api/api/volumes/");

            // Always check if the response status is 200-299
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setVolumes(data)
        }

        fetchVolume();

    }, [])

    return (
        <>
            <section className="hero-section">
                <h2 className="hero-title">Latest Volume</h2>
            </section>

            <section className="layout-grid">

                <main className="primary-content">
                    <div className="issues-boxes">
                        <div class="journal-grid">
                            <Link to='/' class="journal-column">
                                <div class="journal-card theme-current">
                                    <div class="card-header">
                                        <h2>JOURNAL OF SCIENCE AND PRACTICE OF PHAMARCY</h2>
                                    </div>
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="3" />
                                            <circle cx="12" cy="5" r="2" />
                                            <circle cx="12" cy="19" r="2" />
                                            <circle cx="5" cy="12" r="2" />
                                            <circle cx="19" cy="12" r="2" />
                                            <path d="M12 7v2M12 15v2M7 12h2M15 12h2" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div class="info-panel">
                                            <div class="status-badge">Volume</div>
                                            {volumes.map((volumes) => (
                                                <div key={volumes.id} className='volume-title'>{volumes.title}</div>
                                            ))}
                                            {/* <div class="publish-date">Published January 2026</div> */}
                                            {volumes.map((volumes) => (
                                                <div className='publish-date'>{volumes.published_at}</div>
                                            ))}                                        
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/' class="journal-column">
                                <div class="journal-card theme-current">
                                    <div class="card-header">
                                        <h2>JOURNAL OF SCIENCE AND PRACTICE OF PHAMARCY</h2>
                                    </div>
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="3" />
                                            <circle cx="12" cy="5" r="2" />
                                            <circle cx="12" cy="19" r="2" />
                                            <circle cx="5" cy="12" r="2" />
                                            <circle cx="19" cy="12" r="2" />
                                            <path d="M12 7v2M12 15v2M7 12h2M15 12h2" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div class="info-panel">
                                            <div class="status-badge">Volume</div>
                                            {volumes.map((volumes) => (
                                                <div key={volumes.id} className='volume-title'>{volumes.title}</div>
                                            ))}
                                            {/* <div class="publish-date">Published January 2026</div> */}
                                            {volumes.map((volumes) => (
                                                <div className='publish-date'>{volumes.published_at}</div>
                                            ))}                                        
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/' class="journal-column">
                                <div class="journal-card theme-current">
                                    <div class="card-header">
                                        <h2>JOURNAL OF SCIENCE AND PRACTICE OF PHAMARCY</h2>
                                    </div>
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="3" />
                                            <circle cx="12" cy="5" r="2" />
                                            <circle cx="12" cy="19" r="2" />
                                            <circle cx="5" cy="12" r="2" />
                                            <circle cx="19" cy="12" r="2" />
                                            <path d="M12 7v2M12 15v2M7 12h2M15 12h2" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div class="info-panel">
                                            <div class="status-badge">Volume</div>
                                            {volumes.map((volumes) => (
                                                <div key={volumes.id} className='volume-title'>{volumes.title}</div>
                                            ))}
                                            {/* <div class="publish-date">Published January 2026</div> */}
                                            {volumes.map((volumes) => (
                                                <div className='publish-date'>{volumes.published_at}</div>
                                            ))}                                        
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/' class="journal-column">
                                <div class="journal-card theme-current">
                                    <div class="card-header">
                                        <h2>JOURNAL OF SCIENCE AND PRACTICE OF PHAMARCY</h2>
                                    </div>
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="3" />
                                            <circle cx="12" cy="5" r="2" />
                                            <circle cx="12" cy="19" r="2" />
                                            <circle cx="5" cy="12" r="2" />
                                            <circle cx="19" cy="12" r="2" />
                                            <path d="M12 7v2M12 15v2M7 12h2M15 12h2" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div class="info-panel">
                                            <div class="status-badge">Volume</div>
                                            {volumes.map((volumes) => (
                                                <div key={volumes.id} className='volume-title'>{volumes.title}</div>
                                            ))}
                                            {/* <div class="publish-date">Published January 2026</div> */}
                                            {volumes.map((volumes) => (
                                                <div className='publish-date'>{volumes.published_at}</div>
                                            ))}                                        
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/' class="journal-column">
                                <div class="journal-card theme-current">
                                    <div class="card-header">
                                        <h2>JOURNAL OF SCIENCE AND PRACTICE OF PHAMARCY</h2>
                                    </div>
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="3" />
                                            <circle cx="12" cy="5" r="2" />
                                            <circle cx="12" cy="19" r="2" />
                                            <circle cx="5" cy="12" r="2" />
                                            <circle cx="19" cy="12" r="2" />
                                            <path d="M12 7v2M12 15v2M7 12h2M15 12h2" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div class="info-panel">
                                            <div class="status-badge">Volume</div>
                                            {volumes.map((volumes) => (
                                                <div key={volumes.id} className='volume-title'>{volumes.title}</div>
                                            ))}
                                            {/* <div class="publish-date">Published January 2026</div> */}
                                            {volumes.map((volumes) => (
                                                <div className='publish-date'>{volumes.published_at}</div>
                                            ))}                                        
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/' class="journal-column">
                                <div class="journal-card theme-current">
                                    <div class="card-header">
                                        <h2>JOURNAL OF SCIENCE AND PRACTICE OF PHAMARCY</h2>
                                    </div>
                                    <div class="card-icon">
                                        <svg viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="3" />
                                            <circle cx="12" cy="5" r="2" />
                                            <circle cx="12" cy="19" r="2" />
                                            <circle cx="5" cy="12" r="2" />
                                            <circle cx="19" cy="12" r="2" />
                                            <path d="M12 7v2M12 15v2M7 12h2M15 12h2" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div class="info-panel">
                                            <div class="status-badge">Volume</div>
                                            {volumes.map((volumes) => (
                                                <div key={volumes.id} className='volume-title'>{volumes.title}</div>
                                            ))}
                                            {/* <div class="publish-date">Published January 2026</div> */}
                                            {volumes.map((volumes) => (
                                                <div className='publish-date'>{volumes.published_at}</div>
                                            ))}                                        
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </main >
            </section >
        </>
    )
}

export default Volume



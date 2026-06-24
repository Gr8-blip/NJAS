import React, { useEffect, useState } from 'react'
import '../Components/Volume.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'
import Search from '../Components/Search'

const Volume = () => {
    const [volumes, setVolumes] = useState([]);

    useEffect(() => {
        const fetchVolume = async () => {
            try {
                const response = await fetch("https://jsppharm.com/api/api/volumes");

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setVolumes(data);
            } catch (error) {
                console.error("Failed to fetch volumes:", error);
            }
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
                        <div className="journal-grid">
                            
                            {/* Map at the card/column level instead of inside the card */}
                            {volumes.map((volume) => (
                                <Link to={`/volume/${volume.id}`} key={volume.id} className="journal-column">
                                    <div className="journal-card theme-current">
                                        <div className="card-header">
                                            <h2>JOURNAL OF SCIENCE AND PRACTICE OF PHARMACY</h2>
                                        </div>
                                        <div className="card-icon">
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
                                            <div className="info-panel">
                                                <div className="status-badge">Volume</div>
                                                {/* Displays only this specific card's data */}
                                                <div className='volume-title'>{volume.title}</div>
                                                <div className='publish-date'>{volume.published_at}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Volume;

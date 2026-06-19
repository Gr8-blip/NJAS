import React from 'react'
import { Link } from 'react-router'
import Footer from '../Components/Footer'

const Contact_Us = () => {
    return (
        <>
            <section className="hero-section editorial-hero-section">
                <h2 className="hero-title">Contact Us</h2>
                <p className="hero-desc">An official journal of the Nigerian Association of Pharmacists in Academia,
                    University of Benin Branch, Journal of Science and Practice of Pharmacy (JSPP) is published by <b>McGillard Publishing</b></p>
            </section>

            <section className="layout-grid editorial-layout-grid">
                <main className="primary-content">
                    <section className="content-block">
                        <div className="board-flex-grid">
                            <div className='member-card'>
                                <h4>Location</h4>
                                <address>
                                    Tantua Road, Amassoma, <br /> Wilberforce Island <br /> Bayelsa State, Nigeria
                                </address>
                            </div>
                            <div className='member-card'>
                                <h4>Email</h4>
                                <b>
                                    <Link to="mailto:contact@mcgillard.com">contact@mcgillard.com</Link>
                                </b>
                            </div>
                            <div className='member-card'>
                                <h4>Phone</h4>
                                <Link to="tel:+2349068022212"> +234 906 802 2212</Link>
                            </div>
                        </div>
                    </section>
                </main>


                <aside className='sidebar-rail'>
                    <div className="widget">
                        <h4 className="widget-title">QUICK LINKS</h4>
                        <ul className="widget-list">
                            <li><a href="/submit">Submit a manuscript <span className="arrow">›</span></a></li>
                            <li><a href="/author-guidelines">Author guidelines <span className="arrow">›</span></a></li>
                            <li><a href="/contact">Contact us <span className="arrow">›</span></a></li>
                        </ul>
                    </div>
                </aside>
            </section>

            
            <Footer />
        </>
    )
}

export default Contact_Us
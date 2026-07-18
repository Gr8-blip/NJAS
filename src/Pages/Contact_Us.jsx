import React from 'react'
import { Link } from 'react-router'
import Footer from '../Components/Footer'

const Contact_Us = () => {
    return (
        <>
            <section className="hero-section editorial-hero-section">
                <h2 className="hero-title">Contact Us</h2>
                <p className="hero-desc">An official journal of the Nigerian Association of Pharmacists in Academia (NAPA),
                    University of Benin Branch, Journal of Science and Practice of Pharmacy (JSPP) is published by <b>NAPA</b>,
                    Faculty of Pharmacy, University of Benin, Benin City, Edo State, Nigeria</p>
            </section>

            <section className="layout-grid editorial-layout-grid">
                <main className="primary-content">
                    <section className="content-block">
                        <div className="board-flex-grid">
                            <div className='member-card'>
                                <h4>Location</h4>
                                <address>
                                    Faculty of Pharmacy, University of Benin, Edo State, Nigeria<br />
                                    {/* Tantua Road, Amassoma, <br /> Wilberforce Island <br /> Bayelsa State, Nigeria */}
                                </address>
                            </div>
                            <div className='member-card'>
                                <h4>Email</h4>
                                <b>
                                    <Link to="mailto:jsppharm@uniben.edu">jsppharm@uniben.edu</Link>
                                </b>
                            </div>
                            <div className='member-card'>
                                <h4>Phone</h4>
                                {/* <Link to="tel:+2349068022212"> +234 906 802 2212</Link> */}
                                <Link to="tel:+2348078044144"> +234 807 804 4144</Link>
                            </div>
                        </div>
                    </section>
                </main>


                <aside className='sidebar-rail'>
                    <div className="widget">
                        <h4 className="widget-title">QUICK LINKS</h4>
                        <ul className="widget-list">
                            <li><Link to="/submit-manuscript">Submit a manuscript <span className="arrow">›</span></Link></li>
                            <li><Link to="/author-guidelines">Author guidelines <span className="arrow">›</span></Link></li>
                            <li><Link to="/editorial-policies">Editorial policies <span className="arrow">›</span></Link></li>
                            <li><Link to="/products-payment">Product Payment <span className="arrow">›</span></Link></li>
                            <li><Link to='/publication-ethics'>Publication Ethics <span className="arrow">›</span></Link></li>
                            <li><Link to='/privacy-policy'>Privacy Policy <span className="arrow">›</span></Link></li>
                            <li><Link to='/reviewer-form'>Reviewer Form <span className="arrow">›</span></Link></li>
                        </ul>
                    </div>
                </aside>
            </section>


            <Footer />
        </>
    )
}

export default Contact_Us
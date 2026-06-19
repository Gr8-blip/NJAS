import React from 'react'
import './Footer.css'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="container footer-grid">
                    <div>
                        <h4>Tropical Journal of Science and Practice of Phamarcy</h4>
                        <p>Published by the Institute for Scientific Research</p>
                    </div>
                    <div>
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/advertise">Advertise</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>FOR AUTHORS</h4>
                        <ul>
                            <li><Link to="/author-guidelines">Author Guidelines</Link></li>
                            <li><Link to="/submit-manuscript">Submit Manuscript</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>
                    {/* <div>
                        <h4>FOR READERS</h4>
                        <ul>
                            <li><Link to="/issues">Browse Articles</Link></li>
                            <li><Link to="/subscribe">Subscribe</Link></li>
                        </ul>
                    </div> */}
                    <div>
                        <h4>LEGAL</h4>
                        <ul>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                            <li><Link to="/accessibility">Accessibility</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>ISSN 2398-4473 (Print) | ISSN 2398-4481 (Online) © 2026 Institute for Scientific Research. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}


export default Footer
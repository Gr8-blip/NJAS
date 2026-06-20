import React from 'react'
import './Footer.css'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="container footer-grid">
                    <div>
                        <h4>Journal of Science and Practice of Phamarcy</h4>
                        <p>Official Journal of the Nigerian Association of Pharmacists in Academia, 
                            University of Benin Branch, Benin City, Nigeria</p>
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
                    <p>ISSN: 2449-0458 (Print); 2449-0466 (electronic) © 2026 Journal of Science and Practice of Phamarcy. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}


export default Footer
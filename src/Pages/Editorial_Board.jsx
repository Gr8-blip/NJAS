import React from 'react'
import '../Components/Editorial_Board.css'
import { Link } from 'react-router'
import memberImg from '../Img-db/member1.jpg'
import memberImg2 from '../Img-db/member2.jpg'
import Footer from '../Components/Footer'


const Editorial_Board = () => {
    return (
        <>
            <section className="hero-section">
                <h2 className="hero-title">Editorial Board</h2>
                <p className="hero-desc">Meet the distinguished scholars and experts who guide the journal's
                    scientific direction and ensure the highest standards of peer review and publication excellence.</p>
            </section>

            {/* <section className="layout-grid">
                <main className='primary-content'>

                </main>

            </section> */}

            <section className="layout-grid">

                <main className="primary-content">

                    <div className="responsibilities-card">
                        <h2 className="responsibilities-title">Board Responsibilities</h2>
                        <p className="responsibilities-intro">
                            The Editorial Board is made up of Editor-in-Chief, Managing Editor and Editorial Advisers.
                            Responsibilities of the Board include (but are not limited to):
                        </p>
                        <ul className="responsibilities-list">
                            <li>Providing scientific expertise for the journal</li>
                            <li>Administering peer review or serving as a peer reviewer</li>
                            <li>Promoting the journal to attract high-quality manuscripts</li>
                            <li>Providing feedback and suggesting improvements for the journal</li>
                            <li>Suggesting topics and authors for commissioned reviews and commentaries</li>
                        </ul>
                        <p className="responsibilities-footer-note">
                            The role of a Board-member often requires a few hours of time for the journal each month on tasks that include
                            consulting with editors, recruiting authors or reviewing papers, and participating in meetings for the improvement
                            of the journal. While Board members are usually unpaid, the position could confer large, lasting dividends.
                        </p>
                    </div>

                    <section className="content-block">
                        <h3 className="block-heading">EDITORIAL BOARD</h3>
                        <div className="board-flex-grid">

                            <div className="member-card">
                                <div className="member-avatar">
                                    <img src={memberImg} alt="Professor Valentine U Odili" />
                                </div>
                                <div className="member-info">
                                    <h5>Professor Valentine U Odili</h5>
                                    <p className="role">Editor-in-Chief</p>
                                    <p className="inst">BPharm, MPharm, PharmD, PhD, FPCPharm, MPSN</p>
                                    <p><b>Professor of Clinical Pharmacy and Pharmacy Practice</b></p>
                                </div>
                            </div>

                            <div className="member-card">
                                <div className="member-avatar">
                                    <img src={memberImg2} alt="Dr Monday I Osarenmwinda" />
                                </div>
                                <div className="member-info">
                                    <h5>Dr Monday I Osarenmwinda</h5>
                                    <p className="role">Managing Editor</p>
                                    <p className="inst">BPharm, MPharm, PharmD, PhD, FPCPharm, MPSN</p>
                                    <p><b>Associate Professor</b></p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="content-block">
                        <h3 className="block-heading">Editorial Advisers</h3>
                        <div className="board-flex-grid">
                            <div className="member-card">
                                <div className="gradient-avatar">PAO</div>
                                <div className="member-info">
                                    <h5>Professor AO Okhamafe</h5>
                                    <p className="role">Department of Pharmaceutics and Pharmaceutical Technology</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:okhamafe@uniben.edu" className="profile-email">okhamafe@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PPM</div>
                                <div className="member-info">
                                    <h5>Professor Pamela M. Moye</h5>
                                    <p className="role">Department of Pharmacy Practice</p>
                                    <p className="inst">Mercer University College of Pharmacy, Atlanta, USA</p>
                                    <span><Link to="mailto:moye_pm@mercer.edu" className="profile-email">moye_pm@mercer.edu</Link></span>
                                </div>
                            </div>
                            
                            
                        </div>
                    </section>
                </main>

                <aside className="sidebar-rail">
                    <div className="widget">
                        <h4 className="widget-title">BOARD OVERVIEW</h4>
                        <div className="widget-list">
                            <div className="metric-row-item">
                                <span>👥</span>
                                <div className="metric-data-block">
                                    <span className="metric-label">Total Members</span>
                                    <span className="metric-value">27</span>
                                </div>
                            </div>
                            <div className="metric-row-item">
                                <span>🏅</span>
                                <div className="metric-data-block">
                                    <span className="metric-label">Leadership</span>
                                    <span className="metric-value">2</span>
                                </div>
                            </div>
                            <div className="metric-row-item">
                                <span>🌐</span>
                                <div className="metric-data-block">
                                    <span className="metric-label">Countries</span>
                                    <span className="metric-value">6+</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="widget">
                        <h4 className="widget-title">QUICK LINKS</h4>
                        <ul className="widget-list">
                            <li><a href="/submit">Submit a manuscript <span className="arrow">›</span></a></li>
                            <li><a href="/author-guidelines">Author guidelines <span className="arrow">›</span></a></li>
                            <li><a href="/reviewer-guidelines">Reviewer guidelines <span className="arrow">›</span></a></li>
                            <li><a href="/contact">Contact us <span className="arrow">›</span></a></li>
                        </ul>
                    </div>

                    <div className="widget">
                        <h4 className="widget-title">CONTACT</h4>
                        <div className="contact-box">
                            <div className="contact-item">
                                <span className="lbl">Email</span>
                                <a href="mailto:editorial@jast.org" className="val link">editorial@jast.org</a>
                            </div>
                            <div className="contact-item">
                                <span className="lbl">Phone</span>
                                <span className="val">+1 (555) 123-4567</span>
                            </div>
                            <div className="contact-item">
                                <span className="lbl">Address</span>
                                <span className="val">Institute for Scientific Research<br />Cambridge, MA 02138, USA</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>

            <Footer />
        </>
    )
}

export default Editorial_Board
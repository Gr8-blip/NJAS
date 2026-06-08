import React from 'react'
import '../Components/Editorial_Board.css'
import { Link } from 'react-router'
import memberImg from '../Img-db/member1.jpg'
import memberImg2 from '../Img-db/member2.jpg'
import Footer from '../Components/Footer'


const Editorial_Board = () => {
    return (
        <>
            <section className="hero-section editorial-hero-section">
                <h2 className="hero-title">Editorial Board</h2>
                <p className="hero-desc">Meet the distinguished scholars and experts who guide the journal's
                    scientific direction and ensure the highest standards of peer review and publication excellence.</p>
            </section>

            <section className="layout-grid editorial-layout-grid">

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
                            <div className="member-card">
                                <div className="gradient-avatar">PSI</div>
                                <div className="member-info">
                                    <h5>Professor Stephena Ighedosa</h5>
                                    <p className="role">Department of Community Health</p>
                                    <p className="inst">University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:stephena.ighedosa@uniben.edu" className="profile-email">stephena.ighedosa@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">DHARA</div>
                                <div className="member-info">
                                    <h5>Dr Hazim Abdul Rahman Alhiti</h5>
                                    <p className="role">Emergency Department</p>
                                    <p className="inst">Higher Institute of Health, Al Anbar Directorate of Health, Irag</p>
                                    <span><Link to="mailto:hazim.alhiti@uoanbar.edu.iq" className="profile-email">hazim.alhiti@uoanbar.edu.iq</Link></span>
                                    <span><Link to="mailto:hazim4436@gmail.commoye_pm@mercer.edu" className="profile-email">hazim4436@gmail.com</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PRSG</div>
                                <div className="member-info">
                                    <h5>Prof Randa Salah Gomaa, </h5>
                                    <p className="role">Department of physiology</p>
                                    <p className="inst">Faculty of Human Medicine, Zagazig University, Egypt</p>
                                    <span><Link to="mailto:salah_randah@hotmail.com " className="profile-email">salah_randah@hotmail.com </Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">DEFH</div>
                                <div className="member-info">
                                    <h5>Dr. Ezekiel Fayiah Hallie, </h5>
                                    <p className="role">Department of Pharmacology and Toxicology</p>
                                    <p className="inst">School of Pharmacy, University of Liberia, Monrovia</p>
                                    <span><Link to="mailto:hallieef@ul.edu.lr" className="profile-email">hallieef@ul.edu.lr</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">DML</div>
                                <div className="member-info">
                                    <h5>Dr Michael Lahai</h5>
                                    <p className="role">Faculty of Pharmaceutical Sciences</p>
                                    <p className="inst">College of Medicine and Allied Health Sciences, University of Sierra Leone</p>
                                    <span><Link to="mailto:miclahisaac@gmail.com " className="profile-email">miclahisaac@gmail.com </Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">DANY</div>
                                <div className="member-info">
                                    <h5>Dr Ashebir Nigussie Yirgu</h5>
                                    <p className="role">Department of Anesthesia</p>
                                    <p className="inst">Adama Hosipital Medical College, Adama, Ethiopia</p>
                                    <span><Link to="mailto:ashebirnigussie3@gmail.com" className="profile-email">ashebirnigussie3@gmail.com</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">DRA</div>
                                <div className="member-info">
                                    <h5>Dr (Mrs) Rita Akonoghrene</h5>
                                    <p className="role">Pharmacy Department</p>
                                    <p className="inst">Royal Sussex County Hospital, Brighton, England</p>
                                    <span><Link to="mailto:r.akonoghrere@nhs.net" className="profile-email">r.akonoghrere@nhs.net</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PFE</div>
                                <div className="member-info">
                                    <h5>Professor Florence E Eichie</h5>
                                    <p className="role">Department of Pharmaceutics and Pharmaceutical Technology</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:eichiefe@uniben.edu" className="profile-email">r.eichiefe@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PLR</div>
                                <div className="member-info">
                                    <h5>Professor Loretta Iniaghe</h5>
                                    <p className="role">Department of Pharmacology and Toxicology</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:loretta.iniaghe@uniben.edu" className="profile-email">loretta.iniaghe@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PIA</div>
                                <div className="member-info">
                                    <h5>Professor (Mrs) Ijeoma Ahonkhai</h5>
                                    <p className="role">Department of Pharmaceutical Microbiology</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:ijeoma.ahonkhai@uniben.edu" className="profile-email">ijeoma.ahonkhai@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PSU</div>
                                <div className="member-info">
                                    <h5>Professor (Mrs) Stella Usifoh</h5>
                                    <p className="role">Department of Pharmaceutical Microbiology</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:sfusifoh@uniben.edu" className="profile-email">sfusifoh@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PEKO</div>
                                <div className="member-info">
                                    <h5>Professor Eric KI Omogbai</h5>
                                    <p className="role">Department of Pharmacology and Toxicology</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:omogbai@uniben.edu" className="profile-email">omogbai@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PCO</div>
                                <div className="member-info">
                                    <h5>Professor Christopher Osunbor</h5>
                                    <p className="role">Department of Biochemistry</p>
                                    <p className="inst">Faculty of Life Sciences, University of Benin, Benin City, Nigeria</p>
                                    {/* <span><Link to="mailto:ijeoma.ahonkhai@uniben.edu" className="profile-email">ijeoma.ahonkhai@uniben.edu</Link></span> */}
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PRIO</div>
                                <div className="member-info">
                                    <h5>Professor Ray I Ozolua</h5>
                                    <p className="role">Department of Pharmacology and Toxicology</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:ozolua@uniben.edu" className="profile-email">ozolua@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PACO</div>
                                <div className="member-info">
                                    <h5>Professor Azuka C Oparah</h5>
                                    <p className="role">Department of Clinical Pharmacy and Pharmacy Practice</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:azuka.oparah@uniben.edu" className="profile-email">azuka.oparah@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PBA</div>
                                <div className="member-info">
                                    <h5>Professor BA Ayinde</h5>
                                    <p className="role">Department of Pharmacognosy</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:baayinde@uniben.edu" className="profile-email">baayinde@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PTA</div>
                                <div className="member-info">
                                    <h5>Prof Tavs A Abere</h5>
                                    <p className="role">Faculty of Pharmacy</p>
                                    <p className="inst">Madonna University, Elele Campus, River State, Nigeria</p>
                                    <span><Link to="mailto:eseabere@yahoo.com" className="profile-email">eseabere@yahoo.com</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PPOE</div>
                                <div className="member-info">
                                    <h5>Professor Patrick O Erah</h5>
                                    <p className="role">Department of Clinical Pharmacy and Pharmacy Practice</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:patrick.erah@uniben.edu" className="profile-email">patrick.erah@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PMU</div>
                                <div className="member-info">
                                    <h5>Prof Michael U Uhunmwangho</h5>
                                    <p className="role">Department of Pharmaceutics & Pharmaceutical Technology</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:uhunmwangho@uniben.edu" className="profile-email">uhunmwangho@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PJOA</div>
                                <div className="member-info">
                                    <h5>Professor John O Akerele</h5>
                                    <p className="role">Department of Pharmaceutical Microbiology</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:akerele@uniben.edu" className="profile-email">akerele@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PHAO</div>
                                <div className="member-info">
                                    <h5>Prof Henry A Okeri</h5>
                                    <p className="role">Department of Pharmaceutical Chemistry</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:hokeri@uniben.edu" className="profile-email">hokeri@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PAF</div>
                                <div className="member-info">
                                    <h5>Professor Abiodun Falodun</h5>
                                    <p className="role">Department of Pharmaceutical Chemistry</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:abiodun.falodun@uniben.edu" className="profile-email">abiodun.falodun@uniben.edu</Link></span>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="gradient-avatar">PCOU</div>
                                <div className="member-info">
                                    <h5>Professor Cyril O Usifoh</h5>
                                    <p className="role">Department of Pharmaceutical Chemistry</p>
                                    <p className="inst">Faculty of Pharmacy, University of Benin, Benin City, Nigeria</p>
                                    <span><Link to="mailto:usifoh@uniben.edu" className="profile-email">usifoh@uniben.edu</Link></span>
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
                            <li><a href="/contact">Contact us <span className="arrow">›</span></a></li>
                        </ul>
                    </div>

                    <div className="widget">
                        <h4 className="widget-title">CONTACT</h4>
                        <div className="contact-box">
                            <div className="contact-item">
                                <span className="lbl">Email</span>
                                <a href="mailto:contact@mcgillard.com" className="val link">contact@mcgillard.com</a>
                            </div>
                            <div className="contact-item">
                                <span className="lbl">Phone</span>
                                <span className="val">+234 906 802 2212</span>
                            </div>
                            <div className="contact-item">
                                <span className="lbl">Address</span>
                                <span className="val">Tantua Road, Amassoma, Wilberforce Island,</span>
                                <span className="val">Bayelsa State, Nigeria</span>
                            </div>
                            <div className="contact-item">
                                <span className="lbl">Office Hours</span>
                                <span className="val">Mon-Fri: 9am - 5pm EST</span>
                                <button className="btn-subscribe">Schedule a Meeting</button>
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
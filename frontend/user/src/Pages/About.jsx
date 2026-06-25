import React from 'react'
import '../Components/About.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
      <section className="hero-section">
        <span className="hero-badge">ABOUT US</span>
        <h2 className="hero-title">Advancing the frontiers of science and <br /> technology since 2012</h2>
        <p className="hero-desc">The Journal of Advances in Science & Technology (JAST) is a peer-reviewed,
          open-access publication of the Institute for Scientific Research. We publish original research, reviews,
          and letters across all disciplines of the natural sciences and engineering.</p>
        <div className="features-banner">
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Open access</h3>
            <p>All content freely available under CC BY 4.0</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Double-blind review</h3>
            <p>Rigorous peer review by international experts</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Global reach</h3>
            <p>Authors and readers n 140+ countries</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏅</div>
            <h3>Indexed worldwide</h3>
            <p>Scopus, Web of Science, PubMed, DOAJ</p>
          </div>
        </div>
      </section>


      <section className="layout-grid">

        <main className="primary-content">

          <section className="content-block">
            <h3 className="block-heading">MISSION & SCOPE</h3>
            <p>JAST's mission is to accelerate the dissemination of high-quality, reproducible scientific findings without financial barriers. We believe the results of rigorous inquiry should be freely accessible to every researcher, practitioner, and curious mind on the planet — regardless of institutional affiliation or geographic location.</p>

            <blockquote className="pull-quote">
              "We do not publish science for libraries. We publish science for the world."
              <span className="quote-author">— Prof. Elena Vassiliev, Editor-in-Chief</span>
            </blockquote>

            <p>The journal welcomes submissions spanning all areas of the natural sciences and engineering, with particular emphasis on interdisciplinary work that bridges traditionally separate fields. We do not impose artificial disciplinary boundaries; a paper on neuromorphic hardware for climate science is as welcome as a study on CRISPR delivery mechanisms or room-temperature superconductivity.</p>

            <div className="metrics-row">
              <div className="metric-item">
                <div className="metric-num">7.41</div>
                <div className="metric-lbl">Impact Factor (2025)</div>
              </div>
              <div className="metric-item">
                <div className="metric-num">312</div>
                <div className="metric-lbl">Articles per year</div>
              </div>
              <div className="metric-item">
                <div className="metric-num">18%</div>
                <div className="metric-lbl">Acceptance rate</div>
              </div>
              <div className="metric-item">
                <div className="metric-num">21</div>
                <div className="metric-lbl">Days median decision</div>
              </div>
              <div className="metric-item">
                <div className="metric-num">140+</div>
                <div className="metric-lbl">Countries</div>
              </div>
            </div>
          </section>

          <section className="content-block">
            <h3 className="block-heading">RESEARCH SCOPE</h3>
            <div className="scope-grid">
              <div className="scope-box">
                <h4>🟢 Artificial Intelligence & Computing</h4>
                <p>Machine learning, neuromorphic systems, scientific computing, algorithms.</p>
              </div>
              <div className="scope-box">
                <h4>🟢 Biotechnology & Life Sciences</h4>
                <p>Gene editing, drug delivery, synthetic biology, genomics.</p>
              </div>
              <div className="scope-box">
                <h4>🟢 Materials Science & Physics</h4>
                <p>Quantum materials, photovoltaics, condensed matter, nanomaterials.</p>
              </div>
              <div className="scope-box">
                <h4>🟢 Environmental Science</h4>
                <p>Climate modeling, ecology, pollution, earth systems.</p>
              </div>
              <div className="scope-box">
                <h4>🟢 Chemistry & Chemical Engineering</h4>
                <p>Synthesis, catalysis, process engineering, green chemistry.</p>
              </div>
              <div className="scope-box">
                <h4>🟢 Biomedical Engineering</h4>
                <p>Medical devices, imaging, neural interfaces, biomaterials.</p>
              </div>
            </div>
          </section>

          <section className="content-block">
            <h3 className="block-heading">PEER REVIEW PROCESS</h3>
            <p className="timeline-intro">All submitted manuscripts undergo a rigorous double-blind peer review process. Reviewer identities are concealed from authors and vice versa throughout evaluation. The editorial office aims to assign reviewers within five business days of submission and return initial decisions within 21 days.</p>

            <div className="timeline-list">
              <div className="timeline-node">
                <div className="node-index">1</div>
                <div className="node-data">
                  <h5>Submission & initial screening</h5>
                  <p>The editorial office checks basic formatting compliance, handles initial plagiarism checks through iThenticate. Out of scope or technically incomplete submissions are desk-rejected within 3 business days.</p>
                </div>
              </div>
              <div className="timeline-node">
                <div className="node-index">2</div>
                <div className="node-data">
                  <h5>Editor assignment & reviewer selection</h5>
                  <p>A handling editor with relevant expertise is assigned. Two to three independent reviewers are invited from our panel of 8,000+ registered experts; conflicts of interest are automated electronically.</p>
                </div>
              </div>
              <div className="timeline-node">
                <div className="node-index">3</div>
                <div className="node-data">
                  <h5>Double-blind review</h5>
                  <p>Reviewers evaluate technical correctness, methodological flaws, clarity, and reproducibility. Authors are blinded to reviewer identity; reviewers receive anonymized manuscripts. Review period is typically 14–30 days.</p>
                </div>
              </div>
              <div className="timeline-node">
                <div className="node-index">4</div>
                <div className="node-data">
                  <h5>Editorial decision</h5>
                  <p>The handling editor synthesizes reviewer reports and issues an accept, minor revision, major revision, or reject. Desks reject logic dictates consolidated reviews items lists.</p>
                </div>
              </div>
              <div className="timeline-node">
                <div className="node-index">5</div>
                <div className="node-data">
                  <h5>Production & publication</h5>
                  <p>Accepted papers undergo proofreading and typesetting. Authors approve the final text; the article is published online within 2 weeks of acceptance.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="content-block">
            <h3 className="block-heading">EDITORIAL BOARD</h3>
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

          <section className="content-block">
            <h3 className="block-heading">ETHICS & INDEXING</h3>
            <p className="ethics-intro-text">
              JAST adheres to the Principles of Transparency and Best Practice in Scholarly Publishing (COPE). All research involving human subjects or animals must include ethics approval documentation. The journal is indexed in Scopus, Web of Science, PubMed, DOAJ, and other major academic databases.
            </p>
            <div className="indexing-logos-grid">
              <div className="logo-box">Scopus</div>
              <div className="logo-box">Web of Science</div>
              <div className="logo-box">PubMed</div>
              <div className="logo-box">DOAJ</div>
              <div className="logo-box">EBSCO</div>
              <div className="logo-box">Google Scholar</div>
            </div>
          </section>
        </main>

        <aside className="sidebar-rail">
          <div className="widget">
            <h4 className="widget-title">QUICK LINKS</h4>
            <ul className="widget-list">
              <li><Link to="/submit">Submit a manuscript <span className="arrow">›</span></Link></li>
              <li><Link to="/author-guidelines">Author guidelines <span className="arrow">›</span></Link></li>
              <li><Link to="/contact">Contact us <span className="arrow">›</span></Link></li>
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
          <div className="widget">
            <h4 className="widget-title">JOURNAL TIMELINE</h4>
            <div className="timeline-box">
              <div className="timeline-row">
                <span className="year">2012</span>
                <span className="evt">Journal founded</span>
              </div>
              <div className="timeline-row">
                <span className="year">2015</span>
                <span className="evt">Scopus indexed</span>
              </div>
              <div className="timeline-row">
                <span className="year">2018</span>
                <span className="evt">Impact factor &gt; 5.0</span>
              </div>
              <div className="timeline-row">
                <span className="year">2022</span>
                <span className="evt">300+ articles/year</span>
              </div>
              <div className="timeline-row">
                <span className="year">2024</span>
                <span className="evt">Global reach 140+ countries</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <Footer />
    </>
  )
}

export default About
import React from 'react'
import '../Components/About.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
      <div class="breadcrumbs container">
        <Link to="/">Home</Link> › <Link to="/articles/ai">Artificial Intelligence</Link> › Neuromorphic computing...
      </div>


      <section class="hero-section">
        <span class="hero-badge">ABOUT JAST</span>
        <h2 class="hero-title">Advancing the frontiers of science and <br /> technology since 2012</h2>
        <p class="hero-desc">The Journal of Advances in Science & Technology (JAST) is a peer-reviewed,
          open-access publication of the Institute for Scientific Research. We publish original research, reviews,
          and letters across all disciplines of the natural sciences and engineering.</p>
        <div class="features-banner">
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Open access</h3>
            <p>All content freely available under CC BY 4.0</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👥</div>
            <h3>Double-blind review</h3>
            <p>Rigorous peer review by international experts</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h3>Global reach</h3>
            <p>Authors and readers in 140+ countries</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏅</div>
            <h3>Indexed worldwide</h3>
            <p>Scopus, Web of Science, PubMed, DOAJ</p>
          </div>
        </div>
      </section>


      <section class="layout-grid">

        <main class="primary-content">

          <section class="content-block">
            <h3 class="block-heading">MISSION & SCOPE</h3>
            <p>JAST's mission is to accelerate the dissemination of high-quality, reproducible scientific findings without financial barriers. We believe the results of rigorous inquiry should be freely accessible to every researcher, practitioner, and curious mind on the planet — regardless of institutional affiliation or geographic location.</p>

            <blockquote class="pull-quote">
              "We do not publish science for libraries. We publish science for the world."
              <span class="quote-author">— Prof. Elena Vassiliev, Editor-in-Chief</span>
            </blockquote>

            <p>The journal welcomes submissions spanning all areas of the natural sciences and engineering, with particular emphasis on interdisciplinary work that bridges traditionally separate fields. We do not impose artificial disciplinary boundaries; a paper on neuromorphic hardware for climate science is as welcome as a study on CRISPR delivery mechanisms or room-temperature superconductivity.</p>

            <div class="metrics-row">
              <div class="metric-item">
                <div class="metric-num">7.41</div>
                <div class="metric-lbl">Impact Factor (2025)</div>
              </div>
              <div class="metric-item">
                <div class="metric-num">312</div>
                <div class="metric-lbl">Articles per year</div>
              </div>
              <div class="metric-item">
                <div class="metric-num">18%</div>
                <div class="metric-lbl">Acceptance rate</div>
              </div>
              <div class="metric-item">
                <div class="metric-num">21</div>
                <div class="metric-lbl">Days median decision</div>
              </div>
              <div class="metric-item">
                <div class="metric-num">140+</div>
                <div class="metric-lbl">Countries</div>
              </div>
            </div>
          </section>

          <section class="content-block">
            <h3 class="block-heading">RESEARCH SCOPE</h3>
            <div class="scope-grid">
              <div class="scope-box">
                <h4>🟢 Artificial Intelligence & Computing</h4>
                <p>Machine learning, neuromorphic systems, scientific computing, algorithms.</p>
              </div>
              <div class="scope-box">
                <h4>🟢 Biotechnology & Life Sciences</h4>
                <p>Gene editing, drug delivery, synthetic biology, genomics.</p>
              </div>
              <div class="scope-box">
                <h4>🟢 Materials Science & Physics</h4>
                <p>Quantum materials, photovoltaics, condensed matter, nanomaterials.</p>
              </div>
              <div class="scope-box">
                <h4>🟢 Environmental Science</h4>
                <p>Climate modeling, ecology, pollution, earth systems.</p>
              </div>
              <div class="scope-box">
                <h4>🟢 Chemistry & Chemical Engineering</h4>
                <p>Synthesis, catalysis, process engineering, green chemistry.</p>
              </div>
              <div class="scope-box">
                <h4>🟢 Biomedical Engineering</h4>
                <p>Medical devices, imaging, neural interfaces, biomaterials.</p>
              </div>
            </div>
          </section>

          <section class="content-block">
            <h3 class="block-heading">PEER REVIEW PROCESS</h3>
            <p class="timeline-intro">All submitted manuscripts undergo a rigorous double-blind peer review process. Reviewer identities are concealed from authors and vice versa throughout evaluation. The editorial office aims to assign reviewers within five business days of submission and return initial decisions within 21 days.</p>

            <div class="timeline-list">
              <div class="timeline-node">
                <div class="node-index">1</div>
                <div class="node-data">
                  <h5>Submission & initial screening</h5>
                  <p>The editorial office checks basic formatting compliance, handles initial plagiarism checks through iThenticate. Out of scope or technically incomplete submissions are desk-rejected within 3 business days.</p>
                </div>
              </div>
              <div class="timeline-node">
                <div class="node-index">2</div>
                <div class="node-data">
                  <h5>Editor assignment & reviewer selection</h5>
                  <p>A handling editor with relevant expertise is assigned. Two to three independent reviewers are invited from our panel of 8,000+ registered experts; conflicts of interest are automated electronically.</p>
                </div>
              </div>
              <div class="timeline-node">
                <div class="node-index">3</div>
                <div class="node-data">
                  <h5>Double-blind review</h5>
                  <p>Reviewers evaluate technical correctness, methodological flaws, clarity, and reproducibility. Authors are blinded to reviewer identity; reviewers receive anonymized manuscripts. Review period is typically 14–30 days.</p>
                </div>
              </div>
              <div class="timeline-node">
                <div class="node-index">4</div>
                <div class="node-data">
                  <h5>Editorial decision</h5>
                  <p>The handling editor synthesizes reviewer reports and issues an accept, minor revision, major revision, or reject. Desks reject logic dictates consolidated reviews items lists.</p>
                </div>
              </div>
              <div class="timeline-node">
                <div class="node-index">5</div>
                <div class="node-data">
                  <h5>Production & publication</h5>
                  <p>Accepted papers undergo proofreading and typesetting. Authors approve the final text; the article is published online within 2 weeks of acceptance.</p>
                </div>
              </div>
            </div>
          </section>

          <section class="content-block">
            <h3 class="block-heading">EDITORIAL BOARD</h3>
            <div class="board-flex-grid">

              <div class="member-card">
                <div class="gradient-avatar">DSC</div>
                <div class="member-info">
                  <h5>Dr. Sarah Chen</h5>
                  <p class="role">Editor-in-Chief</p>
                  <p class="inst">MIT</p>
                </div>
              </div>

              <div class="member-card">
                <div class="gradient-avatar">PJW</div>
                <div class="member-info">
                  <h5>Prof. James Wilson</h5>
                  <p class="role">Associate Editor</p>
                  <p class="inst">Oxford University</p>
                </div>
              </div>

              <div class="member-card">
                <div class="gradient-avatar">DAO</div>
                <div class="member-info">
                  <h5>Dr. Amara Okonkwo</h5>
                  <p class="role">Associate Editor</p>
                  <p class="inst">University of Lagos</p>
                </div>
              </div>

              <div class="member-card">
                <div class="gradient-avatar">PHL</div>
                <div class="member-info">
                  <h5>Prof. Henrik Larsson</h5>
                  <p class="role">Associate Editor</p>
                  <p class="inst">KTH Royal Institute</p>
                </div>
              </div>
            </div>
          </section>

          <section class="content-block">
            <h3 class="block-heading">ETHICS & INDEXING</h3>
            <p class="ethics-intro-text">
              JAST adheres to the Principles of Transparency and Best Practice in Scholarly Publishing (COPE). All research involving human subjects or animals must include ethics approval documentation. The journal is indexed in Scopus, Web of Science, PubMed, DOAJ, and other major academic databases.
            </p>
            <div class="indexing-logos-grid">
              <div class="logo-box">Scopus</div>
              <div class="logo-box">Web of Science</div>
              <div class="logo-box">PubMed</div>
              <div class="logo-box">DOAJ</div>
              <div class="logo-box">EBSCO</div>
              <div class="logo-box">Google Scholar</div>
            </div>
          </section>
        </main>

        <aside class="sidebar-rail">
          <div class="widget">
            <h4 class="widget-title">QUICK LINKS</h4>
            <ul class="widget-list">
              <li><Link to="/submit">Submit a manuscript <span class="arrow">›</span></Link></li>
              <li><Link to="/author-guidelines">Author guidelines <span class="arrow">›</span></Link></li>
              <li><Link to="/reviewer-guidelines">Reviewer guidelines <span class="arrow">›</span></Link></li>
              <li><Link to="/contact">Contact us <span class="arrow">›</span></Link></li>
            </ul>
          </div>
          <div class="widget">
            <h4 class="widget-title">CONTACT</h4>
            <div class="contact-box">
              <div class="contact-item">
                <span class="lbl">Email</span>
                <a href="mailto:editorial@jast.org" class="val link">editorial@jast.org</a>
              </div>
              <div class="contact-item">
                <span class="lbl">Phone</span>
                <span class="val">+1 (555) 123-4567</span>
              </div>
              <div class="contact-item">
                <span class="lbl">Address</span>
                <span class="val">Institute for Scientific Research<br />Cambridge, MA 02138, USA</span>
              </div>
            </div>
          </div>
          <div class="widget">
            <h4 class="widget-title">JOURNAL TIMELINE</h4>
            <div class="timeline-box">
              <div class="timeline-row">
                <span class="year">2012</span>
                <span class="evt">Journal founded</span>
              </div>
              <div class="timeline-row">
                <span class="year">2015</span>
                <span class="evt">Scopus indexed</span>
              </div>
              <div class="timeline-row">
                <span class="year">2018</span>
                <span class="evt">Impact factor &gt; 5.0</span>
              </div>
              <div class="timeline-row">
                <span class="year">2022</span>
                <span class="evt">300+ articles/year</span>
              </div>
              <div class="timeline-row">
                <span class="year">2024</span>
                <span class="evt">Global reach 140+ countries</span>
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
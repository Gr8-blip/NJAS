import React from 'react'
import { Link } from 'react-router'
import Footer from '../Components/Footer'

const Advertising = () => {
  return (
    <>
      <section className="hero-section">
        <h2 className="hero-title">Advertising</h2>
        <p className="hero-desc">To advertise in this journal contact the Managing Editor,
          Tropical Journal of Science and Practice ofice of Pharmacy (JSPPharm) published by Naigerian
          Association of Pharmacists in Academia, University of Benin Branch, Benin City, Nigeria.
          Email Editor: <Link to='mailto:editor@tjmdp.org'>editor@tjmdp.org</Link> Tel: (+234) 0803 354 6812</p>
      </section>


      <section className="layout-grid editorial-layout-grid">
        <main className="primary-content">
          <article className="editorial-article">
            <h3>Journal Reprints</h3>
            <table>
              <tr>
                <th rowspan="2">Reprints</th>
                <td>Africa -- US $ 15</td>
              </tr>
              <tr>
                <td>Rest of the world -- US $ 20 each</td>
              </tr>
            </table>
          </article>

          <article className="editorial-article">
            <h3>Journal Subscription </h3>
            <table>
              <tr>
                <td>Internet Access</td>
                <td>Free</td>
              </tr>
              <tr>
                <td colspan="2">Hard Copies (excluding postage per volume of 12 issues)</td>
              </tr>
              <tr>
                <td rowspan="2">Nigeria</td>
                <td>Personal -- US $ 500 per annum or N 120,000</td>
              </tr>
              <tr>
                <td>Institution -- US $ 900 per annum or N180,000</td>
              </tr>
              <tr>
                <td rowspan="2">Rest of the world</td>
                <td>Personal -- US $ 900 per annum</td>
              </tr>
              <tr>
                <td>Institution -- US $ 1200 per annum</td>
              </tr>
              <tr>
                <td rowspan="2">Single issue (excluding postage)</td>
                <td>Personal -- N 12,000 (Nigeria) or US $ 120 (Rest of the world)</td>
              </tr>
              <tr>
                <td>Institution -- N 18,000 or US $ 180</td>
              </tr>
            </table>
          </article>
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
        </aside>
      </section>


      <Footer />
    </>
  )
}

export default Advertising
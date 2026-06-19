import React from 'react'
import '../Components/Page_404.css'
import Footer from '../Components/Footer'
import { Link } from 'react-router'


const Page_404 = () => {
  return (
    <>
      <section>
        <div class="container-404">
          <div class="card-404">
            <div class="icon-container-404">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p class="description-404">
              Sorry, the page you're looking for doesn't exist. It may have been moved, deleted, or the URL might be incorrect.
            </p>

            <div class="button-group-404">
              <Link to='/' class="btn-404 btn-primary-404">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                Go to Homepage
              </Link>

              <Link to='/article' class="btn-404 btn-secondary-404">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                Search Articles
              </Link>
            </div>

            <div class="divider-404">Or Explore</div>
          </div>

          <div class="suggested-card-404">
            <div class="suggested-title-404">
              <span>➔</span> Suggested Pages
            </div>
            <div class="grid-links-404">
              <Link to='/products-payment' class="grid-item-404">Product Payment <span class="arrow">➔</span></Link>
              <Link to='/article' class="grid-item-404">Articles <span class="arrow">➔</span></Link>
              <Link to='/issues' class="grid-item-404">Issues <span class="arrow">➔</span></Link>
              <Link to='/about' class="grid-item-404">About <span class="arrow">➔</span></Link>
              <Link to='/author-guidelines' class="grid-item-404">Author Guidelines <span class="arrow">➔</span></Link>
              <Link to='/editorial' class="grid-item-404">Editorial Board <span class="arrow">➔</span></Link>
            </div>
          </div>

          <div class="footer-banner-404">
            <p>Can't find what you're looking for?</p>
            <Link to='/'>Contact our support team ➔</Link>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Page_404
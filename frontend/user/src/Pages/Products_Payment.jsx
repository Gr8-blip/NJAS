import React from 'react'
import '../Components/Products_Payment.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'


const Products_Payment = () => {
    return (
        <>
            <section className="hero-section">
                <h2 className="hero-title">Payment for Products</h2>
                <p className="hero-desc">Flexible payment options for reprints, journal subscriptions, and publication charges.
                    We accept multiple payment methods for your convenience.</p>
            </section>


            <section className="layout-grid editorial-layout-grid">
                <main className="primary-content">
                    <section class="policy-card">
                        <h2 class="section-title"><span class="title-icon text-blue">$</span> Publication Charges</h2>
                        <p class="section-intro">Choose between fast-track and normal publication options based on your timeline needs.</p>

                        <div class="charges-split-grid">
                            <div class="charge-card-pane">
                                <h4>Fast Track</h4>
                                <div class="charge-price">US$200.00</div>
                                <p class="charge-desc">Expedited publication process</p>
                            </div>
                            <div class="charge-card-pane">
                                <h4>Normal Track</h4>
                                <div class="charge-price">US$100.00</div>
                                <p class="charge-desc">Standard publication timeline</p>
                            </div>
                        </div>
                    </section>

                    <section class="policy-card">
                        <h2 class="section-title">Reprints</h2>
                        <p class="section-intro">Order reprints of published articles for distribution and archival purposes.</p>

                        <div class="charges-split-grid">
                            <div class="charge-card-pane">
                                <h4>Africa</h4>
                                <div class="charge-price">US$15</div>
                                <p class="charge-desc">Per reprint copy</p>
                            </div>
                            <div class="charge-card-pane">
                                <h4>Rest of the World</h4>
                                <div class="charge-price">US$20</div>
                                <p class="charge-desc">Per reprint copy</p>
                            </div>
                        </div>
                    </section>

                    <section class="policy-card">
                        <h2 class="section-title"><span class="title-icon text-blue">📖</span> Journal Subscription</h2>
                        <p class="section-intro">Subscribe to receive regular issues of the journal. Choose from various subscription options based on your location and type.</p>

                        <div class="subscription-blocks-stack">
                            <div class="sub-row-card">
                                <span class="sub-icon">🌐</span>
                                <div class="sub-content-area">
                                    <h4>Internet Access</h4>
                                    <div class="price-value">Free</div>
                                    <p class="sub-desc">Online access to all published articles</p>
                                </div>
                            </div>
                            <div class="sub-row-card">
                                <span class="sub-icon">📦</span>
                                <div class="sub-content-area">
                                    <h4>Hard Copies - Nigeria (Personal)</h4>
                                    <div class="price-value text-purple">US$500 <span class="text-neutral">or</span> ₦65,000</div>
                                    <p class="sub-meta">per annum</p>
                                    <p class="sub-desc">3 issues per volume with postage</p>
                                </div>
                            </div>
                            <div class="sub-row-card">
                                <span class="sub-icon">🏢</span>
                                <div class="sub-content-area">
                                    <h4>Hard Copies - Nigeria (Institution)</h4>
                                    <div class="price-value text-purple">US$900 <span class="text-neutral">or</span> ₦100,000</div>
                                    <p class="sub-meta">per annum</p>
                                    <p class="sub-desc">3 issues per volume with postage</p>
                                </div>
                            </div>
                            <div class="sub-row-card">
                                <span class="sub-icon">📦</span>
                                <div class="sub-content-area">
                                    <h4>Hard Copies - Rest of World (Personal)</h4>
                                    <div class="price-value text-purple">US$500 <span class="text-neutral">or</span>  US$900</div>
                                    <p class="sub-meta">per annum</p>
                                    <p class="sub-desc">3 issues per volume with postage</p>
                                </div>
                            </div>
                            <div class="sub-row-card">
                                <span class="sub-icon">🏢</span>
                                <div class="sub-content-area">
                                    <h4>Hard Copies - Rest of World (Institution)</h4>
                                    <div class="price-value text-purple">US$900 <span class="text-neutral">or</span> US$1,200</div>
                                    <p class="sub-meta">per annum</p>
                                    <p class="sub-desc">3 issues per volume with postage</p>
                                </div>
                            </div>
                            <div class="sub-row-card">
                                <span class="sub-icon">📄</span>
                                <div class="sub-content-area">
                                    <h4>Single Issue - Nigeria (Personal)</h4>
                                    <div class="price-value text-purple">₦12,000 <span class="text-neutral">or</span> US$120</div>
                                    <p class="sub-desc">One issue only</p>
                                </div>
                            </div>
                            <div class="sub-row-card">
                                <span class="sub-icon">📄</span>
                                <div class="sub-content-area">
                                    <h4>Single Issue - Nigeria (Institution)</h4>
                                    <div class="price-value text-purple">₦18,000 <span class="text-neutral">or</span> US$180</div>
                                    <p class="sub-desc">One issue only</p>
                                </div>
                            </div>
                            <div class="sub-row-card">
                                <span class="sub-icon">📄</span>
                                <div class="sub-content-area">
                                    <h4>Single Issue - Rest of World</h4>
                                    <div class="price-value text-purple">US$120 (Personal) <span class="text-neutral">or</span> US$180 (Institution)</div>
                                    <p class="sub-desc">One issue only</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="policy-card">
                        <h2 class="section-title"><span class="title-icon text-blue">💳</span> Payment Options</h2>
                        <p class="section-intro">We offer multiple secure payment methods to accommodate international authors and institutions.</p>

                        <div class="payment-option-box">
                            <div class="option-header-row">
                                <span class="payment-badge-icon">💳</span>
                                <div class="option-header-text">
                                    <h4>Online Payment (Credit/Debit Card)</h4>
                                    <p>Secure online payment using credit or debit card</p>
                                </div>
                            </div>
                            <ul class="panel-list list-purple">
                                <li>Naira Checkout available for Nigerian authors</li>
                                <li>US Dollar Checkout for international authors</li>
                                <li>Fast and secure transaction processing</li>
                                <li>Instant payment confirmation</li>
                            </ul>
                        </div>
                        <div class="payment-option-box">
                            <div class="option-header-row">
                                <span class="payment-badge-icon">🌍</span>
                                <div class="option-header-text">
                                    <h4>Western Union Money Transfer</h4>
                                    <p>International money transfer option</p>
                                </div>
                            </div>
                            <ul class="panel-list list-purple">
                                <li>No additional charges</li>
                                <li>Contact Editorial Office before payment</li>
                                <li>Send scanned transaction document via email</li>
                                <li>Log payment in our database</li>
                                <li>Includes sender name, MTCN, and country info</li>
                            </ul>
                        </div>
                        <div class="payment-option-box">
                            <div class="option-header-row">
                                <span class="payment-badge-icon">🏦</span>
                                <div class="option-header-text">
                                    <h4>Bank Transfer</h4>
                                    <p>Direct bank-to-bank transfer</p>
                                </div>
                            </div>
                            <ul class="panel-list list-purple">
                                <li>Contact Editorial Office for bank details</li>
                                <li>Pay all local bank charges</li>
                                <li>Add US$30 for intermediary bank charges</li>
                                <li>Log payment information in database</li>
                                <li>Allow 5-7 business days for processing</li>
                            </ul>
                        </div>
                        <div class="payment-option-box">
                            <div class="option-header-row">
                                <span class="payment-badge-icon">📋</span>
                                <div class="option-header-text">
                                    <h4>Bank Draft</h4>
                                    <p>Payment by bank draft</p>
                                </div>
                            </div>
                            <ul class="panel-list list-purple">
                                <li>Contact Editorial Office first</li>
                                <li>Modalities vary by country</li>
                                <li>Requires advance coordination</li>
                                <li>Allow additional processing time</li>
                            </ul>
                        </div>
                        <div class="payment-option-box">
                            <div class="option-header-row">
                                <span class="payment-badge-icon">🇳🇬</span>
                                <div class="option-header-text">
                                    <h4>Payment Within Nigeria (Naira)</h4>
                                    <p>For Nigerian authors only</p>
                                </div>
                            </div>
                            <ul class="panel-list list-purple">
                                <li>Amount communicated to corresponding author</li>
                                <li>Payment in Nigerian Naira</li>
                                <li>Use Naira Checkout</li>
                                <li>Fast local processing</li>
                            </ul>
                        </div>
                    </section>

                    <section class="policy-card">
                        <h2 class="section-title"><span class="title-icon text-blue">⬡</span> Refund Policy</h2>
                        <div class="policy-containers-stack">
                            <div class="status-panel panel-red">
                                <h4>Publication Delays</h4>
                                <p>Refunds are <strong>not applicable</strong> for delays in article publication.</p>
                            </div>
                            <div class="status-panel panel-green">
                                <h4>Refund Eligibility</h4>
                                <p>Refunds may be issued if:</p>
                                <ul class="panel-list list-green">
                                    <li>The purchased product is not delivered</li>
                                    <li>Non-delivery notice is submitted at least 30 days before refund request</li>
                                </ul>
                            </div>
                            <div class="status-panel panel-blue">
                                <h4>Refund Process</h4>
                                <ul class="panel-list list-blue">
                                    <li>Contact Editorial Office directly</li>
                                    <li>Allow at least 2 weeks for investigation</li>
                                    <li>Provide proof of non-delivery</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section class="policy-card">
                        <h2 class="section-title"><span class="title-icon text-blue">ⓘ</span> Important Payment Information</h2>
                        <div class="info-blocks-stack">
                            <div class="info-block-row">
                                <span class="check-icon">✓</span>
                                <div class="info-block-content">
                                    <h4>Naira vs Dollar Checkout</h4>
                                    <p>Naira checkout is only available for Nigerian authors residing within Nigeria. All other authors should use the US Dollar checkout.</p>
                                </div>
                            </div>
                            <div class="info-block-row">
                                <span class="check-icon">✓</span>
                                <div class="info-block-content">
                                    <h4>Bank Transfer Additional Charges</h4>
                                    <p>When paying via bank transfer, add US$30 to cover intermediary bank charges in addition to your local bank fees.</p>
                                </div>
                            </div>
                            <div class="info-block-row">
                                <span class="check-icon">✓</span>
                                <div class="info-block-content">
                                    <h4>Payment Documentation</h4>
                                    <p>For Western Union and bank transfers, always send scanned transaction documents and log payment in our database.</p>
                                </div>
                            </div>
                            <div class="info-block-row">
                                <span class="check-icon">✓</span>
                                <div class="info-block-content">
                                    <h4>Processing Time</h4>
                                    <p>Allow 5-7 business days for bank transfers and 2-3 business days for online credit/debit card payments.</p>
                                </div>
                            </div>
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
                </aside>
            </section>


            <Footer />
        </>
    )
}

export default Products_Payment
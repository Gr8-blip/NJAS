import React from 'react'
import Footer from '../Components/Footer'

const Privacy_Policy = () => {
    return (
        <>
            <section className="hero-section editorial-hero-section">
                <h2 className="hero-title">Privacy Policy</h2>
                {/* <p className="hero-desc"></p> */}
            </section>

            <section className="layout-grid editorial-layout-grid">
                <main className="primary-content">
                    <article className="editorial-article" id="about">
                        <h3>Who We Are?</h3>
                        <p>
                            Any reference to "Publisher", "we", "us" and "our" is to the Publisher of this journal , except where the relevant service is provided by another company, 
                            in which case references to ' we', 'us' or 'our' shall, in respect of those services, be references to that company.
                        </p>
                    </article>

                    <article className="editorial-article" id="privacy">
                        <h3>Your privacy</h3>
                        <p>
                            Protecting your privacy is one of our top priorities. From time to time we may change this Privacy Policy without further notice to you and we will post 
                            revisions on the Website. We thus recommend that you regularly review this policy for any changes as it is your responsibility to so.
                        </p>
                    </article>

                    <article className="editorial-article" id="privacy-commitment">
                        <h3>Our privacy commitment</h3>
                        <p>
                            We will make every effort to protect your privacy by adopting a consistently high level of site security and adhering to strict company policies on how 
                            we store and use personal information. This privacy policy has been developed in accordance with our legal obligations and may be updated from time to time.
                        </p>
                    </article>

                    <article className="editorial-article" id="language-terms">
                        <h3>Language of Terms</h3>
                        <p>
                            These terms are provided in English language. Where they are translated into a language which is not English (even from our website), it is done for your 
                            convenience only to aid your interpretation of the terms. We cannot guarantee the accuracy of such translation.
                        </p>
                    </article>

                    <article className="editorial-article" id="account-password">
                        <h3>Accounts and Passwords</h3>
                        <p>
                            If you have registered or subscribed to this website, any user identification code or password must be kept confidential and used only by you (unless agreed 
                            in writing with us). We reserve the right to disable any user identification code or password whether chosen by you or allocated by us at any time if in our 
                            opinion you have failed to comply with any of the provisions of these terms of use.
                        </p>
                    </article>

                    <article className="editorial-article" id="user-content">
                        <h3>User Content</h3>
                        <ul>
                            <li>
                                <b>Right to Use</b><br />
                                <p>
                                    You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user 
                                    content provided for this website in any existing or future media. Here, "your user content" shall mean materials (including without limitation text, 
                                    images, audio material, video and audio-visual materials) that you submit to this website, for whatever purpose.
                                </p>
                                <p>
                                    Right to SubmissionYour user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of 
                                    giving rise to legal action whether against you or us or a third party (in each case under any applicable law). You must not submit any user content 
                                    that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint to this website.
                                </p>
                                <p>
                                    Any personal data collected from those submitting data for this website is for the purpose of identification of data source and communication in 
                                    respect of our products and the user content. Such data may be retained permanently in our database and will not be released to a third party 
                                    without the consent of the person providing the data unless for the indexing of content, storage of data, research/scientific purposes or otherwise 
                                    stated elsewhere on our website. For this purpose, the Editor of this journal may be contacted.
                                </p>
                                <p>
                                    We reserves the right to edit or remove any material submitted to or published on the website.
                                </p>
                            </li>
                            <li>
                                <b>Right to Erase</b><br />
                                <p>
                                    The person providing data has the right to request erasure of personal data related to him or her on any one of a number of grounds that includes 
                                    a case where our legitimate interests is overridden by the interests or fundamental rights and freedoms of the person providing data (which require 
                                    protection of personal data), cease further dissemination of the data, and potentially have third parties halt processing of the data provided the 
                                    data is not for research/scientific purposes.
                                </p>
                            </li>
                            <li>
                                <b>Right to Access</b><br />
                                <p>
                                    It is the right for a person providing data to obtain from us confirmation as to whether or not personal and/or other data concerning them is/are 
                                    being pro¬cessed, where and for what purpose. The person also has the right to obtain a portable copy of the stored data, which they have previously 
                                    provided in a ‘commonly use and ma¬chine-readable format, view their personal data and access an overview of how it is being processed.
                                </p>
                            </li>
                            <li>
                                <b>Right to Contest</b><br />
                                <p>
                                    The person providing data has the right to contest any automated decision-making that was made on a solely-algorithmic basis, and the right to file 
                                    complaints with a Data Protection Authority
                                </p>
                            </li>
                        </ul>
                    </article>

                    <article className="editorial-article" id="disclosure">
                        <h3>Disclosure</h3>
                        <p>
                            Where we disclose your personal information to a third party, the third party in question will be obligated to use that personal information in accordance 
                            with the terms of this privacy statement.
                        </p>
                        <p>
                            In addition to the disclosures reasonably necessary for the purposes identified elsewhere above, we may disclose your personal information to the extent 
                            that it is required to do so by law, in connection with any legal proceedings or prospective legal proceedings, and in order to establish, exercise or defend its legal rights.
                        </p>
                    </article>
                </main>


                <aside className="sidebar-rail" style={{ position: 'sticky', top: '20px', zIndex: 10, alignSelf: 'start' }}>
                    <div className="widget">
                        <h4 className="widget-title">QUICK NAVIGATION</h4>
                        <ul className="widget-list">
                            <li><a href="#about">Who We Are</a></li>
                            <li><a href="#privacy">Your Privacy</a></li>
                            <li><a href="#privacy-commitment">Our privacy commitment</a></li>
                            <li><a href="#language-terms">Language of Terms</a></li>
                            <li><a href="#account-password">Accounts and Password</a></li>
                            <li><a href="#user-content">User Content</a></li>
                            <li><a href="#disclosure">Disclosure</a></li>
                        </ul>
                    </div>
                </aside>
            </section>


            <Footer />
        </>
    )
}

export default Privacy_Policy
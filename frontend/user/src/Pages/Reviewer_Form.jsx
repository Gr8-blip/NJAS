import React from 'react'
import '../Components/Reviewer_Form.css'
import Footer from '../Components/Footer'

const Reviewer_Form = () => {
    return (
        <>
            <section className="hero-section">
                <h2 className="hero-title">Peer Reviewer Guide</h2>
                <p className="hero-desc">Thank you for considering to review manuscripts for our journal. Your expertise and constructive
                    feedback are essential to maintaining our publication standards and helping authors improve their research.</p>
            </section>

            <section className="layout-grid editorial-layout-grid">
                <main className="primary-content">
                    <article className="editorial-article">
                        <h3>A Guide to Peer Reviewers</h3>
                        <p>
                            The Journal of Science and Practice of Pharmacy (J Sci Pract Pharm) is a fully peer-reviewed international journal
                            that publishes original research articles, reviews, current issues papers and commentary on pharmaceutical sciences
                            and related disciplines including biological sciences, molecular biology, biotechnology, medicinal chemistry,
                            phytochemistry, herbal medicines, physiology and clinical pharmacology, and drug-related issues in medicine, nursing,
                            engineering and social sciences). It seeks particularly (but not exclusively) to encourage multidisciplinary research
                            and collaboration among scientists, the industry and the healthcare professionals. It also provides an international
                            forum for the communication and evaluation of data, methods and findings in health sciences and related disciplines.
                        </p>
                    </article>

                    <article className="editorial-article">
                        <h3>The Role of the Peer Reviewer</h3>
                        <p>
                            The peer reviewer is an advisor to journal editors that helps to identify the most timely and important manuscripts.
                            The reviewer also acts as a mentor to authors in the sense that even if the reviewer does not feel the manuscript is
                            worthy of publication, s/he still provides advice that will allow the authors to improve the manuscript for submission
                            to a different journal and avoid similar mistakes in future research.
                        </p>
                    </article>

                    <article className="editorial-article">
                        <h3>Deciding to Accept a Review</h3>
                        <p>When deciding to review, the reviewer should consider whether:</p>
                        <ul>
                            <li>the manuscript is in his/her area of expertise</li>
                            <li>s/he can complete the review process by the deadline given;</li>
                            <li>s/he has any conflict of interest (personal, financial, or professional) or any competing financial demands with the manuscript content s/he has been invited to review:</li>
                            <li>s/he can treat the manuscript as a confidential document.</li>
                        </ul>
                        <p>
                            Any invited reviewer who decides not to accept an invitation to review for any reason should notify the journal immediately
                            so that the Editor-in-Chief can seek alternative reviewers. Suggesting an alternate reviewer can be helpful.
                        </p>
                    </article>

                    <article className="editorial-article">
                        <h3>Review Comments</h3>
                        <p>These should be objective, constructive, systematic and conscientious. The Following general guidelines to achieve a quality review should be considered:</p>
                        <ul>
                            <li>Discuss article originality and contribution to current scholarship and science</li>
                            <li>Discuss what the value of the topic will be to J Sci Pract Pharm article readers</li>
                            <li>Acknowledge strengths and weaknesses in the abstract, justification, study design, data collection, and data analysis</li>
                            <li>Discuss the author’s presentation and interpretation of results, discussion and conclusion and quality of references</li>
                            <li>Comment on manuscript writing (including the language), organization, statistical approaches, and tables and figures</li>
                            <li>Supply evidence and references (within text and in literature, as appropriate) to substantiate critical comments</li>
                            <li>Give a clear recommendation, with constructive comments in a courteous tone</li>
                            <li>Refrain from making personal comments, such as those related to the author’s affiliation, rank, or previous publication history</li>
                        </ul>
                    </article>

                    <article className="editorial-article">
                        <h3> Reviewer Recommendations</h3>
                        <p>Reviewer recommendations guide the decisions of editors, but please note that editors will not always be in agreement with reviewer conclusions.
                            Also, it is common for manuscripts to receive mixed reviews.</p>
                        <table>
                            <tr>
                                <td>Reject</td>
                                <td>This may be appropriate if a paper adds nothing to the existing literature, if there are fatal flaws in the methods, or if it is inappropriate for the journal’s audience.</td>
                            </tr>
                            <tr>
                                <td>Provisionally Not Accept </td>
                                <td>This may be appropriate if a manuscript brings value to the field, but substantial work is needed before it is worthy of publication.</td>
                            </tr>
                            <tr>
                                <td>Provisionally Accept </td>
                                <td>This may be appropriate if the paper is well-written and has novel findings but has areas in need of clarification or other minor revision.  </td>
                            </tr>
                            <tr>
                                <td>Shorten to Brief Report (Short Communication)</td>
                                <td>A shorten to a brief report may be appropriate if a paper makes a valuable contribution but is not complex enough to require 3,000 words.</td>
                            </tr>
                            <tr>
                                <td>Accept for Publication</td>
                                <td>An accept recommendation may be appropriate if the only changes needed can be made in copyediting. No manuscript with plagiarism levels more than 20% should be recommended for acceptance until the plagiarism is addressed. </td>
                            </tr>
                        </table>
                    </article>

                    <article className="editorial-article">
                        <h3>Review Form</h3>
                        <p>Please complete this form and return it with the manuscript to the Editor. Your detailed feedback is invaluable to our publication process.</p>
                        <div class="form-container">
                            <form id="academic-review-form">
                                <div class="form-section">
                                    <div class="input-group">
                                        <label class="section-subheading">Type of Article</label>
                                        <div class="radio-flex-row">
                                            <label class="pill-radio">
                                                <input type="radio" name="article_type" value="paper" />
                                                <span class="radio-pill-custom"></span>
                                                <span class="pill-label">Paper</span>
                                            </label>
                                            <label class="pill-radio">
                                                <input type="radio" name="article_type" value="report" />
                                                <span class="radio-pill-custom"></span>
                                                <span class="pill-label">Report</span>
                                            </label>
                                            <label class="pill-radio">
                                                <input type="radio" name="article_type" value="technical_note" />
                                                <span class="radio-pill-custom"></span>
                                                <span class="pill-label">Technical Note</span>
                                            </label>
                                            <label class="pill-radio">
                                                <input type="radio" name="article_type" value="other" />
                                                <span class="radio-pill-custom"></span>
                                                <span class="pill-label">Other</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="grid-two-columns">
                                        <div class="input-field-block">
                                            <label class="field-label">Author(s)</label>
                                            <input type="text" name="authors" placeholder="Enter author names" />
                                        </div>
                                        <div class="input-field-block">
                                            <label class="field-label">Manuscript Title</label>
                                            <input type="text" name="manuscript_title" placeholder="Enter manuscript title" />
                                        </div>
                                    </div>
                                </div>

                                <fieldset class="form-section highlight-box">
                                    <legend class="section-subheading">Reviewer Information</legend>

                                    <div class="grid-two-columns">
                                        <div class="input-field-block">
                                            <label class="field-label">Name</label>
                                            <input type="text" name="reviewer_name" placeholder="Your name" />
                                        </div>
                                        <div class="input-field-block">
                                            <label class="field-label">Email</label>
                                            <input type="email" name="reviewer_email" placeholder="Your email" />
                                        </div>
                                        <div class="input-field-block">
                                            <label class="field-label">Phone</label>
                                            <input type="tel" name="reviewer_phone" placeholder="Your phone" />
                                        </div>
                                        <div class="input-field-block">
                                            <label class="field-label">Address</label>
                                            <input type="text" name="reviewer_address" placeholder="Your address" />
                                        </div>
                                    </div>

                                    <div class="checkbox-wrapper">
                                        <label class="checkbox-item">
                                            <input type="checkbox" name="release_name" />
                                            <span class="checkbox-custom"></span>
                                            <span class="checkbox-text">Allow my name to be released to author(s)</span>
                                        </label>
                                    </div>
                                </fieldset>

                                <div class="form-section">
                                    <h3 class="section-subheading">Acceptability for Publication</h3>
                                    <div class="stacked-radio-list">

                                        <label class="list-radio-item">
                                            <input type="radio" name="acceptability" value="accept_as_is" />
                                            <span class="radio-circle-custom"></span>
                                            <span class="list-radio-text">Accept, as is or with minor editorial changes</span>
                                        </label>

                                        <label class="list-radio-item">
                                            <input type="radio" name="acceptability" value="provisionally_accept" />
                                            <span class="radio-circle-custom"></span>
                                            <span class="list-radio-text">Provisionally accept (with minor issues)</span>
                                        </label>

                                        <label class="list-radio-item">
                                            <input type="radio" name="acceptability" value="provisionally_not_accept" />
                                            <span class="radio-circle-custom"></span>
                                            <span class="list-radio-text">Provisionally not accept (with major issues)</span>
                                        </label>

                                        <label class="list-radio-item">
                                            <input type="radio" name="acceptability" value="shorten" />
                                            <span class="radio-circle-custom"></span>
                                            <span class="list-radio-text">Shorten to brief report</span>
                                        </label>

                                        <label class="list-radio-item">
                                            <input type="radio" name="acceptability" value="not_accept" />
                                            <span class="radio-circle-custom"></span>
                                            <span class="list-radio-text">Not accept</span>
                                        </label>

                                    </div>
                                </div>

                                <div class="form-section no-bottom-border">
                                    <label class="section-subheading" for="comments-area">Specific Comments</label>
                                    <div class="textarea-wrapper">
                                        <textarea id="comments-area" name="specific_comments" placeholder="Please provide your detailed review comments here. Use additional sheets as needed."></textarea>
                                    </div>

                                    <div class="form-actions-row">
                                        <button type="submit" class="btn btn-submit">Submit Review</button>
                                        <button type="button" class="btn btn-draft">Save as Draft</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </article>
                </main>

                <aside className='sidebar-rail'>
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

export default Reviewer_Form
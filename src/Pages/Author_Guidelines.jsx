import React from 'react'
import '../Components/Author_Guidelines.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'

const Author_Guidelines = () => {
    return (
        <>
            <section className="hero-section editorial-hero-section">
                <h2 className="hero-title">Author Guidelines</h2>
                <p className="hero-desc">Complete guidelines for submitting manuscripts to the Journal
                    of Advances in Science & Technology. Follow these instructions carefully to ensure your
                    manuscript meets our standards.
                </p>
            </section>

            <section className="layout-grid editorial-layout-grid">

                <main className="primary-content">

                    <article className="guildelines-content" id="journal-overview">
                        <h3>Journal Overview</h3>
                        <p>The <b>Journal of Science and Practice of Pharmacy</b> is an online international journal allowing
                            free unlimited access to abstract and full-text of published articles. The journal is devoted to the
                            promotion of health sciences and related disciplines (including medicine, pharmacy, nursing, biotechnology,
                            cell and molecular biology, and related engineering and social sciences fields).
                        </p>

                        <p>It seeks particularly (but not exclusively) to encourage multidisciplinary research and collaboration
                            among scientists, the industry and the healthcare professionals. It also provides an international forum
                            for the communication and evaluation of data, methods and findings in health sciences and related disciplines.
                            The journal welcomes original research papers, reviews and case reports on current topics of special interest
                            and relevance.
                        </p>
                    </article>

                    <article className="guildelines-content" id="editorial-policy">
                        <h3>Editorial Policy</h3>
                        <p>JSPP considers all manuscripts on the strict condition that they have not been previously published,
                            nor are they submitted for consideration for publication or in press elsewhere. All contributions to the
                            journal are subjected to preliminary review by the Editorial Office and those considered to be appropriate
                            and then subjected to peer-review.
                        </p>
                        <blockquote className="pull-quote">
                            <b>Decisions regarding acceptability</b> will be made on the basis of the quality of science, the contribution
                            of the work to the field, the suitability of the work for the Journal and the presentation of the manuscript.
                        </blockquote>
                        <p>Contributions submitted by the Journal's Editors and Editorial Board members are subject to the same peer review standards
                            as papers submitted by all other authors. Decision regarding acceptability is made on the basis of the quality and suitability
                            of the work for the journal.
                        </p>
                    </article>

                    <article className="guildelines-content" id="manuscript-submission">
                        <h3>Submission of Manuscript</h3>
                        <p>All manuscripts (must be in English) should be submitted via our email to <b>jsppharm@uniben.edu</b> The FIRST NAMEs,
                            Initials (if any) and LAST NAMEs as well as the e-mail addresses (or telephone numbers) of all authors must be provided.
                            Authors may submit the names, affiliations and addresses (including e-mail) of expert reviewers or those they do not want
                            to review their papers.
                        </p>

                        <p>Inquiries may be directed to:</p>
                        <p><b>The Editor</b><br />
                            Journal of Science and Practice of Pharmacy<br />
                            Email: <a href="mailto:jsppharm@uniben.edu">jsppharm@uniben.edu</a><br />
                            An indication that the content of the manuscript has not been published or under
                            consideration for publication elsewhere should accompany the manuscript. Authors may
                            submit the names of expert reviewers or those they do not want to review their papers.
                        </p>
                        <p><b>Length of manuscript</b><br />
                            The maximum length of manuscripts should normally be 10,000 words (20 single-spaced typewritten pages)
                            for review, 6,000 words for research articles, 3,000 for technical notes, commentaries and short communications.
                        </p>
                    </article>

                    <article className="guildelines-content" id="manuscript-format">
                        <h3>Manuscript Format</h3>
                        <p>The preferred format of all manuscript is MS Word or RTF. Manuscript should be prepared in A4 size paper with 2.5 cm
                            (1 inch) margin on round the page.
                        </p>

                        <p><b>Tables:</b> These should be numbered with Arabic numerals and ending in a column, and in bold print (e.g., <b>Table 1:, Table 2:</b>)..
                            Each table should be typed using a table format (i.e., each variable must be typed into separate cell in the table) with only horizontal
                            lines above and below the table column headers and at the bottom of the table (using 1 pt for the top and bottom lines and ½ pt for any middle line).
                            No vertical lines should be included in any table. Each table MUST not exceed 6.5 x 7 inches (16.5 x 17.8 cm, width x height) and MUST be inserted at
                            the appropriate position in the text preferably on the just below or above where it was referred to the first time. The title should be typed at the top
                            of the table in the sentence case format, i.e., only the first name should be in capital letters; names should also be in capital letters, as appropriate.
                            Any footnote should be typed at the top and bottom of the table in italic.
                        </p>
                        <p><b>Illustrations:</b> Figures should be professionally drawn electronically and inserted in the appropriate position where it was first cited within the text.
                            Symbols, lettering, and numbering MUST NOT be in bold print and should be clear and large enough to remain legible (be at least 9 points in size) after the figure
                            has been reduced to 1/2 of the original size. Photographs and graphs may be produced in any colour, graphs MUST be drawn only in black colour unless the author is
                            prepared to pay US$100.00 for each graph in any colour other than black. The legend and any footnote for each figure should be typed below the figure. If photographs
                            of patients are used, either the subjects are not identifiable or their pictures must be accompanied by a written permission to use the images. Photographs must be clear and sharp.
                        </p>
                        <p>
                            All images/figures must be prepared as .tiff or .eps files and should not exceed 200 kilobytes unless prior authorization is received from the Editor.
                            They must never be included in MS Word or any other file. Illustrations (figures) should be in computer format. Images for any manuscript You must provide
                            high-resolution images of sufficient width and quality for both archival and print purposes. Images generated at low resolution for display (screen) purposes are not acceptable.
                        </p>
                        <p>All images must be at or above intended display size, with the following pixel resolutions:</p>
                        <ul>
                            <li>Line art 800 dpi</li>
                            <li>Halftone images (e.g., photographs): 300 dpi</li>
                            <li>Combination images (line art + halftone): 600 dpi</li>
                            <li>See the <Link to="http://www.ncbi.nlm.nih.gov/pmc/about/image_quality_table.html" target="_blank" rel="noopener noreferrer">
                                PubMed Central Image quality specifications chart
                            </Link> for detailed examples.</li>
                        </ul>
                        <p>
                            Image files also must be cropped as close to the actual image as possible. What you must avoid are 72 dpi web-quality graphics in which colours are not realistic, text is illegible,
                            or images are pixilated. These undesirable qualities are usually caused by applied compression from a jpg or gif format, and will cause your submission to be rejected. Refer to your
                            digital scanner / camera and imaging software manual to see how you can produce print quality images.
                        </p>
                        <p><b>Paper Size:</b> A4 with 1.25 inches margin on all sides</p>
                        <p><b>Paragraphing:</b> All text must be in single line space all through. Also use single line spaces to indicate paragraphs. Nothing else.</p>
                        <p><b>Font:</b> “Times New Romans” all through the text</p>
                        <p><b>Title:</b> 16 points font size</p>
                        <p><b>Running Title:</b> Not more than 5 words in 10 points font size</p>
                        <p><b>Authors Name:</b> 12 points (bold typeface) font size and must be in the following order: full first name, initial, surname.</p>
                        <p><b>Authors affiliation and correspondence tel and e-mail:</b> 8 points font size</p>
                        <p><b>Tables and figures:</b> 9 points font size all through. Data in Tables MUST be provided in the cells inside Table. The use of TABS, spacing between lines using line should be avoided.
                            Authors should produce figures that will not exceed the size of half column of a page.</p>
                        <p><b>Body of manuscript:</b> Use 12 points (bold) for major headers and 10 points (bold) for all sub-headings and other texts</p>
                        <p><b>Methods:</b> Use 12 points for header and 10 points for all sub-headings and other texts</p>
                        <p><b>Authors Contribution:</b> Use 12 points (bold) for header and 10 points for other texts</p>
                        <p><b>Acknowledgements:</b> Use 12 points (bold) for header and 10 points for other texts</p>
                        <p><b>References:</b> Use 12 points (bold) for header and 8 points for all sub-headings and text</p>
                        <blockquote className="pull-quote">
                            <b>Note:</b> Any Table or figure that can fit into half column of a page must not be stretched into entire width of page.
                            Table must be in usual grid in Table format. You must not use spaces to create demarcations between lines inside table.
                            As much as possible, figures labels should be such that they can be read when reduced to a width of about 2.5 inches.
                        </blockquote>
                    </article>

                    <article className="guildelines-content" id="manuscript-style">
                        <h3>Manuscript Style</h3>
                        <p>
                            The language of the journal is English. Each manuscript should be typed single-spaced on A4 (8.5" × 11") paper size with 1-inch margins.
                            It should be arranged in the following order: Title, Abstract, Keywords, Introduction, Experimental, Results, Discussion, Conclusion(s),
                            Acknowledgements, Conflict of Interest, Contribution of Authors, and References.
                        </p>
                        <h4>Manuscript Structure:</h4>
                        <p><b>The first page of manuscript:</b> This should include the title of the article, authors’ names (with full first name, initial and then the
                            last name of each author) and their affiliations as well as Abstract and keywords. The corresponding author must give the full corresponding address
                            (including telephone and e-mail address) at the bottom of the page.
                        </p>
                        <p><b>Abstract:</b> This should not be more than 250 words and should be arranged in the following order:</p>
                        <ul>
                            <li><b>Introduction:</b> A brief background of study</li>
                            <li><b>Purpose:</b> A brief background of study</li>
                            <li><b>Methods:</b> The method adopted in the investigation. This should be very clear and precise.</li>
                            <li><b>Results:</b> The findings of the investigation.</li>
                            <li><b>Conclusion:</b> Final conclusive statements on the work.</li>
                        </ul>
                        <p><b>Keywords:</b> Include between 3 and 10 keywords for indexing purposes. These most not include any words already in the Title of the manuscript.</p>
                        <p><b>Acknowledgements:</b> Authors should acknowledge all those who made contribution to the work who cannot necessarily be included in the list of authors.
                            In this section, the funding body should also be acknowledged as appropriate.</p>
                        <p><b>Conflict of Interest:</b> Authors must declare any conflict of interest. If there are none, the authors should indicate “No conflict of interest.”</p>
                        <p><b>Contribution of Authors:</b> The authors must declare that they did the work by beginning this section with the following statement, “I(We) declare that
                            this work was done by the author(s) named in this article and all liabilities pertaining to claims relating to the content of this article will be borne by the authors”.
                            In addition, a declaration of the role of each author mentioned in the manuscript should be provided. The author who conceived and designed the study as well as the person(s)
                            who collected and analysed the data must be specified. Note: It is assumed by the Publishers of this journal that authors submitted the manuscript on the ground that he/she/they
                            did the work and did not fraudulently obtain the data being presented.
                        </p>
                        <p><b>References:</b> References should be typed single-spaced on separate page(s) and numbered consecutively in the order in which they are cited in the text.  Arabic numerals
                            (ENCLOSED IN SQUARED BRACKETS, e.g., [1], [1,3,5] or [1-4]) should be used in citing references in the text. The squared brackets MUST NOT be used anywhere else in the text to allow
                            easy xml file coding. Index Medicus Style of abbreviations should be used for journals cited. For correct abbreviations visit http://www.ncbi. nlm.nih.gov/PubMed/jbrowser.html.
                        </p>
                        <p>
                            Unpublished work should not be included in the list of references. References should be listed using the following order:
                        </p>
                        <ul>
                            <li><b>Journal article:</b> If there are more than 10 authors, only the first 10 should be listed and the others should be represented with "et al."
                                <ol type="I">
                                    <li><b>Volume without Issue:</b> Murri R, Fantoni M, Borgo CD, Visona R, Barracco A, Zambelli A, Testa L, Orchi N, Tozzi V, Bosco O, Wu AW.
                                        Determinants of health-related quality of life in HIV-infected patients. AIDS Care 2003;15:581–590.
                                    </li>
                                    <li><b>Volume with parts:</b>Hanley C. Metaphysics and innateness: a psychoanalytic perspective. Int J Psychoanal 1988;69(Pt 3):89-99.</li>
                                    <li><b>No Issue or Volume:</b> Danoek K. Skiing in and through the history of medicine. Nord Medicinhist Arsb 1982:86-100</li>
                                    <li><b>Issue but No Volume:</b> Baumeister AA. Origins and control of stereotyped movements. Monogr Am Assoc Ment Defic 1978;(3):353-384.</li>
                                    <li><b>Issue with parts:</b> Edwards L, Meyskens F, Levine N. Effect of oral isotretinoin on dysplastic nevi. J Am Acad Dermatol 1989 Feb;20(2 Pt 1):257-260. </li>
                                    <li><b>Monography:</b> Matthews DE, Farewell VT. Using and Understanding Medical Statistics, ed 3, revised. Basel, Karger, 1996.</li>
                                </ol>
                            </li>
                            <li><b>Book:</b>
                                <ol type="I">
                                    <li><b>Entire book:</b> Ohlsen, Merle M.; Horne, Arthur M.; Lowe, Charles F. Group counseling. New York: Holt, Rinehart, and Winston; 1988. 416 p.</li>
                                    <li><b>Editors:</b>Diener, Hans-Christoph; Wilkinson, Marcia, editors. Drug-induced headache. New York: Springer-Verlag; 1988. 173 p.</li>
                                    <li><b>Contribution to book:</b> Anderson, Robert J.; Schrier, Robert W. Acute renal failure. In: Braunswald, Eugene; Isselbacher, Kurt J.; Petersdorf, Robert G., et al., editors. Harrison's principles of internal medicine. 11th ed. New York: McGraw-Hill; 1987. p. 1149-1155.</li>
                                </ol>
                            </li>
                            <li><b>Web pages:</b><br />
                                <p>Hypertension, Dialysis & Clinical Nephrology [homepage on the Internet]. Hinsdale (IL): Medtext, Inc.; c1995-2001 [cited 2001 Mar 8]. Available from: http://www.medtext. com/hdcn.htm</p>
                                <p>Pennington J. HIV/AIDS in Nigeria, 2007 [cited 2008 Mar 8]. Available from: http://www.avert.org/aids-nigeria.htm.</p>
                                <p>Medlineplus [Internet]. Bethesda (MD): National Library of Medicine (US); [updated 2000 Apr 7; cited 2000 Apr 18]. Available from: http://medlineplus.gov.</p>
                            </li>
                            <li><b>Dissertation:</b> Bertram, Kenneth. The role of natural killer activity in resistance to herpesvirus-induced disease [dissertation]. [Rochester]: University of Minnesota; 1981 Dec. 138 p</li>
                        </ul>
                    </article>

                    <article className="guildelines-content" id="publication-charges">
                        <h3>Publication Charges</h3>
                        <p>
                            There is no payment to submit manuscript for review but authors will be required to pay US$150.00 (from developing countries) or US$200.00 (from developed countries) and N40,000.00 (from Nigeria) for each manuscript accepted before publication. Authors who fail to pay the required amount
                            will forfeit their accepted manuscript to the Publishers.
                        </p>
                    </article>

                    <article className="guildelines-content" id="copyright&ethical-matters">
                        <div className="guildelines-content-layout">
                            <div className="copyright">
                                <h3>Copyright</h3>
                                <p>
                                    Submission is a representation that the manuscript has not been published previously and is not under consideration for publication elsewhere. Authors would be required to sign a form (to be supplied by the Editor) transferring copyright to Nigerian Association of Pharmacist in Academia (NAPA),
                                    University of Benin Branch, before the manuscript can be published.
                                </p>
                            </div>
                            <div className="ethical-matters">
                                <h3>Ethical Matters</h3>
                                <p>
                                    Authors using experimental animals and human subjects in their investigation must seek approval from the appropriate Ethical Committee in accordance with "Principles of Laboratory Animal Care" (NIH publication no. 85-23, revised 1985) and/or the declaration of Helsinki promulgated in 1964 as amended in 1996.
                                    The method section must include a statement to prove that the investigation was approved and that informed consent was obtained.
                                </p>
                            </div>
                        </div>
                        <div className="guildelines-content">
                            <h3>Galley Proofs</h3>
                            <p>Unless indicated otherwise, galley proofs are sent to the address given for correspondence. It is the responsibility of the corresponding author to ensure that the galley proofs are returned without delay.</p>
                            <h3>Reprints</h3>
                            <p>Order forms and a price list are sent with the galley proof.</p>
                        </div>
                    </article>

                    <article className="guildelines-content" id="submission-checklist">
                        <h2 class="checklist-title">Manuscript Submission Checklist</h2>
                        <div class="checklist-group">
                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Is my manuscript typed single-spaced, including the 'Abstract' and 'Reference' list?</span>
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Is my manuscript within the limit of words specified?</span>
                            </label>

                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Are Results and Discussion separated into two sections of 'Results' and 'Discussion'?</span>
                            </label>

                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Is there a Conclusion section?</span>
                            </label>

                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Is there a Conflict of Interest section?</span>
                            </label>

                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Is there a Contribution of Authors section?</span>
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Is the reference numbering style used 'squared brackets' with the reference inserted before and not after punctuations?</span>
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Did the ‘Reference’ list adhere strictly to this journal format, including the correct punctuations and italicization of the of the
                                    journal titles?Did the ‘Reference’ list adhere strictly to this journal format, including the correct punctuations and italicization of the of the journal titles?</span>
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Is the total number of Figures and Tables within the limit of five allowed?</span>
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Has colour (other than black) been excluded from the manuscript including Figures?</span>
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Is there a legend/caption at the bottom of each Figure and at the top of each Table? </span>
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Are the Figures/images sharp and clear with legible fonts?</span>
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Is the symbol key removed from within the Figure and integrated neatly within the legend?</span>
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                <span class="checklist-text">Have borders been removed from around the Figures?</span>
                            </label>
                        </div>
                    </article>
                </main>

                <aside className="sidebar-rail" style={{ position: 'sticky', top: '210px', zIndex: 10, alignSelf: 'start' }}>
                    <div className="widget">
                        <h4 className="widget-title">QUICK NAVIGATION</h4>
                        <ul className="widget-list">
                            <li><a href="#journal-overview">Journal Overview</a></li>
                            <li><a href="#editorial-policy">Editorial Policy</a></li>
                            <li><a href="#manuscript-submission">Manuscript Submission</a></li>
                            <li><a href="#manuscript-format">Manuscript Format</a></li>
                            <li><a href="#manuscript-style">Manuscript Style</a></li>
                            <li><a href="#publication-charges">Publication Charges</a></li>
                            <li><a href="#copyright&ethical-matters">Copyright & Ethical Matters</a></li>
                            <li><a href="#submission-checklist">Submission Checklist</a></li>
                        </ul>
                    </div>
                </aside>
            </section>


            <Footer />
        </>
    )
}

export default Author_Guidelines



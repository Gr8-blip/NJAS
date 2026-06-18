import React from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router'

const Publication_Ethics = () => {
    return (
        <>
            <section className="hero-section">
                <h2 className="hero-title">Publication Ethics and Publication<br /> Malpractice Statement </h2>
                <p className="hero-desc">Our ethical standards align with COPE's Best Practice Guidelines for Journal Editors, ensuring integrity and transparency in all publication processes.</p>
            </section>

            <section className="layout-grid editorial-layout-grid">
                <main className="primary-content">
                    <article className="editorial-article" id='publication-decisions'>
                        <h3>Publication decisions</h3>
                        <p>
                            The editor of this journal is responsible for deciding which of the articles submitted to the journal is published. He or she is often guided by the policies of the journal's
                            editorial board and constrained by such legal requirements as may be in force regarding libel, copyright infringement and plagiarism. As he or she may consider appropriate, the
                            editor may confer with other editors, reviewers or seek legal advice in making this decision.
                        </p>
                    </article>

                    <article className="editorial-article" id='fair-play'>
                        <h3>Fair play</h3>
                        <p>
                            At any time a manuscript is submitted for review and possible publication in this journal, the editor will evaluate the manuscript for their intellectual content. This is usually 
                            without regard to race, gender, sexual orientation, religious belief, ethnic origin, citizenship, or political philosophy of the author or authors.
                        </p>
                    </article>

                    <article className="editorial-article" id='confidentiality'>
                        <h3>Confidentiality</h3>
                        <p>
                            As appropriate, the editor and any editorial staff do not disclose any information about a submitted manuscript to anyone other than the corresponding author, reviewers, potential 
                            reviewers, other editorial advisers, and the publisher.
                        </p>
                    </article>

                    <article className="editorial-article" id='disclosure&conflicts-interest'>
                        <h3>Disclosure and conflicts of interest </h3>
                        <p>
                           As a policy, unpublished materials disclosed in a submitted manuscript is never used in any editor's own research without the express written consent of the author or authors.
                        </p>
                    </article>

                    <article className="editorial-article" id='duties-reviewers'>
                        <h3>Duties of Reviewers </h3>
                        <ul>
                            <li>
                                <b>Contribution to Editorial Decisions:</b> Peer review assists the editor in making editorial decisions and through the editorial communications with the author may also 
                                assist the author in improving the paper.
                            </li>
                            <li>
                                <b>Promptness:</b> Any selected referee who feels unqualified to review the research reported in a manuscript or knows that its prompt review will be impossible is required 
                                to notify the editor and excuse himself from the review process.
                            </li>
                            <li>
                                <b>Confidentiality:</b> Any manuscripts received for review is treated as confidential documents. They are never shown to or discussed with others except as authorized by the editor.
                            </li>
                            <li>
                                <b>Standards of Objectivity:</b> Reviews are conducted objectively. Personal criticism of the author is inappropriate. All referees express their views clearly with supporting arguments.
                            </li>
                            <li>
                                <b>Acknowledgement of Sources:</b> Reviewers may identify relevant published work that has not been cited or correctly cited by the authors. Any statement that an observation, 
                                derivation, or argument had been previously reported should be accompanied by the relevant citation. A reviewer should also call to the editor's attention any substantial similarity 
                                or overlap between the manuscript under consideration and any other published paper of which they have personal knowledge.
                            </li>
                            <li>
                                <b>Disclosure and Conflict of Interest:</b> Privileged information or ideas obtained through peer review must be kept confidential and not used for personal advantage. 
                                Reviewers should not consider manuscripts in which they have conflicts of interest resulting from competitive, collaborative, or other relationships or connections with any of the authors, 
                                companies, or institutions connected to the papers.
                            </li>
                        </ul>
                    </article>

                    <article className="editorial-article" id='duties-authors'>
                        <h3>Duties of Authors</h3>
                        <ul>
                            <li>
                                <b>Reporting standards:</b> Authors of reports of original research are required to present an accurate account of the work performed as well as an objective discussion of its significance. 
                                Accurately representation of the underlying data in the paper is required. Each paper submitted should contain sufficient details and references to permit others to replicate the work as 
                                appropriate. Fraudulent or inaccurate statements deliberately provided constitute unethical behavior and are unacceptable.
                            </li>
                            <li>
                                <b>Data Access and Retention:</b> As appropriate, authors are asked to provide the raw data in connection with any paper for editorial review, and should be prepared to provide public access 
                                to such data (consistent with the ALPSP-STM Statement on Data and Databases), if practicable, and should in any event be prepared to retain such data for a reasonable time after publication.
                            </li>
                            <li>
                                <b>Originality and Plagiarism:</b> As part of the manuscript peer-review process, manuscripts are checked  online for plagiarism using <Link to='http://www.turnitin.com'>Turnitin</Link> website. 
                                Excluding authors information and biblography, maximum plagiarism allowed is 15% at a string of seven (7) words. This plagiarism check is done even when minor corrections are made to manuscripts 
                                accepted for publication. Therefore authors should ensure that they have written entirely original works before submission. If authors have used the work and/or words of others, this should be 
                                appropriately cited or quoted. 
                            </li>
                            <li>
                                <b>Multiple, Redundant or Concurrent Publication:</b> In general, an author should not publish manuscripts describing essentially the same research in more than one journal or primary publication. 
                                Submitting the same manuscript to more than one journal concurrently constitutes unethical publishing behavior and this is unacceptable.
                            </li>
                            <li>
                                <b>Acknowledgement of Sources:</b> The work of others provided in a paper must be properly acknowledged. Authors should cite publications that have been influential in determining the nature of the work that is reported.
                            </li>
                            <li>
                                <b>Authorship of the Paper:</b> Authorship should be limited to those who have made a significant contribution to the conception, design, execution, or interpretation of the reported study. In this sense, 
                                all those who have made significant contributions should be listed as co-authors. Where there are others who have participated in certain substantive aspects of the research project, they should be acknowledged or listed as 
                                contributors but not as co-authors. The corresponding author should ensure that all appropriate co-authors and no inappropriate co-authors are included on the paper. Furthermore, the corresponding author should ensure that 
                                all co-authors have seen and approved the final version of the paper and have agreed to its submission for publication.
                            </li>
                            <li>
                                <b>Disclosure and Conflicts of Interest:</b> All authors should disclose in their manuscript any financial or other substantive conflict of interest that might be construed to influence the results or 
                                interpretation of their manuscript. All sources of financial support for the project should equally be disclosed.
                            </li>
                            <li>
                                <b>Fundamental errors in published works:</b> When an author discovers a significant error or inaccuracy in his/her own published work, it is the author's obligation to promptly notify the journal editor 
                                or publisher and cooperate with the editor to retract or correct the paper as appropriate.
                            </li>
                        </ul>
                    </article>
                </main>

                <aside className="sidebar-rail" style={{ position: 'sticky', top: '20px', zIndex: 10, alignSelf: 'start' }}>
                    <div className="widget">
                        <h4 className="widget-title">QUICK NAVIGATION</h4>
                        <ul className="widget-list">
                            <li><a href="#publication-decisions">Publication decisions</a></li>
                            <li><a href="#fair-play">Fair Play</a></li>
                            <li><a href="#confidentiality">Confidentiality</a></li>
                            <li><a href="#disclosure&conflicts-interest">Disclosure and conflicts of interest</a></li>
                            <li><a href="#duties-reviewers">Duties of Reviewers</a></li>
                            <li><a href="#duties-authors">Duties of Authors</a></li>
                        </ul>
                    </div>
                </aside>
            </section>

            <Footer />
        </>
    )
}

export default Publication_Ethics
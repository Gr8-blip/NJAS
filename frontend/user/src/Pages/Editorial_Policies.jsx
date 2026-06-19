import React from 'react'
import '../Components/Editorial_Policies.css'
import { Link } from 'react-router'
import Footer from '../Components/Footer'

const Editorial_Policies = () => {
    return (
        <>
            <section className="hero-section editorial-hero-section">
                <h2 className="hero-title">Editorial Policies</h2>
                <p className="hero-desc">Our editorial policies are designed to ensure the integrity, quality, and transparency of the research we publish.
                    We adhere to the highest standards of ethical conduct and scientific rigor in all aspects of our editorial process.</p>
            </section>

            <section className="layout-grid editorial-layout-grid">
                <main className="primary-content">
                    <article className="editorial-article" id="overview">
                        <h3> Overview</h3>
                        <p>
                            The Journal of Science and Practice of Pharmacypublishes Articles, Reviews, Case Reports, Commentaries,
                            Technical Notes and Short Communications which are peer-reviewed. Correspondence and all forms of published
                            correction may also be peer-reviewed at the discretion of the editors. At the discretion of the editors, other
                            forms of articles that are not peer-reviewed may also be published.
                        </p>

                        <p>
                            We general adhere to the guidelines provided by the Committee on Publication Ethics (COPE), as well as the World Association of
                            Medical Editors (WAME) Policy Statement on Geopolitical Intrusion on Editorial Decisions and the International Committee of Medical
                            Journal Editors (ICMJE) Recommendations for the Conduct, Reporting, Editing and Publication of Scholarly Work in Medical Journals.
                        </p>

                        <p>
                            Once a manuscript is submitted to us, we assume that the author(s) has/have read and agreed to its content, did the work and did not
                            fraudulently obtain the data being presented. In addition, all liabilities pertaining to claims relating to the contents of the article
                            will be borne by the author(s) if published in our journal.
                        </p>
                    </article>

                    <article className="editorial-article" id="peer-review-process">
                        <h3>Peer-review Process</h3>
                        <p>
                            Once a manuscript is received, the editorial office evaluates the manuscript to ensure compliance with the instructions to authors.
                            Each manuscript that meets the conditions contained in the guidelines for authors is sent to two independent expert reviewers who are
                            identified by the Editor and unknown to the author(s). One or more of these may be a member of the Editorial Board. Reviewers may
                            recommend rejection, modification or acceptance of a manuscript. A manuscript is accepted for publication if recommended as such by
                            at least two expert reviewers and manuscripts recommended for modification are returned to their author(s) for revision. When a manuscript
                            earlier recommended for revision is revised and submitted by the author(s), it is still sent to at least one of the reviewers for
                            recommendation for acceptance, further corrections, or rejection. In any case, all comments by the reviewers (unknown to the authors)
                            are forwarded to the author(s), as appropriate.
                        </p>

                        <p>
                            Before a manuscript is recommended for publication, the Editorial Office subjects it to plagiarism check using <Link to="https://www.turnitin.com">Turnitin software</Link>.
                            Only those with less than 20% level of plagiarism and no obvious duplication of any part of earlier published work is accepted for publication.
                        </p>

                        <p>
                            We are committed to rapid editorial decisions and publication, and we believe that an efficient editorial process is a valuable service both to
                            our authors and to the scientific community as a whole. We therefore request reviewers to respond promptly within a limited number of days.
                            If reviewers anticipate a longer delay than expected, we ask them to let us know so that we can keep the authors informed and, where necessary,
                            find alternatives.
                        </p>
                    </article>

                    <article className="editorial-article" id="ethics&consent">
                        <h3>Ethics & consent</h3>
                        <ol type='I'>
                            <li><b>Ethics approval</b> <br />
                                <p>
                                    All research work involving human subjects, human materials, or human data, must have been performed in specified in the Declaration of
                                    Helsinki and must have been approved by an appropriate ethics committee. Thus, a statement indicating this, including the name of the
                                    ethics committee and the reference number (where appropriate) must appear in each manuscript reporting such research. Where a study has
                                    been granted an exemption from ethics approval, the exemption should also be detailed in the manuscript (including the name of the ethics
                                    committee that granted the exemption). The corresponding author should be ready to provide any further information and documentation to
                                    support this to the Editor on request. The Editor may contact the ethics committee for further information if necessary. A manuscript may
                                    be rejected if the Editor considers that the research has not been carried out within an appropriate ethical framework.
                                </p>
                            </li>
                            <li><b>Informed Consent</b> <br />
                                <p>
                                    For all research involving human subjects, informed consent to participate in the study should be obtained from all participants (or their parent
                                    or legal guardian in the case of children under 16) and a statement to this effect should appear in the manuscript.
                                </p>
                            </li>
                            <li><b>Non-experimental Studies</b> <br />
                                <p>
                                    Field studies and other non-experimental research involving humans must also comply with institutional, national, or international guidelines,
                                    and where available should have been approved by an appropriate ethics committee.
                                </p>
                            </li>
                            <li><b>Animal Studies</b> <br />
                                <p>
                                    Research work involving vertebrates or any regulated invertebrates must comply with institutional, national, or international guidelines, and where
                                    available should have been approved by an appropriate ethics committee. The fundamental principles to adhere to are outlined in Basel Declaration
                                    while the International Council for Laboratory Animal Science (ICLAS) has also published ethical guidelines.
                                </p>
                                <p>
                                    A statement detailing compliance with relevant guidelines and/or ethical approval (including the name of the ethics committee and the reference number,
                                    as appropriate) must be included in the manuscript. If a study has been granted an exemption from requiring ethics approval, this should also be detailed
                                    in the manuscript (including the name of the ethics committee that granted the exemption and the reasons for the exemption).
                                </p>
                                <p>
                                    For experimental studies involving client-owned animals, authors must also document informed consent from the client or owner and adherence to a high standard
                                    (best practice) of veterinary care. Field studies and other non-experimental research on animals must comply with institutional, national, or international guidelines,
                                    and where available should have been approved by an appropriate ethics committee. A statement detailing compliance with relevant guidelines and/or appropriate permissions
                                    or licences must be included in the manuscript.
                                </p>
                            </li>
                            <li><b>Research involving plants</b> <br />
                                <p>
                                    Experimental research involving plants must comply with institutional, national, or international guidelines. Field studies should be conducted in accordance with local legislation,
                                    and the manuscript should include a statement specifying the appropriate permissions and/or licences. For each plant, the voucher specimen must be deposited in a public herbarium or
                                    other public collection providing access to deposited material, and information on the voucher specimen and who identified it must be included in the manuscript.
                                </p>
                            </li>
                            <li><b>Consent for publication</b> <br />
                                <p>
                                    For all manuscripts that include details, images, or videos relating to individual participants, written informed consent for the publication of these must be obtained from the participants
                                    (or their parent or legal guardian in the case of children under 16) and a statement to this effect should appear in the manuscript. If the participant has died, then consent for publication
                                    must be sought from the next of kin of the participant. The consent form must be made available to the Editor on request, and will be treated confidentially. In cases where images are entirely
                                    unidentifiable and there are no details on individuals reported within the manuscript, consent for publication of images may not be required.
                                </p>
                            </li>
                        </ol>
                    </article>

                    <article className="editorial-article" id="clinical-trial-registration">
                        <h3>Clinical Trial Registration</h3>
                        <p>
                            We support initiatives to improve reporting of clinical trials, including prospective registration of clinical trials in suitable publicly available databases. In line with ICMJE guidelines,
                            we require registration of all clinical trials that are reported in manuscripts submitted to this journal.

                        </p>
                        <p>The ICMJE uses the World Health Organization (WHO) definition of a clinical trial, which is "any research study that prospectively assigns human participants or groups of humans to one or more
                            health-related interventions to evaluate the effects on health outcomes". This definition includes phase I to IV trials. The ICMJE defines health-related interventions as "any intervention used
                            to modify a biomedical or health-related outcome" and health-related outcomes as "any biomedical or health-related measures obtained in patients or participants".</p>
                        <p>
                            Recommended publicly available registries are available on the ICMJE website and the primary registries that participate in the WHO International Clinical Trials Registry Platform. The trial
                            registration number (TRN) and date of registration should be included as the last line of the manuscript abstract.
                        </p>
                        <p>
                            For clinical trials that have not been registered prospectively, we encourage retrospective registration to ensure the complete publication of all results. Further information on retrospective
                            registration is available from the AllTrials campaign, the Public Accounts Committee and the Department of Health. For retrospectively registration, the TRN, date of registration and the words
                            'retrospectively registered’ should be included as the last line of the manuscript abstract.
                        </p>

                    </article>

                    <article className='editorial-article' id='systematic-reviews'>
                        <h3>Registration of Systematic Reviews</h3>
                        <p>We encourage the prospective registration of systematic reviews and advise authors to register their systematic reviews in a suitable registry (such as PROSPERO). For authors who have registered
                            their systematic review, the registration number should be included as the last line of the manuscript abstract.
                        </p>
                    </article>

                    <article className='editorial-article' id='data-availability'>
                        <h3>Availability of Data and Materials</h3>
                        <p>
                            Submission of a manuscript to a this journal indicates that materials described in the manuscript, including all relevant raw data, will be freely available to any scientist wishing to use them
                            for non-commercial purposes, without breaching participant confidentiality.
                        </p>
                        <p>
                            We strongly encourages that all datasets on which the conclusions of any paper rely should be available to readers. Where the datasets are not directly on the paper, the location of such datasets
                            in public domains should be specified
                        </p>
                    </article>

                    <article className='editorial-article' id='biological-materials'>
                        <h3>Biological Materials</h3>
                        <p>
                            We encourage the deposition of biological materials, such as plasmids, mutant strains, and cell lines, in established public repositories. Authors are required to check the list of known
                            misidentified cell lines maintained by the International Cell Line Authentication Committee (ICLAC).
                        </p>
                    </article>

                    <article className='editorial-article' id='software&code'>
                        <h3>Software and Code</h3>
                        <p>
                            Any previously unreported software application or custom code described in the manuscript should be made available for testing by reviewers in a way that preserves their anonymity using a
                            link to the most recent version of the software or code and a link to the archived version referenced in the manuscript. The software or code should be archived in an appropriate repository
                            with a DOI or other unique identifier. For software in GitHub, we recommend using Zenodo.
                        </p>
                        <p>
                            Where the software or code implementation is not made freely available, the manuscript should not discuss the tool in any detail but focus clearly on the development of the underlying method.
                        </p>
                    </article>

                    <article className='editorial-article' id='reporting-standard'>
                        <h3>Standards of Reporting</h3>
                        <p>
                            We also strongly recommend that authors should adhere to the minimum reporting guidelines for health research hosted by the EQUATOR Network when preparing their manuscript, and the BioSharing
                            Portal for reporting checklists for biological and biomedical research, where applicable.
                        </p>
                        <p>
                            We advocate complete and transparent reporting of biomedical and biological research work. You may refer to the Minimum standards of reporting checklist when reporting your research.
                            Authors should adhere to these guidelines when drafting their manuscript, and peer reviewers will be asked to refer to these checklists when evaluating such studies.
                        </p>
                        <p>
                            Authors of systematic reviews should also provide a link to an additional file from the ‘methods’ section, which reproduces all details of the search strategy. An example of how a search
                            strategy should be presented can be seen in the Cochrane Reviewers' Handbook.
                        </p>
                    </article>

                    <article className='editorial-article' id='statistical-methods'>
                        <h3>Statistical Methods</h3>
                        <p>
                            Authors should include complete information on the statistical methods and measures used in their research, including justification of the appropriateness of the statistical test used.
                            For p values, the number of tails reported (2-tailed or 1-tailed) should be specified.
                        </p>
                    </article>

                    <article className='editorial-article' id='resource-identification'>
                        <h3>Resource Identification</h3>
                        <p>
                            For effective tracking of the key resources employed to produce the scientific findings reported in the biomedical literature, authors are advised to include a complete description of all
                            resources to allow them to be uniquely identified. To support of the Resource Identification Initiative (RII), we advise authors to use unique Resource Identifiers (RRIDs) within their manuscript to identify their model organisms, antibodies, or tools.
                        </p>
                    </article>

                    <article className='editorial-article' id='cell-line-authentication'>
                        <h3>Cell Line Authentication</h3>
                        <p>
                            If human cell lines are used, authors are strongly advised to include the following information in their manuscript:
                        </p>
                        <ol type='I'>
                            <li>Source of the cell line, including when and from where it was obtained,</li>
                            <li>Cell line authentication status (recent or not) and method used, </li>
                            <li>Recent testing of the cell line for mycoplasma contamination.</li>
                        </ol>
                    </article>

                    <article className='editorial-article' id='gene-nomenclature'>
                        <h3>Gene Nomenclature</h3>
                        <p>
                            Standardized gene nomenclature should be used throughout. Human gene symbols and names can be found in the HUGO Gene Nomenclature Committee (HGNC) database; requests for new gene symbols should be submitted to http://www.genenames.org/cgi-bin/request and
                            any enquiries about gene nomenclature can be directed to hgnc@genenames.org. Any alternative gene aliases that are commonly used may be reported, but should not be used alone in place of the HGNC symbol. Nomenclature committees for other species are listed
                            at <Link to="http://www.genenames.org/about/faq#otherspecies">http://www.genenames.org/about/faq#otherspecies</Link>
                        </p>
                    </article>

                    <article className='editorial-article' id='sequence-variants'>
                        <h3>Reporting of Sequence Variants</h3>
                        <p>
                            We endorse the recommendations of the Human Variome Project Consortium for describing sequence variants (Human Genome Variation Society) and phenotypes (Human Phenotype Ontology).
                        </p>
                        <p>
                            We recommend that authors should submit all variants described in a manuscript to the relevant public gene/disease specific database (LSDB): a list is available here. The database
                            URL and the unique identifier should be reported in the manuscript.
                        </p>
                    </article>

                    <article className='editorial-article' id='competitve-interests'>
                        <h3>Competing Interests</h3>
                        <p>
                            We require authors to declare all competing interests in relation to their research work. All submitted manuscripts must include a ‘competing interests’ section at the end of the
                            manuscript listing all competing interests, whether financial or non-financial. A competing interest exists when the authors’ interpretation of data or presentation of information
                            may be influenced by their personal or financial relationship with other people or organizations.
                        </p>
                        <p>
                            Where authors have no competing interests, the statement should read “The author(s) declare(s) that they have no competing interests”.
                        </p>
                    </article>

                    <article className='editorial-article' id='competitve-interests'>
                        <h3>Authorship</h3>
                        <p>
                            To give appropriate credit to each author, we require that the individual contributions of authors should be specified in the manuscript.
                            Details of this information are provided in the Guidelines for Contributors.
                        </p>
                        <p>
                            Please note that an 'author' is generally considered to be someone who has made substantive intellectual contributions to a published study. Acquisition of funding, collection of data,
                            or general supervision of the research group, alone, does not usually justify authorship.
                            According to the ICMJE guidelines, to qualify as an author one should have:
                        </p>
                        <ol type='I'>
                            <li>Made substantial contributions to conception and design, or acquisition of data, or analysis and interpretation of data;</li>
                            <li>Been involved in drafting the manuscript or revising it critically for important intellectual content;</li>
                            <li>Given final approval of the version to be published. Each author should have participated sufficiently in
                                the work to take public responsibility for appropriate portions of the content; and</li>
                            <li>Agreed to be accountable for all aspects of the work in ensuring that questions related to the accuracy or
                                integrity of any part of the work are appropriately investigated and resolved.</li>
                        </ol>
                        <p>
                            Authors should understand that removal or addition of any name of an author cannot be made after acceptance of a manuscript.
                        </p>
                    </article>

                    <article className='editorial-article' id='acknowledgements'>
                        <h3>Acknowledgements</h3>
                        <p>
                            All contributors who do not meet the criteria for authorship may be listed in an ‘Acknowledgements’ section. The source of funding should also be acknowledged. For research grants, the
                            name of the funding body and the grant number may be specified, as appropriate.
                        </p>
                        <p>
                            Any involvement of scientific (medical) writers or anyone else who assisted with the preparation of the manuscript content should be acknowledged as described in the European Medical
                            Writers Association (EMWA) guidelines.
                        </p>
                    </article>

                    <article className='editorial-article' id='publication-malpractice'>
                        <h3> Publication malpractice/Duplicate publication</h3>
                        <p>
                            Any manuscript submitted to this journal for review must be original and the manuscript, or substantial parts of it, must not be under consideration by any other journal. Generally,
                            the manuscript must not already have been formally published in any journal or in any other citable form.  If the abstract of the manuscript has been published previously, the same title earlier published must not be used. In any case where there is the potential for overlap or duplication, we require transparency of authors. Authors are expected to declare any potentially overlapping publications on submission and any overlapping publications should be cited. Articles “in press” and unpublished work should not be cited.
                        </p>
                        <p>
                            We do not accept plagiarised work and we take seriously all cases of publication misconduct. Any suspected cases of covert duplicate manuscript submission will be handled as outlined
                            in the COPE guidelines and we endorse the policies of ICMJE guidelines in relation to overlapping publications.
                        </p>
                    </article>

                    <article className='editorial-article' id='corrections&retractions'>
                        <h3>Corrections and Retractions</h3>
                        <p>
                            On rare occasions, it may be necessary for us to publish corrections to, or retractions of, articles published in this journal, in order to maintain the integrity of the academic record. Correction or retraction of any published article will be made by publishing an Erratum or a Retraction article and adding a prominent link to the Erratum/Retraction article. For PDF files of retracted articles, the word “Retracted” will be marked clearly on the article. It is only in the exceptional event where that material is considered to infringe certain rights or is defamatory, that we may have to remove it from our site and archive sites.
                        </p>
                    </article>

                    <article className='editorial-article' id='repository-policy'>
                        <h3>Repository Policy</h3>
                        <p>
                            On rare occasions, it may be necessary for us to publish corrections to, or retractions of, articles published in this journal, in order to maintain the integrity of the academic record. Correction or retraction of any published article will be made by publishing an Erratum or a Retraction article and adding a prominent link to the Erratum/Retraction article. For PDF files of retracted articles, the word “Retracted” will be marked clearly on the article. It is only in the exceptional event where that material is considered to infringe certain rights or is defamatory, that we may have to remove it from our site and archive sites.
                        </p>
                    </article>

                    <article className='editorial-article' id='appeals-and-complaints'>
                        <h3>Appeals and Complaints</h3>
                        <p>
                            All authors reserve the right to appeal or complain against editorial decisions on manuscripts submitted to us. We adhere to COPE guidelinesin respect of appeals to editorial decisions and complaints.
                        </p>
                    </article>






                </main>

                <aside className="sidebar-rail" style={{ position: 'sticky', top: '210px', zIndex: 10, alignSelf: 'start' }}>
                    <div className="widget">
                        <h4 className="widget-title">QUICK NAVIGATION</h4>
                        <ul className="widget-list">
                            <li><a href="#overview">Overview</a></li>
                            <li><a href="#peer-review-process">Peer-Review Process</a></li>
                            <li><a href="#ethics&consent">Ethics & Consent</a></li>
                            <li><a href="#clinical-trial-registration">Clinical Trial Registration</a></li>
                            <li><a href="#systematic-reviews">Systematic Reviews</a></li>
                            <li><a href="#data-availability">Data Availability</a></li>
                            <li><a href="#biological-materials">Biological Materials</a></li>
                            <li><a href="#software&code">Software & Code</a></li>
                            <li><a href="#reporting-standard">Standards of Reporting</a></li>
                            <li><a href="#statistical-methods">Statistical Methods</a></li>
                            <li><a href="#resource-identification">Resource Identification</a></li>
                            <li><a href="#cell-line-authentication">Cell Line Authentication</a></li>
                            <li><a href="#gene-nomenclature">Gene Nomenclature</a></li>
                            <li><a href="#sequence-variants">Sequence Variants</a></li>
                            <li><a href="#competitve-interests">Competing Interests</a></li>
                            <li><a href="#authorship">Authorship</a></li>
                            <li><a href="#acknowledgements">Acknowledgements</a></li>
                            <li><a href="#publication-malpractice">Publication Malpractice/Duplicate Publication</a></li>
                            <li><a href="#corrections&retractions">Corrections & Retractions</a></li>
                            <li><a href="#repository-policy">Repository Policy</a></li>
                            <li><a href="#appeals-and-complaints">Appeals and Complaints</a></li>
                        </ul>
                    </div>
                </aside>
            </section >


            <Footer />
        </>
    )
}
export default Editorial_Policies
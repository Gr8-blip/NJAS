import React from 'react'
import Footer from '../Components/Footer'

const Copyright = () => {
    return (
        <>
            <section className="hero-section editorial-hero-section">
                <h2 className="hero-title">Copyright Notice</h2>
                <p className="hero-desc">This is an Open Access journal where the copyright for all submitted manuscripts, accepted and published papers belongs to the authors.</p><br />
                <p className='hero-desc'>
                    We use a funding model which does not charge readers or their institutions for access and distributed under the terms of the Creative Commons Attribution-NonCommercial
                    4.0 International (CC BY-NC 4.0). This license requires that reusers give credit to the creator. It allows reusers to distribute, remix, adapt, and build upon the material
                    in any medium or format, for noncommercial purposes only.
                </p><br />
                <p className='hero-desc'>
                    Submission of a manuscript to this journal is a representation that the manuscript has not been published previously and is not under consideration for publication elsewhere.
                    All authors named in each manuscript would be required to sign a form (to be supplied by the Editor) so that they may retain their copyright in the article but to assign
                    to us (the Publishers) and its licensees in perpetuity, in all forms, formats and media (whether known or created in the future) to (i) publish, reproduce, distribute, display and store the contribution, (ii) translate the contribution into other languages, create adaptations, reprints, include within collections and create summaries, extracts and/or abstracts of the contribution, (iii) create any other derivative works(s) based on the contribution, (iv) to exploit all subsidiary rights in the contribution, (v) the inclusion of electronic links from the contribution to third party material where-ever it may be located, and (vi) license any thrid party to do any or all of the above.
                </p>
            </section>

            <Footer />
        </>
    )
}

export default Copyright
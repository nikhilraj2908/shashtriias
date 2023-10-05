import './ReadMore.css';
import React from 'react';
import Footer from '../footer/Footer'
import Header from '../header/Header'

const ReadMore = (props) => {
    return (
        <>
        <body className='container-fluid'>
            <Header/>
            <section>
                <div id="Home">
                    <h5 className="Home-tag">"SANSKRIT OPTIONAL UPSC"</h5>
                </div>
                <div className="readmore-container pb-4">
                    <h6>Director's message &nbsp;<span className="bi bi-arrow-right"></span></h6>
                    <p className="mt-4 pt-4">Greatings to all of you,<b>Hello...</b></p>
                    <blockquote className="m-4 p-2 mb-3">I, G. N. Shastri, director and founder of G N Shastri IAS Institute, have devoted more than 10 years in study of Sanskrit language and literature. I have been teaching Sanskrit literature to UPSC aspirants for more than 2 years now.

                        More than 50 students have benefited under my guidance and gotten a boost in their scores. This year also, our institute is expecting good results as many of our students have qualified for mains too.

                        We provide personal mentorship  to students to achieve excellence especially in Sanskrit literature in UPSC CSE.

                        Demo notes and lectures are available in the downloads section. Thanks for visiting the site. <b>" जयतु संस्कृतं जयतु विश्वम् "</b></blockquote>
                </div>
            </section>
            <Footer />
        </body>
    </>
    )
}

export default ReadMore
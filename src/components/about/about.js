import './about.css';
import React, {useState} from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const About = (props) => { 
  const [notes, setNotes] = useState([])
  const [searchActive, setSearchActive] = useState(false)
  const [filteredNotes, setFilteredNotes] = useState([])
  const [showPapers, setShowPapers] = useState(true)
  const [showHandWritten, setShowHandWritten] = useState(false)
  const [showAnswerWritting, setShowAnswerWritting] = useState(false)

    const filterBySearch = (event) => {
        setSearchActive(true)
        setShowPapers(false)
        setShowAnswerWritting(false)
        setShowHandWritten(false)
        console.log(event.target.value)
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...notes];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.subject.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredNotes(updatedList);
      };
  
    return (
        <>
            <body>
                <Header/>
                <section>
                    <div id="Home">
                        <h5 className="Home-tag">"SANSKRIT OPTIONAL UPSC"</h5>
                    </div>
                    <div className="container pb-4">
                        <h6>ABOUT_G.N._SHASTRI_IAS_INSTITUTE &nbsp;<span className="bi bi-arrow-right"></span></h6>
                        <p className="mt-4 pt-4">Greatings to all of you,<b>Hello...</b></p>
                        <blockquote className="m-4 p-2 mb-3">Our Vision is to improve the result in Sanskrit optional UPSC CSE by providing quality content and better notes by removing the problem of content in Sanskrit optional and also to provide platform to many Sanskrit experienced toppers and students for Sanskrit optional UPSC CSE.<br></br>
                        <blockquote>Mr. G. N. Shastri sir, director and founder of G N Shastri IAS Institute, have devoted more than 10 years in study of Sanskrit language and literature. I have been teaching Sanskrit literature to UPSC aspirants for more than 2 years now. More than 50 students have benefited under my guidance and gotten a boost in their scores. This year also, our institute is expecting good results as many of our students have qualified for mains too. We provide personal mentorship to students to achieve excellence especially in Sanskrit literature in UPSC CSE. Demo notes and lectures are available in the downloads section. Thanks for visiting the site. </blockquote> <p style={{textAlign: 'center'}}><b>" जयतु संस्कृतं जयतु विश्वम् "</b></p></blockquote>
                    </div>
                </section>
                <div id="contact">
                    <Footer />
                </div>
            </body>
        </>
    )      
}

export default About
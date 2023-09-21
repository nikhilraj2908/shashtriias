import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import axios from "axios";
import Cards from './components/cards';

function App() {
  const [notes, setNotes] = useState([])
  const [searchActive, setSearchActive] = useState(false)
  const [filteredNotes, setFilteredNotes] = useState([])
  const [showPapers, setShowPapers] = useState(true)
  const [showHandWritten, setShowHandWritten] = useState(false)
  const [showAnswerWritting, setShowAnswerWritting] = useState(false)

  let api = 'http://127.0.0.1:8000/api'
  const btnStyle = {
    color: 'white',
    backgroundColor: '#2a78f5',
    border: 'none',
    borderRadius: '5px',
    padding: '6px 10px 6px 10px'
  }
  const coursesBtn = {
    all: 'unset',
    cursor: 'pointer'
  }
  useEffect(()=>{
    getFiles()
  },[])

  const handlePaperClick = () => {
    setShowPapers(true)
    setShowHandWritten(false)
    setShowAnswerWritting(false)
    setSearchActive(false)
  }

  const handleHandWrittenClick = () => {
    setShowHandWritten(true)
    setShowPapers(false)
    setShowAnswerWritting(false)
    setSearchActive(false)
  }

  const handleAnswerWrittingClick = () => {
    setShowAnswerWritting(true)
    setShowPapers(false)
    setShowHandWritten(false)
    setSearchActive(false)
  }

  const getFiles = () =>{
    axios.get(api + '/notes/').then(
        response =>{
            setNotes(response.data)
            setFilteredNotes(response.data)
        }
    ).catch(error =>{
        console.log(error)
    })

}

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

  console.log(notes)
  return (
    <body className="container-fluid">
      <header className="position-sticky top-0" style={{zIndex:'1'}} >
        <div className=" d-flex  justify-content-between text-white " style={{backgroundColor:'black'}}>
          <img alt = 'officialLogo' src='/images/officiallogojpg.png' className="img-top " />
          <span className=" mt-3 fw-bold " ><p className="hindi" >"G.N. SHASTRI IAS INSTITUTE"</p></span>
          <span>
            <nav className="socialtop  me-1">
              <a id="whatsapp" className="socialtop" target="blank" href="https://chat.whatsapp.com/JMvqkwryPrHKLEDu8tNmYy"><span className="bi bi-whatsapp me-2 " ></span></a>
              <a id="youtube" className="socialtop" target="blank" href="https://youtube.com/@g.n.shastrij5.8k"><span className="bi bi-youtube me-2"></span></a>
              <a id="telegram" className="socialtop" target="blank" href="https://t.me/gnshastrij"><span className="bi bi-telegram me-2"></span></a>
              <a id="instagram" className="socialtop" target="blank" href=" https://www.instagram.com/invites/contact/?i=w3roop9b11ls&utm_content=p1y1hd6"><span className="bi bi-instagram me-2" ></span></a>
            </nav>
          </span>
        </div>
        <div className="header-lower" >
          <div className="humburger" id="menu-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="header-menu">
            <a className="menu-bar" href="#Home">Home</a>
            <span className="menu-bar">
              <a href="#courses">Courses</a>
            </span>
            <span className="menu-bar">
              <a href="#blogs" >Blogs</a>
            </span>
            <span className="menu-bar">
              <a href="../Nikhil/shastrijiabout.html">About Us</a>
            </span>
            <span className="menu-bar">
              <a href="#about">Contact</a>
            </span>
            <span className="menu-bar">
              <a href="../Nikhil/shastrijiFAQs.html">FAQs</a>
            </span>
          </div>
          <div className="input-group">
            <input type="text" className="form-control" onChange={filterBySearch} placeholder="Search for notes" name="search"/>
            <button className="btn btn-primary" type="submit">
              <span className="bi bi-search"></span>
            </button>
          </div>
          <div>
            <span className="bi bi-cart" style={{marginRight:'30px', fontSize:'20px', paddingLeft:'5px'}}></span>
            <div style={{paddingBottom: '10px'}}>Cart</div>
          </div>
        </div>
      </header>
      <section style={{zIndex:'0'}}>
        <div id="Home">
          <h5 className="Home-tag">"SANSKRIT OPTIONAL UPSC"</h5>
        </div>
        <div className="section-up" id="section">
          <menu className="container">
            <div className="card">
              <div className="message">
                <h5>Message from director</h5>
                <img className="border border-2 " alt='Shashtri Sir' width="40%" height="40%" align="left" vspace="10" hspace="10" src='/images/upscsir.jpeg' />
                <p className="greatings">Greatings to all, Hello I am G. N. Shastri, director and founder of G N Shastri IAS Institute, have devoted more than 10 years in study of Sanskrit language and literature. I have been teaching Sanskrit literature to UPSC aspirants for more than 2 years now...</p>
                <div style={{textAlign: 'center'}}><a href="../readMore/readMore.js" className="readmore "><button className="btn btn-primary" >Read More &nbsp;<span className="bi bi-arrow-right "></span></button> </a></div>
              </div>
            </div>
          </menu>
          <main className="container2" id="bannermove">
            <div className="banner border border-1 mt-3 rounded-3">
              <Carousel autoPlay={true} showArrows={true} showThumbs={false} interval={3000} infiniteLoop={true} >
                <img alt ='banner-1' src="/images/bannerupsc2.png" />
                <img alt ='banner-2'src="/images/bannerupsc1.png"/>
                <img alt ='banner-3'src="/images/bannerupsc3.png" />
              </Carousel>
            </div>
          </main>
          <aside>
            <article>
              <h5>Important Notices</h5>
              <marquee scrollamount="2" direction="up" >
                <ol>
                  <li>`SANSKRIT OPTIONAL ONLINE COURSE START "1 SEPTEMBER 2023" `</li>
                  <li>SANSKRIT OPTIONAL TEST SERIES AVAILABLE.</li>
                  <li>SANSKRIT OPTIONAL HAND WRITERN NOTES AVAILABLE.</li>
                  <li>SANSKRIT OPTIONAL OUR BEST MODEL ANSWERS AND TOPPER ANSWER AVAILABLE.</li>
                  <li>New notes of chapter 5 has come</li>
                  <li>New notes of chapter 6 has come</li>
                  <li>New notes of chapter 7 has come</li>
                  <li>New notes of chapter 8 has come</li>
                  <li>New notes of chapter 9 has come</li>
                </ol>
              </marquee>
            </article>
          </aside>
        </div>
        <div >
          <div id="courses" className="books"><h3 style={{textAlign: 'center', textDecoration: 'underline', color: 'rebeccapurple'}}>Some Notes and PDFs</h3></div>
          <div style={{flexWrap: 'wrap', display: 'flex', maxWidth: '960px', justifyContent: 'center', margin:'0 auto'}}>
          <ul className='nav-courses justify-content-sm-center mb-4 px-3'>
            <li className='course me-2 ms-5 me-sm-5'><button style={showPapers ? btnStyle : coursesBtn} onClick={handlePaperClick}>Papers</button></li>
            <li className='course me-2 me-sm-5'><button style={showHandWritten ? btnStyle : coursesBtn} onClick={handleHandWrittenClick}>Hand written notes</button></li>
            <li className='course me-2 me-sm-5'><button style={showAnswerWritting ? btnStyle : coursesBtn} onClick={handleAnswerWrittingClick}>Answer writting</button></li>
          </ul>
          {showPapers && <Cards pdfs={notes.filter(note=> note.note_type == 1)}/>}
          {showHandWritten && <Cards pdfs={notes.filter(note=> note.note_type == 2)}/>}
          {showAnswerWritting && <Cards pdfs={notes.filter(note=> note.note_type == 3)}/>}
          {searchActive && <Cards pdfs={filteredNotes}/>}
          </div>
        </div>
      </section>
      <hr/>
      <section id="blogs" style={{marginLeft: '50px', marginRight: '50px'}}>
        <div style={{display: 'flex', alignItems: 'center', margin: '2vw'}}>
          <div className="blogqoute" >
            <h3 style={{marginBottom: '50px', textAlign: 'left', textDecoration:'underline'}}>Blogs for IAS Aspirant</h3>
            <p >Welcome to the blogging page of "IAS by Shastri Sir." Here, we curate a collection of insightful news, thought-provoking articles, and engaging blogs dedicated to the meticulous preparation for IAS and IPS examinations.
              Our mission is to provide a comprehensive platform for aspirants like you who are driven to excel in the challenging world of civil services. Whether you are already on the path of IAS and IPS preparation or simply have a thirst for knowledge, our blogs are designed to enrich your understanding, broaden your perspectives, and equip you with the tools to succeed.
              As you navigate through our curated content, you'll discover a wealth of information, strategies, and tips meticulously crafted to empower you in your pursuit of excellence. We understand that the journey towards achieving IAS and IPS ranks is demanding, but with the right guidance and resources, your potential knows no bounds.
              Our team, led by Shastri Sir, a seasoned professional in the field, is dedicated to keeping you updated with the latest developments, success stories, and expert insights. The road to becoming a civil servant is transformative, and we believe that every step forward, no matter how small, brings you closer to realizing your dreams.
              So whether you're a seasoned aspirant, a curious learner, or someone keen on exploring the world of civil services, our blog is your gateway to empowerment and enlightenment. Dive in, explore, and let the journey to becoming an exceptional civil servant begin!
            </p>
          </div>
          <img alt='blog' className=" img-blog-head rounded-circle " style={{width: '350px', height: '350px', borderRadius: '2px 2px 2px black'}} src="/images/blogimg.jpg"/>
        </div>
        <hr/>
        <div >
          <h5>Recent Blogs</h5>
        </div>
        <div className="blogcard">
          <div className="card9">
            <img alt='card-img' className="card-img" src="/images/blog1.jpg"/>
            <span >
              <h4>How many books can a human being read in his life?</h4>
              <div>The number of books a person can read in their lifetime varies widely and depends on several factors, including their reading speed, available time, interests, and lifespan...</div>
            </span>
          </div>
          <div className="card9">
          <img alt='card-img' className="card-img" src="/images/blog1.jpg"/>
            <span>
              <h4>How many books can a human being read in his life?</h4>
              <div>The number of books a person can read in their lifetime varies widely and depends on several factors, including their reading speed, available time, interests, and lifespan...</div>
            </span>
          </div>
          <div className="card9">
          <img alt='card-img' className="card-img" src="/images/blog1.jpg"/>
            <span>
              <h4>How many books can a human being read in his life?</h4>
              <div>The number of books a person can read in their lifetime varies widely and depends on several factors, including their reading speed, available time, interests, and lifespan...</div>
            </span>
          </div>
        </div>
      </section>
      <footer id="about">
        <div className="footer1">
          <div className="footer-body" >
            <div className="title">Sanskrit_Optional_UPSC</div>
            <div className="footer-nav">
              <nav className="mt-3 me-4" >
                <a className="whatsapp" target="blank" href="https://chat.whatsapp.com/JMvqkwryPrHKLEDu8tNmYy"><span className="bi bi-whatsapp me-2 " style={{fontSize: '20px', color: 'rgb(110, 179, 7)'}}></span></a>
                <a className="youtube" target="blank" href="https://youtube.com/@g.n.shastrij5.8k"><span className="bi bi-youtube me-2" style={{fontSize: '20px', color: 'red'}}></span></a>
                <a className="telegram" target="blank" href="https://t.me/gnshastrij"><span className="bi bi-telegram me-2" style={{fontSize: '20px', color: 'rgb(59, 134, 159)'}}></span></a>
                <a className="instagram" target="blank" href=" https://www.instagram.com/invites/contact/?i=w3roop9b11ls&utm_content=p1y1hd6"><span className="bi bi-instagram me-2" style={{fontSize: '20px', color:'rgb(222, 72, 18)'}}></span></a>
              </nav>
            </div>
          </div>
          <div className="footer-body"  >
            <h4 style={{color: 'gray'}}>Get in touch with US</h4>
            <div className="bi bi-house-fill"> Bhopal(M.P.),464001 </div>
            <div className="bi bi-envelope-fill mailid"> <a href="mailto:g.n.shastri1999@gmail.com">g.n.shastri1999@gmail.com</a></div>
            <div className="bi bi-person-fill callsir" ><a href="tel:+918821051303">+91 7879877858</a></div>
            <details>
              <summary>Support</summary>
              <div>+91 9131437980</div>
            </details>
            <details>
              <summary>director of Institute</summary>
              <div>+91 7879877858</div>
            </details>
          </div>
        </div>
        <div style={{paddingTop: '30px', color: 'gray'}}>
          <h3>&#169;2023 All rights reserved.</h3>
          <div style={{display: 'flex', justifyContent: 'center'}}><img alt='official logo' src="/images/officiallogojpg.png" className="footer-logo"/></div>
        </div>
      </footer>
      <link src="../node_modules/jquery/dist/jquery.js"/>
      <link src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"/>
    </body>
  );
}

export default App;

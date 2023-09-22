import './about.css';
import React from 'react';
import Footer from '../footer/Footer'

const About = (props) => { 
    return (
        <>
            <body className="container-fluid">
                <header style={{position: 'sticky', top: 0}}>
                    <div className="d-flex justify-content-between  text-white " style={{backgroundColor: 'black'}} >
                        <img src="/images/officiallogojpg.png" className="img-top" ></img>
                        <span className="mt-3 fw-bold " >
                            <p className="hindi">"G.N. SHASTRI IAS INSTITUTE"</p>
                        </span>
                        <span>
                            <nav className="socialtop  me-1">
                                <a className="whatsapp"  target="blank" href="https://chat.whatsapp.com/JMvqkwryPrHKLEDu8tNmYy"><span className="bi bi-whatsapp me-2 "></span></a>
                                <a className="youtube"  target="blank" href="https://youtube.com/@g.n.shastrij5.8k"><span className="bi bi-youtube me-2"  ></span></a>
                                <a className="telegram"   target="blank" href="https://t.me/gnshastrij"><span className="bi bi-telegram me-2" ></span></a>
                                <a className="instagram" target="blank" href=" https://www.instagram.com/invites/contact/?i=w3roop9b11ls&utm_content=p1y1hd6"><span className="bi bi-instagram me-2" ></span></a>
                            </nav>
                        </span>
                    </div>
                    <div>
                        <div className="header-lower" >
                            <div className="humburger" id="menu-icon">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>    
                            </div>
                            <div className="menu-bar">
                                <a className="menu-tittle"  href="../Nikita/shastriji.html">Home</a>
                                <a  className="menu-tittle" href="../Nikhil/shastrijiabout.html">About Us</a>
                                <a className="menu-tittle" href="#about">Contact</a>
                                <a className="menu-tittle" href="../Nikhil/shastrijiFAQs.html">FAQs</a>
                            </div>
                            <div className="input-group">
                                <input type="text"  className="form-control" placeholder="Search for notes" name="search" />
                                <button className="btn btn-primary" type="submit">
                                    <span className="bi bi-search "></span>
                                </button>
                            </div>
                            <div>
                                <span className="bi bi-cart" style={{marginRight: '30px', fontSize: '20px', paddingLeft:'5px'}}></span>
                                <div style={{paddingBottom: '10px'}}>Cart</div>
                            </div>
                        </div>
                    </div>
                </header>
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
                <Footer />
            </body>
        </>
    )      
}

export default About
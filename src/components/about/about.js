import './about.css';
import React, {useState} from 'react';
const About = (props) => { 
    return (
        <>
            <body class="container-fluid">
                <header style="position: sticky; top: 0;">
                    <div class="d-flex justify-content-between  text-white " style="background-color: black;" >
                        <img src="../../public/officiallogojpg.png" class="img-top" ></img>
                        <span class="mt-3 fw-bold " >
                            <p class="hindi">"G.N. SHASTRI IAS INSTITUTE"</p>
                        </span>
                        <span>
                            <nav class="socialtop  me-1">
                                <a class="whatsapp"  target="blank" href="https://chat.whatsapp.com/JMvqkwryPrHKLEDu8tNmYy"><span class="bi bi-whatsapp me-2 "></span></a>
                                <a class="youtube"  target="blank" href="https://youtube.com/@g.n.shastrij5.8k"><span class="bi bi-youtube me-2"  ></span></a>
                                <a class="telegram"   target="blank" href="https://t.me/gnshastrij"><span class="bi bi-telegram me-2" ></span></a>
                                <a class="instagram" target="blank" href=" https://www.instagram.com/invites/contact/?i=w3roop9b11ls&utm_content=p1y1hd6"><span class="bi bi-instagram me-2" ></span></a>
                            </nav>
                        </span>
                    </div>
                    <div>
                        <div class="header-lower" >
                            <div class="humburger" id="menu-icon">
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>    
                            </div>
                            <div class="menu-bar">
                                <a class="menu-tittle"  href="../Nikita/shastriji.html">Home</a>
                                <a  class="menu-tittle" href="../Nikhil/shastrijiabout.html">About Us</a>
                                <a class="menu-tittle" href="#about">Contact</a>
                                <a class="menu-tittle" href="../Nikhil/shastrijiFAQs.html">FAQs</a>
                            </div>
                            <div class="input-group">
                                <input type="text"  class="form-control" placeholder="Search for notes" name="search">
                                <button class="btn btn-primary" type="submit">
                                    <span class="bi bi-search "></span>
                                </button>
                                </input>
                            </div>
                            <div>
                                <span class="bi bi-cart" style="margin-right: 30px; font-size: 20px; padding-left:5px ;"></span>
                                <div style="padding-bottom: 10px;">Cart</div>
                            </div>
                        </div>
                    </div>
                </header>
                <section>
                    <div id="Home">
                        <h5 class="Home-tag">"SANSKRIT OPTIONAL UPSC"</h5>
                    </div>
                    <div class="container pb-4">
                        <h6>ABOUT_G.N._SHASTRI_IAS_INSTITUTE &nbsp;<span class="bi bi-arrow-right"></span></h6>
                        <p class="mt-4 pt-4">Greatings to all of you,<b>Hello...</b></p>
                        <blockquote class="m-4 p-2 mb-3">Our Vision is to improve the result in Sanskrit optional UPSC CSE by providing quality content and better notes by removing the problem of content in Sanskrit optional and also to provide platform to many Sanskrit experienced toppers and students for Sanskrit optional UPSC CSE.<br></br>
                        <blockquote>Mr. G. N. Shastri sir, director and founder of G N Shastri IAS Institute, have devoted more than 10 years in study of Sanskrit language and literature. I have been teaching Sanskrit literature to UPSC aspirants for more than 2 years now. More than 50 students have benefited under my guidance and gotten a boost in their scores. This year also, our institute is expecting good results as many of our students have qualified for mains too. We provide personal mentorship to students to achieve excellence especially in Sanskrit literature in UPSC CSE. Demo notes and lectures are available in the downloads section. Thanks for visiting the site. </blockquote> <p style="text-align: center;"><b>" जयतु संस्कृतं जयतु विश्वम् "</b></p></blockquote>
                    </div>
                </section>
                <footer id="about">
                    <div class="footer1">
                        <div class="footer-body">
                            <div class="title">Sanskrit_Optional_UPSC</div>
                            <div class="footer-nav">
                                <nav class="mt-3 me-4" >
                                    <a class="whatsapp" target="_blank" href="https://chat.whatsapp.com/JMvqkwryPrHKLEDu8tNmYy"><span class="bi bi-whatsapp me-2 " style="font-size: 20px; color: rgb(110, 179, 7);"></span></a>
                                    <a class="youtube" target="blank" href="https://youtube.com/@g.n.shastrij5.8k"><span class="bi bi-youtube me-2"  style="font-size: 20px;color: red;"></span></a>
                                    <a class="telegram" target="blank" href="https://t.me/gnshastrij"><span class="bi bi-telegram me-2" style="font-size: 20px;color: rgb(59, 134, 159);"></span></a>
                                    <a class="instagram" target="blank" href=" https://www.instagram.com/invites/contact/?i=w3roop9b11ls&utm_content=p1y1hd6"><span class="bi bi-instagram me-2" style="font-size: 20px;color:rgb(222, 72, 18);"></span></a>
                                </nav>
                            </div>
                        </div>
                        <div class="footer-body">
                            <h4 style="color: gray;">Get in touch with US</h4>
                            <div class="bi bi-house-fill"> Bhopal(M.P.),464001 </div>
                            <div class="bi bi-envelope-fill"> g.n.shastri1999@gmail.com</div>
                            <div class="bi bi-person-fill">+91 7879877858</div>
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
                    <div style="padding-top: 30px; color: gray;">
                        <h3>&#169;2023 All rights reserved.</h3>
                        <div style="display: flex; justify-content: center;"><img src="../../public/officiallogojpg.png" class="footer-logo" /></div>
                    </div>
                </footer>
            </body>
        </>
    )      
}

export default About
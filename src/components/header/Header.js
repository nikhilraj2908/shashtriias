import React, {useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom'

const Header = () => {
  const notes = []
  const [searchActive, setSearchActive] = useState(false)
  const [filteredNotes, setFilteredNotes] = useState([])
  const [showPapers, setShowPapers] = useState(true)
  const [showHandWritten, setShowHandWritten] = useState(false)
  const [showAnswerWritting, setShowAnswerWritting] = useState(false)
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath)

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
      
      console.log(window.location.href)
    return (
            <header className="position-sticky top-0" style={{ zIndex: '1' }} >
                <div className=" d-flex  justify-content-between text-white " style={{ backgroundColor: 'black' }}>
                    <img alt='officialLogo' src='/images/officiallogojpg.png' className="img-top " />
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
                        <span className="menu-bar">
                            <Link smooth to="/">Home</Link>
                        </span>
                        <span className="menu-bar">
                            <Link smooth to="/#courses">
                                Courses
                            </Link>
                        </span>
                        <span className="menu-bar">
                            <Link to="/blogs">
                                Blogs
                            </Link>
                        </span>
                        <span className="menu-bar">
                            <Link to="/about">About Us</Link>
                        </span>
                        <span className="menu-bar">
                            <Link smooth to="/admin">Admin</Link>
                        </span>
                        <span className="menu-bar">
                            {
                                currentPath == '/about' ?
                                    <Link to="/about#contact">
                                        Contact
                                    </Link>
                                : currentPath == '/faqs' ?
                                    <Link to="/faqs#contact">
                                        Contact
                                    </Link>  
                                :
                                    <Link to="/#contact">
                                        Contact
                                    </Link>
                            }
                            
                        </span>
                        <span className="menu-bar">
                            <Link to="/faqs">FAQs</Link>
                        </span>
                    </div>
                    <div className="input-group" style={{display: (currentPath == '/faqs' || currentPath == '/about') ? 'none': 'flex'}}>
                        <input type="text" className="form-control" onChange={filterBySearch} placeholder="Search for notes" name="search" />
                        <button className="btn btn-primary" type="submit">
                            <span className="bi bi-search"></span>
                        </button>
                    </div>
                    <div>
                        <span className="bi bi-cart" style={{ marginRight: '30px', fontSize: '20px', paddingLeft: '5px' }}></span>
                        <div style={{ paddingBottom: '10px' }}>Cart</div>
                    </div>
                </div>
            </header>
            )
}
export default Header

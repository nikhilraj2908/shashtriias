import React from "react";

const Footer =  () => {

    return (
        <footer>
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
    )
}

export default Footer
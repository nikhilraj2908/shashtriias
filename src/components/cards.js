import React, { useState } from "react";
import PDFFiles from "./pdfFiles";
import Modal from 'react-modal';
import Payment from "./payment/payment";

const Cards = (props) => {
    // checking my commit
    const [currentPdf, setCurrentPdf] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [paymentPage, setPaymentPage] = useState(false)

    const pdfs = props.pdfs
    console.log(props.pdfs)

    const openModal = () => {
        setIsOpen(true);
      }

    const showPaymentPage = (pdf) => {
        setCurrentPdf(pdf) 
        setPaymentPage(true)
    }
    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
      }
    
    const closeModal = () => {
        setIsOpen(false);
      }

    const handleReadNotes = (pdf) => {
        openModal(true)  
        setCurrentPdf(pdf) 
    }
    const customStyles = {
        content: {
            width: '650px',
            height: '680px',
            backgroundColor: '#5482a8',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        },
        overlay: {
            position: 'fixed',
            zIndex: 2,
            backgroundColor:'grey'
          },
      };
      console.log(currentPdf)
    return(
        <>
            <div style={{flexWrap: 'wrap', display: 'flex', maxWidth: '960px', justifyContent: 'center', margin:'0 auto'}}>
                {
                    pdfs.map((pdf)=> (
                        <div className="card3" >
                            <img src="/images/book2.jpeg" className="card-img-top " alt="pdf img"></img>
                            <div className="card-title">
                                <h4>{pdf.subject}</h4>
                            </div>
                            <p className="card-text"> sanskrit upse paper - 2022</p>
                            <div class="btn-group d-flex justify-content-center">
                                <button class="btn btn-info" onClick={() => handleReadNotes(pdf)}>Read Notes</button>
                                <button class="btn btn-success" onClick={() => showPaymentPage(pdf)}>Buy full course</button>
                            </div>
                        </div>
                    ))
                }  
                </div>
                
            {openModal &&
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button style={{position: 'absolute', zIndex: 2, marginTop: '-15px', right: 0, marginRight: '5px', backgroundColor: 'red', borderRadius: '50%', border: 'none'}} onClick={closeModal}><span className="bi bi-x"></span></button>
                    <PDFFiles file={currentPdf}/>
                </Modal>       
            }
            {
                paymentPage && 
                <Payment amount={currentPdf.price}/>
            }
        </>
        
    )
}

export default Cards
import './Faqs.css';
import React,{useState} from 'react';
import Footer from '../footer/Footer'
import Header from '../header/Header'
const FAQs= (props)=>{
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
                <div className="faqs-container mt-4 p-3"  >
                    <h4>Here are some frequently asked questions (FAQs) along with their answers:</h4>
                    <details>
                        <summary><b>Q1:Why you should choose our institute?</b></summary>
                        <ol>
                            <li><b>Comprehensive Syllabus Coverage:</b> I ensure complete coverage of the syllabus in a concise manner.</li>
                            <li><b>Handwritten Notes:</b> I provide carefully prepared handwritten notes with a focus on the answer format.</li>
                            <li><b>Modal and Topper Answers:</b> You have access to model answers and those from top-performing students.</li>
                            <li><b>Innovative Approach:</b> I integrate Sanskrit with contemporary subjects, modernizing its application.</li>
                            <li><b>Content Accessibility:</b> We offer PDFs of necessary books and notes, eliminating content accessibility challenges.</li>
                            <li><b>Interactive Live classes:</b> Live classes combine regular teaching with real-time interaction.</li>
                            <li><b>Answer Improvement:</b> Through direct engagement and guided practice, your answer-writing skills are enhanced.</li>
                            <li><b>Student Participation:</b> I encourage active student participation, fostering discussions and questions.</li>
                            <li><b>Interview Preparation:</b> Interview-related discussions are integrated into our classes.</li>
                            <li><b>Affordability: </b>We provide quality content and notes at affordable fees compared to other coaching options.</li>
                            <li><b>Exclusive Platform:</b> Our unique platform connects you with students who have successfully written mains, providing valuable insights and best answers.</li>
                            <li><b>Focused Attention: </b>With a smaller group of Sanskrit literature optional students, I offer personalized attention.</li>
                            <li><b>Unique Notes: </b>Our notes are original, not widely circulated, and are regularly updated to stay relevant.</li>
                        </ol>
                        <p>"I strive to create an enriching learning experience that ensures your success in your chosen field of study."</p>
                    </details>
                    <details>
                        <summary><b>Q2:Why chose sanskrit optional for sanskrit?</b></summary>
                        <ol>
                            <li><b>Short Syllabus: </b>The syllabus for Sanskrit optional is concise and focused.</li>
                            <li><b>High Relevance:</b> Approximately 70% of the syllabus is repeated in various exams.</li>
                            <li><b>Efficient Syllabus Completion: </b>The entire syllabus can be covered in just 90 classes.</li>
                            <li><b>Language Distribution:</b>While 70% of the paper is in Hindi, the remaining 30% involves writing in Sanskrit.</li>
                            <li><b>High Scoring Potential:</b> Sanskrit optional has the potential to score above 300 marks.</li>
                            <li><b>Quick Revision: </b>Efficient revision can be done in as little as 10 days.</li>
                        </ol>
                    </details>
                    <details>
                        <summary><b>Q3:What is the fee for the Main Test Series?</b></summary>
                        <ol>
                            <li><b>TOTAL FEE: ₹10,000</b></li>
                            <details>
                                <summary>TEST SERIES FEATURES</summary>
                                <ul>
                                    <li>10 Unit-wise Tests</li>
                                    <li>5 Full-length Tests</li>
                                    <li>5 Live classes for Answer Writing Discussion</li>
                                    <li>Written Feedback</li>
                                    <li>Model Answers Provided for the Test Series</li>
                                </ul>
                            </details>
                        </ol>
                    </details>
                    <details>
                        <summary><b>Q4: How do I access the necessary books and content in PDF form?</b></summary>
                        <div>We provide you with access to essential books and relevant study materials in digital PDF format, ensuring you have the resources you need at your fingertips.</div>
                    </details>
                    <details>
                        <summary><b>Q5: What makes your notes unique and valuable?</b></summary>
                        <div>Our notes are original, regularly updated, and not widely circulated. They are designed to align with current trends and provide you with fresh and relevant content.</div>
                    </details>
                </div>   
                <div className="faqs-container mt-4 p-3"  >
                    <h4>यहाँ कुछ आम पूछे जाने वाले प्रश्न (FAQs) और उनके उत्तर दिए गए हैं:</h4>
                    <details>
                        <summary><b>Q1:सर जी, हम आपकी कोचिंग क्यों चुनें?</b></summary>
                        <ol>
                            <li><b>संक्षिप्त उत्तर फॉर्मेट:</b>मैं सभी पाठ्यक्रम को कवर करवाता हूँ।</li>
                            <li><b>हैंडराइटटन नोट्स:</b> मैं आंसर फॉर्मेट में हैंडराइटन नोट्स प्रदान करता हूँ।</li>
                            <li><b>मॉडल उत्तर और टॉपर उत्तर:</b> आपके पास मॉडल उत्तर और श्रेष्ठ छात्रों के उत्तर भी होंगे।</li>
                            <li><b>नवाचारिक दृष्टिकोण:</b> मैं आपको संस्कृत को आधुनिक विषयों से जोड़कर पढ़ाता हूँ, ताकि आप परंपरागत ज्ञान को आधुनिकता और नवाचार में परिवर्तित कर सकें।</li>
                            <li><b>सामग्री की पहुँच:</b> हम आपको आवश्यक पुस्तकों के साथ-साथ PDF रूप में सामग्री भी प्रदान करेंगे, ताकि आपकी सामग्री की पहुँच कई सरल हो सके।</li>
                            <li><b>इंटरैक्टिव लाइव क्लासेस:</b>मैं आपको सीधे लाइव मोड में पढ़ाता हूँ, ताकि आप नियमित कक्षा में रह सकें और मेरे साथ बातचीत भी कर सकें।.</li>
                            <li><b>उत्तर लेखन कौशल में सुधार:</b> हम संवादात्मक प्रश्नों और सक्रिय प्रैक्टिस के माध्यम से आपके उत्तर लेखन कौशल को सुधारने के लिए कठिनाइयों के साथ प्रेरित करते हैं।</li>
                            <li><b>छात्र सहभागिता:</b> मैं छात्रों को कक्षा में सहभागिता करने और प्रश्न पूछने का मौका देता हूँ, जिसे भारतीय शिक्षा प्रणाली में आमतौर पर नहीं दिया जाता है।</li>
                            <li><b>साक्षात्कार तैयारी:</b> साक्षात्कार से संबंधित चर्चाएँ भी हम कक्षाओं में शामिल करते हैं।</li>
                            <li><b>वित्तीय स्वरुप:</b> हम अन्य कोचिंग के मुकाबले गुणवत्तापूर्ण सामग्री और नोट्स को आपको सस्ती फीस में प्रदान करते हैं।</li>
                            <li><b>विशेष प्लेटफ़ॉर्म:</b> हम एक विशिष्ट प्लेटफ़ॉर्म प्रदान करते हैं जिससे आप मेरे साथ पढ़ने वाले छात्रों से जुड़ सकते हैं, जिन्होंने कई बार मेन्स पेपर लिखे हैं। यह आपको उनके अनुभव और उत्तम उत्तरों की विशेष प्राप्ति करवाता है, जो आपके लिए बाहर से उपलब्ध नहीं होती।</li>
                            <li><b>विशेष ध्यान: </b>संस्कृत साहित्य वैकल्पिक में कम छात्रों की संख्या होती है, इससे मैं उन पर विशेष ध्यान देने का सक्षम होता हूँ।</li>
                            <li><b>विशेष नोट्स: </b>हमारे नोट्स मूल होते हैं, बिकने और वायरल होने की तुलना में नहीं होते हैं। हम नवीनतम संबंधित नोट्स प्रदान करते हैं जो कि नए प्रवृत्तियों को संबोधित करने के लिए बनाए जाते हैं।</li>
                        </ol>
                        <p>"मैं प्रयास करता हूं कि आपको उन्नतिपूर्ण शिक्षा का अनुभव प्रदान करूँ, जिससे आपकी चयनित अध्ययन क्षेत्र में सफलता सुनिश्चित हो।"</p>
                    </details>
                    <details>
                        <summary><b>Q2:UPSC के लिए क्यों संस्कृत वैकल्पिक का चयन करें?</b></summary>
                        <ol>
                            <li><b>लघु पाठ्यक्रम:</b> संस्कृत वैकल्पिक के पाठ्यक्रम की संक्षिप्त और केंद्रित रही होती है।</li>
                            <li><b>उचित संबंध:</b> लगभग 70% पाठ्यक्रम को विभिन्न परीक्षाओं में दोहराया जाता है।</li>
                            <li><b>कुशल पाठ्यक्रम समापन: </b>पूरा पाठ्यक्रम सिर्फ 90 कक्षाओं में पूरा किया जा सकता है।</li>
                            <li><b>भाषा वितरण:</b> जबकि पेपर का 70% हिंदी में होता है, बाकी 30% में संस्कृत में लेखन शामिल होता है।</li>
                            <li><b>उच्च अंक संभावना: </b>संस्कृत वैकल्पिक के पास 300 अंक से ऊपर के स्कोरिंग की संभावना होती है।</li>
                            <li><b>त्वरित संशोधन:</b> प्रभावी संशोधन केवल 10 दिनों में भी किया जा सकता है।</li>
                        </ol>
                    </details>
                    <details>
                        <summary><b>Q3:मुख्य Test Series के लिए कितनी फीस है?</b></summary>
                        <ol>
                            <li><b> कुल फीस: ₹10,000</b></li>
                            <details>
                                <summary>संस्कृत वैकल्पिक UPSC परीक्षा सीरीज़ की विशेषताएँ:</summary>
                                <ul>
                                    <li>10 यूनिट-वार परीक्षण</li>
                                    <li>5 पूर्ण-पाठ्यक्रम परीक्षण</li>
                                    <li>5 उत्तर लेखन चर्चा के लाइव क्लास</li>
                                    <li>लिखित प्रतिक्रिया </li>
                                    <li>परीक्षा सीरीज़ के लिए मॉडल उत्तर प्रदान किए जाते हैं</li>
                                </ul>
                            </details>
                        </ol>
                    </details>
                    <details>
                        <summary><b>Q4:मुझे आवश्यक पुस्तकों और सामग्री का पीडीएफ रूप में कैसे पहुंच मिलेगा?</b></summary>
                        <div>हम आपको आवश्यक पुस्तकों और प्रासंगिक अध्ययन सामग्री का पीडीएफ रूप में उपलब्ध कराते हैं, इससे आपके पास आवश्यक स्रोत सभी समय मौजूद होते हैं।</div>
                    </details>
                    <details>
                        <summary><b>Q5: आपके नोट्स को विशेष और मूल्यवान बनाने वाले क्या हैं?</b></summary>
                        <div>Oहमारे नोट्स मूल हैं, नियमित रूप से अपडेट होते हैं, और व्यापक रूप से प्रसारित नहीं होते हैं। वे वर्तमान प्रवृत्तियों के साथ मेल खाते हैं और आपको ताजगी और प्रासंगिक सामग्री प्रदान करते हैं।</div>
                    </details>
                </div>   
            </section>
            <div id="contact">
                <Footer />
            </div>
        </body>
    </>
)
}

export default FAQs
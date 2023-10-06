import Header from '../header/Header';
import Footer from '../footer/Footer';
import './blogs.css';

const Blog = () => {
    return (
        <body className='container-fluid'>
            <Header />
            <section style={{marginLeft:'50px', marginRight:'50px'}}>
                <div style={{display:'flex', alignItems:'center', margin:'2vw'}}>
                    <div>
                        <h3>Blogs for IAS Aspirant</h3>
                        <p>Welcome to the blogging page of "IAS by Shastri Sir." Here, we curate a collection of insightful news, thought-provoking articles, and engaging blogs dedicated to the meticulous preparation for IAS and IPS examinations.

                            Our mission is to provide a comprehensive platform for aspirants like you who are driven to excel in the challenging world of civil services. Whether you are already on the path of IAS and IPS preparation or simply have a thirst for knowledge, our blogs are designed to enrich your understanding, broaden your perspectives, and equip you with the tools to succeed.

                            As you navigate through our curated content, you'll discover a wealth of information, strategies, and tips meticulously crafted to empower you in your pursuit of excellence. We understand that the journey towards achieving IAS and IPS ranks is demanding, but with the right guidance and resources, your potential knows no bounds.

                            Our team, led by Shastri Sir, a seasoned professional in the field, is dedicated to keeping you updated with the latest developments, success stories, and expert insights. The road to becoming a civil servant is transformative, and we believe that every step forward, no matter how small, brings you closer to realizing your dreams.

                            So whether you're a seasoned aspirant, a curious learner, or someone keen on exploring the world of civil services, our blog is your gateway to empowerment and enlightenment. Dive in, explore, and let the journey to becoming an exceptional civil servant begin!

                        </p>
                    </div>
                    <img className=" rounded-circle " style={{width: '350px', height:' 350px', borderRadius: '2px 2px 2px black'}} src="images/blogimg.jpg" />
                </div>
                <hr />
                <h5 style={{textAlign: 'center'}}>
                    Recent Blogs
                </h5>
                <div className="blog-container">
                    <div className="blog-screen">
                        <div className="blog-header" style={{backgroundColor: '#ECF5FF', color: '#333333' , padding: '5px'}}>
                            <h2>How many books can a human being read in his life?</h2>
                            <div><p>The number of books a person can read in their lifetime varies widely and depends on several factors, including their reading speed, available time, interests, and lifespan...
                            </p></div>
                        </div>
                        <hr />
                        <div className="blog-body" style={{backgroundColor: '#ECF5FF', padding: '5px'}}>
                            <img src="images/bannerupsc1.png" className="img-fluide" style={{height: '300px', width:'100%',   borderRadius: '10px'}} alt="img-blog" />
                            <p>The author of the book 'Ambedkar', is a member of The Planning Commission, an establishment totally or almost totally lacking creativity, innovation or imagination. Professor Jadhav is a distinguished exception. He studied in the United States, obtaining PhD in Economics. The last worthwhile book on Ambedkar was written by Dr. Dhananjay Keer. It was published in 1954. Dr. B.R. Ambedkar was arguably among the most brilliant Indian intellectuals of the 20th century. His life is a triumph of character over circumstances.
                                ADVERTISEMENT

                                He,for the first thirty five years of his life was subjected to the most appalling humiliations, brutal discrimination and indignities for being an untouchable. The dice was loaded against him right from his birth.

                                He was born in a Mahar family on 14 April 1893. He died at the age of fifty six on 6th December 1956. He made it to the Elphiston College in Bombay. He could neither buy books nor clothes. He was lent books by one of his professors who also gave him clothes.
                                He,for the first thirty five years of his life was subjected to the most appalling humiliations, brutal discrimination and indignities for being an untouchable. The dice was loaded against him right from his birth.

                                He was born in a Mahar family on 14 April 1893. He died at the age of fifty six on 6th December 1956. He made it to the Elphiston College in Bombay. He could neither buy books nor clothes. He was lent books by one of his professors who also gave him clothes.

                                At the age of 22, he was given scholarship by the enlightened Gaikward of Baroda, which enable him to join Columbia University in New York. He passed his M.A and obtained a PhD with high distinction. Similarly he did exceptionally at the London School of Economics. THE LOT of the untouchables in India were worse then that of Negros (Blacks) in America.
                                At the age of 22, he was given scholarship by the enlightened Gaikward of Baroda, which enable him to join Columbia University in New York. He passed his M.A and obtained a PhD with high distinction. Similarly he did exceptionally at the London School of Economics. THE LOT of the untouchables in India were worse then that of Negros (Blacks) in America.</p>
                        </div>
                        <div className="blog-footer btn-group" style={{textAlign: 'center', marginTop: '1vw', display: 'block'}}>
                            <button className="btn btn-warning" >Go Next</button>
                            <button className="btn btn-success" >Read Next</button>

                        </div>
                    </div>
                    <div>
                        <div className="blog-list">
                            <img className="blog-card-img" src="images/bannerupsc1.png" />
                            <div style={{marginTop: '10px' , padding: '5px'}}><h4>How many books can human being read in life?</h4><div><p>The number of books a person can including their reading speed, </p></div></div>
                        </div>
                        <div className="blog-list">
                            <img className="blog-card-img" src="images/bannerupsc1.png" />
                            <div style={{marginTop: '10px' , padding: '5px'}}><h4>How many books can human being read in life?</h4><div><p>The number of books a person can including their reading speed, </p></div></div>
                        </div>
                        <div className="blog-list">
                            <img className="blog-card-img" src="images/bannerupsc1.png" />
                            <div style={{marginTop: '10px' , padding: '5px'}}><h4>How many books can human being read in life?</h4><div><p>The number of books a person can including their reading speed, </p></div></div>
                        </div>
                    </div>

                </div>

            </section>
            <Footer />
        </body>
    )
}
export default Blog

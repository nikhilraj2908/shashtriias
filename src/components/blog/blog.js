import Header from '../header/Header';
import Footer from '../footer/Footer';
import './blogs.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
    const [blogs, setBlogs] = useState()
    const [blogImage, setBlogImage] = useState()
    const [blogTitle, setBlogTitle] = useState()
    const [description, setDescription] = useState()
    const [content, setContent] = useState()
    
    useEffect(()=>{
        getBlogs()
    },[])

    const getBlogs = () => {
        axios.get('http://127.0.0.1:8000/api' + '/blogs/').then(
            response => {
                console.log(response)
                setBlogs(response.data)
                setBlogImage(response.data[0].image)
                setBlogTitle(response.data[0].title)
                setDescription(response.data[0].description)
                setContent(response.data[0].content)
            }
        ).catch(error => {
            console.log(error)
        })
    }

    const handleReadBlog = (e, blog) => {
        setBlogImage(blog.image)
        setBlogTitle(blog.title)
        setDescription(blog.description)
        setContent(blog.content)
    }

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
                            <h2>{blogTitle}</h2>
                            <div><p>{description}</p></div>
                        </div>
                        <hr />
                        <div className="blog-body" style={{backgroundColor: '#ECF5FF', padding: '5px'}}>
                            <img src={blogImage} className="img-fluide" style={{height: '300px', width:'100%',   borderRadius: '10px'}} alt="img-blog" />
                            <p>{content}</p>
                        </div>
                        {/* <div className="blog-footer btn-group" style={{textAlign: 'center', marginTop: '1vw', display: 'block'}}>
                            <button className="btn btn-warning" >Go Next</button>
                            <button className="btn btn-success" >Read Next</button>

                        </div> */}
                    </div>
                    <div style={{height: '60vw', overflow: 'scroll'}}>
                    {
                        blogs && blogs.map((blog)=>{
                            return (
                                <div onClick={(e)=>handleReadBlog(e,blog)} className="blog-list">
                                    <img className="admin-card-img" src={blog.image} alt="blog-image" />
                                    <div style={{ marginTop: '10px', padding: '5px' }}>
                                        <h4>{blog.title}</h4>
                                        <div>
                                            <p>{blog.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>

            </section>
            <Footer />
        </body>
    )
}
export default Blog

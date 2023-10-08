import React, { useEffect, useState } from "react";
import { checkStatus, parseJSON } from "../../services/fetchTools";
import axios from "axios";

const Blog = () => {
    const [blogImage, setBlogImage] = useState()
    const [blogTitle, setBlogTitle] = useState()
    const [description, setDescription] = useState()
    const [content, setContent] = useState()
    const [blogs, setBlogs] = useState()

    useEffect(()=>{
        getBlogs()
    },[])

    const getBlogs = () => {
        axios.get('http://127.0.0.1:8000/api' + '/blogs/').then(
            response => {
                console.log(response)
                setBlogs(response.data)
            }
        ).catch(error => {
            console.log(error)
        })
    }

    const handleImages = (event) => {
        console.log('files',event.target.files)
        var image = event.target.files[0]
        var name = event.target.name
        console.log(name,image)
        setBlogImage(image)
        }
    
    const handleTitle = (event) => {
        setBlogTitle(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        console.log(blogTitle, description, blogImage )
        const options = {};
        options['method'] = 'post';
        var formData = new FormData();
        formData.append('content', content)
        formData.append('title', blogTitle)
        formData.append('image', blogImage)
        formData.append('description', description)
        options['body'] = formData

        return fetch('http://127.0.0.1:8000/api' + '/blogs/add_blog/', options)
            .then(checkStatus)
            .then(parseJSON)
            .then((response) => {
                alert("Successfully added blog")
                console.log('response', response)
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    }

    const handleContent = (event) => {
        setContent(event.target.value)
    }
    return (
        <div>
            <h5 style={{ textAlign: 'center' }}>
                Recent Blogs
            </h5>
            <div className="container-blogadmin">
                <div className="blog-screen">
                    <div className="blog-header" style={{ backgroundColor: '#ECF5FF', color: '#333333', padding: '5px' }}>
                        <div className="input-group tittle">
                            <label htmlFor="file">
                                <button className="btn btn-primary me-2"><input onChange={(e)=>handleImages(e)} type="file" id="file" name="file" /></button>
                            </label>
                            <input onChange={handleTitle} type="text" placeholder="Title" className="form-control tittle-input" />
                        </div>
                        <div>
                            <textarea onChange={handleDescription} className="blog-discription" placeholder="Description in short"></textarea>
                        </div>
                    </div>
                    <hr />
                    <div className="blog-body">
                        <textarea onChange={handleContent} className="blog-containt" placeholder="Write a content here"></textarea>
                    </div>
                    <div className="blog-footer btn-group" style={{ textAlign: 'center', marginTop: '1vw', display: 'block' }}>
                        <button onClick={handleSubmit} className="btn btn-success">Publish Blog</button>
                    </div>
                </div>
                <div style={{height: '60vw', overflow: 'scroll'}}>
                    {
                        blogs && blogs.map((blog)=>{
                            return (
                                <div className="blog-list">
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
        </div>
    )
}

export default Blog
import React from "react";

const Blog = () => {
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
                                <button className="btn btn-primary me-2"><input type="file" id="file" name="file" /></button>
                            </label>
                            <input type="text" placeholder="Title" className="form-control tittle-input" />
                        </div>
                        <div>
                            <textarea className="blog-discription" placeholder="Description in short"></textarea>
                        </div>
                    </div>
                    <hr />
                    <div className="blog-body">
                        <textarea className="blog-containt" placeholder="Write a content here"></textarea>
                    </div>
                    <div className="blog-footer btn-group" style={{ textAlign: 'center', marginTop: '1vw', display: 'block' }}>
                        <button className="btn btn-success">Publish Blog</button>
                    </div>
                </div>
                <div>
                    <div className="blog-list">
                        <img className="admin-card-img" src="/images/bannerupsc1.png" alt="blog-image" />
                        <div style={{ marginTop: '10px', padding: '5px' }}>
                            <h4>How many books can a human being read in life?</h4>
                            <div>
                                <p>The number of books a person can read depends on various factors including their reading speed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-list">
                        <img className="admin-card-img" src="/images/blog1.jpg" alt="blog-image" />
                        <div style={{ marginTop: '10px', padding: '5px' }}>
                            <h4>How many books can a human being read in life?</h4>
                            <div>
                                <p>The number of books a person can read depends on various factors including their reading speed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-list">
                        <img className="admin-card-img" src="/images/book2.jpeg" alt="blog-image" />
                        <div style={{ marginTop: '10px', padding: '5px' }}>
                            <h4>How many books can a human being read in life?</h4>
                            <div>
                                <p>The number of books a person can read depends on various factors including their reading speed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
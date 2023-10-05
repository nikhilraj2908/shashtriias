import React from "react";
import './admin.css';
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Notice from "./notice";
import StudentTable from "./studentTable";
import Blog from "./blog";

const Admin = () => {
    return (
        <body>
            <Header />
            <StudentTable />
            <Notice />
            <Blog />
            <Footer />
        </body>
    )
}

export default Admin
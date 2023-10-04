import React from "react";
import './admin.css';
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Notice from "./notice";
import StudentTable from "./studentTable";

const Admin = () => {
    return (
        <body>
            <Header />
            <StudentTable />
            <Notice />
            <Footer />
        </body>
    )
}

export default Admin
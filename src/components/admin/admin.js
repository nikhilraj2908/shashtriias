import React from "react";
import './admin.css'

const Admin = () => {
    const data = [
        ['sumit', 'sub1', 100, '23/jan/1998', '24/jan/1998'],
        ['rumit', 'sub2', 200, '26/jan/1998', '25/jan/1998'],
        ['bhumit', 'sub3', 300, '29/jan/1998', '26/jan/1998'],
        ['bhumit', 'sub3', 300, '29/jan/1998', '26/jan/1998']

    ]
    return (
        <table>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Course</th>
                    <th>Price</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>{
                        return (
                            <tr>
                                {
                                    item.map((val)=>{
                                        return (
                                            <td>{val}</td>
                                        )
                                    })
                                }
                                
                            </tr>
                        )
                    })
                }
                <tr></tr>
            </tbody>
        </table>
    )
}

export default Admin
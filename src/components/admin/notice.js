import React, { useEffect, useState } from "react";
import axios from "axios";
import { checkStatus, parseJSON } from "../../services/fetchTools";
const Notice = () => {
    const [notice, setNotice] = useState('');
    const [noticeList, setNoticeList] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api' + '/notices/').then(
            response => {
                setNoticeList(response.data)
            }
        ).catch(error => {
            console.log(error)
        })
    }, [])

    const onNoticeChange = (event) => {
        setNotice(event.target.value);
    }

    const addNotice = () => {
        const options = {};
        options['method'] = 'post';
        var formData = new FormData();
        formData.append('content', notice)
        options['body'] = formData

        return fetch('http://127.0.0.1:8000/api' + '/notices/', options)
            .then(checkStatus)
            .then(parseJSON)
            .then((response) => {
                alert("Successfully checked in with details tasks")
                console.log('response', response)
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    }

    const deleteItem = (event, idx) => {
        const temp_arr = noticeList.filter((value, index) => {
            return index !== idx;
        })
        setNoticeList(temp_arr);
    };

    return (
        <section>
            <div className="upper">
                <div className="mt-4">
                    <div className="card-notice ">
                        <h3 style={{ textAlign: "center" }}>Notices</h3>
                        <div className='notes-input'>
                            <div className=" input-group" style={{ marginBottom: '20px' }}>
                                <input type="text" className="form-control" placeholder="write a new notice" onChange={onNoticeChange} />
                                <button type="submit" className="bi bi-plus input-group-text" onClick={addNotice}></button>
                            </div>
                        </div>
                        <div className='list'>
                            {noticeList.map((value, index) => {
                                return (
                                    <div className='container-notes '>
                                        <div className="d-flex justify-content-between notes-added">
                                            <button className="bi bi-pencil btn btn-primary"></button>
                                            <i className="fa fa-times " aria-hidden="true" />
                                            <span key={index}>{value.content}</span>
                                            <button type="button" class="btn btn-close" onClick={(event) => deleteItem(event, index)}></button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="blogs">

                </div>
            </div>
            <div className="lower"> </div>
        </section>
    )
}

export default Notice
import React, { useEffect, useState } from "react";
import axios from "axios";
import { checkStatus, parseJSON } from "../../services/fetchTools";
const Notice = () => {
    const [notice, setNotice] = useState('');
    const [currentNoticeID, setCurrentNoticeID] = useState();
    const [noticeList, setNoticeList] = useState([]);

    useEffect(() => {
        getNoticeList()
    }, [])

    const getNoticeList = () => {
        axios.get('http://127.0.0.1:8000/api' + '/notices/').then(
            response => {
                setNoticeList(response.data)
            }
        ).catch(error => {
            console.log(error)
        })
    }

    const onNoticeChange = (event) => {
        setNotice(event.target.value);
    }

    const addOrEditNotice = () => {
        if(currentNoticeID){
            editNoticeApi()
        } else {
            addNotice()
        }
    }

    const editNoticeApi = () => {
        console.log(notice)
        fetch(`http://127.0.0.1:8000/api/notices/edit/${currentNoticeID}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'content': notice }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Update the notice in your React state
            setCurrentNoticeID(null)
            window.location.reload();

        })
        .catch((error) => console.error('Error:', error));

    }

    const addNotice = () => {
        const options = {};
        options['method'] = 'post';
        var formData = new FormData();
        formData.append('content', notice)
        options['body'] = formData

        return fetch('http://127.0.0.1:8000/api' + '/notices/add_notice/', options)
            .then(checkStatus)
            .then(parseJSON)
            .then((response) => {
                alert("Successfully checked in with details tasks")
                console.log('response', response)
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    }

    const deleteItem = (event, idx) => {
        console.log(idx)
        const url = `http://127.0.0.1:8000/api/notices/delete_notice/`;
        var formData = new FormData();
        formData.append('notice_id', idx)
        const options = {};
        options['body'] = formData
        options['method'] = 'post';
        return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => {
            console.log(data)
            if(data.success){
            alert(data.message)
            getNoticeList()
            window.location.reload();
            
            }
            else{
            alert(data.message)
            }

        }).catch(error => console.log(error));
        
        // const temp_arr = noticeList.filter((value, index) => {
        //     return index !== idx;
        // })
        // setNoticeList(temp_arr);
    };

    const editNotice = (event, idx, content) => {
        console.log('edit section')
        console.log(content)
        console.log(notice)
        setNotice(content)
        setCurrentNoticeID(idx)
    }

    return (
        <section>
            <div className="upper">
                <div className="mt-4">
                    <div className="card-notice ">
                        <h3 style={{ textAlign: "center" }}>Notices</h3>
                        <div className='notes-input'>
                            <div className=" input-group" style={{ marginBottom: '20px' }}>
                                <input type="text" className="form-control" placeholder="write a new notice" onChange={onNoticeChange} value={notice} />
                                <button type="submit" className="bi bi-plus input-group-text" onClick={addOrEditNotice}></button>
                            </div>
                        </div>
                        <div className='list'>
                            {noticeList.map((value, index) => {
                                return (
                                    <div className='container-notes '>
                                        <div className="d-flex justify-content-between notes-added">
                                            <button className="bi bi-pencil btn btn-primary" onClick={(event)=>editNotice(event, value.id, value.content)}></button>
                                            <span key={index}>{value.content}</span>
                                            <button type="button" class="btn btn-close" onClick={(event) => deleteItem(event, value.id)}></button>
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
import React, { useEffect, useState } from 'react';
import './Applyjob.css'
import ShortApplyList from '../ShortApplyList/ShortApplyList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';


const Applyjob = () => {
    const [job, setJob] = useState([]);
    const [shot, setShot] = useState([]);
    const [toggol, setToggol] = useState(false);

    useEffect(() => {
        const existingData = localStorage.getItem('myData') || '[]';
        const parsedData = JSON.parse(existingData);
        setJob(parsedData)
    }, [shot]);
    const handelChange = () => {
        const existingData = localStorage.getItem('myData') || '[]';
        const parsedData = JSON.parse(existingData);
        const filteredFruits = parsedData.filter(parsedData => parsedData.full_time.includes('F'));
        setShot(filteredFruits)
        setToggol(true)
    }
    const handelChange1 = () => {
        const existingData = localStorage.getItem('myData') || '[]';
        const parsedData = JSON.parse(existingData);
        const filteredFruits = parsedData.filter(parsedData => parsedData.full_time.includes('O'));
        setShot(filteredFruits)
        setToggol(true)
    }
    const handelChange2 = () => {
        const existingData = localStorage.getItem('myData') || '[]';
        const parsedData = JSON.parse(existingData);
        const filteredFruits = parsedData.filter(parsedData => parsedData.full_time.includes('R'));
        setShot(filteredFruits)
        setToggol(true)
    }

    return (
        <div>
            <div className='Applied-Jobs'><h3>Applied Jobs</h3></div>

            <div className='dropdown'>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handelChange()}>Full Time</Dropdown.Item>
                        <Dropdown.Item onClick={() => handelChange1()}>Onsite</Dropdown.Item>
                        <Dropdown.Item onClick={() => handelChange2()}>Remote</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div >
                {
                    toggol ? shot.map(job => <ShortApplyList job={job} key={job._id}></ShortApplyList>) || shot1.map(job => <ShortApplyList job={job} key={job._id}></ShortApplyList>) : job.map(job => <ShortApplyList job={job} key={job._id}></ShortApplyList>)
                }
            </div>

        </div>
    );
};

export default Applyjob;
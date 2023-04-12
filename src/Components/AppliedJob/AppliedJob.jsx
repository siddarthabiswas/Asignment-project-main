import React from 'react';
import './AppliedJob.css'
import { useLocation, useNavigate } from 'react-router-dom';

const AppliedJob = (props) => {
    const navigate = useNavigate();
    const locations = useLocation();
    const { picture, job_title, company_name, full_time, remote, location_img, location, salary_img, salary, job_description, job_responsibility, educational_requirements, experiences, email, phone, address } = locations.state
    const handelHome = () => {        
        navigate('/')
    }
    return (
        <>
            <div className='Jobdetails'>
                <div className='job-det1'>
                    <p><strong>Job Description</strong>{job_description}</p>
                    <p><strong>Job Responsibility</strong>{job_responsibility}</p>
                    <p><strong>Educational Requirements</strong>{educational_requirements}</p>
                    <p><strong>Experiences:</strong>{experiences}</p>
                </div>
                <div className='job-det2'>
                    <h1>Job Details</h1>
                    <hr />
                    <div className='flex'><img src={salary_img} alt="" /><strong>Salary</strong>: {salary} (Per Month)</div>
                    <div className='flex items-center'><i class="fa-solid fa-calendar-days"></i> &nbsp; <strong>Job Title</strong> : {job_title}</div>
                    <h1>Contact Information</h1>
                    <hr />
                    <div className='flex items-center'><i class="fa-solid fa-phone"></i>&nbsp;Phone : {phone}</div>
                    <div className='flex items-center'><i class="fa-solid fa-envelope"></i>&nbsp;Email : {email}</div>
                    <div className='flex items-center'><i class="fa-solid fa-location-dot"></i>&nbsp;Address : {address}</div>
                </div>
            </div>
            <div className='flex items-center justify-center w-full text-center'><button className='butnn' onClick={handelHome}>Return Home Page</button></div>
            
        </>

    );
};

export default AppliedJob;
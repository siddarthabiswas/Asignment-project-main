import React from 'react';
import './FutureJob.css'
import { Link } from 'react-router-dom';

const FutureJob = (props) => {
    const { picture, job_title, company_name, full_time, remote, location_img, location, salary_img, salary, job_description, job_responsibility, educational_requirements, experiences, email, phone, address } = props.data;
    return (
        <div className='future-job-child'>
            <img src={picture} alt="" />
            <h5>{job_title}</h5>
            <h4>{company_name}</h4>
            <div className='flex items-start w-full gap-6 remot'>
                <button>{full_time}</button>
                <button>{remote}</button>
            </div>
            <div className='flex items-start w-full mt-5 mb-6'>
                <div className='flex items-start w-full'>
                    <img src={location_img} alt="" />
                    <h3>{location}</h3>
                </div>
                <div className='flex items-start w-full'>
                    <img src={salary_img} alt="" />
                    <h1>{salary}</h1>
                </div>
            </div>
            <Link to='/jobdetls' state={{  picture, job_title, company_name, full_time, remote, location_img, location, salary_img, salary, job_description, job_responsibility, educational_requirements, experiences, email, phone, address }}><button className='all__button-job'>View Details</button></Link>
        </div>
    );
};

export default FutureJob;
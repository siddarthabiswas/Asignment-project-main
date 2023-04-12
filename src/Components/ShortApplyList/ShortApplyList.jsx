import React from 'react';
import './ShortApplyList.css'
import { Link } from 'react-router-dom';

const ShortApplyList = (props) => {
    const { picture, job_title, company_name, full_time, remote, location_img, location, salary_img, salary, job_description, job_responsibility, educational_requirements, experiences, email, phone, address, formattedDate } = props.job;
    return (
        <div>
            <div className='apply_job-list'>
                <div className='w-[20%] xs:w-full icons__job res'><img src={picture} alt="" /></div>
                <div className='w-[65%] xs:w-full res'>
                    <h1>{job_title}</h1>
                    <h3>{company_name}</h3>
                    <div className='flex items-center' > <div><button>Remot</button></div> <div><button>Full Time</button></div></div>
                    <div className='flex items-center gap-4'>
                        <div><i class="fa-solid fa-location-dot"></i> &nbsp; <span>{location}</span></div>
                        <div className='flex'>
                            <div><img src={salary_img} alt="" /></div> &nbsp;<h5>Salary: {salary}</h5><div></div>
                        </div>
                    </div>
                </div>
                <div className='w-[15%] xs:w-full res'>
                    <Link to='/appliedJob' state={{ picture, job_title, company_name, full_time, remote, location_img, location, salary_img, salary, job_description, job_responsibility, educational_requirements, experiences, email, phone, address, formattedDate }}><button className='View___Details'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShortApplyList;
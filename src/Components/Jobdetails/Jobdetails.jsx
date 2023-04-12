import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Jobdetails.css'


const Jobdetails = () => {
    const navigate = useNavigate();
    const locations = useLocation();
    const { picture, job_title, company_name, full_time, remote, location_img, location, salary_img, salary, job_description, job_responsibility, educational_requirements, experiences, email, phone, address } = locations.state;
    const myDeta = { picture, job_title, company_name, full_time, remote, location_img, location, salary_img, salary, job_description, job_responsibility, educational_requirements, experiences, email, phone, address }

    const handelSave = () => {
        const existingData = localStorage.getItem('myData') || '[]';
        const parsedData = JSON.parse(existingData);

        console.log(parsedData)
        const newItem = myDeta;
        parsedData.push(newItem);

        // Store the updated data back into the local storage
        localStorage.setItem('myData', JSON.stringify(parsedData));
        navigate('/applyjob')
    }

    return (
        <>
            <div className='Jobdetails'>
                <div className='job-det1'>
                    <p><strong>Job Description : </strong>{job_description}</p>
                    <p><strong>Job Responsibility :</strong>{job_responsibility}</p>
                    <p><strong>Educational Requirements :</strong>{educational_requirements}</p>
                    <p><strong>Experiences : </strong>{experiences}</p>
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
                    <button className='w-full apply-button' onClick={handelSave}>Apply Now</button>
                </div>
            </div>
            {/* <div class='xs:mb-44'>
                <div className='footer-section '>
                    <div className="footer-box">
                        <h1>CareerHub</h1>
                        <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className='flex flex-wrap items-center justify-start'><div><i class="fa-brands fa-facebook"></i></div>&nbsp;&nbsp;<div><i class="fa-brands fa-twitter"></i></div>&nbsp;&nbsp;<div><i class="fa-brands fa-instagram"></i></div></div>
                    </div>
                    <div className="footer-box">
                        <h2>Company</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Work</li>
                            <li>Latest News</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h2>Product</h2>
                        <ul>
                            <li>Prototype</li>
                            <li>Plans & Pricing</li>
                            <li>Customers</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h2>Support</h2>
                        <ul>
                            <li>Help Desk</li>
                            <li>Sales</li>
                            <li>Become a Partner</li>
                            <li>Developers</li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h2>Contact</h2>
                        <ul>
                            <li>524 Broadway , NYC</li>
                            <li>+1 777 - 978 - 5570</li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Jobdetails;
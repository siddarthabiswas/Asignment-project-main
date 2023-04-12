import React, { useState } from 'react';
import './Statistics.css'

import image from '../Images/P3OLGJ1 copy 1.png'
import icon1 from '../Images/accounts 1.png'
import icon2 from '../Images/Group 13.png'
import icon3 from '../Images/social-media 1.png'
import icon4 from '../Images/chip 1.png'
import { Fakedata } from '../Fakedata/Fakedata';
import FutureJob from '../FutureJob/FutureJob';




const Statistics = () => {
    const [slice, setSlice] = useState(false)
    const handleClickScroll = () => {
        const element = document.getElementById('ApplyButton');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
            <div className=" Statistics-con">
                <div className="box__h xs:w-full sm:w-full md:w-full">
                    <h1>One Step <br /> Closer To Your <br /> <span>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />  your job application from start to finish.</p>
                    <button className='all__button' onClick={handleClickScroll}>Get Started</button>
                </div>
                <div className="box__h1 xs:w-full sm:w-full md:w-full">
                    <img src={image} alt="" />
                </div>
            </div>
            {/* new Job Category List section  */}
            <div className='job__catagory'>
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='all-catagory'>
                <div className="box_Catagory">
                    <img src={icon1} alt="" />
                    <h5>Account & Finance</h5>
                    <p>300 Jobs Available </p>
                </div>
                <div className="box_Catagory">
                    <img src={icon2} alt="" />
                    <h5>Account & Finance</h5>
                    <p>300 Jobs Available </p>
                </div>
                <div className="box_Catagory">
                    <img src={icon3} alt="" />
                    <h5>Account & Finance</h5>
                    <p>300 Jobs Available </p>
                </div>
                <div className="box_Catagory">
                    <img src={icon4} alt="" />
                    <h5>Account & Finance</h5>
                    <p>300 Jobs Available </p>
                </div>
            </div>
            {/* Future job */}
            <div className='job__catagory'>
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div id='ApplyButton' className='container future-job'>
                {
                    slice ? Fakedata.map(data => <FutureJob data={data} key={data._id}></FutureJob>) : Fakedata.slice(0, 4).map(data => <FutureJob data={data} key={data._id}></FutureJob>)
                }
            </div>
            <div className='flex items-center justify-center w-full'><button className='See__all' onClick={() => setSlice(!slice)}>See All Jobs</button></div>
            <div>
                <div className='footer-section'>
                    <div className="footer-box">
                        <h1>JOB-CARE</h1>
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


            </div>

        </div>
    );
};

export default Statistics;
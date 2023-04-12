import React, { useState } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import Statistics from '../../Statistics/Statistics';


const Navbar = () => {
    const [active, setActive] = useState("nav_menu");
    const [navbar, setNavbar] = useState(false);
    const Changebackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', Changebackground);
    const [toggleIcon, setToggleIcon] = useState("nav_toggler")
    const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

        // toggle animation
        toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler')
    }

    const handleClickScroll = () => {
        const element = document.getElementById('ApplyButton');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <nav className={navbar ? 'changeNav' : 'nav'}>
                <NavLink to='/' className="text-2xl no-underline nav_brand" style={{ fontSize: '20px' }}>Job-Care </NavLink>

                <ul className={active}>
                    <li className="nav_item"><NavLink to='/' className="text-2xl no-underline nav_link ">Home</NavLink></li>
                    <li className="nav_item"><NavLink to='/static' className="text-2xl no-underline nav_link ">Statistics</NavLink></li>
                    <li className="nav_item"><NavLink to='/applyjob' className="text-2xl no-underline nav_link ">Applied Jobs</NavLink></li>
                    <li className="nav_item"><NavLink to='/blog' className="text-2xl no-underline nav_link ">Blog</NavLink></li>
                </ul>
                <button onClick={handleClickScroll} className='button-apply'>Star Applying</button>
                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </>

    );
};

export default Navbar;
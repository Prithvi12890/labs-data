import React from 'react';
import '../styles/NavBar.css';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

const NavBar = () => {
    const ismatch = useMediaQuery('(max-width:600px)');
    const navButtons = [
        { name: "Home", link: "/labs-data/home" },
        { name: "Labs", link: "/labs-data/home" },
        { name: "Contribute", link: "/labs-data/home" },
        { name: "About", link: "/labs-data/home" },
    ];
    return (
        <div className='nav-bar'>
            <h3 className='title'>LABS</h3>{
                ismatch ? <SideBar /> : (<ul className="nav-list">
                    {navButtons.map((navButton) => <li><Link className="link-style" to={navButton.link}>{navButton.name}</Link></li>)}
                </ul>)
            }
        </div>
    )
}

export default NavBar

import React from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Resume from './Resume'
import ContactMe from './ContactMe'
import HamToggleButton from '../components/Hamburger/HamToggleButton'



const Navbar = (props) => {
    return(
    <header className='Navbar'>
        <nav className='Navlist'>
        <div className='navbar-toggle-button'>
            <HamToggleButton click={props.drawerClickHandler}/>
        </div>
            <div className='Logo'>Sonja Chacon</div>
            <div className='spacer'></div>
                <div className='NavItems'>
                    <ul>
                        <li><a href='/'>Projects</a></li>
                        <li><a href='/components/Resume'>Resume</a></li>
                        <li><a href='/components/BackgroundContact'>Contact</a></li>
                        <li><a href='/'>About Me</a></li>
                        <li><a href='/'>Homepage</a></li>
                    </ul>
                </div>
        </nav>
    </header>
    )
}

export default Navbar;

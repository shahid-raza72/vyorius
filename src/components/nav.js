import React from 'react';
import '../App.css';
import logo from '../logo1.2bce0cc3.png';
import logo2 from '../logo2.png';
function NAV()
{
    return(
        
            <nav className='navbar'>
                <img src={logo}  className ='logo' alt='logo'/>
                <img src={logo2} className ='vlogo' alt='vlogo'/>
                <ul className='navlist '>
                    <li><a href='#'>Why Vyorius</a></li>
                    <li><a href='#'>Solutions</a></li>
                    <li><a href='#'>Products</a> </li>
                    <li><a href='#'>Use Cases</a></li>
                    <li> <a href='#'>Team</a></li>
                    <li><a href='#'>Partner</a></li>
                    <li><a href='#'>Contact us</a></li>
                </ul>
                
                    
                <button className ='rightnav'>Launch Vyorius</button>
                
                
                
            </nav>
    );
}
export default NAV;
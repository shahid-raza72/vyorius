import React from 'react';
import '../App.css';
import img from '../img1.png';

function BODY(){
    return(
            <div >
                <div className='App'>
                    <h6>CONNECTING THE DISCONNECTED</h6>
                    <h1 className='vheading'><span className='vcolor'>Vyorius</span> brings unmanned 
                    <br></br>robots <span className='vcolor'>together</span>,
                    <br></br>wherever they are 
                    </h1>
                    <p>With all of the operations,
                     commanding and maintenance tools in one place, unmanned
                     <br></br>vehicles 
                    will stay connected and productive no matter where you’re operating.</p>
                    <button type='button' className='btn'>
                        Try Vyorius
                    </button>
                    <button type='button' className='lbtn'>
                        Learn More
                    </button>
                
                        <p className='Link'>Need to order ? <a href='#'> Get Started</a></p>
                    
                </div>
                <div className='imagediv'>
                    <img src ={img} className='image' alt='image'/>

                   
                </div>
            </div>
    );

}
export default BODY;
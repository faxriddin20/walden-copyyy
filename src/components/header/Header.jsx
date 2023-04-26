import React from 'react'
import './Hedaer.scss'
// import circle from '../../images/Rectangle.png'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className='header'>
            <div className='header-wrapper d-flex  aling-items-center justify-content-between'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className='d-flex gap-5'>
                    <p className='link'>
                        <a href="#" className='text-decoration-none text-light  '>Meditation Cushions</a>
                    </p>
                    <p className='link'>
                        <a href="#" className='text-decoration-none text-light '>The Gong</a>
                    </p>
                    <p className='link'>
                        <a href="#" className='text-decoration-none text-light '>Apparel</a>
                    </p>
                    <p className='link'>
                        <a href="#" className='text-decoration-none text-light '>ABOUT</a>
                    </p>
                    {/* <img src={circle} height='24' /> */}
                </div>
            </div>
            <button className='button-set'>
                <span>
                Shop Meditation Set
                </span>
            </button>
        </div>
        
    )
}

export default Header
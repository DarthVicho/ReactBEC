import React from 'react'
import Logo from '../imagenes/logo.webp';
import "./header.css";

function Header() {
    return(
        <>
        <div className='header'>
            <header className="logo">
                <div className="logo-img">
                    <img src={Logo} width="70px" />
                </div>                
                <div className="logo-text">
                <h1>BEC</h1>
                <p>Biblioteca Estación Central</p>
                </div>
            </header>
        </div>
        </>
    );
}

export default Header;
import React from 'react'
import { Link } from 'react-router'
import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <div className='navbar-top'>OPEN ACCESS · PEER REVIEWED · ISSN 2398-4412 (Online)</div>
                <div className='main-navbar'>
                    <div className='main-navbar-top'>
                        <div className="logo">
                            <h1>Tropical Journal of Science and Practice of Phamarcy</h1>
                            <p>Published by the Institute for Scientific Research</p>
                        </div>
                        <button>Sign In</button>
                    </div>

                    <nav className='main-nav'>
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/about">About</Link>
                        <Link className='nav-link' to="/editorial">Editorial Board</Link>
                        <Link className='nav-link' to="/article">Article</Link>
                        <Link className='nav-link' to="/issues">Issues</Link>
                        <Link className='nav-link' to="/submit">Submit</Link>
                        <Link className='nav-link' to="/contact">Contact</Link>
                    </nav>
                </div>
            </header >
        </>

    )
}

export default Header
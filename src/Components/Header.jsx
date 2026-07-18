import React, { useState } from 'react'
import { Link } from 'react-router'
import './Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <header>
                <div className='main-navbar'>
                    <div className='main-navbar-top'>
                        <div className="logo">
                            <h1><Link to='/'>Journal of Science and Practice of Phamarcy</Link></h1>
                        </div>
                        <div className='header-actions'>
                            <button className='sign-in-btn'><Link to='/admin'>Sign In</Link></button>
                            <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>

                    <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                        <Link className='nav-link' to="/" onClick={closeMenu}>Home</Link>
                        <Link className='nav-link' to="/about" onClick={closeMenu}>About</Link>
                        <Link className='nav-link' to="/editorial" onClick={closeMenu}>Editorial Board</Link>
                        <Link className='nav-link' to="/article" onClick={closeMenu}>Current</Link>
                        <Link className='nav-link' to="/volume" onClick={closeMenu}>Archives</Link>
                        <Link className='nav-link' to="/napa" onClick={closeMenu}>NAPA</Link>
                        <Link className='nav-link' to="/submit-manuscript" onClick={closeMenu}>Submit Manuscript</Link>
                        <Link className='nav-link' to="/contact" onClick={closeMenu}>Contact</Link>
                    </nav>
                </div>
            </header >
        </>

    )
}

export default Header
import React from 'react'
import "./Navbar.scss";
import { ReactComponent as Logo } from './../../Assets/LandingPage/logo.svg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'
const Navbar = () => {
  return (
    <div className='navContainer'>
        <Logo className="logo"/>
        <div className='pagesDesktop'>
            <Link to="/resources">Resources</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/team">Team</Link>
            <Link to="/collaborate">Collaborate</Link>
            <Link to="/services">Services</Link>
        </div>

        <div className='logSign-Desktop'>
            <Link to="/login">
                Log In
            </Link>
            <Link to="/signIn"><Button variant="contained">
              Sign In
            </Button></Link>
        </div>

    </div>
  )
}

export default Navbar;
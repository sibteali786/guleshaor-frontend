import React from 'react'
import "./Navbar.scss";
import { ReactComponent as Logo } from './../../Assets/LandingPage/logo.svg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
const Navbar = () => {
  return (
    <div className='navContainer'>
      <Link to="/" >
        <Logo className="logo"/>
      </Link>
        <div className='pagesDesktop'>
            <Link to="/resources">Resources</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/team">Team</Link>
            <Link to="/collaborate">Collaborate</Link>
            <Link to="/service">Services</Link>
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
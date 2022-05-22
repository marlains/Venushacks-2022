import React from "react";
import logo from '../Images/logo.png'
import{
    Nav,
    NavLogo,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";



const Navbar = () => {
    return (
        <div>
           <Nav>
            <NavLogo to='/'>
                <img src={logo} 
                width="auto"
                height="70"/>
            </NavLogo>

            {/* #TODO add hamburger menu */}

            <NavMenu>
                <NavLink 
                  to="/" 
                  activestyle={{ color:'white' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  activestyle={{ color: 'white' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  activestyle={{ color: 'white' }}
                >
                    Contact
                </NavLink>
                <NavLink 
                  to="/signin" 
                  activestyle={{ color: 'white' }}
                >
                    Sign In
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/signup">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </div>
    );
};
export default Navbar;

// Followed the tutorial from https://dev.to/stephanieopala/simple-navigation-bar-in-react-js-4d5m
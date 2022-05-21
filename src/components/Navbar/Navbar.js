import React from "react";
import{
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/" 
                  activestyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  activestyle={{ color: 'black' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  activestyle={{ color: 'black' }}
                >
                    Contact
                </NavLink>
                <NavLink 
                  to="/signin" 
                  activestyle={{ color: 'black' }}
                >
                    Sign In
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/signup">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
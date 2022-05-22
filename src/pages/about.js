import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pic from "../components/Images/hands.jpg"
import pic2 from "../components/Images/women.jpg"
import logo from "../components/Images/logo-full.png"
import './about.css';

const About = () => {
    return (
        <>
        <div className="table">
            <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5%'
            }}> 
            <div>
            <h1>
                Our Mission
            </h1>
            <p> 
                Provide a safe space for womxn overcoming domestic violence and other injustices, 
                where they can showcase their work and make the means during their healing and recovery.
            </p>
            </div>
            </div>
            <div>
                <img src={pic} width="100%" height="100%" alt="https://unsplash.com/photos/XX2WTbLr3r8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"/>
            </div>

            <div>
                <img src={pic2} width="100%" height="100%" alt="https://unsplash.com/photos/3zgllN5P7Mc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"/>
            </div>

            <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5%'
            }}>
                <div>
            <h1>
                Awareness
            </h1>
            <p> 
                Domestic Violence are worldwide problem and can lead to severe injuries, psychological and emotional issues, and death.
                Here in the U.S. 1 in 3 women and 1 in 4 men have been physically abused. This means that someone one you know might been exposed
                domestic violence.
            </p>
            </div>
            
            </div>
        </div>
        <div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '100px',
            padding: '5%'
            }}>
            <img src={logo}   width="20%" />
            <div>
                <h1> Why Kintsugi?</h1>          
                <p> Kintsugi is Japanese art of reparing broken ceramic with gold. Broken and repaired can be beutiful
                    and strong. Womxn survivors are powerful and gorgeous. Their scars do not define them, they tell us a 
                    new begining is possible.
                </p>
            </div>
            </div>

        </div>
        </>
               
        
    );
};

export default About;
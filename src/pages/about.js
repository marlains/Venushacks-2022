import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pic from "../components/Images/hands.jpg"
import pic2 from "../components/Images/women.jpg"
import './about.css';

const About = () => {
    return (
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
                domestic violence. Womxn are more vulnerable to violence and struggles to seek help, and financial situation is one of the obstacles
            </p>
            </div>
            
            </div>
        </div>
               
        
    );
};

export default About;
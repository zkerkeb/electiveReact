import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>About</h1>
            <Link to="/" >HOME</Link>
            <button onClick={() => navigate('/')} >HOME</button>

        </div>
    );
};

export default About;
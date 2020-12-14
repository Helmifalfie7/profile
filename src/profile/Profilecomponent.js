import React from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';
import './profilecomponent.css'


function Profilecomponent(props) {
    const {fullName,bio,profession}=props;
    const {handleAlert}=props;
    return(
        <div>
            
            <h3>My Name is : {fullName}</h3>
            <h3>Bio : {bio}</h3>
            <h3>I'm an : {profession}</h3>
            <Button variant="success" onClick={() => handleAlert(fullName)}>Hello! what's your Name</Button>
            <br/>
            {props.children};

        </div>
    )
}

// Propstypes and default props
Profilecomponent.defaultProps={
    fullName:"the Greatest Luca changrita"
}

Profilecomponent.propTypes={
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string,
}
export default Profilecomponent


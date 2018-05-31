import React from 'react';
import styling from "./UserOutput.css";

//Function For User Input
const userOutput = (props) => {
    return (
        <div>
        {/* 
            <p> First Paragraph </p>   
            <p> Second Paragraph </p>
        */}

        {/* On Click Of The Prop Which Is Defined When The Component Is Referenced In The App.js */}
        {/* The Username Prop Is Also Referenced To See The Change Being Made, In This Case The Prop Being Changed On Click */}
        <p onClick= {props.click}> Username Is : {props.username}</p>   
        </div>
    )
}

//Exporting ES6 Function userOutput(props)
export default userOutput;
import React from 'react';

//Function For User Input
const userInput = (props) => {

    /*
     Cheeky inline styling  
    */
    const style = {
        border: '2px solid red'
    };

    /*
     Return Statement To Return The Input Field
     The Input Element Accepts 3 Arguments The Inline Styling Object, The onChange Event And The Value Which Is The Property Of The User Input Component
    */
    
    return (
        <div>
            <input type="text" style={style} onChange={props.changed} value={props.username}/>   
        </div>
    )        
}

//Exporting ES6 Function userInput(props)
export default userInput;
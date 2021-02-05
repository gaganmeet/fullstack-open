import React from 'react';

const PersonForm = (props) => {
    return (
        <>
            <p>{props.name}  <input onChange={props.onChange} value={props.value}/></p>   
        </>    
    );
}

export default PersonForm;
import React from 'react';

const Filter = (props) => {
    return (
        <>
            <p>filter shown with</p>
            <input onChange={props.onc} value={props.val} />
        </>
    )
}

export default Filter;
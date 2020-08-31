import React from 'react'

const Errormessage = (props) => {
    console.log(props.message);
    return <div>
        <span className="error">There was an error: {props.message} Please refresh the page.</span>
    </div>
}

export default Errormessage;
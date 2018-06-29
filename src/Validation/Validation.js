import React from 'react';

const Validation = (props) => {
    let validationMsg = 'Text too short';

    if (props.length >= 5) {
        validationMsg = 'Text long enough';
    }

    return (
        <p>{ validationMsg }</p>
    );
};

export default Validation;
import React from 'react'
import PropTypes from 'prop-types';

const NumericInput = ({onKeyUp}) => {
    return <input 
        className={'input-field'}
        onKeyUp={event => onKeyUp(event.target.value)}/>
}

NumericInput.prototypes = {
    onKeyUp: PropTypes.func
}
export default NumericInput;
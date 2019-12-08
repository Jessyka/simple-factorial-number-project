import React from 'react';
import WithContainer from './submitButtonContainer';
import PropTypes from 'prop-types';

const SubmitButton = ({text, onClick}) => {
    return <button 
        className={'submit-button'}
        type='button' 
        onClick={() => onClick()}>{text}</button>
}

SubmitButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default WithContainer(SubmitButton);
import React from 'react';
import NumericInput from '../../component/numericInput/numericInput';
import SubmitButton from '../../component/button/submitButton';
import PropTypes from 'prop-types';
import WithContainer from './factorialNumberContainer'
import '../../App.css';

const FactorialNumeric = ({text, onKeyUp, onClick}) => {
    return <div>
        <div>
            <span>
                <NumericInput 
                    id={'factorial-number-input'} 
                    onKeyUp={value => onKeyUp(value)}/>
            </span>
            <span>
                <SubmitButton 
                    id={'factorial-number-button'}
                    text={'Calculate'} 
                    onClick={() => onClick()}/>
            </span>
        </div>
        <div>
            <span id={'factorial-number-label'}>{text}</span>
        </div>

    </div>
}


FactorialNumeric.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    onKeyUp: PropTypes.func
};

export default WithContainer(FactorialNumeric)
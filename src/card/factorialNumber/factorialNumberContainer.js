import React from 'react';
import {calculateFactorial, isValidValue} from './factorialFunctions'

const WithContainer = WrapperComponent => {
    return class FactoriaNumberContainer extends React.Component {

        constructor(){
            super();
            this.state = {
                value: null,
                text: 'Insert a value and click to calculate factorial.'    
            };
        }

        handleOnClick = () => {
            const {value} = this.state

            if(isValidValue(value)){
                this.setState({ 
                    text: `Factorial= ${calculateFactorial(value)}`
                });
                return;
            }

            this.setState({
                value: null,
                text: 'Invalid value!'    
            });
        }

        render() {
            const { text } = this.state;
            return <WrapperComponent
            text={text}
            onKeyUp={value => this.setState({ value: value})}
            onClick={value => this.handleOnClick(value)} />;
        }
    };

}

export default WithContainer;
import {mount} from '../../../enzyme'
import React from 'react';
import CalculateFactorial from '../calculateFactorial';

describe('Factorial Number Component', () => {

    const simulateKeyUp = (wrapper, componentId, key) => {
        const input = wrapper.find({ id: componentId });
        input.simulate('keyup', { target: { value: key } })
    }

    const simulateSubmit = (wrapper) => {
        const button = wrapper.find({ id: 'factorial-number-button' });
        button.simulate('click');
    }

    it('renders component', () => {
        const factorialNumberComponent = mount(<CalculateFactorial/>);
        expect(factorialNumberComponent).toHaveLength(1);
    });

    it('renders component with initial warning label', () => {
        const initialText = 'Insert a value and click to calculate factorial.' ;
        const factorialNumberComponent = mount(<CalculateFactorial/>);
        const label = factorialNumberComponent.find({ id: 'factorial-number-label' });
        expect(label.text()).toEqual(initialText);
    });

    it('renders correct value after calculates inputed value', () => {
        const expectedMessage = 'Factorial= 1' ;
        const factorialNumberComponent = mount(<CalculateFactorial/>);
        
        simulateKeyUp(factorialNumberComponent, 'factorial-number-input', 1);
        simulateSubmit(factorialNumberComponent);
        const label = factorialNumberComponent.find({ id: 'factorial-number-label' });

        expect(label.text()).toEqual(expectedMessage);
    });

    it('renders error messafe when inputed value is incorrect', () => {
        const errorMessage = 'Invalid value!' ;
        const factorialNumberComponent = mount(<CalculateFactorial/>);
        
        simulateKeyUp(factorialNumberComponent, 'factorial-number-input', 'ab');
        simulateSubmit(factorialNumberComponent);
        const label = factorialNumberComponent.find({ id: 'factorial-number-label' });

        expect(label.text()).toEqual(errorMessage);
    });
});
import {mount} from '../../../enzyme';
import React from 'react';
import NumericInput from '../numericInput';
import {spy} from 'sinon';

describe('Numeric Input Component', () => {
    it('renders numeric input', () => {
        const numericInput = mount(<NumericInput/>);
        expect(numericInput).toHaveLength(1);
    });

    it('calls onKeyDown function with correct value', () => {
        const onKeyUp = spy()
        const numericInput = mount(<NumericInput onKeyUp={onKeyUp}/>);
        numericInput.simulate('keyup', { key: '1' })
        expect(onKeyUp.calledOnce).toBe(true);
    });

});
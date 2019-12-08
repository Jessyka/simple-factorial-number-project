import {mount} from '../../../enzyme';
import React from 'react';
import SubmitButton from '../submitButton';
import {spy} from 'sinon';

describe('Submit Button Component', () => {
    it('renders submit button', () => {
        const submitButton = mount(<SubmitButton/>);
        expect(submitButton).toHaveLength(1);
    });

    it('renders correct label for button', () => {
        const text = 'click here!'
        const submitButton = mount(<SubmitButton text={text}/>);
        expect(submitButton.text()).toEqual(text);
    });

    it('calls onClick function when button click', () => {
        const onClick = spy()
        const submitButton = mount(<SubmitButton onClick={onClick}/>);
        submitButton.simulate('click')
        expect(onClick.calledOnce).toBe(true);
    });

});
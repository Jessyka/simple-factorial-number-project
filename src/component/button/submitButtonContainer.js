import React from 'react';
import PropTypes from 'prop-types';

const WithContainer = WrapperComponent => {
    return class SubmitButtonContainer extends React.Component {

        render() {
            const { text, onClick } = this.props;
            return <WrapperComponent
            text={text}
            onClick={onClick} />;
        }

        static propTypes = { 
            onClick: PropTypes.func,
            text: PropTypes.string
        };
        
    };

}

export default WithContainer;
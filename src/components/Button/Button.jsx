import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ buttonStyle, buttonText }) => (
  <button className={buttonStyle}>
    {buttonText}
  </button>
);

Button.propTypes = {
  buttonStyle: PropTypes.string,
  buttonText: PropTypes.string,
};

Button.defaultProps = {
  buttonStyle: 'medium',
  buttonText: 'press',
};

export default Button;

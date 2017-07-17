import React from 'react';
import PropTypes from 'prop-types';
import './Label.scss';

const Label = ({ labelStyle, labelText }) => (
  <span className={labelStyle}>
    {labelText}
  </span>
);

Label.propTypes = {
  labelStyle: PropTypes.string,
  labelText: PropTypes.string,
};

Label.defaultProps = {
  labelStyle: 'medium',
  labelText: 'press',
};

export default Label;

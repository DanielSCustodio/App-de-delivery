import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  dataTestId,
  handleClick,
  name,
  className,
  disabled,
  type,
}) {
  return (
    <button
      data-testid={ dataTestId }
      onClick={ handleClick }
      name={ name }
      className={ className }
      disabled={ disabled }
      type={ type === 'button' ? 'button' : 'submit' }
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

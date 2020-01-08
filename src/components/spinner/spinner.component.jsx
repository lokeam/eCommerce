import React from 'react';
import './spinner.styles.scss';

const Spinner = WrappedComponent => {
  const hasSpinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
      <div className="spinnerOverlay">
        <div className="spinnerContainer"></div>
      </div>
    ) : ( <WrappedComponent {...otherProps} /> );
  };
  return hasSpinner;
}

export default Spinner;
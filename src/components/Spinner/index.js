import React from 'react';

import { getDisplayName } from '~utils/displayName';

import Loading from './components/loading';

export const withSpinner = (spinnerConfig = {}) => (WrappedComponent) => {
  const WithSpinner = ({ loading, ...passThroughProps }) => {
    const { classNameContainer = '', ...rest } = spinnerConfig;
    return loading ? (
      <div className={classNameContainer}>
        <Loading {...rest} />
      </div>
    ) : (
      <WrappedComponent {...passThroughProps} />
    );
  };
  WithSpinner.displayName = `WithSpinner(${getDisplayName(WrappedComponent)})`;
  return WithSpinner;
};

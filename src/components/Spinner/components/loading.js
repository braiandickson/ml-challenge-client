import React from 'react';
import Spinner from 'react-spinkit';

import { COLOR_SPINNER, SPINNER_DEFAULT } from './constants';

function Loading({
  className = '',
  name = SPINNER_DEFAULT,
  color = COLOR_SPINNER,
  ...rest
}) {
  return (
    <Spinner
      className={className}
      name={name}
      color={color}
      fadeIn="half"
      {...rest}
    />
  );
}

export default Loading;

import React from 'react';
import Spinner from 'react-spinkit';

import { COLOR_SPINNER, SPINNER_DEFAULT } from './constants';

function Loading({ name = SPINNER_DEFAULT, color = COLOR_SPINNER, ...rest }) {
  return (
    <Spinner
      className="row middle spinner"
      name={name}
      color={color}
      fadeIn="half"
      {...rest}
    />
  );
}

export default Loading;

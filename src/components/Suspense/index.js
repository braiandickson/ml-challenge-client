import React, { Suspense } from 'react';

import Loading from '../Spinner/components/loading';

function CustomSuspense({ fallback = Loading, children }) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export default CustomSuspense;

import { contextFactory } from '../../utils/createContext';

import { INITIAL_STATE } from './reducer';

export const { useSelector, Context, useDispatch } = contextFactory(
  INITIAL_STATE
);

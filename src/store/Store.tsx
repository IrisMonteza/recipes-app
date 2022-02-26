import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
// store
import initialState from './state';
import reducer from './reducer';

const Store: any = createContext({});

export function StoreProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useDispatch() {
  const { dispatch } = useContext(Store);

  return dispatch;
}

export function useSelector(callback: any) {
  const { state } = useContext(Store);

  return callback(state);
}

export default Store;

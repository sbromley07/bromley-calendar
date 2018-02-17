import { createStore } from 'redux';
import rootReducer from './reducers/root';

const initialState = {};

const configureStore = () => (
  createStore(
    rootReducer,
    initialState
  )
);

export default configureStore;

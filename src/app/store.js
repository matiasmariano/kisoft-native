import {createStore, applyMiddleware} from 'redux';
import Reducers from '../reducer';
import thunk from 'redux-thunk';

const configureStore = () => {
    let store = createStore(Reducers, applyMiddleware(thunk))
    return store
}

export default configureStore;

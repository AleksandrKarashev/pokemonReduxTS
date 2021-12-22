import { createStore, combineReducers } from 'redux';
import pokemonReducer from '../reducers/pokemonReducer';
import pokesReducer from '../reducers/pokesReducer';

const rootReducer = combineReducers({
   pokemon: pokemonReducer,
   pokes: pokesReducer
});

const configureStore = () => {
   return createStore(rootReducer);
}

export default configureStore;
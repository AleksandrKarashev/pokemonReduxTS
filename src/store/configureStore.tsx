import { Store, createStore, combineReducers } from 'redux';
import pokemonReducer from '../reducers/pokemonReducer';
import pokesReducer from '../reducers/pokesReducer';

import { RootState } from '../../types';

const rootReducer = combineReducers<RootState>({
   pokemon: pokemonReducer,
   pokes: pokesReducer
});

const configureStore = (): Store => {
   return createStore(rootReducer);
}

export default configureStore;
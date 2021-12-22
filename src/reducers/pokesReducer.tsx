import { TypeKeys, ActionTypes } from '../../types';

const initialState: any[] = [];

const pokesReducer = (state = initialState, action: ActionTypes) => {
   switch (action.type) {
      case TypeKeys.POKES_SET:
         return {
            ...state,
            allPokes: action.payload.slice()
         }
      default:
         return state;
   }
}

export default pokesReducer;
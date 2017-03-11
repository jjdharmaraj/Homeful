import { combineReducers } from 'redux';
import locationList, * as fromLocationList from './locationList';

let rootReducer = combineReducers({
  locationList
});

export default rootReducer;

// root selectors (function of entire state)
export let getLocationList = (state) => fromLocationList.getLocationList(state.locationList);

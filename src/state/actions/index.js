import reqwest from 'reqwest';
import {LOCATIONS_ENDPOINT} from '~/configuration';
import {LOAD_LOCATION_LIST} from '~/state/reducers/locationList';

// actions

let makeActionCreator = (type) => (data) => ({type, data});
export let loadLocationList = makeActionCreator(LOAD_LOCATION_LIST);

// thunks

export let ajaxFetchLocationList = () => (dispatch) => {
  let loadLocationListFromJson = async (...funcs) => {
    try {
      let locationList = await reqwest(LOCATIONS_ENDPOINT);
      funcs.reduce((value, func) => func(value), locationList);
    } catch (err) {
      throw new Error('Error loading data from locations endpoint');
    }
  };

  return loadLocationListFromJson(loadLocationList, dispatch);
};

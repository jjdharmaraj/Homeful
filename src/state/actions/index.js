import reqwest from 'reqwest';
import {LOCATIONS_ENDPOINT} from '~/configuration';
import {LOAD_LOCATION_LIST} from '~/state/reducers/locationList';

// actions
let loadLocationListActionCreator = (data) => ({type: LOAD_LOCATION_LIST, data});

// thunks
export let ajaxFetchLocationList = (dispatch) => {
  let loadLocationListFromJson = async () => {
    try {
      let locationList = JSON.parse(await reqwest(LOCATIONS_ENDPOINT));
      return dispatch(loadLocationListActionCreator(locationList));
    } catch (err) {
      throw new Error(err);
    }
  };

  return loadLocationListFromJson();
};

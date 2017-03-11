import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ajaxFetchLocationList} from '~/state/actions';
import {getLocationList} from '~/state/selectors';
import View from './view';

class Layout extends Component {
  componentDidMount() {
    let {dispatch} = this.props;
    dispatch(ajaxFetchLocationList);
  }

  render() {
    return (
      <View {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  locationList: getLocationList(state)
});

let WrappedContainer = connect(mapStateToProps)(Layout);

export default WrappedContainer;

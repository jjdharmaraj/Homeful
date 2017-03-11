import React, { Component } from 'react';
import './App.css';
import CampList from './camp_list/camp_list.js';
import SingleCamp from './SingleCamp/SingleCamp.js';
import AddCamper from './AddCamper/AddCamper.js';
import AddCamp from './AddCamp/AddCamp.js';
import AddNeed from './AddNeed/AddNeed.js';

class App extends Component {
  render() {
    return (
        <div>
        <CampList/>
        <SingleCamp/>
        <AddCamper/>
        <AddCamp/>
        <AddNeed/>


        </div>
    );
  }
}

export default App;

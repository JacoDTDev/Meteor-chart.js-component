import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
//mongo.Collection
import {CustomerOne} from "../imports/api/customerOne";
//React components
import LineChart from "../imports/ui/LineChart";

const renderList = function(cust){
    return cust.map((valuemap)=>{
        return valuemap.value
    })
};

Meteor.startup(() => {
  // code to run on server at startup
  Tracker.autorun(function(){

      let jsx = (
          <div>
              <h1>Chartjs Component</h1>
              <LineChart />
          </div>
      );
      ReactDOM.render(jsx,document.getElementById('app'));
  });
});

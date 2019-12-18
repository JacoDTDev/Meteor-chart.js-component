import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

Meteor.startup(() => {
  // code to run on server at startup
  let jsx = (
      <div>
        <h1>Chartjs Component</h1>
      </div>
  );
  ReactDOM.render(jsx,document.getElementById('app'));
});

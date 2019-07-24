import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import * as serviceWorker from './serviceWorker';


fetch('http://0.0.0.0:50005/ci-jobs/api/v1.0/jobs/')
	.then(function(response) {
		return response.json();
  	})
  	.then(function(myJson) {
		console.log(JSON.stringify(myJson));
		let jobs = myJson.jobs;
		ReactDOM.render(<Dashboard jobs={ jobs } />, document.getElementById('root'));
  	});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

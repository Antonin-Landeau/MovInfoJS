import React, { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './Component/Nav';
import Popular from './Component/Popular';
import Upcoming from './Component/Upcoming';
import Landingpage from './Component/Landingpage';
import Filmdetails from './Component/Filmdetails'

function App() {

	return (
		<Router>
			<div className="App">
				<Nav />

				<Switch>
					<Route path="/" exact component={Landingpage} />
					<Route path="/Popular" exact component={Popular} />
					<Route path="/Popular/:id" component={Filmdetails} />
					<Route path="/upcoming" exact component={Upcoming} />
					<Route path="/upcoming/:id" component={Filmdetails} />
					<Route path="/Recherche" exact component={Filmdetails} />
					<Route path="/Recherche/:id"  component={Filmdetails} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

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
					<Route path="/popular" exact component={Popular} />
					<Route path="/popular/:id" component={Filmdetails} />
					<Route path="/upcoming" component={Upcoming} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

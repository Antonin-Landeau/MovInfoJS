import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<Link to="/">
				<h2>MovInfo</h2>
			</Link>
			<input type="text" />
			<ul>
				<Link to="/popular">
					<li>Popular</li>
				</Link>
				<Link to="/Upcoming">
					<li>Upcoming</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;

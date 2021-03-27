import React, { useEffect, useState } from 'react';
import './../Stylesheets/Nav.scss';

import { Link, NavLink } from 'react-router-dom';
import { searchMovie } from './../Service/TMDB_services';
import SearchIcon from '@material-ui/icons/Search';


function Nav() {


	const [items, setitmes] = useState([])

	const takeInfo = async (e) => {
        let recherche = e.target.value;
        console.log(recherche);
        let rslt = await searchMovie(recherche);
		setitmes(rslt.results)
		console.log(items);

    }

	return (
		<nav className="navbar">
			<Link className="navbar_title" to="/">
				<h1>MovInfo</h1>
			</Link>
			
			<div className="navbar_container">
				<input className="navbar_searchbar" type="text" onChange={takeInfo} placeholder="Search"/>
				<SearchIcon className="navbar_searchbaricon"/>
				<div className="navbar_rsltcontainer">
					{items ? items.slice(0, 5).map(film => (
						<Link className="navbar_rslt" key={film.id} to={`/Recherche/${film.id}`} >
							<p>{film.title}</p>
						</Link>
					)): console.log('vide')}
				</div>
			</div>
			<ul className="navar_linkscontainer">
				<NavLink className="navbar_link" activeClassName="navbar_link_active" to="/Popular">
					<li>Popular</li>
				</NavLink>
				<NavLink className="navbar_link" activeClassName="navbar_link_active" to="/Upcoming">
					<li>Upcoming</li>
				</NavLink>
			</ul>
		</nav>
	);
}

export default Nav;

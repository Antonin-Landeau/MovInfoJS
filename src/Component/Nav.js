import React, { useEffect, useState } from 'react';
import './../Stylesheets/Nav.scss';

//import de react router
import { Link, NavLink } from 'react-router-dom';

//import du service dans le fichier TMDB_services.js
import { searchMovie } from './../Service/TMDB_services';
//import d'icon
import SearchIcon from '@material-ui/icons/Search';

function Nav() {
	//state permettant de mettre a jour la liste des films recherché
	const [items, setitmes] = useState([]);
	//state permettant de récupérer l'etat de la barre de recherche
	const [search, setsearch] = useState('');
	//state permettant de gérer l'ouverture du menu burger en fonction de la classe appliqué
	const [etat, setetat] = useState(false);
	/**
	 * Change l'état d'un booléen
	 */
	const changeEtat = () => {
		setetat(!etat);
	};
	/**
	 * Permet de récupérer les donné d'une input, appel le service de recherche de TMDB
	 * puis mets a jours les state de cette input
	 * @param {e} input de la barre de recherche
	 */
	const takeInfo = async (e) => {
		let recherche = e.target.value;
		console.log(recherche);
		let rslt = await searchMovie(recherche);
		setsearch(recherche);
		setitmes(rslt.results);
		console.log(items);
	};

	return (
		<nav className="navbar">
			<Link className="navbar_title" to="/">
				<h1>MovInfo</h1>
			</Link>

			<div className="navbar_container">
				<input
					className="navbar_searchbar"
					type="text"
					onChange={takeInfo}
					placeholder="Search"
					value={search}
				/>
				<SearchIcon className="navbar_searchbaricon" />
				<div className="navbar_rsltcontainer">
					{/* afficher les 5 resultat de film */}
					{items
						? items.slice(0, 5).map((film) => (
								<Link
									className="navbar_rslt"
									key={film.id}
									to={`/Recherche/${film.id}`}
									onClick={() => {
										//vide la barre de recherche et les résultats du tableau des films trouvées
										setsearch('');
										setitmes([]);
									}}
								>
									<p>{film.title}</p>
								</Link>
						  ))
						: console.log('vide')}
				</div>
			</div>
			<ul
				className={
					!etat
						? //change la classe de nom en fonction de l'etat du menu burger
						  'navar_linkscontainer navar_linkscontainer_close'
						: 'navar_linkscontainer navar_linkscontainer_open'
				}
			>
				<Link className="navbar_title_mobile" to="/">
					<h1>MovInfo</h1>
				</Link>
				<NavLink
					className="navbar_link"
					activeClassName="navbar_link_active"
					to="/Popular"
					onClick={changeEtat}
				>
					<li>Popular</li>
				</NavLink>
				<NavLink
					className="navbar_link"
					activeClassName="navbar_link_active"
					to="/Upcoming"
					onClick={changeEtat}
				>
					<li>Upcoming</li>
				</NavLink>
			</ul>
			<div
				className={!etat ? 'burger burger_close' : 'burger burger_open'}
				onClick={changeEtat}
			>
				<div className="barre"></div>
			</div>
		</nav>
	);
}

export default Nav;

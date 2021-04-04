import React, { useEffect, useState } from 'react';
import { searchMovieById } from './../Service/TMDB_services';
import './../App.scss';
import './../Stylesheets/Filmdetails.scss';
/**
 * affiche les détails d'un film
 * @param {match} object envoyer par le Link du router avec les parametre (ID du film)
 * @returns Le detail des films avec le titre, une photo, les genres, les producteurs,
 * La date de sortie, le budget, et un plot
 *
 */
function Filmdetails({ match }) {
	//state permettant de mettre a jour les donné des films
	const [item, setitem] = useState({});

	useEffect(async () => {
		//fait les recherches de film par id et met a jour
		//le state des films lorsque les itmes changes
		let details = await searchMovieById(match.params.id);
		setitem(details);
	}, [item]);

	console.log(item);
	return (
		<div className="filmdetail_main main">
			<h2>{item.title}</h2>
			<div className="container">
				{item.backdrop_path ? (
					<img
						className="Background"
						src={`http://image.tmdb.org/t/p/w154${item.backdrop_path}`}
						alt="img"
					/>
				) : (
					<div className="Background">Aucune</div>
				)}
				<div className="genre">
					<ul>
						<h3>Genres</h3>
						{item.genres ? (
							item.genres.map((genre) => <li>{genre.name}</li>)
						) : (
							<div></div>
						)}
					</ul>
					<ul>
						<h3>Prduction copagnies</h3>
						{item.production_companies ? (
							item.production_companies.map((genre) => <li>{genre.name}</li>)
						) : (
							<div></div>
						)}
					</ul>
					<ul>
						<h3>Release date</h3>

						{item.release_date ? <li> {item.release_date}</li> : <div></div>}
					</ul>
					<ul>
						<h3>Budget</h3>

						{item.release_date ? <li> {item.budget} $</li> : <div></div>}
					</ul>
				</div>
			</div>
			<h2>Overview</h2>
			{item.overview ? (
				<p className="overview_description">{item.overview}</p>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default Filmdetails;

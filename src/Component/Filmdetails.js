import React, { useEffect, useState } from 'react';
import { searchMovieById } from './../Service/TMDB_services';
import './../App.scss';
import './../Stylesheets/Filmdetails.scss';

function Filmdetails({ match }) {
	const [item, setitem] = useState({});

	useEffect(async () => {
		let details = await searchMovieById(match.params.id);
		setitem(details);
	}, [item]);

	// budget,overview,release_date,production_companies,genres
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
					<div className="Background"></div>
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

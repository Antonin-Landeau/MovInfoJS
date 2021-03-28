import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopular } from './../Service/TMDB_services';
import './../Stylesheets/Upcoming.scss';

function Popular() {
	const [titre, settitre] = useState([]);

	useEffect(async () => {
		let items = await getPopular(1);
		let rslt = items.results;
		settitre(rslt);
	}, []);

	return (
		<div className="upcoming__main main">
			<h1>Popular</h1>
			<div className="carte_container">
				{titre.map((item) => (
					<Link className="carte" key={item.id} to={`/Popular/${item.id}`}>
						<img
							className="carte_image"
							src={`http://image.tmdb.org/t/p/w154` + item.poster_path}
							alt="img"
						/>
						<h2>{item.title}</h2>
						<p className="carte_date">{item.release_date}</p>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Popular;

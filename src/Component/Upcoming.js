import React, { useEffect, useState } from 'react';

//import de react router
import { Link } from 'react-router-dom';

//import du service dans le fichier TMDB_services.js
import { getUpComing } from './../Service/TMDB_services';

import './../Stylesheets/Upcoming.scss';

function Popular() {
	const [titre, settitre] = useState([]);

	useEffect(async () => {
		//permet de reécuperer les information des film populaire
		//de TMDB et de les stocker dans un variable au chargement de cette page
		let items = await getUpComing(1);
		let rslt = items.results;
		settitre(rslt);
	}, []);
	console.log(titre);
	return (
		<div className="upcoming__main main">
			<h1>UpComing</h1>
			<div className="carte_container">
				{/* affichage des film trouver grace a la methode map */}
				{titre.map((item) => (
					<Link className="carte" key={item.id} to={`/Upcoming/${item.id}`}>
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

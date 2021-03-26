import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopular } from './../Service/TMDB_services';

function Popular() {
	const [titre, settitre] = useState([]);

	useEffect(async () => {
		let items = await getPopular(1);
		let rslt = items.results;
		console.log(rslt);
		settitre(rslt)
	}, []);

	return (
		<div>
			<h1>Popular</h1>
			{titre.map(item => (
				<Link key={item.id} to={`/popular/${item.id}`}>
					<h1>{item.title}</h1>
				</Link>
			))}
		</div>
	);
}

export default Popular;

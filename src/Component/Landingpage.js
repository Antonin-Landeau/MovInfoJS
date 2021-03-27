import React from 'react';
import background from './../Medias/frame1.png'
import './../Stylesheets/Landingpage.scss'


function Landingpage() {
	return (
		<div className="main">
			<img className='bg' src={background} alt="img"/>
		</div>
	);
}

export default Landingpage;

import React from 'react';

import './styles/step1.scss';

function Step1Page() {
	return (
		<div className='container-pri'>
			<h1>Personal info</h1>
			<span>Please provide your name, email address, and Phone number.</span>
			<form className='container-sec'>
				<div className='cont-inp'>
					<label htmlFor='name'>Name</label>
					<input type="text" name="name" id="name" className='inp' placeholder='e.g. Gabriel Bursi' autoComplete='off'/>
				</div>
				<div className='cont-inp'> 
					<label htmlFor='email'>Email Address</label>
					<input type="email" name="email" id="email" className='inp' placeholder='e.g. gabrielbursi@lorem.com' autoComplete='off'/>
				</div>
				<div className='cont-inp'> 
					<label htmlFor='phone'>Phone Number</label>
					<input type="tel" name="phone" id="phone" className='inp' placeholder='e.g. +1 234 567 890' autoComplete='off'/>
				</div>
				<button>Next Step</button>
			</form>
		</div>
	);
}

export default Step1Page;
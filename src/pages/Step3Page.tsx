import React from 'react';

import './styles/step3.scss';

function Step3Page() {
	return (
		<div className='add-ons'>
			<h1>Pick add-ons</h1>
			<span>Add-ons help Add-ons help enhance your gaming experience. your gaming experience.</span>
			<div className='ons-cont'>
				<div className='add-on'>
					<p className='name-service'>Online service</p>
					<span className='description-service'>Access to multiplayer games</span>
					<span className='plus-price'>+$10/yr</span>
				</div>
				<div className='add-on'>
					<p className='name-service'>Larger storage</p>
					<span className='description-service'>Extra 1TB of cloud save</span>
					<span className='plus-price'>+$20/yr</span>
				</div>
				<div className='add-on'>
					<p className='name-service'>Customizable profile</p>
					<span className='description-service'>Custom theme on your profile</span>
					<span className='plus-price'>+$20/yr</span>
				</div>
				<div className='btn-cont'>
					<button id="go-back">Go Back</button>
					<button id="next-step">Next Step</button>
				</div>
			</div>
		</div>
	);
}

export default Step3Page;
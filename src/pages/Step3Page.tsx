import React from 'react';

import './styles/step3.scss';

function Step3Page() {
	return (
		<div className='container-pri'>
			<h1>Pick add-ons</h1>
			<span>Add-ons help Add-ons help enhance your gaming experience. your gaming experience.</span>
			<div className='container-sec'>
				<div className='container-ons'>
					<div className='add-on'>
						<div className='on-desc'>
							<input type="checkbox" name="check1" id="check1" />
							<div className='on-text'>
								<p className='name-service'>Online service</p>
								<span className='description-service'>Access to multiplayer games</span>
							</div>
						</div>
						<div className='plus-price'>
							<span>+$10/yr</span>
						</div>
					</div>
					<div className='add-on'>
						<div className='on-desc'>
							<input type="checkbox" name="check2" id="check2"/>
							<div className='on-text'>
								<p className='name-service'>Larger storage</p>
								<span className='description-service'>Extra 1TB of cloud save</span>
							</div>
						</div>
						<div className='plus-price'>
							<span>+$20/yr</span>
						</div>
					</div>
					<div className='add-on'>
						<div className='on-desc'>
							<input type="checkbox" name="check3" id="check3" />
							<div className='on-text'>
								<p className='name-service'>Customizable profile</p>
								<span className='description-service'>Custom theme on your profile</span>
							</div>
						</div>
						<div className='plus-price'>
							<span>+$20/yr</span>
						</div>
					</div>
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
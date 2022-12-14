import React from 'react';

function Step2Page() {
	return (
		<div className='select-plan'>
			<h1>Select your plan</h1>
			<span>You have the option of monthly or yearly billing.</span>
			<div className='cont'>
				<div className='options-cont'>
					<div className="options">   

					</div>
					<div className='toggle'>
						<div className='toggle-text'>
							<p>Monthly</p>
							<label htmlFor='inp-toggle' className='switch'>
								<input id='inp-toggle' type="checkbox"/>
								<span className="slider round"></span>
							</label>
							<p>Yearly</p>
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

export default Step2Page;

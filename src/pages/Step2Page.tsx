import React from 'react';

import IconArcade from '../images/icon-arcade.svg';
import IconAdvanced from '../images/icon-advanced.svg';
import IconPro from '../images/icon-pro.svg';

function Step2Page() {
	return (
		<div className='select-plan'>
			<h1>Select your plan</h1>
			<span>You have the option of monthly or yearly billing.</span>
			<div className='cont'>
				<div className='options-cont'>
					<div className="options">   
						<div className='plan-options'>
							<img src={IconArcade} alt='arcade-icon'></img>
							<div className='plan'>
								<p>Arcade</p>
								<span className='price'>$90/yr</span>
								<span className='bonus'>2 months free</span>
							</div>
						</div>
						<div className='plan-options'>
							<img src={IconAdvanced} alt='arcade-icon'></img>
							<div className='plan'>
								<p>Advanced</p>
								<span className='price'>$120/yr</span>
								<span className='bonus'>2 months free</span>
							</div>
						</div>
						<div className='plan-options'>
							<img src={IconPro} alt='arcade-icon'></img>
							<div className='plan'>
								<p>Pro</p>
								<span className='price'>$150/yr</span>
								<span className='bonus'>2 months free</span>
							</div>
						</div>
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

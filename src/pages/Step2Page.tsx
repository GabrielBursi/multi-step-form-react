import React from 'react';


import IconArcade from '../images/icon-arcade.svg';
import IconAdvanced from '../images/icon-advanced.svg';
import IconPro from '../images/icon-pro.svg';

import './styles/step2.scss';
import Button from '../components/Button';

function Step2Page() {
	return (
		<div className='container-pri'>
			<h1>Select your plan</h1>
			<p className='sub-titulo all-text'>You have the option of monthly or yearly billing.</p>
			<div className='container-sec'>
				<div className='container-ter'>
					<div className="options">   
						<div className='plan-options'>
							<img src={IconArcade} alt='arcade-icon'></img>
							<div className='plan'>
								<p className='name-plan'>Arcade</p>
								<p className='price all-text'>$90/yr</p>
								<p className='bonus'>2 months free</p>
							</div>
						</div>
						<div className='plan-options'>
							<img src={IconAdvanced} alt='arcade-icon'></img>
							<div className='plan'>
								<p className='name-plan'>Advanced</p>
								<p className='price all-text'>$120/yr</p>
								<p className='bonus'>2 months free</p>
							</div>
						</div>
						<div className='plan-options'>
							<img src={IconPro} alt='arcade-icon'></img>
							<div className='plan'>
								<p className='name-plan'>Pro</p>
								<p className='all-text'>$150/yr</p>
								<p className='bonus'>2 months free</p>
							</div>
						</div>
					</div>
					<div className='toggle'>
						<div className='toggle-text'>
							<p className='period'>Monthly</p>
							<label htmlFor='inp-toggle' className='switch'>
								<input id='inp-toggle' type="checkbox"/>
								<p className="slider round"></p>
							</label>
							<p className='period'>Yearly</p>
						</div>
					</div>
				</div>
				<div className='btn-cont'>
					<Button id='go-back' nav='/' text='Go Back' />
					<Button id='go-next' nav='/step3' text='Next Step'/>
				</div>
			</div>
		</div>
	);
}

export default Step2Page;

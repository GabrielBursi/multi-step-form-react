import React from 'react';
import ButtonBack from '../components/ButtonBack';
import ButtonNext from '../components/ButtonNext';

import './styles/step4.scss';

function Step4Page() {
	return (
		<div className='container-pri'>
			<h1>Finishing up</h1> 
			<span>Double-check everything looks OK before confirming.</span>
			<div className='container-sec'>
				<div className='finishing-up'>
					<div className='total-options'>
						<div className='plan-choice'>
							<p>Arcade(Yearly)</p>
							<p>$90/yr</p>
						</div>
						<div className='ons-choice'>
							<div className='ons-select'>
								<p>Online service</p>
								<p className='on-price'>+$10/yr</p>
							</div>
							<div className='ons-select'>
								<p>Larger storage</p>
								<p className='on-price'>+$20/yr</p>
							</div>
						</div>
					</div>
					<div className='total-price'>
						<p>Total (per year)</p>
						<p id='total-price'>$120/yr</p>
					</div>
				</div>
				<div className='btn-cont'>
					<ButtonBack />
					<ButtonNext nav='/complete' text='Complete' />
				</div>
			</div>
		</div>
	);
}

export default Step4Page;

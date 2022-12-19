import React from 'react';
import Button from '../components/Button';

import './styles/step4.scss';

function Step4Page() {
	return (
		<div className='container-pri'>
			<h1>Finishing up</h1> 
			<p className='sub-titulo all-text'>Double-check everything looks OK before confirming.</p>
			<div className='container-sec'>
				<div className='finishing-up'>
					<div className='total-options'>
						<div className='plan-choice'>
							<p>Arcade(Yearly)</p>
							<p>$90/yr</p>
						</div>
						<div className='ons-choice'>
							<div className='ons-select'>
								<p className='all-text'>Online service</p>
								<p className='on-price'>+$10/yr</p>
							</div>
							<div className='ons-select'>
								<p className='all-text'>Larger storage</p>
								<p className='on-price'>+$20/yr</p>
							</div>
						</div>
					</div>
					<div className='total-price'>
						<p className='all-text'>Total (per year)</p>
						<p id='total-price'>$120/yr</p>
					</div>
				</div>
				<div className='btn-cont'>
					<Button id='go-back' nav='/step3' text='Go Back' />
					<Button id='go-next' nav='/complete' text='Complete' />
				</div>
			</div>
		</div>
	);
}

export default Step4Page;

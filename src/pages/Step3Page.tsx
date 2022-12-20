import React, { useContext, useEffect } from 'react';
import Button from '../components/Button';
import { ContextState } from '../context/Context';

import './styles/step3.scss';

function Step3Page() {

	const { setStep3, step3 } = useContext(ContextState);

	useEffect(() => {
		setStep3(!step3);

		return () => setStep3(false);
	}, []);

	return (
		<div className='container-pri'>
			<h1>Pick add-ons</h1>
			<p className='sub-titulo all-text'>Add-ons help Add-ons help enhance your gaming experience. your gaming experience.</p>
			<div className='container-sec'>
				<div className='container-ons'>
					<div className='add-on'>
						<div className='on-desc'>
							<input type="checkbox" name="check1" id="check1" />
							<div className='on-text'>
								<p className='name-service'>Online service</p>
								<p className='description-service all-text'>Access to multiplayer games</p>
							</div>
						</div>
						<div className='plus-price'>
							<p>+$10/yr</p>
						</div>
					</div>
					<div className='add-on'>
						<div className='on-desc'>
							<input type="checkbox" name="check2" id="check2"/>
							<div className='on-text'>
								<p className='name-service'>Larger storage</p>
								<p className='description-service all-text'>Extra 1TB of cloud save</p>
							</div>
						</div>
						<div className='plus-price'>
							<p>+$20/yr</p>
						</div>
					</div>
					<div className='add-on'>
						<div className='on-desc'>
							<input type="checkbox" name="check3" id="check3" />
							<div className='on-text'>
								<p className='name-service'>Customizable profile</p>
								<p className='description-service all-text'>Custom theme on your profile</p>
							</div>
						</div>
						<div className='plus-price'>
							<p>+$20/yr</p>
						</div>
					</div>
				</div>
				<div className='btn-cont'>
					<Button id='go-back' nav='/step2' text='Go Back' />
					<Button id='go-next' nav='/step4' text='Next Step'/>
				</div>
			</div>
		</div>
	);
}

export default Step3Page;
import React, { useContext, useEffect } from 'react';
import Button from '../components/Button';
import { ContextState } from '../context/Context';

import './styles/step4.scss';

function Step4Page() {

	const { setStep4, step4 } = useContext(ContextState);
	const { selectPlan } = useContext(ContextState);
	const { namePlan, pricePlan } = useContext(ContextState);

	useEffect(() => {
		setStep4(!step4);

		return () => setStep4(false); 
	}, []);

	return (
		<div className='container-pri'>
			<h1>Finishing up</h1> 
			<p className='sub-titulo all-text'>Double-check everything looks OK before confirming.</p>
			<div className='container-sec'>
				<div className='finishing-up'>
					<div className='total-options'>
						<div className='plan-choice'>
							<p>{namePlan}{`${selectPlan ? '(Monthly)' : '(Yearly)'}`}</p>
							<p>{pricePlan}</p>
						</div>
						<div className='ons-choice'>
							<div className='ons-select'>
								<p className='all-text'>(NOME DO SERVIÇO)</p>
								<p className='on-price'>+(PREÇO DO SERVIÇO)</p>
							</div>
							<div className='ons-select'>
								<p className='all-text'>(NOME DO SERVIÇO)</p>
								<p className='on-price'>+(PREÇO DO SERVIÇO)</p>
							</div>
						</div>
					</div>
					<div className='total-price'>
						<p className='all-text'>{`Total ${selectPlan ? '(per month)': '(per year)'}`}</p>
						<p id='total-price'>(TOTAL)</p>
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

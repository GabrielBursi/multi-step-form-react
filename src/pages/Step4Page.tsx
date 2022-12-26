import React, { useContext, useEffect } from 'react';
import Button from '../components/Button';
import { ContextState } from '../context/Context';

import OnsType from '../types/OnsType';

import './styles/step4.scss';

function Step4Page() {

	const { setStep4, step4 } = useContext(ContextState);
	const { selectPlan } = useContext(ContextState);
	const { namePlan, pricePlan } = useContext(ContextState);
	const { choiceOns } = useContext(ContextState);

	
	const prices = choiceOns.map((element: OnsType) => {
		const prices = element.price.replace('$','').replace('/mo','').replace('/yr','');
		return (Number(prices));
	});
    
	const priceNumber = pricePlan.replace('$', '').replace('/mo', '').replace('/yr', '');
	const soma = prices.reduce((soma, atual) => soma + atual, 0) + Number(priceNumber);

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
							{choiceOns.length > 0 ? choiceOns.map((ons: OnsType) => (
								<div className='ons-select' key={ons.name}>
									<p className='all-text'>{ons.name}</p>
									<p className='on-price'>+{ons.price}</p>
								</div>
							)) : <span id='ons-empty'>NENHUM SERVIÇO ADICIONADO</span>}
						</div>
					</div>
					<div className='total-price'>
						<p className='all-text'>{`Total ${selectPlan ? '(per month)': '(per year)'}`}</p>
						<p id='total-price'>{`+$${soma}${selectPlan ? '/mo' : '/yr'}`}</p>
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

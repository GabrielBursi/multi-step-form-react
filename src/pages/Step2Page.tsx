import React, { useContext, useEffect } from 'react';

import IconArcade from '../images/icon-arcade.svg';
import IconAdvanced from '../images/icon-advanced.svg';
import IconPro from '../images/icon-pro.svg';

import './styles/step2.scss';
import Button from '../components/Button';
import { ContextState } from '../context/Context';

function Step2Page() {


	const { setStep2, step2 } = useContext(ContextState);
	const { selectPlan, setSelectPlan } = useContext(ContextState);
	const { setNamePlan, setPricePlan } = useContext(ContextState);


	useEffect(() => {
		setStep2(!step2);

		return () => setStep2(false);
	}, []);

	function handlePlan(id: number){
		const namePlan = Array.from(document.querySelectorAll('.name-plan'));
		setNamePlan(namePlan[id].textContent);

		const pricePlan = Array.from(document.querySelectorAll('.price'));
		setPricePlan(pricePlan[id].textContent);

		changeSelected(id);
	}

	function changeSelected(id: number){
		const planContainer = Array.from(document.querySelectorAll('.plan-options'));
		planContainer.forEach(div => {
			if (div.classList.contains('selected')) div.classList.remove('selected');
		});
		planContainer[id].classList.toggle('selected');
	}
    
	return (
		<div className='container-pri'>
			<h1>Select your plan</h1>
			<p className='sub-titulo all-text'>You have the option of monthly or yearly billing.</p>
			<div className='container-sec'>
				<div className='container-ter'>
					<div className="options">   
						<div className='plan-options' onClick={()=>handlePlan(0)}>
							<img src={IconArcade} alt='arcade-icon'></img>
							<div className='plan'>
								<p className='name-plan'>Arcade</p>
								<p className='price all-text'>{selectPlan ? '$9/mo': '$90/yr'}</p>
								{!selectPlan && <p className='bonus'>2 months free</p>}
							</div>
						</div>
						<div className='plan-options' onClick={()=>handlePlan(1)}>
							<img src={IconAdvanced} alt='arcade-icon'></img>
							<div className='plan'>
								<p className='name-plan'>Advanced</p>
								<p className='price all-text'>{selectPlan ? '$12/mo' : '$120/yr'}</p>
								{!selectPlan && <p className='bonus'>2 months free</p>}
							</div>
						</div>
						<div className='plan-options' onClick={()=>handlePlan(2)}>
							<img src={IconPro} alt='arcade-icon'></img>
							<div className='plan'>
								<p className='name-plan'>Pro</p>
								<p className='price all-text'>{selectPlan ? '$15/mo': '$150/yr'}</p>
								{!selectPlan && <p className='bonus'>2 months free</p>}
							</div>
						</div>
					</div>
					<div className='toggle'>
						<div className='toggle-text'>
							<p className={`period ${selectPlan ? 'select-plan' : ''}`}>Monthly</p>
							<label htmlFor='inp-toggle' className='switch'>
								<input id='inp-toggle' type="checkbox" onChange={() => setSelectPlan(!selectPlan)}/>
								<p className="slider round"></p>
							</label>
							<p className={`period ${!selectPlan ? 'select-plan' : ''}`}>Yearly</p>
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

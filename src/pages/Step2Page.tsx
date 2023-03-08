import React, { useContext, useEffect, } from 'react';

import IconArcade from '../images/icon-arcade.svg';
import IconAdvanced from '../images/icon-advanced.svg';
import IconPro from '../images/icon-pro.svg';

import './styles/step2.scss';
import Button from '../components/Button';
import { ChoiceOptionsContext, StepsContext } from '../context';

function Step2Page() {

	const { setStep2, step2 } = useContext(StepsContext);
	const { selectPlan, setSelectPlan, setNamePlan, setPricePlan } = useContext(ChoiceOptionsContext);


	useEffect(() => {
		setStep2(!step2);
		setSelectPlan(true);
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
		planContainer[id].classList.add('selected');
	}
    
	function verifyPlan(): boolean{
		const planContainer = Array.from(document.querySelectorAll('.plan-options'));
		const notice =  document.getElementById('plan-empty');

		const planEmpty = planContainer.filter(div => !div.classList.contains('selected'));
		if(planEmpty.length === 3){
            notice!.style.display = 'block';
            return true;
		}
		return false;
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
				<p className='all-text' id='plan-empty'>You need to choose a plan.</p>
				<div className='btn-cont'>
					<Button id='go-back' nav='/' text='Go Back' />
					<Button id='go-next' nav='/step3' text='Next Step' verifyPlan={verifyPlan}/>
				</div>
			</div>
		</div>
	);
}

export default Step2Page;

import React, {useContext} from 'react';
import { StepsContext } from './context';
import RoutesSteps from './Routes';

import './styles/App.scss';

function App() {

	const { step1, step2, step3, step4 } = useContext(StepsContext);

	return (
		<div className='container'>
			<main className='main'>
				<aside className='aside'>
					<div className='cont-steps'>
						<div className='step'>
							<div className={`${step1 ? 'hover-number' : 'step-number'}`}>
								<p>1</p>
							</div>
							<div className='text-step'>
								<p className='step-p'>STEP 1</p>
								<p><p className='step-p2'>YOUR INFO</p></p>
							</div>
						</div>
						<div className='step'>
							<div className={`${step2 ? 'hover-number' : 'step-number'}`}>
								<p>2</p>
							</div>
							<div className='text-step'>
								<p className='step-p'>STEP 2</p>
								<p><p className='step-p2'>SELECT PLAN</p></p>
							</div>
						</div>
						<div className='step'>
							<div className={`${step3 ? 'hover-number' : 'step-number'}`}>
								<p>3</p>
							</div>
							<div className='text-step'>
								<p className='step-p'>STEP 3</p>
								<p><p className='step-p2'>ADD-ONS</p></p>
							</div>
						</div>
						<div className='step'>
							<div className={`${step4 ? 'hover-number' : 'step-number'}`}>
								<p>4</p>
							</div>
							<div className='text-step'>
								<p className='step-p'>STEP 4</p>
								<p><p className='step-p2'>SUMMARY</p></p>
							</div>
						</div>
					</div>
				</aside>
				<RoutesSteps/>
			</main>
		</div>
	);
}

export default App;

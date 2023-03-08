import React, { useContext } from 'react';
import { SideBar } from './components';
import { StepsContext } from './context';
import RoutesSteps from './Routes';

import './styles/App.scss';

type Steps = {
	stepActive: boolean,
	stepPage: number,
	title: string
}

function App() {

	const { step1, step2, step3, step4 } = useContext(StepsContext);

	const steps: Steps[] = [
			{ stepActive: step1, stepPage: 1, title: 'YOUR INFO' },
			{ stepActive: step2, stepPage: 2, title: 'SELECT PLAN' },
			{ stepActive: step3, stepPage: 3, title: 'ADD-ONS' },
			{ stepActive: step4, stepPage: 4, title: 'SUMMARY' },
		]

	return (
		<div className='container'>
			<main className='main'>
				<SideBar steps={steps}/>
				<RoutesSteps/>
			</main>
		</div>
	);
}

export default App;

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CompletePage from './pages/CompletePage';

import Step1Page from './pages/Step1Page';
import Step2Page from './pages/Step2Page';
import Step3Page from './pages/Step3Page';
import Step4Page from './pages/Step4Page';

function RoutesSteps() {
	return (
		<Routes>
			<Route path='/' element={<Step1Page/>}/>
			<Route path='/step2' element={<Step2Page/>}/>
			<Route path='/step3' element={<Step3Page/>}/>
			<Route path='/step4' element={<Step4Page/>}/>
			<Route path='/complete' element={<CompletePage/>}/>
		</Routes>
	);
}

export default RoutesSteps;

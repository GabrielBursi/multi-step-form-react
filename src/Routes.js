import React from 'react';
import {Routes, Route} from 'react-router-dom';

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
		</Routes>
	);
}

export default RoutesSteps;

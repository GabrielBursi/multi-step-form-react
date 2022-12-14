import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RoutesSteps from './Routes';

import './styles/App.scss';

function App() {

	const navigate = useNavigate();

	return (
		<div className='container'>
			<main className='main'>
				<aside className='aside'>
					<div className='cont-steps'>
						<div className='step'>
							<div className='step-number' onClick={()=>navigate('/')}>
								<Link to='/'>1</Link>
							</div>
							<div className='text-step'>
								<span>STEP 1</span>
								<Link to='/'><p>YOUR INFO</p></Link>
							</div>
						</div>
						<div className='step'>
							<div className='step-number' onClick={()=>navigate('/step2')}>
								<Link to='/step2'>2</Link>
							</div>
							<div className='text-step'>
								<span>STEP 2</span>
								<Link to='/step2'><p>SELECT PLAN</p></Link>
							</div>
						</div>
						<div className='step'>
							<div className='step-number' onClick={()=>navigate('/step3')}>
								<Link to='/step3'>3</Link>
							</div>
							<div className='text-step'>
								<span>STEP 3</span>
								<Link to='/step3'><p>ADD-ONS</p></Link>
							</div>
						</div>
						<div className='step'>
							<div className='step-number' onClick={()=>navigate('/step4')}>
								<Link to='/step4'>4</Link>
							</div>
							<div className='text-step'>
								<span>STEP 4</span>
								<Link to='/step4'><p>SUMMARY</p></Link>
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

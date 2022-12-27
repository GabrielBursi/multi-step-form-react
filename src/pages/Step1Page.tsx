import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextState } from '../context/Context';

import './styles/step1.scss';

function Step1Page() {

	const { setStep1 } = useContext(ContextState);
	const { name, setName, phone, setPhone, email, setEmail } = useContext(ContextState);

	useEffect(() => {
		setStep1(true);

		return () => setStep1(false);
	}, []);

	const navigate = useNavigate();

	function handleSubmit(e: React.FormEvent){
		e.preventDefault();

		const inputs = Array.from(document.querySelectorAll('input'));
		inputs.forEach(inp => {
			if (inp.value !== ''){
				inp.style.borderColor = '#6e6e6e';  
			}else{
				inp.style.borderColor = '#FF0000';
			} 
		});

		const emptyInputs = inputs.filter(inp => inp.value === '');
		if (!emptyInputs.length) navigate('/step2');
	}

	return (
		<div className='container-pri'>
			<h1>Personal info</h1>
			<p className='sub-titulo all-text'>Please provide your name, email address, and Phone number.</p>
			<form className='container-sec' onSubmit={handleSubmit}>
				<div className='cont-inp'>
					<label htmlFor='name'>Name</label>
					<input 
						
						type="text" 
						name="name" 
						id="name" 
						className='inp' 
						placeholder='e.g. Gabriel Bursi' 
						autoComplete='off' 
						maxLength={30} 
						value={name} 
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='cont-inp'> 
					<label htmlFor='email'>Email Address</label>
					<input 
						type="text" 
						name="email" 
						id="email" 
						className='inp' 
						placeholder='e.g. gabrielbursi@lorem.com' 
						autoComplete='off' 
						maxLength={30} 
						value={email} 
						onChange={(e) => setEmail(e.target.value)} 
					/>
				</div>
				<div className='cont-inp'> 
					<label htmlFor='phone'>Phone Number</label>
					<input 
						type="tel" 
						name="phone" 
						id="phone" 
						className='inp' 
						placeholder='e.g. +1 234 567 890' 
						autoComplete='off' 
						value={phone} 
						onChange={(e) => setPhone(e.target.value)} />
				</div>
				<button id='go-next' type='submit'>Next Step</button>
			</form>
		</div>
	);
}

export default Step1Page;
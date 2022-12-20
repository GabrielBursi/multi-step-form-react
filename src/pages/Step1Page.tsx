import React, { useState } from 'react';
import Button from '../components/Button';

import './styles/step1.scss';

function Step1Page() {
    
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

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
		return emptyInputs;
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
						type="email" 
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
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext, StepsContext } from '../context';
import * as yup from 'yup'
import InputMask from "react-input-mask";

import '../TraducoesYup'

import './styles/step1.scss';

interface SchemaForm {
	name: string,
	email:string,
	phone: string,
}

const schemaForm:yup.ObjectSchema<SchemaForm> = yup.object({
	name: yup.string().required().min(2),
	email: yup.string().required().email(),
	phone: yup.string().required().matches(/^\([0-9]{2}\)\s9\s[0-9]{4}-[0-9]{4}$/)
})

function Step1Page() {

	const { setStep1 } = useContext(StepsContext);
	const { name, setName, phone, setPhone, email, setEmail, setEmailError, setNameError, setPhoneError, emailError, nameError, phoneError } = useContext(FormContext);

	useEffect(() => {
		setStep1(true);

		return () => setStep1(false);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const navigate = useNavigate();

	function handleSubmit(e: React.FormEvent){
		e.preventDefault();

		schemaForm.validate({name, email, phone}, {abortEarly: false})
			.then(() => { navigate('/step2') })
			.catch((errors: yup.ValidationError) => {
				errors.inner.forEach(error => {
					switch (error.path) {
						case 'name':
							setNameError(error.message);
							break
						case 'email':
							setEmailError(error.message);
							break
						case 'phone':
							setPhoneError(error.message);
							break
					}
				});
			})
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
						placeholder='Ex: Gabriel Bursi' 
						autoComplete='off' 
						maxLength={30} 
						value={name} 
						onChange={(e) => {setName(e.target.value); setNameError('')}}
					/>
					<span className='error-name'>{nameError}</span>
				</div>
				<div className='cont-inp'> 
					<label htmlFor='email'>Email Address</label>
					<input 
						type="text" 
						name="email" 
						id="email" 
						className='inp' 
						placeholder='Ex: gabrielbursi@lorem.com' 
						autoComplete='off' 
						maxLength={30} 
						value={email} 
						onChange={(e) => {setEmail(e.target.value); setEmailError('')}}
					/>
					<span className='error-name'>{emailError}</span>
				</div>
				<div className='cont-inp'> 
					<label htmlFor='phone'>Phone Number</label>
					<InputMask
						mask="(99) 9 9999-9999"
						className='inp' 
						value={phone}
						onChange={(e) => {setPhone(e.target.value); setPhoneError('')}}
					>
						<input placeholder='Ex: (99) 9 9999-9999' autoComplete='off' />
					</InputMask>
					<span className='error-name'>{phoneError}</span>
				</div>
				<button id='go-next' type='submit'>Next Step</button>
			</form>
		</div>
	);
}

export default Step1Page;
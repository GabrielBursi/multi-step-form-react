import React from 'react';
import { useNavigate } from 'react-router-dom';

type typeProps = {
    nav: string,
    text: string,
    id:string,
    verifyPlan? : () => boolean
}

function Button({ nav, text, id, verifyPlan }: typeProps) {

	const navigate = useNavigate();

	function handleClick(e: React.FormEvent){
		e.preventDefault();
		if(verifyPlan){
			if(verifyPlan()) return;
		}
		if(nav === '') return;
		navigate(nav);
	}

	return (
		<button id={id} type='submit' onClick={handleClick} className='teste'>
			{text}
		</button>
	);
}

export default Button;
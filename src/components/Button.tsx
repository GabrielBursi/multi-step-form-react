import React from 'react';
import { useNavigate } from 'react-router-dom';

type typeProps = {
    nav: string,
    text: string,
    id:string
}

function Button({nav, text, id}: typeProps) {

	const navigate = useNavigate();

	function handleClick(e: React.FormEvent){
		e.preventDefault();
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
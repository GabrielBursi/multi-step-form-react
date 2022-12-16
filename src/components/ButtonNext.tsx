import React from 'react';
import { useNavigate } from 'react-router-dom';

type typeProps = {
    nav: string,
    text: string
}

function ButtonNext({nav, text}: typeProps) {

	const navigate = useNavigate();

	function handleClick(e: React.FormEvent){
		e.preventDefault();
		if(nav === '') return;

		navigate(nav);
	}

	return (
		<button id='next-step' type='submit' onClick={handleClick}>
			{text}
		</button>
	);
}

export default ButtonNext;
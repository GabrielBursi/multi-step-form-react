import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChoiceOptionsContext } from '../context';

type typeProps = {
    nav: string,
    text: string,
    id:string,
    verifyPlan? : () => boolean
}

function Button({ nav, text, id, verifyPlan }: typeProps) {

	const navigate = useNavigate();

	const { setChoiceOns, selectedChoiceOns } = useContext(ChoiceOptionsContext);

	function handleClick(e: React.FormEvent){
		e.preventDefault();
		if(verifyPlan){
			if(verifyPlan()) return;
		}
		if(nav === '') return;

		setChoiceOns(selectedChoiceOns);
		navigate(nav);
	}

	return (
		<button id={id} type='submit' onClick={handleClick} className='teste'>
			{text}
		</button>
	);
}

export default Button;
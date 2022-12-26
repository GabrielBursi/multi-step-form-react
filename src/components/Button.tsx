import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextState } from '../context/Context';

type typeProps = {
    nav: string,
    text: string,
    id:string,
    verifyPlan? : () => boolean
}

function Button({ nav, text, id, verifyPlan }: typeProps) {

	const navigate = useNavigate();

	const { selectedChoiceOns } = useContext(ContextState);
	const { setChoiceOns } = useContext(ContextState);

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
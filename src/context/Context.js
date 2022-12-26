import React, { createContext, useState } from 'react';

export const ContextState = createContext();


// eslint-disable-next-line react/prop-types
function Provider({children}) {

	const [step1, setStep1] = useState(false);
	const [step2, setStep2] = useState(false);
	const [step3, setStep3] = useState(false);
	const [step4, setStep4] = useState(false);
	const [selectPlan, setSelectPlan] = useState(true);
	const [namePlan, setNamePlan] = useState('Arcade');
	const [pricePlan, setPricePlan] = useState('$9/mo');
	const [choiceOns, setChoiceOns] = useState([]);
	const selectedChoiceOns = [];

	return (
		<ContextState.Provider value={{
			step1,
			setStep1,
			step2,
			setStep2,
			step3,
			setStep3,
			step4,
			setStep4, 
			selectPlan, 
			setSelectPlan, 
			choiceOns,
			setChoiceOns,
			namePlan,
			setNamePlan,
			pricePlan,
			setPricePlan,
			selectedChoiceOns
		}}>
			{children}
		</ContextState.Provider>
	);
}

export default Provider;
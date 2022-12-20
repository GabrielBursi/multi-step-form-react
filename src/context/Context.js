import React, { createContext, useState } from 'react';

export const ContextState = createContext();


// eslint-disable-next-line react/prop-types
function Provider({children}) {

	const [step1, setStep1] = useState(false);
	const [step2, setStep2] = useState(false);
	const [step3, setStep3] = useState(false);
	const [step4, setStep4] = useState(false);

	return (
		<ContextState.Provider value={{step1,setStep1,step2,setStep2,step3,setStep3,step4,setStep4}}>
			{children}
		</ContextState.Provider>
	);
}

export default Provider;
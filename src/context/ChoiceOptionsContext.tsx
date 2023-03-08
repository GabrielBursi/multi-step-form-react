import React, { createContext, useState } from 'react';
import { Children } from '../types/Children';
import OnsType from '../types/OnsType';

interface ContextData  {
	selectPlan: boolean,
	setSelectPlan: (value: boolean) => void,
	choiceOns:OnsType[],
	setChoiceOns: (value: OnsType[]) => void,
	namePlan: string,
	setNamePlan: (value: string) => void,
	pricePlan: string,
	setPricePlan: (value: string) => void,
	selectedChoiceOns: OnsType[],
}

export const ChoiceOptionsContext = createContext({} as ContextData);

export function ChoiceOptionsContextProvider({children}:Children) {

	const [selectPlan, setSelectPlan] = useState(true);
	const [namePlan, setNamePlan] = useState('Arcade');
	const [pricePlan, setPricePlan] = useState('$9/mo');
	const [choiceOns, setChoiceOns] = useState<OnsType[]>([]);
	const selectedChoiceOns: OnsType[] = [];

	return (
		<ChoiceOptionsContext.Provider value={{
			selectPlan, 
			setSelectPlan, 
			choiceOns,
			setChoiceOns,
			namePlan,
			setNamePlan,
			pricePlan,
			setPricePlan,
			selectedChoiceOns,
		}}>
			{children}:Children
		</ChoiceOptionsContext.Provider>
	);
}
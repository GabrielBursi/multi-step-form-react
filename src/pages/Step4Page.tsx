import React from 'react';
import ButtonBack from '../components/ButtonBack';
import ButtonNext from '../components/ButtonNext';

function Step4Page() {
	return (
		<>
			<div className='btn-cont'>
				<ButtonBack />
				<ButtonNext nav='/complete' text='Complete' />
			</div>
		</>
	);
}

export default Step4Page;

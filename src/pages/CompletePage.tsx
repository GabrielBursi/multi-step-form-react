import React from 'react';

import Complete from '../images/icon-thank-you.svg';

import './styles/complete.scss';

export default function CompletePage() {
	return (
		<div className='complete'>
			<img src={Complete} alt='complete'></img>
			<h1>Thank You!</h1>
			<p>Thanks for confirming your subscription! We hope you have
                fun using our platform. If you ever need support, please feel
                free to email us at support@loremgaming.com.</p>
		</div>
	);
}

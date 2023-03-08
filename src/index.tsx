import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProviderContext } from './context';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<ProviderContext>
				<App />
			</ProviderContext>
		</React.StrictMode>
	</BrowserRouter>
);
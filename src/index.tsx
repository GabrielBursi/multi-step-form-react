import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Provider from './context/Context';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider>
				<App />
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
);
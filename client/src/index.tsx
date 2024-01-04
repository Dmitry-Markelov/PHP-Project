import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './fonts/FendraSansPro/FedraSansPro-BoldItalic.ttf';

import './fonts/Shancalluna/Shancalluna_regular.ttf'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

//css
import './asset/css/reset.css'
import  './asset/css/theme.css'
import './asset/css/custom.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
    <App />
);
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import './index.css';
import AppRouter from './routes/appRouter'; // Import the AppRouter component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter /> {/* Render the AppRouter component */}
  </React.StrictMode>
);


reportWebVitals();

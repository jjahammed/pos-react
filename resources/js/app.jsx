import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Backend from './components/backend/App'
import Test from './components/backend/Test'
const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.render(<Test />, document.getElementById('some-selector'));


root.render(

    <Backend />
  // <React.StrictMode>
  // </React.StrictMode>
);






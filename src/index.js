import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StudentList from './components/Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentList>
      <App />
    </StudentList>
  </React.StrictMode>
);


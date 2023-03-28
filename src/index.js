import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Parent from './Components/StateClass/Parent';
// import Parent4 from './Components/Statefunction/Parent-4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <div>
      <Parent />
      {/* <Parent4 /> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

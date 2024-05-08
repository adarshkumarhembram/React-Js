import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import './index.css'; // Import CSS file
import Body from './Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>
);

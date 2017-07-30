import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index.jsx';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Index),
    document.getElementById('mount')
  );
});
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)

reportWebVitals()
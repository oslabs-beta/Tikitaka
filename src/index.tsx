import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from "./components/App"
import "./styles/app.scss"

ReactDOM.render(
    <App />, 
    document.querySelector('.root')
);
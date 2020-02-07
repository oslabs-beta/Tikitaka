import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from "./components/App"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/style.scss"

ReactDOM.render(
    <App />, 
    document.querySelector('.root')
);
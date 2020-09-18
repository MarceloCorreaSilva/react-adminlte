import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './adminlte/views/page/Dashboard';
import Widgets from './adminlte/views/page/Widgets';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/widgets" component={Widgets} exact />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

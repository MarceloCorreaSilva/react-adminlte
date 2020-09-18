import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './adminlte/views/page/Dashboard';
import Widgets from './adminlte/views/page/Widgets';
import ChartJS from './adminlte/views/page/Charts/ChartJS';
import FlotCharts from './adminlte/views/page/Charts/Flot';
import InlineCharts from './adminlte/views/page/Charts/Inline';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/widgets" component={Widgets} />
                <Route path="/charts/chartjs" component={ChartJS} />
                <Route path="/charts/flot" component={FlotCharts} />
                <Route path="/charts/inline" component={InlineCharts} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

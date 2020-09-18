import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './adminlte/views/page/Dashboard';
import Widgets from './adminlte/views/page/Widgets';
import ChartJS from './adminlte/views/page/Charts/ChartJS';
import FlotCharts from './adminlte/views/page/Charts/Flot';
import InlineCharts from './adminlte/views/page/Charts/Inline';
import SimpleTable from './adminlte/views/page/Tables/Simple';
import DataTable from './adminlte/views/page/Tables/Data';
import JsGridTable from './adminlte/views/page/Tables/JsGrid';
import GeneralForm from './adminlte/views/page/Forms/General';
import AdvancedForm from './adminlte/views/page/Forms/Advanced';
import EditorsForm from './adminlte/views/page/Forms/Editors';
import ValidationForm from './adminlte/views/page/Forms/Validation';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/widgets" component={Widgets} />
                <Route path="/charts/chartjs" component={ChartJS} />
                <Route path="/charts/flot" component={FlotCharts} />
                <Route path="/charts/inline" component={InlineCharts} />
                <Route path="/tables/simple" component={SimpleTable} />
                <Route path="/tables/data" component={DataTable} />
                <Route path="/tables/jsgrid" component={JsGridTable} />
                <Route path="/forms/general" component={GeneralForm} />
                <Route path="/forms/advanced" component={AdvancedForm} />
                <Route path="/forms/editors" component={EditorsForm} />
                <Route path="/forms/validation" component={ValidationForm} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

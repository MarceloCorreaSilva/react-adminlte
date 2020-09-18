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
import GeneralUi from './adminlte/views/page/Ui/General';
import IconsUi from './adminlte/views/page/Ui/Icons';
import ButtonsUi from './adminlte/views/page/Ui/Buttons';
import SlidersUi from './adminlte/views/page/Ui/Sliders';
import ModalsUi from './adminlte/views/page/Ui/Modals';
import NavbarUi from './adminlte/views/page/Ui/Navbar';
import TimelineUi from './adminlte/views/page/Ui/Timeline';
import RibbonsUi from './adminlte/views/page/Ui/Ribbons';
import Calendar from './adminlte/views/page/Calendar';

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
                <Route path="/ui/general" component={GeneralUi} />
                <Route path="/ui/icons" component={IconsUi} />
                <Route path="/ui/buttons" component={ButtonsUi} />
                <Route path="/ui/sliders" component={SlidersUi} />
                <Route path="/ui/modals" component={ModalsUi} />
                <Route path="/ui/navbar" component={NavbarUi} />
                <Route path="/ui/timeline" component={TimelineUi} />
                <Route path="/ui/ribbons" component={RibbonsUi} />
                <Route path="/calendar" component={Calendar} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

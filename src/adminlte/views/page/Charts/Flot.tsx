import React, { useEffect } from 'react';
import Layout from '../../layouts/Dashboard';

const FlotCharts: React.FC = () => {
    useEffect(() => {
        const _script = document.createElement('script');
        _script.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/flot/jquery.flot.js`;
        _script.async = true;

        const _script2 = document.createElement('script');
        _script2.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/flot-old/jquery.flot.resize.min.js`;
        _script2.async = true;

        const _script3 = document.createElement('script');
        _script3.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/flot-old/jquery.flot.pie.min.js`;
        _script3.async = true;

        const _script4 = document.createElement('script');
        _script4.src = `${process.env.PUBLIC_URL}/assets/adminlte/dist/js/pages/charts/flot.js`;
        _script4.async = true;

        document.body.appendChild(_script);
        document.body.appendChild(_script2);
        document.body.appendChild(_script3);
        document.body.appendChild(_script4);
    }, []);

    return (
        <Layout title="Flot Charts">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {/* interactive chart */}
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="far fa-chart-bar" />
                                    Interactive Area Chart
                                </h3>
                                <div className="card-tools">
                                    Real time
                                    <div className="btn-group" id="realtime" data-toggle="btn-toggle">
                                        <button
                                            type="button"
                                            className="btn btn-default btn-sm active"
                                            data-toggle="on"
                                        >
                                            On
                                        </button>
                                        <button type="button" className="btn btn-default btn-sm" data-toggle="off">
                                            Off
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="interactive" style={{ height: 300 }} />
                            </div>
                            {/* /.card-body*/}
                        </div>
                        {/* /.card */}
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
                <div className="row">
                    <div className="col-md-6">
                        {/* Line chart */}
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="far fa-chart-bar" />
                                    Line Chart
                                </h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="line-chart" style={{ height: 300 }} />
                            </div>
                            {/* /.card-body*/}
                        </div>
                        {/* /.card */}
                        {/* Area chart */}
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="far fa-chart-bar" />
                                    Area Chart
                                </h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="area-chart" style={{ height: 338 }} className="full-width-chart" />
                            </div>
                            {/* /.card-body*/}
                        </div>
                        {/* /.card */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-6">
                        {/* Bar chart */}
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="far fa-chart-bar" />
                                    Bar Chart
                                </h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="bar-chart" style={{ height: 300 }} />
                            </div>
                            {/* /.card-body*/}
                        </div>
                        {/* /.card */}
                        {/* Donut chart */}
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="far fa-chart-bar" />
                                    Donut Chart
                                </h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="donut-chart" style={{ height: 300 }} />
                            </div>
                            {/* /.card-body*/}
                        </div>
                        {/* /.card */}
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
            </div>
            {/* /.container-fluid */}
        </Layout>
    );
};

export default FlotCharts;

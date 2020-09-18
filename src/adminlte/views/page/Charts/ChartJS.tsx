import React, { useEffect } from 'react';
import Layout from '../../layouts/Dashboard';

const ChartJS: React.FC = () => {
    useEffect(() => {
        const _script = document.createElement('script');
        _script.src = `${process.env.PUBLIC_URL}/assets/adminlte/dist/js/pages/charts/chartsjs.js`;
        _script.async = true;

        document.body.appendChild(_script);
    }, []);

    return (
        <Layout title="ChartJS">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        {/* AREA CHART */}
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Area Chart</h3>
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
                                <div className="chart">
                                    <canvas
                                        id="areaChart"
                                        style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }}
                                    />
                                </div>
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                        {/* DONUT CHART */}
                        <div className="card card-danger">
                            <div className="card-header">
                                <h3 className="card-title">Donut Chart</h3>
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
                                <canvas
                                    id="donutChart"
                                    style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }}
                                />
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                        {/* PIE CHART */}
                        <div className="card card-danger">
                            <div className="card-header">
                                <h3 className="card-title">Pie Chart</h3>
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
                                <canvas
                                    id="pieChart"
                                    style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }}
                                />
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                    </div>
                    {/* /.col (LEFT) */}
                    <div className="col-md-6">
                        {/* LINE CHART */}
                        <div className="card card-info">
                            <div className="card-header">
                                <h3 className="card-title">Line Chart</h3>
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
                                <div className="chart">
                                    <canvas
                                        id="lineChart"
                                        style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }}
                                    />
                                </div>
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                        {/* BAR CHART */}
                        <div className="card card-success">
                            <div className="card-header">
                                <h3 className="card-title">Bar Chart</h3>
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
                                <div className="chart">
                                    <canvas
                                        id="barChart"
                                        style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }}
                                    />
                                </div>
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                        {/* STACKED BAR CHART */}
                        <div className="card card-success">
                            <div className="card-header">
                                <h3 className="card-title">Stacked Bar Chart</h3>
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
                                <div className="chart">
                                    <canvas
                                        id="stackedBarChart"
                                        style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }}
                                    />
                                </div>
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                    </div>
                    {/* /.col (RIGHT) */}
                </div>
                {/* /.row */}
            </div>
            {/* /.container-fluid */}
        </Layout>
    );
};

export default ChartJS;

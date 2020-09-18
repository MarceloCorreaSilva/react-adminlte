import React, { useEffect } from 'react';
import Layout from '../../layouts/Dashboard';

const Inline: React.FC = () => {
    useEffect(() => {
        // <script src="../../plugins/jquery-knob/jquery.knob.min.js"></script>
        // <script src="../../plugins/sparkline/jquery.sparkline.min.js"></script>

        const _script = document.createElement('script');
        _script.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/jquery-knob/jquery.knob.min.js`;
        _script.async = true;

        const _script2 = document.createElement('script');
        _script2.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/sparkline/jquery.sparkline.min.js`;
        _script2.async = true;

        const _script3 = document.createElement('script');
        _script3.src = `${process.env.PUBLIC_URL}/assets/adminlte/dist/js/pages/charts/inline.js`;
        _script3.async = true;

        document.body.appendChild(_script);
        document.body.appendChild(_script2);
        document.body.appendChild(_script3);
    }, []);

    return (
        <Layout title="Inline Charts">
            <div className="container-fluid">
                {/* row */}
                <div className="row">
                    <div className="col-12">
                        {/* jQuery Knob */}
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="far fa-chart-bar" />
                                    jQuery Knob
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
                            {/* /.card-header */}
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6 col-md-3 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={30}
                                            data-width={90}
                                            data-height={90}
                                            data-fgcolor="#3c8dbc"
                                        />
                                        <div className="knob-label">New Visitors</div>
                                    </div>
                                    {/* ./col */}
                                    <div className="col-6 col-md-3 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={70}
                                            data-width={90}
                                            data-height={90}
                                            data-fgcolor="#f56954"
                                        />
                                        <div className="knob-label">Bounce Rate</div>
                                    </div>
                                    {/* ./col */}
                                    <div className="col-6 col-md-3 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={-80}
                                            data-min={-150}
                                            data-max={150}
                                            data-width={90}
                                            data-height={90}
                                            data-fgcolor="#00a65a"
                                        />
                                        <div className="knob-label">Server Load</div>
                                    </div>
                                    {/* ./col */}
                                    <div className="col-6 col-md-3 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={40}
                                            data-width={90}
                                            data-height={90}
                                            data-fgcolor="#00c0ef"
                                        />
                                        <div className="knob-label">Disk Space</div>
                                    </div>
                                    {/* ./col */}
                                </div>
                                {/* /.row */}
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={90}
                                            data-width={90}
                                            data-height={90}
                                            data-fgcolor="#932ab6"
                                        />
                                        <div className="knob-label">Bandwidth</div>
                                    </div>
                                    {/* ./col */}
                                    <div className="col-6 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={50}
                                            data-width={90}
                                            data-height={90}
                                            data-fgcolor="#39CCCC"
                                        />
                                        <div className="knob-label">CPU</div>
                                    </div>
                                    {/* ./col */}
                                </div>
                                {/* /.row */}
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="far fa-chart-bar" />
                                    jQuery Knob Different Sizes
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
                            {/* /.card-header */}
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6 col-md-3 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={30}
                                            data-width={90}
                                            data-height={90}
                                            data-fgcolor="#3c8dbc"
                                            data-readonly="true"
                                        />
                                        <div className="knob-label">data-width="90"</div>
                                    </div>
                                    {/* ./col */}
                                    <div className="col-6 col-md-3 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={30}
                                            data-width={120}
                                            data-height={120}
                                            data-fgcolor="#f56954"
                                        />
                                        <div className="knob-label">data-width="120"</div>
                                    </div>
                                    {/* ./col */}
                                    <div className="col-6 col-md-3 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={30}
                                            data-thickness="0.1"
                                            data-width={90}
                                            data-height={90}
                                            data-fgcolor="#00a65a"
                                        />
                                        <div className="knob-label">data-thickness="0.1"</div>
                                    </div>
                                    {/* ./col */}
                                    <div className="col-6 col-md-3 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            data-thickness="0.2"
                                            data-anglearc={250}
                                            data-angleoffset={-125}
                                            defaultValue={30}
                                            data-width={120}
                                            data-height={120}
                                            data-fgcolor="#00c0ef"
                                        />
                                        <div className="knob-label">data-angleArc="250"</div>
                                    </div>
                                    {/* ./col */}
                                </div>
                                {/* /.row */}
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="far fa-chart-bar" />
                                    jQuery Knob Tron Style
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
                            {/* /.card-header */}
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6 col-md-3 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={80}
                                            data-skin="tron"
                                            data-thickness="0.2"
                                            data-width={90}
                                            data-height={90}
                                            data-fgcolor="#3c8dbc"
                                            data-readonly="true"
                                        />
                                        <div className="knob-label">data-width="90"</div>
                                    </div>
                                    {/* ./col */}
                                    <div className="col-6 col-md-3 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={60}
                                            data-skin="tron"
                                            data-thickness="0.2"
                                            data-width={120}
                                            data-height={120}
                                            data-fgcolor="#f56954"
                                        />
                                        <div className="knob-label">data-width="120"</div>
                                    </div>
                                    {/* ./col */}
                                    <div className="col-6 col-md-3 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={10}
                                            data-skin="tron"
                                            data-thickness="0.1"
                                            data-width={90}
                                            data-height={90}
                                            data-fgcolor="#00a65a"
                                        />
                                        <div className="knob-label">data-thickness="0.1"</div>
                                    </div>
                                    {/* ./col */}
                                    <div className="col-6 col-md-3 text-center">
                                        <input
                                            type="text"
                                            className="knob"
                                            defaultValue={100}
                                            data-skin="tron"
                                            data-thickness="0.2"
                                            data-anglearc={250}
                                            data-angleoffset={-125}
                                            data-width={120}
                                            data-height={120}
                                            data-fgcolor="#00c0ef"
                                        />
                                        <div className="knob-label">data-angleArc="250"</div>
                                    </div>
                                    {/* ./col */}
                                </div>
                                {/* /.row */}
                            </div>
                            {/* /.card-body */}
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

export default Inline;

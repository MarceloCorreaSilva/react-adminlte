import React, { useEffect } from 'react';
import Calendar from '../../components/Calendar';
import ChartsWithTabs from '../../components/ChartsWithTabs';
import DirectChat from '../../components/DirectChat';
import Map from '../../components/Map';
import SalesGraph from '../../components/SalesGraph';
import SmallBoxes from '../../components/SmallBoxes';
import ToDoList from '../../components/ToDoList';
import Layout from '../layouts/Dashboard';

const Dashboard: React.FC = () => {
    useEffect(() => {
        const _script = document.createElement('script');
        _script.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/jquery-ui/jquery-ui.min.js`;
        _script.async = true;

        const _script1 = document.createElement('script');
        _script1.src = `${process.env.PUBLIC_URL}/assets/adminlte/dist/js/pages/uibutton.js`;
        _script1.async = true;

        const _script2 = document.createElement('script');
        _script2.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/chart.js/Chart.min.js`;
        _script2.async = true;

        const _script3 = document.createElement('script');
        _script3.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/sparklines/sparkline.js`;
        _script3.async = true;

        const _script4 = document.createElement('script');
        _script4.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/jqvmap/jquery.vmap.min.js`;
        _script4.async = true;

        const _script5 = document.createElement('script');
        _script5.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/jqvmap/maps/jquery.vmap.usa.js`;
        _script5.async = true;

        const _script6 = document.createElement('script');
        _script6.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/jquery-knob/jquery.knob.min.js`;
        _script6.async = true;

        const _script7 = document.createElement('script');
        _script7.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/moment/moment.min.js`;
        _script7.async = true;

        const _script8 = document.createElement('script');
        _script8.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/daterangepicker/daterangepicker.js`;
        _script8.async = true;

        const _script9 = document.createElement('script');
        _script9.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js`;
        _script9.async = true;

        const _script10 = document.createElement('script');
        _script10.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/summernote/summernote-bs4.min.js`;
        _script10.async = true;

        const _script11 = document.createElement('script');
        _script11.src = `${process.env.PUBLIC_URL}/assets/adminlte/dist/js/pages/dashboard.js`;
        _script11.async = true;

        document.body.appendChild(_script);
        document.body.appendChild(_script1);
        document.body.appendChild(_script2);
        document.body.appendChild(_script3);
        document.body.appendChild(_script4);
        document.body.appendChild(_script5);
        document.body.appendChild(_script6);
        document.body.appendChild(_script7);
        document.body.appendChild(_script8);
        document.body.appendChild(_script9);
        document.body.appendChild(_script10);
        document.body.appendChild(_script11);
    }, []);

    return (
        <Layout title="Dashboard">
            <div className="container-fluid">
                {/* Small boxes (Stat box) */}
                <div className="row">
                    <SmallBoxes />
                </div>
                {/* /.row */}
                {/* Main row */}
                <div className="row">
                    {/* Left col */}
                    <section className="col-lg-7 connectedSortable">
                        {/* Custom tabs (Charts with tabs)*/}
                        <ChartsWithTabs />
                        {/* /.card */}
                        {/* DIRECT CHAT */}
                        <DirectChat />
                        {/*/.direct-chat */}
                        {/* TO DO List */}
                        <ToDoList />
                        {/* /.card */}
                    </section>
                    {/* /.Left col */}
                    {/* right col (We are only adding the ID to make the widgets sortable)*/}
                    <section className="col-lg-5 connectedSortable">
                        {/* Map card */}
                        <Map />
                        {/* /.card */}
                        {/* solid sales graph */}
                        <SalesGraph />
                        {/* /.card */}
                        {/* Calendar */}
                        <Calendar />
                        {/* /.card */}
                    </section>
                    {/* right col */}
                </div>
                {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
        </Layout>
    );
};

export default Dashboard;

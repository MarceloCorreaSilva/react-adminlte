import React from 'react';
import Calendar from '../../components/Calendar';
import ChartsWithTabs from '../../components/ChartsWithTabs';
import DirectChat from '../../components/DirectChat';
import Map from '../../components/Map';
import SalesGraph from '../../components/SalesGraph';
import SmallBoxes from '../../components/SmallBoxes';
import ToDoList from '../../components/ToDoList';
import Layout from '../layouts/Dashboard';

const Dashboard: React.FC = () => {
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

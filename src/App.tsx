import React from 'react';
import Calendar from './adminlte/components/Calendar';
import ChartsWithTabs from './adminlte/components/ChartsWithTabs';
import ContentHeader from './adminlte/components/ContentHeader';
import ControlSidebar from './adminlte/components/ControlSidebar';
import DirectChat from './adminlte/components/DirectChat';
import Footer from './adminlte/components/Footer';
import MainSidebar from './adminlte/components/MainSidebar';
import Map from './adminlte/components/Map';
import Navbar from './adminlte/components/Navbar';
import SalesGraph from './adminlte/components/SalesGraph';
import SmallBoxes from './adminlte/components/SmallBoxes';
import ToDoList from './adminlte/components/ToDoList';

const App: React.FC = () => {
    return (
        <div className="wrapper">
            {/* Navbar */}
            <Navbar />
            {/* /.navbar */}

            {/* Main Sidebar Container */}
            <MainSidebar />
            {/* /.main-navbar */}

            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <ContentHeader />
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
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
                </section>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}

            {/* Footer */}
            <Footer />
            {/* /.footer */}

            {/* Control Sidebar */}
            <ControlSidebar />
            {/* /.control-sidebar */}
        </div>
    );
};

export default App;

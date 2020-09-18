import React from 'react';
import Calendar from './Calendar';
import ChartsWithTabs from './ChartsWithTabs';
import ContentHeader from './ContentHeader';
import DirectChat from './DirectChat';
import Map from './Map';
import SalesGraph from './SalesGraph';
import SmallBoxes from './SmallBoxes';
import ToDoList from './ToDoList';

const ContentWrapper: React.FC = () => {
    return (
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
    );
};

export default ContentWrapper;

import React, { useEffect } from 'react';
import Layout from '../layouts/Dashboard';

const Calendar: React.FC = () => {
    useEffect(() => {
        const _script = document.createElement('script');
        _script.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/moment/moment.min.js`;
        _script.async = true;

        const _script1 = document.createElement('script');
        _script1.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/fullcalendar/main.min.js`;
        _script1.async = true;

        const _script2 = document.createElement('script');
        _script2.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/fullcalendar-daygrid/main.min.js`;
        _script2.async = true;

        const _script3 = document.createElement('script');
        _script3.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/fullcalendar-timegrid/main.min.js`;
        _script3.async = true;

        const _script4 = document.createElement('script');
        _script4.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/fullcalendar-interaction/main.min.js`;
        _script4.async = true;

        const _script5 = document.createElement('script');
        _script5.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/fullcalendar-bootstrap/main.min.js`;
        _script5.async = true;

        const _script6 = document.createElement('script');
        _script6.src = `${process.env.PUBLIC_URL}/assets/adminlte/dist/js/pages/calendar.js`;
        _script6.async = true;

        document.body.appendChild(_script);
        document.body.appendChild(_script1);
        document.body.appendChild(_script2);
        document.body.appendChild(_script3);
        document.body.appendChild(_script4);
        document.body.appendChild(_script5);
        document.body.appendChild(_script6);
    }, []);

    return (
        <Layout title="Calendar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="sticky-top mb-3">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Draggable Events</h4>
                                </div>
                                <div className="card-body">
                                    {/* the events */}
                                    <div id="external-events">
                                        <div className="external-event bg-success">Lunch</div>
                                        <div className="external-event bg-warning">Go home</div>
                                        <div className="external-event bg-info">Do homework</div>
                                        <div className="external-event bg-primary">Work on UI design</div>
                                        <div className="external-event bg-danger">Sleep tight</div>
                                        <div className="checkbox">
                                            <label htmlFor="drop-remove">
                                                <input type="checkbox" id="drop-remove" />
                                                remove after drop
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Create Event</h3>
                                </div>
                                <div className="card-body">
                                    <div className="btn-group" style={{ width: '100%', marginBottom: 10 }}>
                                        {/*<button type="button" id="color-chooser-btn" class="btn btn-info btn-block dropdown-toggle" data-toggle="dropdown">Color <span class="caret"></span></button>*/}
                                        <ul className="fc-color-picker" id="color-chooser">
                                            <li>
                                                <a className="text-primary" href="!#">
                                                    <i className="fas fa-square" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-warning" href="!#">
                                                    <i className="fas fa-square" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-success" href="!#">
                                                    <i className="fas fa-square" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-danger" href="!#">
                                                    <i className="fas fa-square" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-muted" href="!#">
                                                    <i className="fas fa-square" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /btn-group */}
                                    <div className="input-group">
                                        <input
                                            id="new-event"
                                            type="text"
                                            className="form-control"
                                            placeholder="Event Title"
                                        />
                                        <div className="input-group-append">
                                            <button id="add-new-event" type="button" className="btn btn-primary">
                                                Add
                                            </button>
                                        </div>
                                        {/* /btn-group */}
                                    </div>
                                    {/* /input-group */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.col */}
                    <div className="col-md-9">
                        <div className="card card-primary">
                            <div className="card-body p-0">
                                {/* THE CALENDAR */}
                                <div id="calendar" />
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

export default Calendar;

import React, { useEffect } from 'react';
import Layout from '../../layouts/Dashboard';

const JsGrid: React.FC = () => {
    useEffect(() => {
        const _script = document.createElement('script');
        _script.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/jsgrid/demos/db.js`;
        _script.async = true;

        const _script1 = document.createElement('script');
        _script1.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/jsgrid/jsgrid.min.js`;
        _script1.async = true;

        const _script2 = document.createElement('script');
        _script2.src = `${process.env.PUBLIC_URL}/assets/adminlte/dist/js/pages/tables/jsgrid.js`;
        _script2.async = true;

        document.body.appendChild(_script);
        document.body.appendChild(_script1);
        document.body.appendChild(_script2);
    }, []);

    return (
        <Layout title="jsGrid">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">jsGrid</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <div id="jsGrid1" />
                </div>
                {/* /.card-body */}
            </div>
            {/* /.card */}
        </Layout>
    );
};

export default JsGrid;

import React from 'react';
import Layout from '../../layouts/Dashboard';

const Icons: React.FC = () => {
    return (
        <Layout title="Icons">
            <div className="container-fluid">
                <div className="card card-primary card-outline">
                    <div className="card-header">
                        <h3 className="card-title">Icons</h3>
                    </div>{' '}
                    {/* /.card-body */}
                    <div className="card-body">
                        <p>You can use any font library you like with AdminLTE 3.</p>
                        <strong>Recommendations</strong>
                        <div>
                            <a href="https://fontawesome.com/">Font Awesome</a>
                            <br />
                            <a href="https://useiconic.com/open/">Iconic Icons</a>
                            <br />
                            <a href="http://ionicons.com/">Ion Icons</a>
                            <br />
                        </div>
                    </div>
                    {/* /.card-body */}
                </div>
            </div>
            {/* /.container-fluid */}
        </Layout>
    );
};

export default Icons;

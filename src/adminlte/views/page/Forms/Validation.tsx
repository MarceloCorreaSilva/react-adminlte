import React, { useEffect } from 'react';
import Layout from '../../layouts/Dashboard';

const Validation: React.FC = () => {
    useEffect(() => {
        const _script = document.createElement('script');
        _script.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/jquery-validation/additional-methods.min.js`;
        _script.async = true;

        const _script1 = document.createElement('script');
        _script1.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/jquery-validation/jquery.validate.min.js`;
        _script1.async = true;

        const _script2 = document.createElement('script');
        _script2.src = `${process.env.PUBLIC_URL}/assets/adminlte/dist/js/pages/forms/validation.js`;
        _script2.async = true;

        document.body.appendChild(_script);
        document.body.appendChild(_script1);
        document.body.appendChild(_script2);
    }, []);

    return (
        <Layout title="Validation">
            <div className="container-fluid">
                <div className="row">
                    {/* left column */}
                    <div className="col-md-12">
                        {/* jquery validation */}
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">
                                    Quick Example <small>jQuery Validation</small>
                                </h3>
                            </div>
                            {/* /.card-header */}
                            {/* form start */}
                            <form id="quickForm">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                name="terms"
                                                className="custom-control-input"
                                                id="exampleCheck1"
                                            />
                                            <label className="custom-control-label" htmlFor="exampleCheck1">
                                                I agree to the <a href="!#">terms of service</a>.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* /.card */}
                    </div>
                    {/*/.col (left) */}
                    {/* right column */}
                    <div className="col-md-6"></div>
                    {/*/.col (right) */}
                </div>
                {/* /.row */}
            </div>
            {/* /.container-fluid */}
        </Layout>
    );
};

export default Validation;

import React, { useEffect } from 'react';
import Layout from '../../layouts/Dashboard';

const Editors: React.FC = () => {
    useEffect(() => {
        const _script = document.createElement('script');
        _script.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/summernote/summernote-bs4.min.js`;
        _script.async = true;

        const _script1 = document.createElement('script');
        _script1.src = `${process.env.PUBLIC_URL}/assets/adminlte/dist/js/pages/forms/editors.js`;
        _script1.async = true;

        document.body.appendChild(_script);
        document.body.appendChild(_script1);
    }, []);

    return (
        <Layout title="Text Editors">
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-outline card-info">
                        <div className="card-header">
                            <h3 className="card-title">
                                Bootstrap WYSIHTML5
                                <small>Simple and fast</small>
                            </h3>
                            {/* tools box */}
                            <div className="card-tools">
                                <button
                                    type="button"
                                    className="btn btn-tool btn-sm"
                                    data-card-widget="collapse"
                                    data-toggle="tooltip"
                                    title="Collapse"
                                >
                                    <i className="fas fa-minus" />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-tool btn-sm"
                                    data-card-widget="remove"
                                    data-toggle="tooltip"
                                    title="Remove"
                                >
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                            {/* /. tools */}
                        </div>
                        {/* /.card-header */}
                        <div className="card-body pad">
                            <div className="mb-3">
                                <textarea
                                    className="textarea"
                                    placeholder="Place some text here"
                                    style={{
                                        width: '100%',
                                        height: 200,
                                        fontSize: 14,
                                        lineHeight: 18,
                                        border: '1px solid #dddddd',
                                        padding: 10,
                                    }}
                                    defaultValue={''}
                                />
                            </div>
                            <p className="text-sm mb-0">
                                Editor{' '}
                                <a href="https://github.com/summernote/summernote">
                                    Documentation and license information.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* /.col*/}
            </div>
            {/* ./row */}
        </Layout>
    );
};

export default Editors;

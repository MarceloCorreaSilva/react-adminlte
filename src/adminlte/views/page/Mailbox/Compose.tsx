import React, { useEffect } from 'react';
import Layout from '../../layouts/Dashboard';

const Compose: React.FC = () => {
    useEffect(() => {
        const _script = document.createElement('script');
        _script.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/summernote/summernote-bs4.min.js`;
        _script.async = true;

        const _script1 = document.createElement('script');
        _script1.src = `${process.env.PUBLIC_URL}/assets/adminlte/dist/js/pages/mailbox/compose.js`;
        _script1.async = true;

        document.body.appendChild(_script);
        document.body.appendChild(_script1);
    }, []);

    return (
        <Layout title="Compose">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <a href="/mailbox" className="btn btn-primary btn-block mb-3">
                            Back to Inbox
                        </a>
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Folders</h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item active">
                                        <a href="!#" className="nav-link">
                                            <i className="fas fa-inbox" /> Inbox
                                            <span className="badge bg-primary float-right">12</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="!#" className="nav-link">
                                            <i className="far fa-envelope" /> Sent
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="!#" className="nav-link">
                                            <i className="far fa-file-alt" /> Drafts
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="!#" className="nav-link">
                                            <i className="fas fa-filter" /> Junk
                                            <span className="badge bg-warning float-right">65</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="!#" className="nav-link">
                                            <i className="far fa-trash-alt" /> Trash
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Labels</h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                </div>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body p-0">
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link" href="!#">
                                            <i className="far fa-circle text-danger" /> Important
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="!#">
                                            <i className="far fa-circle text-warning" /> Promotions
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="!#">
                                            <i className="far fa-circle text-primary" /> Social
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-9">
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                                <h3 className="card-title">Compose New Message</h3>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body">
                                <div className="form-group">
                                    <input className="form-control" placeholder="To:" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Subject:" />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        id="compose-textarea"
                                        className="form-control"
                                        style={{ height: 300 }}
                                        defaultValue={
                                            '                      <h1><u>Heading Of Message</u></h1>\n                      <h4>Subheading</h4>\n                      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain\n                        was born and I will give you a complete account of the system, and expound the actual teachings\n                        of the great explorer of the truth, the master-builder of human happiness. No one rejects,\n                        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know\n                        how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again\n                        is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,\n                        but because occasionally circumstances occur in which toil and pain can procure him some great\n                        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,\n                        except to obtain some advantage from it? But who has any right to find fault with a man who\n                        chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that\n                        produces no resultant pleasure? On the other hand, we denounce with righteous indignation and\n                        dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so\n                        blinded by desire, that they cannot foresee</p>\n                      <ul>\n                        <li>List item one</li>\n                        <li>List item two</li>\n                        <li>List item three</li>\n                        <li>List item four</li>\n                      </ul>\n                      <p>Thank you,</p>\n                      <p>John Doe</p>\n                    '
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="btn btn-default btn-file">
                                        <i className="fas fa-paperclip" /> Attachment
                                        <input type="file" name="attachment" />
                                    </div>
                                    <p className="help-block">Max. 32MB</p>
                                </div>
                            </div>
                            {/* /.card-body */}
                            <div className="card-footer">
                                <div className="float-right">
                                    <button type="button" className="btn btn-default">
                                        <i className="fas fa-pencil-alt" /> Draft
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        <i className="far fa-envelope" /> Send
                                    </button>
                                </div>
                                <button type="reset" className="btn btn-default">
                                    <i className="fas fa-times" /> Discard
                                </button>
                            </div>
                            {/* /.card-footer */}
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

export default Compose;

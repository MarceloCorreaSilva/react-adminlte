import React from 'react';

const SidebarUserPanel: React.FC = () => {
    return (
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/adminlte/dist/img/user2-160x160.jpg`}
                    className="img-circle elevation-2"
                    alt="User"
                />
            </div>
            <div className="info">
                <a href="!#" className="d-block">
                    Alexander Pierce
                </a>
            </div>
        </div>
    );
};

export default SidebarUserPanel;

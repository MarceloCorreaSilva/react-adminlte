import React from 'react';

const SidebarBrandLogo: React.FC = () => {
    return (
        <a href="/" className="brand-link">
            <img
                src={`${process.env.PUBLIC_URL}/assets/adminlte/dist/img/AdminLTELogo.png`}
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: '.8' }}
            />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
    );
};

export default SidebarBrandLogo;

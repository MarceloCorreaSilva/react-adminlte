/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import ControlSidebar from '../../components/ControlSidebar';
import Footer from '../../components/Footer';
import MainSidebar from '../../components/MainSidebar';
import Navbar from '../../components/Navbar';

interface Props {
    children: React.ReactNode;
}

const layouts: React.FC<Props> = ({ children }) => {
    return (
        <div className="wrapper">
            {/* Navbar */}
            <Navbar />
            {/* /.navbar */}

            {/* Main Sidebar Container */}
            <MainSidebar />
            {/* /.main-navbar */}

            {/* Content Wrapper. Contains page content */}
            <ContentWrapper>{children}</ContentWrapper>
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

export default layouts;

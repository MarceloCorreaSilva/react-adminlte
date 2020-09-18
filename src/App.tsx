import React from 'react';
import ContentWrapper from './adminlte/components/ContentWrapper';
import ControlSidebar from './adminlte/components/ControlSidebar';
import Footer from './adminlte/components/Footer';
import MainSidebar from './adminlte/components/MainSidebar';
import Navbar from './adminlte/components/Navbar';

const App: React.FC = () => {
    return (
        <div className="wrapper">
            {/* Navbar */}
            <Navbar />
            {/* /.navbar */}

            {/* Main Sidebar Container */}
            <MainSidebar />
            {/* /.main-navbar */}

            {/* Content Wrapper. Contains page content */}
            <ContentWrapper />
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

export default App;

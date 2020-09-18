import React from 'react';
import SidebarBrandLogo from './SidebarBrandLogo';
import SidebarMenu from './SidebarMenu';
import SidebarUserPanel from './SidebarUserPanel';

const MainSidebar: React.FC = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <SidebarBrandLogo />
            <div className="sidebar">
                <SidebarUserPanel />

                <SidebarMenu />
            </div>
        </aside>
    );
};

export default MainSidebar;

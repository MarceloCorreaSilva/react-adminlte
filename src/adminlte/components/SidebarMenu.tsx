import React from 'react';

const SidebarMenu: React.FC = () => {
    return (
        <nav className="mt-2">
            <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
                <li className="nav-item has-treeview menu-open">
                    <a href="!#" className="nav-link active">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                            Dashboard
                            <i className="right fas fa-angle-left" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="/" className="nav-link active">
                                <i className="far fa-circle nav-icon" />
                                <p>Dashboard v1</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="./index2.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Dashboard v2</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="./index3.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Dashboard v3</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="/widgets" className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                            Widgets
                            <span className="right badge badge-danger">New</span>
                        </p>
                    </a>
                </li>
                <li className="nav-item has-treeview">
                    <a href="!#" className="nav-link">
                        <i className="nav-icon fas fa-copy" />
                        <p>
                            Layout Options
                            <i className="fas fa-angle-left right" />
                            <span className="badge badge-info right">6</span>
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="pages/layout/top-nav.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Top Navigation</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Top Navigation + Sidebar</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/layout/boxed.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Boxed</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Fixed Sidebar</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/layout/fixed-topnav.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Fixed Navbar</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/layout/fixed-footer.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Fixed Footer</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Collapsed Sidebar</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item has-treeview">
                    <a href="!#" className="nav-link">
                        <i className="nav-icon fas fa-chart-pie" />
                        <p>
                            Charts
                            <i className="right fas fa-angle-left" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="/charts/chartjs" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>ChartJS</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/charts/flot" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Flot</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/charts/inline" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Inline</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item has-treeview">
                    <a href="!#" className="nav-link">
                        <i className="nav-icon fas fa-tree" />
                        <p>
                            UI Elements
                            <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="/ui/general" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>General</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/ui/icons" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Icons</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/ui/buttons" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Buttons</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/ui/sliders" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Sliders</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/ui/modals" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Modals &amp; Alerts</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/ui/navbar" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Navbar &amp; Tabs</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/ui/timeline" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Timeline</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/ui/ribbons" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Ribbons</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item has-treeview">
                    <a href="!#" className="nav-link">
                        <i className="nav-icon fas fa-edit" />
                        <p>
                            Forms
                            <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="/forms/general" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>General Elements</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/forms/advanced" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Advanced Elements</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/forms/editors" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Editors</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/forms/validation" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Validation</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item has-treeview">
                    <a href="!#" className="nav-link">
                        <i className="nav-icon fas fa-table" />
                        <p>
                            Tables
                            <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="/tables/simple" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Simple Tables</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/tables/data" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>DataTables</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/tables/jsgrid" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>jsGrid</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-header">EXAMPLES</li>
                <li className="nav-item">
                    <a href="/calendar" className="nav-link">
                        <i className="nav-icon far fa-calendar-alt" />
                        <p>
                            Calendar
                            <span className="badge badge-info right">2</span>
                        </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/gallery" className="nav-link">
                        <i className="nav-icon far fa-image" />
                        <p>Gallery</p>
                    </a>
                </li>
                <li className="nav-item has-treeview">
                    <a href="!#" className="nav-link">
                        <i className="nav-icon far fa-envelope" />
                        <p>
                            Mailbox
                            <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="/mailbox" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Inbox</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/mailbox/compose" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Compose</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/mailbox/read-mail" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Read</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item has-treeview">
                    <a href="!#" className="nav-link">
                        <i className="nav-icon fas fa-book" />
                        <p>
                            Pages
                            <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="pages/examples/invoice.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Invoice</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/profile.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Profile</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/e-commerce.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>E-commerce</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/projects.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Projects</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/project-add.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Project Add</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/project-edit.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Project Edit</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/project-detail.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Project Detail</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/contacts.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Contacts</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item has-treeview">
                    <a href="!#" className="nav-link">
                        <i className="nav-icon far fa-plus-square" />
                        <p>
                            Extras
                            <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="pages/examples/login.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Login</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/register.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Register</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/forgot-password.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Forgot Password</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/recover-password.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Recover Password</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/lockscreen.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Lockscreen</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Legacy User Menu</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/language-menu.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Language Menu</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/404.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Error 404</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/500.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Error 500</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/pace.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Pace</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/blank.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Blank Page</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="starter.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Starter Page</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-header">MISCELLANEOUS</li>
                <li className="nav-item">
                    <a href="https://adminlte.io/docs/3.0" className="nav-link">
                        <i className="nav-icon fas fa-file" />
                        <p>Documentation</p>
                    </a>
                </li>
                <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                <li className="nav-item">
                    <a href="!#" className="nav-link">
                        <i className="fas fa-circle nav-icon" />
                        <p>Level 1</p>
                    </a>
                </li>
                <li className="nav-item has-treeview">
                    <a href="!#" className="nav-link">
                        <i className="nav-icon fas fa-circle" />
                        <p>
                            Level 1
                            <i className="right fas fa-angle-left" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="!#" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Level 2</p>
                            </a>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="!#" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>
                                    Level 2
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="!#" className="nav-link">
                                        <i className="far fa-dot-circle nav-icon" />
                                        <p>Level 3</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="!#" className="nav-link">
                                        <i className="far fa-dot-circle nav-icon" />
                                        <p>Level 3</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="!#" className="nav-link">
                                        <i className="far fa-dot-circle nav-icon" />
                                        <p>Level 3</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="!#" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Level 2</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="!#" className="nav-link">
                        <i className="fas fa-circle nav-icon" />
                        <p>Level 1</p>
                    </a>
                </li>
                <li className="nav-header">LABELS</li>
                <li className="nav-item">
                    <a href="!#" className="nav-link">
                        <i className="nav-icon far fa-circle text-danger" />
                        <p className="text">Important</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="!#" className="nav-link">
                        <i className="nav-icon far fa-circle text-warning" />
                        <p>Warning</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="!#" className="nav-link">
                        <i className="nav-icon far fa-circle text-info" />
                        <p>Informational</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default SidebarMenu;

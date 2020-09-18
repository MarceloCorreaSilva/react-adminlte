/* eslint-disable react/prop-types */
import React from 'react';
import ContentHeader from './ContentHeader';

interface Props {
    children: React.ReactNode;
    title: string;
}

const ContentWrapper: React.FC<Props> = ({ children, title }) => {
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <ContentHeader title={title} />
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">{children}</section>
            {/* /.content */}
        </div>
    );
};

export default ContentWrapper;

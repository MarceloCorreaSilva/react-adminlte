import React, { useEffect } from 'react';
import Layout from '../layouts/Dashboard';

const Gallery: React.FC = () => {
    useEffect(() => {
        const _script = document.createElement('script');
        _script.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/jquery-ui/jquery-ui.min.js`;
        _script.async = true;

        const _script1 = document.createElement('script');
        _script1.src = `${process.env.PUBLIC_URL}/assets/adminlte/plugins/ekko-lightbox/ekko-lightbox.min.js`;
        _script1.async = true;

        const _script2 = document.createElement('script');
        _script2.src = `${process.env.PUBLIC_URL}/assets/adminlte/dist/js/pages/galery.js`;
        _script2.async = true;

        document.body.appendChild(_script);
        document.body.appendChild(_script1);
        document.body.appendChild(_script2);
    }, []);

    return (
        <Layout title="Gallery">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-primary">
                            <div className="card-header">
                                <div className="card-title">FilterizR Gallery with Ekko Lightbox</div>
                            </div>
                            <div className="card-body">
                                <div>
                                    <div className="btn-group w-100 mb-2">
                                        <a className="btn btn-info active" href="!#" data-filter="all">
                                            {' '}
                                            All items{' '}
                                        </a>
                                        <a className="btn btn-info" href="!#" data-filter={1}>
                                            {' '}
                                            Category 1 (WHITE){' '}
                                        </a>
                                        <a className="btn btn-info" href="!#" data-filter={2}>
                                            {' '}
                                            Category 2 (BLACK){' '}
                                        </a>
                                        <a className="btn btn-info" href="!#" data-filter={3}>
                                            {' '}
                                            Category 3 (COLORED){' '}
                                        </a>
                                        <a className="btn btn-info" href="!#" data-filter={4}>
                                            {' '}
                                            Category 4 (COLORED, BLACK){' '}
                                        </a>
                                    </div>
                                    <div className="mb-2">
                                        <a className="btn btn-secondary" href="!#" data-shuffle>
                                            {' '}
                                            Shuffle items{' '}
                                        </a>
                                        <div className="float-right">
                                            <select className="custom-select" style={{ width: 'auto' }} data-sortorder>
                                                <option value="index"> Sort by Position </option>
                                                <option value="sortData"> Sort by Custom Data </option>
                                            </select>
                                            <div className="btn-group">
                                                <a className="btn btn-default" href="!#" data-sortasc>
                                                    {' '}
                                                    Ascending{' '}
                                                </a>
                                                <a className="btn btn-default" href="!#" data-sortdesc>
                                                    {' '}
                                                    Descending{' '}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="filter-container p-0 row">
                                        <div className="filtr-item col-sm-2" data-category={1} data-sort="white sample">
                                            <a
                                                href="https://via.placeholder.com/1200/FFFFFF.png?text=1"
                                                data-toggle="lightbox"
                                                data-title="sample 1 - white"
                                            >
                                                <img
                                                    src="https://via.placeholder.com/300/FFFFFF?text=1"
                                                    className="img-fluid mb-2"
                                                    alt="white sample"
                                                />
                                            </a>
                                        </div>
                                        <div
                                            className="filtr-item col-sm-2"
                                            data-category="2, 4"
                                            data-sort="black sample"
                                        >
                                            <a
                                                href="https://via.placeholder.com/1200/000000.png?text=2"
                                                data-toggle="lightbox"
                                                data-title="sample 2 - black"
                                            >
                                                <img
                                                    src="https://via.placeholder.com/300/000000?text=2"
                                                    className="img-fluid mb-2"
                                                    alt="black sample"
                                                />
                                            </a>
                                        </div>
                                        <div
                                            className="filtr-item col-sm-2"
                                            data-category="3, 4"
                                            data-sort="red sample"
                                        >
                                            <a
                                                href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=3"
                                                data-toggle="lightbox"
                                                data-title="sample 3 - red"
                                            >
                                                <img
                                                    src="https://via.placeholder.com/300/FF0000/FFFFFF?text=3"
                                                    className="img-fluid mb-2"
                                                    alt="red sample"
                                                />
                                            </a>
                                        </div>
                                        <div
                                            className="filtr-item col-sm-2"
                                            data-category="3, 4"
                                            data-sort="red sample"
                                        >
                                            <a
                                                href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=4"
                                                data-toggle="lightbox"
                                                data-title="sample 4 - red"
                                            >
                                                <img
                                                    src="https://via.placeholder.com/300/FF0000/FFFFFF?text=4"
                                                    className="img-fluid mb-2"
                                                    alt="red sample"
                                                />
                                            </a>
                                        </div>
                                        <div
                                            className="filtr-item col-sm-2"
                                            data-category="2, 4"
                                            data-sort="black sample"
                                        >
                                            <a
                                                href="https://via.placeholder.com/1200/000000.png?text=5"
                                                data-toggle="lightbox"
                                                data-title="sample 5 - black"
                                            >
                                                <img
                                                    src="https://via.placeholder.com/300/000000?text=5"
                                                    className="img-fluid mb-2"
                                                    alt="black sample"
                                                />
                                            </a>
                                        </div>
                                        <div className="filtr-item col-sm-2" data-category={1} data-sort="white sample">
                                            <a
                                                href="https://via.placeholder.com/1200/FFFFFF.png?text=6"
                                                data-toggle="lightbox"
                                                data-title="sample 6 - white"
                                            >
                                                <img
                                                    src="https://via.placeholder.com/300/FFFFFF?text=6"
                                                    className="img-fluid mb-2"
                                                    alt="white sample"
                                                />
                                            </a>
                                        </div>
                                        <div className="filtr-item col-sm-2" data-category={1} data-sort="white sample">
                                            <a
                                                href="https://via.placeholder.com/1200/FFFFFF.png?text=7"
                                                data-toggle="lightbox"
                                                data-title="sample 7 - white"
                                            >
                                                <img
                                                    src="https://via.placeholder.com/300/FFFFFF?text=7"
                                                    className="img-fluid mb-2"
                                                    alt="white sample"
                                                />
                                            </a>
                                        </div>
                                        <div
                                            className="filtr-item col-sm-2"
                                            data-category="2, 4"
                                            data-sort="black sample"
                                        >
                                            <a
                                                href="https://via.placeholder.com/1200/000000.png?text=8"
                                                data-toggle="lightbox"
                                                data-title="sample 8 - black"
                                            >
                                                <img
                                                    src="https://via.placeholder.com/300/000000?text=8"
                                                    className="img-fluid mb-2"
                                                    alt="black sample"
                                                />
                                            </a>
                                        </div>
                                        <div
                                            className="filtr-item col-sm-2"
                                            data-category="3, 4"
                                            data-sort="red sample"
                                        >
                                            <a
                                                href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=9"
                                                data-toggle="lightbox"
                                                data-title="sample 9 - red"
                                            >
                                                <img
                                                    src="https://via.placeholder.com/300/FF0000/FFFFFF?text=9"
                                                    className="img-fluid mb-2"
                                                    alt="red sample"
                                                />
                                            </a>
                                        </div>
                                        <div className="filtr-item col-sm-2" data-category={1} data-sort="white sample">
                                            <a
                                                href="https://via.placeholder.com/1200/FFFFFF.png?text=10"
                                                data-toggle="lightbox"
                                                data-title="sample 10 - white"
                                            >
                                                <img
                                                    src="https://via.placeholder.com/300/FFFFFF?text=10"
                                                    className="img-fluid mb-2"
                                                    alt="white sample"
                                                />
                                            </a>
                                        </div>
                                        <div className="filtr-item col-sm-2" data-category={1} data-sort="white sample">
                                            <a
                                                href="https://via.placeholder.com/1200/FFFFFF.png?text=11"
                                                data-toggle="lightbox"
                                                data-title="sample 11 - white"
                                            >
                                                <img
                                                    src="https://via.placeholder.com/300/FFFFFF?text=11"
                                                    className="img-fluid mb-2"
                                                    alt="white sample"
                                                />
                                            </a>
                                        </div>
                                        <div
                                            className="filtr-item col-sm-2"
                                            data-category="2, 4"
                                            data-sort="black sample"
                                        >
                                            <a
                                                href="https://via.placeholder.com/1200/000000.png?text=12"
                                                data-toggle="lightbox"
                                                data-title="sample 12 - black"
                                            >
                                                <img
                                                    src="https://via.placeholder.com/300/000000?text=12"
                                                    className="img-fluid mb-2"
                                                    alt="black sample"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card card-primary">
                            <div className="card-header">
                                <div className="card-title">Ekko Lightbox</div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <a
                                            href="https://via.placeholder.com/1200/FFFFFF.png?text=1"
                                            data-toggle="lightbox"
                                            data-title="sample 1 - white"
                                            data-gallery="gallery"
                                        >
                                            <img
                                                src="https://via.placeholder.com/300/FFFFFF?text=1"
                                                className="img-fluid mb-2"
                                                alt="white sample"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a
                                            href="https://via.placeholder.com/1200/000000.png?text=2"
                                            data-toggle="lightbox"
                                            data-title="sample 2 - black"
                                            data-gallery="gallery"
                                        >
                                            <img
                                                src="https://via.placeholder.com/300/000000?text=2"
                                                className="img-fluid mb-2"
                                                alt="black sample"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a
                                            href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=3"
                                            data-toggle="lightbox"
                                            data-title="sample 3 - red"
                                            data-gallery="gallery"
                                        >
                                            <img
                                                src="https://via.placeholder.com/300/FF0000/FFFFFF?text=3"
                                                className="img-fluid mb-2"
                                                alt="red sample"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a
                                            href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=4"
                                            data-toggle="lightbox"
                                            data-title="sample 4 - red"
                                            data-gallery="gallery"
                                        >
                                            <img
                                                src="https://via.placeholder.com/300/FF0000/FFFFFF?text=4"
                                                className="img-fluid mb-2"
                                                alt="red sample"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a
                                            href="https://via.placeholder.com/1200/000000.png?text=5"
                                            data-toggle="lightbox"
                                            data-title="sample 5 - black"
                                            data-gallery="gallery"
                                        >
                                            <img
                                                src="https://via.placeholder.com/300/000000?text=5"
                                                className="img-fluid mb-2"
                                                alt="black sample"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a
                                            href="https://via.placeholder.com/1200/FFFFFF.png?text=6"
                                            data-toggle="lightbox"
                                            data-title="sample 6 - white"
                                            data-gallery="gallery"
                                        >
                                            <img
                                                src="https://via.placeholder.com/300/FFFFFF?text=6"
                                                className="img-fluid mb-2"
                                                alt="white sample"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a
                                            href="https://via.placeholder.com/1200/FFFFFF.png?text=7"
                                            data-toggle="lightbox"
                                            data-title="sample 7 - white"
                                            data-gallery="gallery"
                                        >
                                            <img
                                                src="https://via.placeholder.com/300/FFFFFF?text=7"
                                                className="img-fluid mb-2"
                                                alt="white sample"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a
                                            href="https://via.placeholder.com/1200/000000.png?text=8"
                                            data-toggle="lightbox"
                                            data-title="sample 8 - black"
                                            data-gallery="gallery"
                                        >
                                            <img
                                                src="https://via.placeholder.com/300/000000?text=8"
                                                className="img-fluid mb-2"
                                                alt="black sample"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a
                                            href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=9"
                                            data-toggle="lightbox"
                                            data-title="sample 9 - red"
                                            data-gallery="gallery"
                                        >
                                            <img
                                                src="https://via.placeholder.com/300/FF0000/FFFFFF?text=9"
                                                className="img-fluid mb-2"
                                                alt="red sample"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a
                                            href="https://via.placeholder.com/1200/FFFFFF.png?text=10"
                                            data-toggle="lightbox"
                                            data-title="sample 10 - white"
                                            data-gallery="gallery"
                                        >
                                            <img
                                                src="https://via.placeholder.com/300/FFFFFF?text=10"
                                                className="img-fluid mb-2"
                                                alt="white sample"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a
                                            href="https://via.placeholder.com/1200/FFFFFF.png?text=11"
                                            data-toggle="lightbox"
                                            data-title="sample 11 - white"
                                            data-gallery="gallery"
                                        >
                                            <img
                                                src="https://via.placeholder.com/300/FFFFFF?text=11"
                                                className="img-fluid mb-2"
                                                alt="white sample"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a
                                            href="https://via.placeholder.com/1200/000000.png?text=12"
                                            data-toggle="lightbox"
                                            data-title="sample 12 - black"
                                            data-gallery="gallery"
                                        >
                                            <img
                                                src="https://via.placeholder.com/300/000000?text=12"
                                                className="img-fluid mb-2"
                                                alt="black sample"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /.container-fluid */}
        </Layout>
    );
};

export default Gallery;

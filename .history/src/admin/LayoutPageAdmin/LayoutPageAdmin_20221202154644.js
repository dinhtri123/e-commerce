import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderAdmin from '../Modules/HeaderAdmin';

const LayoutPageAdmin = () => {
    return (
        <Fragment>
            <HeaderAdmin/>
            <Outlet/>
            <FooterAdmin></FooterAdmin>
        </Fragment>
    );
};

export default LayoutPageAdmin;
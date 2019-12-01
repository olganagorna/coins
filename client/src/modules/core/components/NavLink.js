import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const NavLink = ({ label, to, activeOnlyWhenExact }) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <div className={match ? "active navLink" : "navLink"}>
            <Link to={to}>{label}</Link>
        </div>
    );
}

export default NavLink;

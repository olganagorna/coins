import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavLink from "./NavLink";
import ROUTES from "../../../routes";

export default function ButtonAppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <NavLink
                    activeOnlyWhenExact={true}
                    to={ROUTES.home()}
                    label="Market overview"
                />
                <NavLink to={ROUTES.liquidity()} label="Liquidity" />
            </Toolbar>
        </AppBar>
    );
}

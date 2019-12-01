import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ROUTES from "../../../routes";
import { components as CoinsTop } from '../../coinstop';
import { components as Core } from '../../core';
import { getCoinsInfo } from '../api';

class HomePage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            limit: 100,
            isLoading: false
        };
        this.isLoading = false
    }

    componentDidMount() {
        this.callAPI();
    }

    callAPI() {
        this.setState({ isLoading: true });
        getCoinsInfo(this.state.limit)
            .then(res => this.setState({ data: res.data.data, isLoading: false }))
            .catch(err => {
                this.setState({ isLoading: false }, () => console.log(err))
            });
    }

    handleChange = value => {
        this.setState(prevState => ({
            ...prevState,
            limit: value,
        }), this.callAPI);
    }

    render() {
        return (
            <Router>
                <Core.NavBar/>
                <div className="commonPadding">
                    {this.state.isLoading ? <div className="circularProgress">
                        <CircularProgress/>
                    </div> : null}
                    <Grid container>
                        <Grid item xs={12}>
                            <CoinsTop.LimitFilter value={this.state.limit} handleChange={this.handleChange} />
                            <Switch>
                                <Route
                                    exact
                                    path={ROUTES.home()}
                                    render={(props) => <CoinsTop.MarketOverview {...props} data={this.state.data} />}
                                />
                                <Route
                                    exact
                                    path={ROUTES.liquidity()}
                                    render={(props) => <CoinsTop.Liquidity {...props} data={this.state.data} />}
                                />
                                <Redirect to={ROUTES.home()} />
                            </Switch>
                        </Grid>
                    </Grid>
                </div>
            </Router>
        );
    }
}
export default HomePage;

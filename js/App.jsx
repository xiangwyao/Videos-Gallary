// @flow

import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
    <BrowserRouter>
        <div className="app">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route
                    exact
                    path="/search"
                    component={props => (
                        <Search shows={preload.shows} {...props} />
                    )}
                />
                <Route
                    path="/details/:id"
                    component={(props: { match: Match }) => (
                        <Details
                            show={preload.shows.find(
                                show => props.match.params.id === show.imdbID
                            )}
                            {...props}
                        />
                    )}
                />
                <Route component={FourOhFour} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;

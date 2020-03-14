import React, { Component } from 'react'
import { Header } from '../../utils/header/Header'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/home/LandingPage'
import Epochs from './components/epoch/Epochs'
import Profile from './components/profile/Profile'

class AppContainer extends Component {
    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route path="/epochs">
                        <Epochs />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </>
        )
    }
}

export default AppContainer;

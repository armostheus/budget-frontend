import React, { Component } from 'react'
import { Dashboard } from './dashboard/Dashboard'
import TransactionList from './transaction-list/TransactionList'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Dashboard />
                <TransactionList />
            </div>
        )
    }
}

export default LandingPage;

import React from 'react'
import DateSelector from '../../../../../utils/date-selector/DateSelector'
import Transactions from '../../../../../utils/transactions/Transactions'
import AddTransaction from './AddTransaction'

const TransactionList = () => {
    return (
        <div>
            <DateSelector />
            <Transactions />
            <AddTransaction />
        </div>
    )
}

export default TransactionList

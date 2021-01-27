/* JMJ */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import { setTextFilter } from './actions/filters'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'WaterBill', amount: 300, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'GasBill', amount: 200, createdAt: 2 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: 3 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
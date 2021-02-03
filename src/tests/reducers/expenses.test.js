import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense by id', () => {
  const expense = {
    id: '4',
    description: 'Rosary',
    note: '',
    amount: 1095,
    createdAt: 20000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const amount = 122000;
  const expense = {
    id: '1',
    description: 'Rosary',
    note: '',
    amount: 1095,
    createdAt: 20000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expense.id,
    updates: {
      description: expense.description,
      amount: expense.amount,
      createdAt: expense.createdAt
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual(expense);
});

test('should not edit an expense', () => {
  const description = 'Rosary';
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      description
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', ()=> {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
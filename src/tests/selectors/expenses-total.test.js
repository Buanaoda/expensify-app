import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
import numeral from 'numeral'
import "numeral/locales/pt-br";
numeral.locale('pt-br');

test('should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should return correct value if one expense', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('should return correct value if multiple expense', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(4500 + 109500 + 195);
});
import uuid from 'uuid';

//ADD_EXPENSE
export const addExpense = (
    {
        amount = 0,
        createdAt = 0,
        description = '',
        note
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        amount,
        createdAt,
        description,
        id: uuid(),
        note
    }
});

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
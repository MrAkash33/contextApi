import React, { createContext, useReducer, useState } from "react"

export const AppContext = createContext();

const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'shopping', cost: 59 },
        { id: 13, name: 'holidays', cost: 69 },
        { id: 14, name: 'car Service', cost: 169 }
    ]
}

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                )
            }
        case 'EDIT_BUDGET':
            return {
                ...state,
                budget: action.payload
            }
        case 'SEARCH_BAR':
            console.log(state.expenses,"===?>>");
            return {
                ...state,
                expenses: action.payload.length > 0 ? initialState.expenses.filter(expense => expense.name.includes(action.payload)) : initialState.expenses,
            }
        default:
            return false
    }
}
const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (<AppContext.Provider value={
        {
            budget: state.budget,
            expenses: state.expenses,
            dispatch
        }
    }>{props.children}</AppContext.Provider>)
}

export default AppProvider
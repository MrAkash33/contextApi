import React from "react";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpensiveList";
import AddExpense from "./components/AddExpense";
import AppProvider from "./context/AppContext";
import SearchBar from "./components/SearchBar";

const BudgetTracking = () => {
    return (
        <AppProvider>
            <div className="container">
                <h5 className="mt-4">BudgetTracking</h5>
                <div className="row mt-3">
                    <div className="col-sm">
                        <Budget />
                    </div>
                    <div className="col-sm">
                        <Remaining />
                    </div>
                    <div className="col-sm">
                        <ExpenseTotal />
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <SearchBar/>
                        </div>
                    </div>
                    <h3 className="mt-3">Expense</h3>
                    <div className="row mt-3">
                        <div className="col-sm">
                            <ExpenseList />
                        </div>
                    </div>
                    <h3 className="mt-3">Add Expense</h3>
                    <div className="col-sm">
                        <AddExpense />
                    </div>
                </div>
            </div>
        </AppProvider>
    )
}
export default BudgetTracking
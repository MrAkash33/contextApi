import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
    const { expenses,budget } = useContext(AppContext);
    const totalExpense = expenses?.reduce((total, item) => {
        return total = total+item.cost
    }, 0
    )
    // console.log(totalExpense, "expenses")
    const isAlert = totalExpense > budget ? 'alert-danger' :'alert-primary'
    return (
        <>
            <div className={`alert ${isAlert}`}>
                <span>Spent so far : ${totalExpense}</span>
            </div>
        </>
    )
}

export default ExpenseTotal
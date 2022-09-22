import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const {expenses} = useContext(AppContext)
    // const expense = [
    //     { id: 1122343, name: 'Shopping', cost: 50 },
    //     { id: 1144532, name: 'Holiday', cost: 150 },
    //     { id: 1134223, name: 'Transportation', cost: 250 },
    //     { id: 1234212, name: 'Fuel', cost: 350 },
    //     { id: 1123422, name: 'Gaming', cost: 450 }
    // ]
    return (
        <>
            {expenses?.map((data, index) =>
                <ul key={data.id}>
                    <ExpenseItem
                        id={data.id}
                        name={data.name}
                        cost={data.cost}
                    />
                </ul>
            )}
        </>
    )
}

export default ExpenseList
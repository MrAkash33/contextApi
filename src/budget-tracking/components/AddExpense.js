import React, { useContext, useState } from "react";
import uuid from "react-uuid";
import { AppContext } from "../context/AppContext";
import { isValidate } from "../helper/helper";

const AddExpense = () => {
    const {dispatch} = useContext(AppContext)
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        if (isValidate(name, cost)) {
                const expense = {
                    id: uuid(),
                    name:name,
                    cost:parseInt(cost)
                }
                dispatch({
                    type:'ADD_EXPENSE',
                    payload:expense
                })
        }
    }
    function changeHandler(e, recieveState) {
        recieveState(e.target.value)
    }

    return (
        <>
            <form>
                <div className="row">
                    <div className="col-sm">
                        <label htmlFor='name'>Name</label>
                        <input
                            required='required'
                            type='text'
                            className="form-control"
                            id="name"
                            onChange={(e) => changeHandler(e, setName)}
                        />
                        <label htmlFor="cost">Cost</label>
                        <input
                            required='required'
                            type='text'
                            className="form-control"
                            id="cost"
                            onChange={(e) => changeHandler(e, setCost)}
                        />
                        <button className="mt-4 btn btn-primary" type="submit" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddExpense
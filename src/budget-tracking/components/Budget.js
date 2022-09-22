import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext)
    const [budgetChanger, setBudgetChanger] = useState(false)
    const [saveBtn, setSaveBtn] = useState(false);
    const [getValue, setGetvalue] = useState('')

    const handlerBudget = () => {
        setBudgetChanger(true)
        setSaveBtn(true);
    }
    const handleSave = () => {
        dispatch(
            {
                type: 'EDIT_BUDGET',
                payload: getValue
            }
        )
        setBudgetChanger(false)
        setSaveBtn(false);
        console.log(getValue, "getValuegetValue");
    }

    return (
        <>
            <div className="alert alert-secondary d-flex justify-content-between">
                {budgetChanger ? <input className="form-control" onChange={(e) => setGetvalue(e.target.value)} /> : <span>Budget : ${budget}</span>}
                {saveBtn ? <button type="submit" className="btn btn-primary ml-2" onClick={handleSave}>Save</button> : <button className="btn btn-secondary" onClick={handlerBudget}>Edit</button>}
            </div>
        </>
    )
}

export default Budget
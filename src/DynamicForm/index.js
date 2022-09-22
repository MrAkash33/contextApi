import React, { useState } from "react";

const DynamicForm = () =>{
    const [inputValue,setInputValue] = useState([{ name: ""}])
    console.log(inputValue)
    const handleChange = (e,i) =>{
        let newFormValues = [...inputValue];
        newFormValues[i][e.target.name] = e.target.value;
        setInputValue(newFormValues);
    }

     let addForm = () => {
        setInputValue([...inputValue, { name: ""}])
    }
    return(
        <>
            <div className="row mt-5">
                <div className="col-sm">{
                    inputValue.map((element ,index) => (
                        <input   name="name"  className="form-control"  onChange={e => handleChange(index, e)} />
                    ))
                }
                </div>
                <div className="col-sm">
                    <button className="btn btn-secondary" onClick={addForm}>Add Form</button>
                </div>
            </div>
        </>
    )
}

export default DynamicForm

// import React, { useState } from 'react'


// const DynamicForm = () => {

//     const [formValues, setFormValues] = useState([{ name: "", email : ""}])

//     let handleChange = (i, e) => {
//         let newFormValues = [...formValues];
//         newFormValues[i][e.target.name] = e.target.value;
//         setFormValues(newFormValues);
//       }
    
//     let addFormFields = () => {
//         setFormValues([...formValues, { name: "", email: "" }])
//       }
    
//     let removeFormFields = (i) => {
//         let newFormValues = [...formValues];
//         newFormValues.splice(i, 1);
//         setFormValues(newFormValues)
//     }
    
//     // let handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     alert(JSON.stringify(formValues));
//     // }

//     return (
//         <form  onSubmit={handleSubmit}>
//           {formValues.map((element, index) => (
//             <div className="form-inline" key={index}>
//               <label>Name</label>
//               <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
//               <label>Email</label>
//               <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
//               {
//                 index ? 
//                   <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
//                 : null
//               }
//             </div>
//           ))}
//           <div className="button-section">
//               <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
//               <button className="button submit" type="submit">Submit</button>
//           </div>
//       </form>
//     )
// }

// export default DynamicForm
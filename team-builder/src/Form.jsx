import React, { useState } from 'react';

function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    const [initialFormValues, setInitialFormValues] = useState({
        name: '',
        email: '',
        role: '',
    })

    return (
        <form className='member container' onSubmit={onSubmit}>
            <h2>Member Form</h2>

            {/* ///////////// TEXT INPUTS /////////// */}
            <label>Name:&nbsp;
                <input    
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                />
            </label>
            &nbsp;&nbsp;&nbsp; {/* spacing between input fields */}
            <label>Email:&nbsp;
                <input 
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                />
            &nbsp;&nbsp;&nbsp; {/* spacing between input fields */}
            </label>
            <label>&nbsp;
                <select
                    value={values.role}
                    onChange={onInputChange}
                    name='role'
                >
                    <option defaultValue='backend'>Backend Engineer</option>
                    <option value='frontend'>Frontend Engineer</option>
                    <option value='projectManager'>Project Manager</option>
                    <option value='uiDesigner'>UI/UX Designer</option>
                    <option value='marketer'>Digital Marketer</option>
                    <option value='dataScience'>Data Scientist</option>
                    <option value='ml'>Machine Learning </option>
                    <option value='systems'>Systems Engineer</option>
                    <option value='manufacturing'>Manufacturing Engineer</option>
                </select>
            </label>
            <br />
            <br />
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}

export default Form;
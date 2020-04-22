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
                    <option defaultValue='Backend Engineer'>Backend Engineer</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='Project Manager'>Project Manager</option>
                    <option value='UI/UX Designer'>UI/UX Designer</option>
                    <option value='Digital Marketer'>Digital Marketer</option>
                    <option value='Data Scientist'>Data Scientist</option>
                    <option value='Machine Learning'>Machine Learning</option>
                    <option value='Systems Engineer'>Systems Engineer</option>
                    <option value='Manufacturing Engineer'>Manufacturing Engineer</option>
                </select>
            </label>
            <br />
            <br />
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}

export default Form;
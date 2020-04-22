import React, { useState } from 'react';

function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
    } = props

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
            <label>Role:&nbsp;
                <input 
                    value={values.role}
                    onChange={onInputChange}
                    name='role'
                    type='text'
                />
            </label>
            <label>
                <select
                    // value={values.}
                ></select>
            </label>
            <br />
            <br />
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}

export default Form;
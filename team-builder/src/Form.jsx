import React, { useState } from 'react';

function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    return (
        <form className='member container'>
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
            <label>Email:&nbsp;
                <input 
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                />
            </label>
            <label>Role:&nbsp;
                <input 
                    value={values.role}
                    onChange={onInputChange}
                    name='role'
                    type='text'
                />
            </label>
        </form>
    )
}

export default Form;
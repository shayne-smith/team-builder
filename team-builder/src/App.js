import React, { useState } from 'react';
import Member from './Member';
import Form from './Form';
import './App.css';

const initialTeamList = [
  {
    name: 'Shayne',
    email: 'shayne.m.smith@vanderbilt.edu',
    role: 'backend engineer'
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  // set state for App function
  const [teamList, setTeamList] = useState(initialTeamList)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [memberToEdit, setMemberToEdit] = useState({})

  // Implement change handlers (works for inputs and dropdowns)
  const onInputChange = evt => {

    const name = evt.target.name
    const value = evt.target.value

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    
    const newMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    }

    setTeamList([ ...teamList, newMember ])
    setFormValues(initialFormValues)
  }

  const onEdit = evt => {

    setMemberToEdit(memberToEdit)
  }

  return (
    <div className='container'>
      <header><h1>Team Members App</h1></header>
      {
        teamList.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }

      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;

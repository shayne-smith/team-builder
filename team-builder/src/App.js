import React, { useState } from 'react';
import Member from './Member';
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
    </div>
  );
}

export default App;

import React from 'react';

function Member({ details, setMemberToEdit }) {
    if(!details) {
        return <h3>Working fetching your team member&apos;s details...</h3>
    }
    return (
        <div className='member container'>
            <div className='memberInfo'>
                <h2>{details.name}</h2>
                <p>Email: {details.email}</p>
                <p>Role: {details.role}</p>
            </div>

            <button className='editButton' onClick={setMemberToEdit}><span role='img'>✏️</span> Edit</button>
        </div>
    )
}

export default Member;
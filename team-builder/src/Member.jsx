import React from 'react';

function Member({ details }) {
    if(!details) {
        return <h3>Working fetching your team member&apos;s details...</h3>
    }
    return (
        <div className='member container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default Member;
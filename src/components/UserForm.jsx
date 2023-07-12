import React from 'react'

const UserForm = ({data, updateFieldHandler}) => {

  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name='name' value={data.name} id='name' placeholder='Digite o seu nome' onChange={(e) => updateFieldHandler("name", e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="text" name='email'  value={data.email} id='email' placeholder='Digite o seu email'  onChange={(e) => updateFieldHandler("email", e.target.value)} />
      </div>
    </div>
  )
}

export default UserForm
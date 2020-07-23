import React, { useEffect, useState } from 'react';

 export default function Form(props) {
     const { 
         values,
         inputChange,
         checkboxChange,
         errors,
         submit,
         disabled
        } = props;

     const onInputChange = evt => {
         const { name, value } = evt.target;
         inputChange(name, value)
     };

     const onSubmit = evt => {
         evt.preventDefault()
         submit()
     };

    return (
      <form onSubmit={onSubmit}>
          <div className='form-header form-group'>
            <div>
              <h2>Add a user</h2>
              <button disabled={disabled}>Submit</button>
            </div>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>
          </div>
          <div className='form-group inputs'>
              <h4>General Information</h4>
              <label>Name:&nbsp;
                  <input
                    value={values.name}
                    name='name'
                    type='text'
                    onChange={onInputChange}
                  />
              </label>
              <label>Email:&nbsp;
                  <input
                    value={values.email}
                    name='email'
                    type='email'
                    onChange={onInputChange}
                  />
              </label>
              <label>Password:&nbsp;
                  <input
                    value={values.password}
                    name='password'
                    type='password'
                    onChange={onInputChange}
                  />
              </label>
              <h4>Do you agree to our ToS(Terms of Service)</h4>
              <label>Agree
                  <input
                    type='radio'
                    name='tos'
                    value='true'
                    checked={values.tos === 'true'}
                    onChange={onInputChange}
                  />
              </label>
          </div>
      </form>
    );
}
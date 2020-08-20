import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'

const StyledForm = styled.div`

  background: #373737;
  color: white;

  button {
    background: lightgreen;
    padding: 12px 24px;
    border: 1px solid lightgreen;
    border-radius: 10%;
    color: white;
    cursor: pointer;
  }

  button:disabled {
    border: 1px solid red;
    background: rgba(0,0,0,0);
    color: red;
  }
`;

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
      <StyledForm>
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
      </StyledForm>
    );
}
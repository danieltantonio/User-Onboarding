import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

import Form from './components/Form';
import formSchema from './schema/formSchema';

const initFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false
};

const initFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: ''
}

const initUsers = [];
const initBtnDisabled = true;

function App() {
  const [users, setUsers] = useState(initUsers);
  const [formValues, setFormValues] = useState(initFormValues);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  const [btnDisabled, setBtnDisabled] = useState(initBtnDisabled);

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      }).catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
      
      setFormValues({
        ...formValues,
        [name]: value
      })
  };

  const checkboxChange = (name, isChecked) => {
    setFormValues({...formValues})
  };

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users]);
        setFormValues(initFormValues);
      }).catch(err => {
        debugger;
      });
  };

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }

    postNewUser(newUser)
  }

  

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setBtnDisabled(!valid)
      })
  }, [formValues]);

  useEffect(() => {
    axios.post('https://reqres.in/api/users')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        debugger;
      })
  }, [])

  return (
    <div>
      <h1>User-Onboarding App</h1>
      <Form 
        values={formValues} 
        inputChange={inputChange} 
        checkboxChange={checkboxChange}
        errors={formErrors}
        submit={submit}
        disabled={btnDisabled}
      />
      {
        users.map(user => {
          return(
            user.name
          )
        })
      }
    </div>
  );
};

export default App;

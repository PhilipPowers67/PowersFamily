import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

function Signup() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '' });
  const [addUser,
    // { error}
  ] = useMutation(ADD_USER);

    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    // try {
    //   const { data } = await addUser({
    //     variables: { ...formState },
    //   });

    //   Auth.login(data.addUser.token);
    // } catch (e) {
    //   console.error(e);
    // }
    
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };



  return (
    <div className="container">

      <h2 className="container">Signup</h2>
      <br/>
      <br/>
      <br/>
      <br/>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            className="form-input" 
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            className="fill"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pwd">Password:</label>
          <input className="fill"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button class="button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./style.css";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
        //variables: { email: formState.email, password: formState.password },
      });

      // const token = mutationResponse.data.login.token;
      Auth.login(data.login.token);
    } catch (error) {
      console.log(error);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div class="container">
      <h2 class="container">Login</h2>
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleFormSubmit}>
        <div>
          <label for="email">Email address:</label>
          <input
            class="fill"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            class="fill"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button class="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

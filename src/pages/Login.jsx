import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Form, { Item, Label, ButtonItem, ButtonOptions, RequiredRule } from 'devextreme-react/form';
import LoadIndicator from 'devextreme-react/load-indicator';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formData = useRef({ username: "", password: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData.current),
      });
      const data = await response.json();
      console.log(data);
      if (data.token) {
        localStorage.setItem("authToken", data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <h2 className='title'>Login</h2>
      <form onSubmit={onSubmit}>
        <Form
          formData={formData.current}
          disabled={loading}
          showColonAfterLabel
          showRequiredMark={false}
        >
          <Item dataField='username' editorType='dxTextBox' editorOptions={usernameEditorOptions}>
            <RequiredRule message='Username is required' />
            <Label visible={false} />
          </Item>
          <Item dataField='password' editorType='dxTextBox' editorOptions={passwordEditorOptions}>
            <RequiredRule message='Password is required' />
            <Label visible={false} />
          </Item>
          <ButtonItem>
            <ButtonOptions width='100%' type='default' useSubmitBehavior>
              <span className='dx-button-text'>{loading ? <LoadIndicator width='24px' height='24px' visible /> : 'Sign In'}</span>
            </ButtonOptions>
          </ButtonItem>
        </Form>
      </form>
    </div>
  )
}

const usernameEditorOptions = { stylingMode: 'filled', placeholder: 'Username'};
const passwordEditorOptions = { stylingMode: 'filled', placeholder: 'Password', mode: 'password'};

export default Login;
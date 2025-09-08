import React from "react";
import styled from "styled-components";

import { Button } from "@mui/material";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="slack img"
        />

        <h1>Sign in to the PAPA Fam</h1>
        <p>papa.stack.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const LoginInnerContainer = styled.div`
  border-radius: 10px;
  padding: 100px;
  text-align: center;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    height: 100px;
    margin-bottom: 40px;
    object-fit: contain;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    color: white;
    background-color: #0a8d48 !important;
  }
`;

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

import React from "react";
import styled from "styled-components";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

var Spinner = require("react-spinkit");

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt="slack img"
          />

          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <AppBody>
              <Sidebar />

              <Routes>
                <Route exact path="/" element={<Chat />}></Route>
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
`;

const AppLoadingContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  text-align: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <Counter />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <span>
//     <span>Learn </span>
//     <a
//       className="App-link"
//       href="https://reactjs.org/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       React
//     </a>
//     <span>, </span>
//     <a
//       className="App-link"
//       href="https://redux.js.org/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Redux
//     </a>
//     <span>, </span>
//     <a
//       className="App-link"
//       href="https://redux-toolkit.js.org/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Redux Toolkit
//     </a>
//     ,<span> and </span>
//     <a
//       className="App-link"
//       href="https://react-redux.js.org/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       React Redux
//     </a>
//   </span>
// </header>

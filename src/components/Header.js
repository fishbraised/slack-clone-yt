import React from "react";
import styled from "styled-components";

import { Avatar } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={() => auth.signOut()}
        />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder="Search PAPAFAM" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 10px 0;
  color: white;
  background-color: var(--slack-color);
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  border: 1px solid gray;
  border-radius: 6px;
  padding: 0 50px;
  text-align: center;
  color: gray;
  background-color: #421f44;

  > input {
    min-width: 30vw;
    border: none;
    outline: none;
    text-align: center;
    color: white;
    background-color: transparent;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 0.3;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

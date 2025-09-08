import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

import firebase from "firebase/app";
import "firebase/firestore";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ chatRef, channelName, channelId }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId || !input.trim()) {
      return;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({ behavior: "smooth" });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder={`Message #${channelName}`}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        {/* Button can be hidden or removed, form submit works on Enter */}
        <Button type="submit" style={{ display: "none" }}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    outline: none;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
  }

  > form > button {
    display: none !important;
  }
`;

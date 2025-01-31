import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
    { text: "Feel free to ask me anything!", sender: "bot" },
    { text: "I can help with various tasks.", sender: "bot" },
    { text: "How can I assist you today?", sender: "bot" },
    { text: "I am your friendly chatbot.", sender: "bot" },
    { text: "Let's start chatting.", sender: "bot" },
    { text: "Ask me your question.", sender: "bot" },
    { text: "I am happy to help.", sender: "bot" },
    { text: "What do you need help with?", sender: "bot" },
    { text: "I am here to assist you.", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessages = [...messages, { text: userInput, sender: "user" }];
      setMessages(newMessages);
      setUserInput("");

      setIsLoading(true);
      setTimeout(() => {
        const botResponse =
          userInput.toLowerCase() === "hi"
            ? "Hi!"
            : "I am unable to proceed with your request.";
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: "bot" },
        ]);
        setIsLoading(false);
      }, 1000);
    }
  };

  const fetchMoreMessages = () => {
    setIsLoading(true);
    setTimeout(() => {
      const olderMessages = [
        { text: "How can I assist you further?", sender: "bot" },
        { text: "I am a chatbot built to assist you.", sender: "bot" },
        { text: "Feel free to ask your questions.", sender: "bot" },
      ];

      setMessages((prevMessages) => [...prevMessages, ...olderMessages]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Box
      sx={{
        width: "500px",
        margin: "auto",
        padding: "20px",
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fafafa",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        ChatBot
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />

      <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <InfiniteScroll
          dataLength={messages.length}
          next={fetchMoreMessages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
          scrollThreshold={0.9}
        >
          {messages.map((msg, index) => (
            <Paper
              key={index}
              sx={{
                padding: 2,
                marginBottom: 1,
                backgroundColor: msg.sender === "bot" ? "#f1f1f1" : "#4caf50",
                color: msg.sender === "bot" ? "black" : "white",
                borderRadius: 2,
                maxWidth: "100%",
                alignSelf: msg.sender === "bot" ? "flex-start" : "flex-end",
              }}
            >
              {msg.text}
            </Paper>
          ))}
        </InfiniteScroll>
      </div>

      {isLoading && (
        <Typography
          variant="body2"
          align="left"
          color="textSecondary"
          sx={{ marginTop: 2 }}
        >
          Bot is typing...
        </Typography>
      )}

      <Box display="flex" flexDirection="row" gap={2}>
        <TextField
          label="Type a message"
          variant="outlined"
          value={userInput}
          onChange={handleUserInput}
          fullWidth
          sx={{ borderRadius: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{ height: "56px", borderRadius: 2 }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBot;

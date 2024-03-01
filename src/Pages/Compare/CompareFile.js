import { useState, useEffect } from "react";
import "../../App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { baseurl } from "../../utils/BaseUrl";
import axios from "axios";
const CompareFile = ({ resume, jobDes }) => {
  // let [userQuestion, setUserQuestion] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  let confirm;
  // State to store chat messages
  const [chatMessages, setChatMessages] = useState([]);

  // Function to handle user messages
  const handleUserMessage = async (userMessage) => {
    const formData = new FormData();
    formData.append("pdfDocs", resume);
    formData.append("pdfDocs", jobDes);

    formData.append("userQuestion", userMessage);
    // formData.append('userId', userId);

    setIsLoading(true);

    try {
      // Send the user's question to the API
      const response = await axios.post(
        `${baseurl}/api/pdf/getResultTwoPdfs`,
        formData
      );
      confirm = response.data.chat_history;

      // Create a new user message object
      const newUserMessage = {
        message: userMessage,
        sender: "user",
        direction: "outgoing",
      };

      // Update chat messages state with the new user message
      const updatedChatMessages = [...chatMessages, newUserMessage];
      // Check if the answer is available
      if (confirm) {
        // For subsequent questions, add the answer to chat messages
        updatedChatMessages.push({
          message: confirm,
          sender: "backend",
        });
      }

      setChatMessages(updatedChatMessages);

      // Set the answer for the next user message

      // Clear the input field
      // setUserQuestion('');
    } catch (e) {
      // console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {/* A container for the chat window */}
      <div style={{ position: "relative", height: "90vh", width: "700px" }}>
        <MainContainer>
          <ChatContainer style={{ background: "#eaeaea" }}>
            {/* Display chat messages and typing indicator */}
            <MessageList
              typingIndicator={
                isLoading ? <TypingIndicator content="Pdf is thinking" /> : null
              }
            >
              {/* Map through chat messages and render each message */}
              {chatMessages.map((message, i) => {
                return (
                  <Message
                    key={i}
                    model={message}
                    style={
                      message.sender === "Pdf " ? { textAlign: "left" } : {}
                    }
                  />
                );
              })}
            </MessageList>
            {/* Input field for the user to type messages */}
            <MessageInput
              placeholder="Type Message here"
              onSend={handleUserMessage}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </>
  );
};

export default CompareFile;


import React, { useState, useEffect, useCallback } from "react";
import {  View,  Text, StyleSheet,   Button,  Alert, FlatList} from "react-native";
import { Input} from "react-native-elements";
import { TapGestureHandler } from 'react-native-gesture-handler';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [currentUserID, setCurrentUserID] = useState("");
  const [hideChat, setHideChat] = useState(false);
  const [createMessageStatus, setCreateMessageStatus] = useState(null);
  const [removeMessage, setRemoveMessage] = useState(null);
  
  
  const getAllMessages = useCallback(async () => {
    
    const userData = await AsyncStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      const token = user?.data?.accessToken;
      const currentUserId = user?.data?._id;
  
      try {
        const response = await axios(
          "https://chat-api-with-auth.up.railway.app/messages/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        const data = response.data;
        if (data) setMessages(data);
  
        setCurrentUserID(currentUserId);
      } catch (e) {
        console.log(e.messages);
      }
    }
  }, []);
  

  useEffect(() => {
    getAllMessages();

    const chatVisible = async () => {
      const userData = JSON.parse(await AsyncStorage.getItem("user"));
      console.log(userData);
      const checkIfAuth = () =>
        userData?.status === 200 &&
        userData?.message === "Successfully authenticated";

      if (checkIfAuth()) {
        console.log("You have Successfully Signed in!");
        getAllMessages();
        setHideChat(false);
      } else if (!checkIfAuth()) {
        console.log("Not Working");
        setHideChat(true);
        setMessages([]);
      }
      getAllMessages();
    };
    chatVisible();
  }, [getAllMessages]);


  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = JSON.parse(await AsyncStorage.getItem("user"));
      setToken(userData?.data?.accessToken);
    };
  
    fetchUserData();
  }, []);
  
  const sendMessage = async () => {
    const message = {
      content: messageInput,
    };
  
    try {
      const response = await axios.post(
        "https://chat-api-with-auth.up.railway.app/messages",
        message,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response?.data;
      setCreateMessageStatus(data);
      if (data) getAllMessages();
    } catch (e) {
      console.warn(e.message);
    }
  };
  

  const deleteMessage = async () => {
    const userData = JSON.parse(await AsyncStorage.getItem("user"));
    const token = userData?.data?.accessToken;
    
    try {
      await axios.delete(
        `https://chat-api-with-auth.up.railway.app/messages/${removeMessage}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Message Succesfully Removed!")
      getAllMessages();
    } catch (error) {
      console.warn(error.message);
    }
  };

  const handleSingleTap = (message) => {
    Alert?.alert("Delete", "Are you sure you want to delete this Message?", [
      { text: "Cancel", style: "Cancel" },
      {
        text: "Delete",

        onPress: () => deleteMessage(message?._id),
      },
    ]);
  };
  
  const ListItem = React.memo(({ item }) => (
    <TapGestureHandler
      key={item?._id}
      onHandlerStateChange={
        item?.user?._id === currentUserID ? () => handleSingleTap(item) : ""
      }
    >
      <View style={styles.textContainer}>
        <Text
          onPress={() =>
            setRemoveMessage(
              item?.user?._id === currentUserID ? item?._id : null
            )
          }
          style={
            item?.user?._id === currentUserID
              ? styles.myText
              : item?.user?._id !== currentUserID && styles.text
          }
        >
          {item?.content}
        </Text>
      </View>
    </TapGestureHandler>
  ));
  
  const renderItem = ({ item }) => <ListItem item={item} />;

  useEffect(() => console.log(currentUserID, "222"), [currentUserID]);


  return (
    <View>
      {hideChat === false ? (
        <View>
          <FlatList
            data={messages?.data}
            renderItem={renderItem}
            keyExtractor={(item) => item?._id}
            style={{ marginBottom: 120 }}
          />
          <View style={styles.bottomContainer}>
            <Input
              placeholder="Meddelande"
              value={messageInput}
              onChangeText={setMessageInput}
              inputContainerStyle={styles.inputContainer}
            />
            <Button title="Send message" onPress={sendMessage} />
          </View>
        </View>
      ) : (
        <View>
          <Text>You have to Sign in!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 420,
    right: 0,
    fontSize: 22,
    padding: 10,
    textAlign: "right",
    backgroundColor: "White",
  },
  textContainer: {
    width: 400,
    height: 50,
  },
  text: {
    backgroundColor: "lightblue",
    height: 30,
    margin: 4,
    borderRadius: 5,
    fontSize: 20,
    textAlign: "left",
  },
  myText: {
    backgroundColor: "orange",
    height: 30,
    margin: 4,
    borderRadius: 5,
    fontSize: 20,
    textAlign: "right",
  },
  notLoggedinText: {
    textAlign: "center",
    marginTop: 400,
  },
  bottomContainer: {
    position: "absolute",
    justifyContent: 'space-between', 
    alignItems: 'center',
    width: 400,
    padding: 10,
    bottom: 0,
    
  },

  postContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
  },
});


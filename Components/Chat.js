/* import 'react-native-get-random-values';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast'
import { v4 as uuidv4 } from 'uuid';

const Chat = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storeUserDetails = async () => {
      try {
        await AsyncStorage.setItem('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkYTRiZGJjNzVlMjNhY2JmMjk5ZDAiLCJ1c2VybmFtZSI6IlplcmsiLCJkYXRlIjoiMjAyMy0xMC0wNFQxNzo0NTozMy41ODZaIiwiaWF0IjoxNjk2NDQxNTU3fQ.7sDc5Z8lUHJmxwsKEdRogwtrT3k9InQQPJmA4OUHBW8');
        await AsyncStorage.setItem('user_id', '651da4bdbc75e23acbf299d0');
      } catch (e) {
        // saving error
      }
    };
    storeUserDetails();
  }, []);

  const createMessage = async () => {
    if (!newMessage.trim()) {
      Toast.show("Don't forget to write a Message!", Toast.SHORT);
      return;
    }
    const userId = await AsyncStorage.getItem('user_id');
    const message = { id: uuidv4(), text: newMessage, user: userId };
    setMessages(prevMessages => [...prevMessages, message]);
    setNewMessage('');
  };

  const handleDelete = (id) => {
    setMessages(prevMessages => prevMessages.filter(message => message.id !== id));
  };

  return (
    <View>
      <TextInput
        placeholder="Type a message"
        value={newMessage}
        onChangeText={text => setNewMessage(text)}
        style={{ padding: 10, marginBottom: 10 }}
      />
      <Button title="Send" onPress={createMessage} />
      {messages.map((message) => {
        const userId = AsyncStorage.getItem('user_id');
        return (
          <View key={message.id} style={{flexDirection: 'row', justifyContent: message.user === userId ? 'flex-end' : 'flex-start', padding: 10, marginBottom: 10}}>
            <Text style={{textAlign: message.user === userId ? 'right' : 'left', padding: 10, backgroundColor: 'lightgray', borderRadius: 10}}>
              {message.text}
            </Text>
            <TouchableOpacity onPress={() => handleDelete(message.id)}>
              
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default Chat;
 */


/* import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export function Chat() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
         
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
};

export default Chat;
 */

/* ___________________________________________THIS CODE BELOW WORKS_____________________________________________ */
/* import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export function Chat() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  const onLongPress = useCallback((context, message) => {
    const options = ['Delete Message', 'Cancel'];
    const cancelButtonIndex = options.length - 1;
    context.actionSheet().showActionSheetWithOptions({
        options,
        cancelButtonIndex
    }, (buttonIndex) => {
        switch (buttonIndex) {
            case 0:
                setMessages(previousMessages =>
                    previousMessages.filter(msg => msg._id !== message._id)
                );
                break;
            case 1:
                break;
        }
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      onLongPress={onLongPress}
      user={{
        _id: 1,
      }}
    />
  )
};

export default Chat;

___________________________________________THIS CODE ABOVE WORKS_____________________________________________
*/



/* import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export function Chat({ user }) {
  const [messages, setMessages] = useState([]);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU5MDg2MzJjMGNjODFlMzhmZGYzYWMiLCJ1c2VybmFtZSI6InRlc3RpbmciLCJkYXRlIjoiMjAyMy0wOC0yNVQyMDowMDozNS4zMDNaIiwiaWF0IjoxNjkzNDA1Nzc5fQ.njTUYJFcibPxQ9gSCwOMtXOIZP4Gb5SA5xIXMStqm8s'; 

  useEffect(() => {
    fetch('https://chat-api-with-auth.up.railway.app/messages', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (Array.isArray(data)) {
        const messages = data.filter(message => message.user._id === user._id);
        setMessages(messages);
      } else {
        console.error('Woria is not an array');
        if (data.messages && Array.isArray(data.messages)) {
          const messages = data.messages.filter(message => message.user._id === user._id);
          setMessages(messages);
        }
      }
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  }, [user, token]);
  
  
  const onSend = useCallback((messages = []) => {
    fetch('https://chat-api-with-auth.up.railway.app/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messages[0]),
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  }, []);
  
  const onLongPress = useCallback((context) => {
    const options = ['Delete Message', 'Cancel'];
    const cancelButtonIndex = options.length - 1;
    context.actionSheet().showActionSheetWithOptions({
        options,
        cancelButtonIndex
    }, (buttonIndex) => {
        switch (buttonIndex) {
            case 0:
                fetch(`https://chat-api-with-auth.up.railway.app/messages/64e7116018084705cd1f8346`, {
                  method: 'DELETE',
                })
                .catch(error => {
                  console.error('There has been a problem with your fetch operation:', error);
                });
                break;
            case 1:
                break;
        }
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      onLongPress={onLongPress}
      user={user}
    />
  );
}

export default Chat; */


import React, { useRef, useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';

const Message = ({ side, message }) => {
  return (
    <View style={{ alignSelf: side ? 'flex-end' : 'flex-start' }}>
      <Text>{message}</Text>
    </View>
  );
};

const Chat = () => {
  const scrollViewRef = useRef();
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // TODO: Send the message to the server
    // After sending the message, clear the input
    setMessage('');
  };

  return (
    <ScrollView 
      style={styles.container}
      ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
    >
      <View style={styles.messageContainer}>
        <Message side={false} message="Hello"/>
        <Message side={true} message="Hi"/>
      
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder='Write a message..'
        />
        <Button title='Send' onPress={handleSendMessage} />
      </View>
    </ScrollView>
  )
}



export default Chat;
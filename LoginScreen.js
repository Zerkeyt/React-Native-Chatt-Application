import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

  
   export default function LoginScreen() {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [infoData, setInfoData] = useState({});
      const [errorMessage, setErrorMessage] = useState("");
    
      const navigation = useNavigation();

    
      const checkIfAuth = () =>
        infoData.status === 200 &&
        infoData.message === "Successfully authenticated";
    
      const submittedData = async () => {
        try {
          const loginInfo = {
            username,
            password,
          };
    
          const response = await axios.post(
            "https://chat-api-with-auth.up.railway.app/auth/token",
            loginInfo
          );
          const data = await response.data;
          if (data) {
            setInfoData(data);
            await AsyncStorage.setItem("user", JSON.stringify(data));
           
            if (checkIfAuth())
              navigation.navigate("Chat");
            }

            getAllMessages();
            setHideChat(false);

        } catch (error) {

          setErrorMessage(error.response?.data?.message);
          
        }
      };
      const StyledLoginText = styled.Text`
      font-size: 18px;
      color: blue;
      text-align: center;
      padding: 10px;
    `;
    return (
      <View>
        <StyledLoginText>Welcome to the login page!</StyledLoginText>
        <TextInput
        style={{borderColor: 'gray', borderWidth: 2, margin: 10, padding: 5}}
        placeholder="User name"
         value={username}
      onChangeText={text => setUsername(text)}
/>
        <TextInput
          style={{borderColor: 'gray', borderWidth: 2, margin: 10, padding: 5}}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Pressable style={styles.button} onPress={submittedData}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      </View>
    );
  };
  const styles = StyleSheet.create({
    
    input: {
      height: 40,
      width: 250,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },

    button: {
      width: 250,
      height: 50,
      marginLeft: 80,
      marginBottom: 20, 
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 1,
      elevation: 3,
      backgroundColor: "green",
    },

    text: {
      fontSize: 15,
      fontWeight: "bold",
      color: "white",
    },
  });
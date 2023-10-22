import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('https://chat-api-with-auth.up.railway.app/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        console.log(username);
        console.log(password)

        Alert.alert(data.message);
        navigation.navigate('Login');
      } else {
        Alert.alert("Registration failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const StyledText = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
  background-color: green;
  border-width: 5px;
  border-color: darkgreen;
  border-radius: 0px;
  padding: 5px;
  margin-top: 100px;
`;

const StyledRegisterText = styled.Text`
  font-size: 15px;
  color: blue;
  text-align: center;
  padding: 10px;  
  margin-bottom: 20px;
`;
  return (
    <View>
    <StyledRegisterText>Register here</StyledRegisterText>
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


    <Button style={{marginTop: 50}} title="Register" onPress={handleRegister} />
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <StyledText>Login here</StyledText>
    </TouchableOpacity>
  </View>
  
  );
};

export default Register

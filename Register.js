import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

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

  return (
    <View>
      <Text>Registrera dig</Text>
      <TextInput
        placeholder="Användarnamn"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Lösenord"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Registrera" onPress={handleRegister} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register

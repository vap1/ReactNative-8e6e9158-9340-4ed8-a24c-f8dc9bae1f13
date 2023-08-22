
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { UserRegistrationRequest, UserRegistrationResponse } from './api/types';
import { register } from './api/api';

const RegistrationScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleRegistration = async () => {
    const registrationRequest: UserRegistrationRequest = {
      username,
      password,
      email,
      role,
    };

    try {
      const response: UserRegistrationResponse = await register(registrationRequest);
      if (response.success) {
        Alert.alert('Registration successful');
      } else {
        Alert.alert('Registration failed', response.errorMessage);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during registration');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationScreen;

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

interface RegistrationFormProps {
  registerUser: (username: string, password: string, email: string, role: string) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ registerUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = () => {
    if (username && password && email && role) {
      registerUser(username, password, email, role);
    } else {
      Alert.alert('Error', 'Please fill in all fields');
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
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationForm;
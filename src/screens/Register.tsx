import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {RegisterUser} from '../api/auth/auth';


type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const Register: React.FC<Props> = ({navigation}) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleRegister = async () => {
    const {firstName, lastName, email, phone, password} = state;
    console.log('state is', state);

    if (!firstName || !lastName || !email || !phone || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const result = await RegisterUser({
        firstName,
        lastName,
        email,
        phone,
        password,
      });
      console.log('result is this', result);
      if (result.code === 200) {
        Alert.alert('Success', 'Registration successful!');
        navigation.navigate('Login');
        setState({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
        });
      } else {
        Alert.alert(
          'Error',
          result?.message || 'Registration failed. Please try again.',
        );
      }
    } catch (error) {
      console.error('Registration failed:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>
          Create an account to enjoy tasty treats
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#999"
          style={styles.input}
          value={state.firstName}
          onChangeText={text => setState({...state, firstName: text})}
        />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#999"
          style={styles.input}
          value={state.lastName}
          onChangeText={text => setState({...state, lastName: text})}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="email-address"
          value={state.email}
          onChangeText={text => setState({...state, email: text})}
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="phone-pad"
          value={state.phone}
          onChangeText={text => setState({...state, phone: text})}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          style={styles.input}
          secureTextEntry
          value={state.password}
          onChangeText={text => setState({...state, password: text})}
        />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
  subtitleContainer: {
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  },
  registerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default Register;

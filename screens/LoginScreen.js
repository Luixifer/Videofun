import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" placeholderTextColor="#999" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" placeholderTextColor="#999" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.btn} onPress={login}><Text style={styles.btnText}>Entrar</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={{ color:'#fff', marginTop:12 }}>Registrarse</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#000', justifyContent:'center', alignItems:'center', padding:20 },
  input: { width:'100%', padding:12, borderRadius:8, backgroundColor:'rgba(255,255,255,0.05)', color:'#fff', marginBottom:12 },
  btn: { backgroundColor:'#1e90ff', padding:12, borderRadius:8, width:'100%', alignItems:'center' },
  btnText: { color:'#fff', fontWeight:'bold' }
});

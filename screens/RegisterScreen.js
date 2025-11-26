import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const auth = getAuth();

  const register = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCred.user, { displayName });
      // create user doc
      await setDoc(doc(db, 'users', userCred.user.uid), {
        displayName,
        avatarUrl: '',
        bio: '',
        followers: 0
      });
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nombre" placeholderTextColor="#999" style={styles.input} value={displayName} onChangeText={setDisplayName} />
      <TextInput placeholder="Email" placeholderTextColor="#999" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" placeholderTextColor="#999" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.btn} onPress={register}><Text style={styles.btnText}>Crear cuenta</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#000', justifyContent:'center', alignItems:'center', padding:20 },
  input: { width:'100%', padding:12, borderRadius:8, backgroundColor:'rgba(255,255,255,0.05)', color:'#fff', marginBottom:12 },
  btn: { backgroundColor:'#1e90ff', padding:12, borderRadius:8, width:'100%', alignItems:'center' },
  btnText: { color:'#fff', fontWeight:'bold' }
});

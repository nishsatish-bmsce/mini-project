import AsyncStorage from '@react-native-async-storage/async-storage';

export const signupHandler = async (phone, username, pwd) => {
   const result = await fetch('http://localhost:3000/signup', {
    method: 'POST',
    body: JSON.stringify({phone, pwd, username}),
    headers: {
      'Content-Type': 'application/json'
    }
   });
   const res = await result.json();
   await AsyncStorage.setItem('JWT', res.token);
   return res.token;
}
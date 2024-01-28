import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginHandler = async (email, pwd) => {
   const result = await fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify({phone: email, pwd}),
    headers: {
      'Content-Type': 'application/json'
    }
   });
   const res = await result.json();
   await AsyncStorage.setItem('JWT', res.token);
   return res.token;
}
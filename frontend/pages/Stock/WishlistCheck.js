import AsyncStorage from "@react-native-async-storage/async-storage"

export const checkIfItemIsWishlisted = async (ticker) => {
  const token = await AsyncStorage.getItem('JWT');
  const result = await fetch('http://localhost:3000/checkExistingItem', {
    method: 'POST',
    body: JSON.stringify({ ticker }),
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  const res = await result.json();
  console.log(res);

  if (res.exists) {
    return true;
  } else {
    return false;
  }
}
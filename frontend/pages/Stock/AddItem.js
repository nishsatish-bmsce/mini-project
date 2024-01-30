import AsyncStorage from "@react-native-async-storage/async-storage"

export const addItemToWishlist = async (ticker) => {
  try {
    const token = await AsyncStorage.getItem('JWT');
    const result = await fetch('http://localhost:3000/wishlist', {
      method: 'POST',
      body: JSON.stringify({ticker: ticker.toUpperCase()}),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const res = await result.json();
    console.log(res);
    return res
  } catch (error) {
    console.log(error);
  }

}
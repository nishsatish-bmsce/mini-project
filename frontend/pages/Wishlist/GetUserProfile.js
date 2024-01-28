import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserProfile = async (token) => {
  try {
    let userProfile = {};
    const token = await AsyncStorage.getItem('JWT');
    if (!token) {
      return;
    }
    let result = await fetch('http://localhost:3000/wishlist', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    userWishlist = await result.json();
    
    result = await fetch('http://localhost:3000/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    userInfo = await result.json();
  
    userProfile = { ...userWishlist, ...userInfo };
    return userProfile;
    
  } catch (error) {
    console.log(error);
  }

}
import AsyncStorage from '@react-native-community/async-storage';

export const saveInStorage = async (key, data) => {
  const arrayData = JSON.stringify(data);

  return await AsyncStorage.setItem(key, arrayData);
}

export const getStorage = async (key) => {
  return await AsyncStorage.getItem(key);
}
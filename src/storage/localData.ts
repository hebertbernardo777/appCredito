import AsyncStorage from '@react-native-async-storage/async-storage';

const LOCALDATA = 'login-keys'
export interface StorageProps{
    idUser: string,
    idDevice: string,
}

export const storeData = async (value:StorageProps) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(LOCALDATA, jsonValue);
    } catch (e) {
      // saving error
      throw e;
    }
  };

  export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(LOCALDATA);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      throw e;
    }
  };


  export const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }
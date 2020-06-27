import { Alert } from 'react-native';

const Component = (title, message) => {
  Alert.alert(
    title,
    message,
    [
      { text: 'OK', onPress: () => { } },
    ],
    { cancelable: false }
  )
}

export default Component;
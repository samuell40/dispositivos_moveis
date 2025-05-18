import { Text, View } from "react-native";
import { Button } from 'react-native-paper';



const MyComponent = () => (
  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);

export default MyComponent;
import * as React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/channels4_profile.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
        <ProgressBar 
          progress={0.5} 
          color={MD3Colors.error50} 
          style={styles.progressBar}
        />
        <View style={styles.bola} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#262222',
  },
  image: {
    width: 550,
    height: 300,
    marginTop: 10,
  },
  progressBar: {
    marginBottom: 95,
    marginTop: 190,
    width: 330,  
    borderRadius: 3, 
  },
  bola: {
    width: 16,
    height: 16,
    marginTop:-105,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});

export default MyComponent;

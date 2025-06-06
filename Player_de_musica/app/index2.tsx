import * as React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import { ProgressBar, MD3Colors, Avatar, PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const MyComponent = () => {
  const router = useRouter();
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => router.push("/")}>
            <MaterialCommunityIcons name="arrow-left" size={28} color="white" />
          </Pressable>
          <Avatar.Image source={require('@/assets/images/channels4_profile.jpg')} size={36} />
        </View>

        <Image
          source={require('@/assets/images/channels4_profile.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.Title}>Ontem comi pipoca</Text>
        <Text style={styles.Subtitle}>Caçarola</Text>

        <View style={styles.iconDois}>
          <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
          <MaterialCommunityIcons name="playlist-music" size={30} color="white" />
          <MaterialCommunityIcons name="equalizer" size={30} color="white" />
          <MaterialCommunityIcons name="plus" size={30} color="white" />
        </View>

        <ProgressBar
          progress={0.5}
          color={MD3Colors.error50}
          style={styles.progressBar}
        />
        <View style={styles.bola} />

        <View style={styles.iconTres}>
          <MaterialCommunityIcons name="repeat" size={30} color="white" />
          <MaterialCommunityIcons name="skip-previous" size={30} color="white" />
          <MaterialCommunityIcons name="play" size={70} color="white" />
          <MaterialCommunityIcons name="skip-next" size={30} color="white" />
          <MaterialCommunityIcons name="repeat-once" size={30} color="white" />
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#262222',
  },
  header: {
   flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 30,
  justifyContent: 'space-between',
   gap: 300,
  },
  avatar: {
    top: 16,
    right: 46,
    backgroundColor: 'transparent',
    width: 10,
  },
  image: {
    width: 550,
    height: 300,
    marginTop: 60,
  },
  Title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  Subtitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  progressBar: {
    marginBottom: 95,
    marginTop: 100,
    width: 290,
    borderRadius: 3,
  },
  bola: {
    width: 16,
    height: 16,
    marginTop: -105,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  iconDois: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    marginBottom: -70,
  },
  iconTres: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 100,
  },
});

export default MyComponent;
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";


export default function NescauComparacao() {
  return (
<ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <Text style={styles.titulo}>COMPARAÇÕES</Text>


      <View style={styles.row}>
        <View style={styles.item}>
          <Image
            source={require('@/assets/images/anime1.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ligula vel.
          </Text>
        </View>


        <View style={styles.item}>
          <Image
            source={require('@/assets/images/anime3.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ligula vel.
          </Text>
        </View>
        </View>


      <View style={styles.row}>
        <View style={styles.item}>
          <Image
            source={require('@/assets/images/anime1.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ligula vel.
          </Text>
        </View>


        <View style={styles.item}>
          <Image
            source={require('@/assets/images/anime3.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ligula vel.
          </Text>
        </View>
      </View>
    </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 30,
  },
  item: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    fontSize: 14,
  },
});
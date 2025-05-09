import { View, Button, Text, TextInput, Image, StyleSheet } from "react-native";

export default function index() {
  return (
    <View style={styles.container}> -- view e como se fosse uma DIV
      <View>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.logo}
        ></Image>
      </View>
        <View style={styles.textBoxContainer}>
          <Text style={styles.legenda}>LOGIN</Text>
          <TextInput 
            placeholder="Digite seu login"
            style={styles.textBox}
          />
          <Text style={styles.legenda}>SENHA</Text>
          <TextInput
            placeholder="Digite seu senha"
            style={styles.textBox}
            secureTextEntry
          />
          <Button
            title="Entrar"
            color="#841584"
          />
        </View>
      <View/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    paddingTop: 0
  },
  logo: {
    width: 400,
    height: 200,
    marginBottom: 30,
  },
  legenda: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: 'center',
  },
  textBoxContainer: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: 15,
  },
  textBox: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom:20,
    borderRadius: 5,
    padding: 10,
  },
});
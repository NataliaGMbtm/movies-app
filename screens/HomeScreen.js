import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.container}>Strona główna</Text>
      <Button
        style={styles.button}
        title="Top Wszystkiego "
        onPress={() => navigation.navigate("Top")}
        color= "red"
    fontWeight= "bold"
    fontSize= {30}
    backgroundColor="pink"
    borderRadius= {5}
    width= {50}
      />
      <Button
        style={styles.button}
        title="znani aktorzy"
        onPress={() => navigation.navigate("People")}
      />
      <Button
        style={styles.button}
        title="filmy"
        onPress={() => navigation.navigate("Films")}
      />
      <Button
        style={styles.button}
        title="Seriale"
        onPress={() => navigation.navigate("Serials")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    color: "grey",
  },
  button: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: "#000",
    borderRadius: 5,
    width: 50,
  },
});

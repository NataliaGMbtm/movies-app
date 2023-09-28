import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Strona główna</Text>
      <Button
        title="Top Wszystkiego "
        onPress={() => navigation.navigate("Top")}
      />
      <Button
        title="znani aktorzy"
        onPress={() => navigation.navigate("People")}
      />
      <Button
        title="filmy"
        onPress={() => navigation.navigate("Films")}
      />
        <Button
        title="Seriale"
        onPress={() => navigation.navigate("Serials")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

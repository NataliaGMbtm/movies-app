import { Button, StyleSheet, Text, View } from "react-native";

const CardPersons = ({ person }) => {
  const title = person.known_for.map((item) =>
    item.title ? item.title : item.name
  );
  return (
    <View style={styles.container}>
      <Text>Imię Nazwisko</Text>
      <Image style={styles.people}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B527E",
    alignItems: "center",
    justifyContent: "center",
  },
  people: {
    width: "50%",
    height: "50%",
  },
});

export default People;

import React from "react";
import useMyHook from "./../hooks/useMyHook";
import { View } from "react-native";
import People from "../screens/People";

const Person = () => {
  const { data, loading } = useMyHook(
    "https://api.themoviedb.org/3/person/popular"
  );

  return (
    <View>
      {!loading &&
        data.results.map((person) => (
          <People person={person} key={person.id} />
        ))}
      ;
    </View>
  );
};

export default Person;

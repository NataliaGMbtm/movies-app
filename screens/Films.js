import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ApiUtil from './../hooks/ApiUtil';

export default function Films({navigation}) {
  const [popMovie, setPopMovie] = useState(null);
  const [topMovie, settopMovie] = useState(null);
  const [onAirMovie, setOnAirMovie] = useState(null);

  useEffect(() => {
    async function popFilms() {
      const data = await ApiUtil.getpopularMovie();
      setPopMovie(data);
    }
    async function topFilms() {
      const data= await ApiUtil.getTopMovie();
      settopMovie(data);
    }
    async function onAirFilms() {
      const data= await ApiUtil.getOnAirMovie();
      setOnAirMovie(data);
    }
    popFilms();
    topFilms();
    onAirFilms()
  }, []);

    return (
      <View>
      <Text>Popular</Text>
      <ScrollView>
        {popMovie?.results.map((movie)=>(<MovieCards movie={movie} key={movie.id}/>))}
      </ScrollView>
      <Text>Top Movie</Text>
      <ScrollView>
        {topMovie?.results.map((movie)=>(<MovieCards movie={movie} key={movie.id}/>))}
      </ScrollView>
  
      <Text >On The Air</Text>
      <ScrollView>
        {onAirMovie?.results.map((movie)=>(<MovieCards movie={movie} key={movie.id}/>))}
      </ScrollView>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "2E4374",
      alignItems: "center",
      justifyContent: "center",
  
    },
  });
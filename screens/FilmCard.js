import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default function FilmCard(movie)  {
    const [detals, setDetals] = useState(null);

    useEffect(() => {
      async function movieDetals() {
        const det = await ApiUtil.getMovieDetals(movie.id);
        setDetals(det);
      }
      
      movieDetals();
    }, []);
    return (
      <View>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="poster"
          />
          <CardContent >
            <Typography gutterBottom variant="h5">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" >
               {movie.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </View>
    )
  }



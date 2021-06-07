import { LikedRouteProps } from '../Typescript/Types';
import React, { useEffect, useState } from 'react';
import {
  Button,
    Image,
    ImageStyle,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableHighlight,
    View
  } from 'react-native';
// import { styles } from './style';
import MapView, { PROVIDER_GOOGLE, Marker, Heatmap, Circle, Polyline, Polygon } from 'react-native-maps'
import GetLocation from 'react-native-get-location';
import axios from 'axios';


const LikedRoute: React.SFC<LikedRouteProps> = () => {
    const [TheatersData , setTheaters] = useState<any>([]);

    useEffect(()=>{
      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.541497,-7.6757366&radius=5000&type=movie_theater&key=AIzaSyATg9dvQFhDPkNVhyYmoR50gmPWRuYqe0w')
      .then(Response =>{
        setTheaters(Response.data.results);
      }).catch(err =>{
        console.log(err);
      })
    },[])
    return ( 
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        
        initialRegion={{
          latitude: 33.541497,
          longitude: -7.6757366,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        
      >
        {TheatersData.map((cinema : any) =>(
          <Marker
            key={cinema.place_id}
            coordinate={{ latitude : cinema.geometry.location.lat , longitude : cinema.geometry.location.lng}}
            title={cinema.name}
            description={cinema.vicinity}
            pinColor='#e63946'
          />
        ))}
        
      </MapView>
    </View>
     );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1
  }
})
export default LikedRoute;
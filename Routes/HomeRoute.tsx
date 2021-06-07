import {Button, Text} from 'react-native';
import { HomeRouteProps, HomeScreenNavigationProp, MovieTypes } from '../Typescript/Types';
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { styles } from './style';
import MovieCard from '../Components/MovieCard';
import { ScrollView } from 'react-native-gesture-handler';
import { GetPopularData } from '../Helpers/GetPopularMovies';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
const Stack = createStackNavigator();


interface ListProps {
    navigation: HomeScreenNavigationProp;
}

const HomeRoute: FC<HomeRouteProps> = () => {
    
    return ( 
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{headerShown: false}} name="Movie Feed" component={List} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>  
    );
}

const List: FC<ListProps> = ({navigation})=>{
    const [MovieList,setMovieList] = useState<MovieTypes[]>([]);

    useEffect(()=>{
        GetPopularData().then(result =>{
            setMovieList(result);
        }).catch(err =>{
            console.log(err);
        })
    },[])
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Popular movies</Text>
            {MovieList.map(Movie =>(
                <MovieCard Data={Movie} key={Movie.original_title} navigation={navigation} />
            ))}
        </ScrollView> 
    )
}

export default HomeRoute;
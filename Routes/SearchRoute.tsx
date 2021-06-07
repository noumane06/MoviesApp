import {Text,View , ScrollView , ActivityIndicator } from 'react-native';
import { MovieTypes, SearchRouteProps, SearchScreenNavigationProp } from '../Typescript/Types';
import React, { useEffect, useState } from 'react';
import { DetailStyle, styles } from './style';
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons'; 
import { SearchMovie, Trending } from '../Helpers/GetPopularMovies';
import MovieCard from '../Components/MovieCard';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';

const Stack = createStackNavigator();

interface ListProps {
    navigation: SearchScreenNavigationProp;
}

const SearchRoute: React.SFC<SearchRouteProps> = () => {
    
    return ( 
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{headerShown: false}} name="Find" component={Find} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>  
    );
}
export default SearchRoute;


const Find: React.SFC<ListProps> = ({navigation}) => {

    const [search , setSearch ] = useState('');
    const [MovieList,setMovieList] = useState<MovieTypes[]>([]);
    const [TrendingList,setTrendingList] = useState<MovieTypes[]>([]);
    const [isLoading , setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        Trending().then(result =>{
            setTrendingList(result);
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
            console.log(err);
        })
    },[])
    const updateSearch = (search : string) =>{
        setSearch(search)
    }
    const SearchController = () =>{

        if (search.length !== 0) {
            setLoading(true);
            SearchMovie(search).then(result =>{
                setMovieList(result);
                setLoading(false);

            }).catch(err =>{
                setLoading(false);
                console.log(err);
            })
        }
        
    }
    return ( 
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
            
            <Text style={styles.title}>Finder</Text>
            <View style={styles.searchSection}>
                <FontAwesome style={styles.searchIcon} name="search" size={15} color="#424242" />
                <TextInput
                    style={styles.input}
                    onChangeText={updateSearch}
                    value={search}
                    placeholder='Search for a movie'
                    returnKeyType='search'
                    onKeyPress={SearchController}
                />
            </View>
            {isLoading &&(<ActivityIndicator style={{marginTop : 50}}/>)}
            {(search.length === 0 && !isLoading) && (
                <>
                <Text style={DetailStyle.SmallTitle} >Trending Movies :</Text>
                {TrendingList.map(Movie =>(
                    <MovieCard Data={Movie} key={Movie.id} navigation={navigation} />
                ))}
                </>
            )}
            {(MovieList.length !== 0 && !isLoading) && (
                <>
                {MovieList.map(Movie =>(
                    <MovieCard Data={Movie} key={Movie.id} navigation={navigation} />
                ))}
                </>
            )}
        </ScrollView> 
     );
}
 
// AIzaSyATg9dvQFhDPkNVhyYmoR50gmPWRuYqe0w
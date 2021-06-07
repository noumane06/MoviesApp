import {Image,Text,View,TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from '../Routes/style';
import { HomeScreenNavigationProp, MovieTypes, SearchScreenNavigationProp } from '../Typescript/Types';

export interface MovieCardProps {
    Data : MovieTypes,
    navigation: HomeScreenNavigationProp | SearchScreenNavigationProp;
}
 
const MovieCard: React.SFC<MovieCardProps> = ({Data , navigation}) => {
    return ( 
        <TouchableOpacity style={styles.QuoteContainer} onPress={() => navigation.navigate('Details',{Data : Data})}>
            <View>
            <Image
                source={{
                uri:
                    `https://image.tmdb.org/t/p/w300${Data.poster_path}`,
                }}
                width={100}
                style={styles.Image}
            />
            </View>
            <View style={styles.BodyContainer}>

                <Text style={styles.Heading}>{Data.original_title}</Text>
                <Text style={styles.desciption}>{Data.release_date} </Text>
                <Text style={styles.desciption}>Vote average : {Data.vote_average}</Text>  
                <Text style={styles.desciption}>Original language : {Data.original_language} </Text>
                <Text style={styles.link}>Click to see more . </Text>  

            </View>
      </TouchableOpacity>
     );
}
 
export default MovieCard;
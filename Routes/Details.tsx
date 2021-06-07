import {Text, View , Image , ScrollView} from 'react-native';
import React from 'react';
import { HomeScreenNavigationProp, RootStackParamList } from '../Typescript/Types';
import { RouteProp } from '@react-navigation/native';
import { Ionicons , FontAwesome5 , AntDesign , MaterialIcons } from '@expo/vector-icons';
import { DetailStyle } from './style';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
interface DetailsProps {
    route: ProfileScreenRouteProp,
    navigation: HomeScreenNavigationProp;
}
 
const Details: React.SFC<DetailsProps> = ({ route }) => {
    const {Data} = route.params ;
    return ( 
        <ScrollView style={DetailStyle.container}>
            <Image
                source={{
                uri:
                    `https://image.tmdb.org/t/p/w300/${Data.backdrop_path}`,
                }}
                
                style={DetailStyle.Image}
            />
            <Text style={DetailStyle.title} >{Data.original_title}</Text>
            <Text style={DetailStyle.rating} >
                <Ionicons name={'ios-star'} size={18} color='#e9c46a' />  {Data.vote_average}
            </Text>
            <Text style={DetailStyle.Lang} >
                Language : <FontAwesome5 name="flag-usa" size={14} color="#e63946" />
            </Text>
            <Text style={DetailStyle.SmallTitle} >Description</Text>
            <Text style={DetailStyle.desciption} >{Data.overview}</Text>
            <Text style={DetailStyle.SmallTitle} >More details</Text>
            <View style={{marginTop:15}}>
                <Text style={DetailStyle.detailsText} >
                <AntDesign name="barschart" size={15} color="#00000091" />  Popularity  : {Data.popularity}
                </Text>
                <Text style={DetailStyle.detailsText} >
                    <MaterialIcons name={'date-range'} size={15} color='#00000091' />  release date  : {Data.release_date}
                </Text>
                <Text style={DetailStyle.detailsText} >
                    <MaterialIcons name="calculate" size={15} color="#00000091" />  Vote count  : {Data.vote_count}
                </Text>
            </View>
            
        </ScrollView> 
     );
}


 
export default Details;
import {
    StyleSheet,
  } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      marginTop : 50,
      marginRight : 15 ,
      marginLeft : 15 ,
    },
    searchSection: {
        marginTop : 15 ,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius : 8
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius : 8
    },
    QuoteContainer : {
        marginTop : 25,
        padding : 15 ,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 10,
        },
        shadowOpacity: 0.05,
        shadowRadius: 5.65,
        elevation: 5,
        backgroundColor : '#fff',
        borderRadius : 10 ,
        height : 'auto',
        alignItems : 'flex-start',
        flexDirection : "row"
        
    },
    BodyContainer :
    {
        marginTop : 5
    },
    title : {
        fontSize: 30,
        fontFamily: 'Helvatica',
        fontWeight : 'bold',
    },
    
    Image : {
        width : 100 ,
        height : 150 ,
        borderRadius : 15,
        marginRight : 15
    },
    desciption : {
        color : '#00000091',
        fontFamily: 'GlacialRegular',
        marginTop : 5,
        fontSize: 14,
    },
    link : {
       
        color : '#1a3b9c',
        fontFamily: 'GlacialBold',
        fontWeight : 'bold',
        marginTop : 25,
        fontSize: 14,
    },
    Heading : {
        fontFamily: 'GlacialBold',
        fontWeight : 'bold',
        fontSize: 18,
        alignSelf : 'flex-start',
        color: "#E50914",
    },
});
export const DetailStyle =StyleSheet.create({

    container :{
        padding : 20
    },
    title : {
        fontSize: 30,
        marginTop : 10 ,
        fontFamily: 'Helvatica',
        fontWeight : 'bold',
    },
    SmallTitle : {
        fontFamily: 'GlacialBold',
        color : '#0077b6',
        marginTop : 15 ,
        fontSize: 25,
    },
    rating : {
        fontFamily: 'GlacialRegular',
        color : '#e9c46a',
        marginTop : 5 ,
        fontSize: 16,
    },
    Lang : {
        fontFamily: 'GlacialRegular',
        color : '#e63946',
        marginTop : 5 ,
        fontSize: 16,

    },
    Image : {
        width : 320 ,
        height : 150 ,
        borderRadius : 15,
        marginRight : 15,
        resizeMode: 'cover',
        
    },
    desciption : {
        color : '#00000091',
        fontFamily: 'GlacialRegular',
        marginTop : 5,
        fontSize: 16,
    },
    detailsText : {
        color : '#00000091',
        fontFamily: 'GlacialRegular',
        marginTop : 5,
        fontSize: 16,
    }
});
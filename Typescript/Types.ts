import { StackNavigationProp } from '@react-navigation/stack';

export interface LikedRouteProps {
    
}

export interface SearchRouteProps {
    
}
export type RootStackParamList = {
    List: undefined,
    Find: undefined,
    Details : {Data : MovieTypes}
};


export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'List'
>;

export type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Find'
>;

export interface HomeRouteProps {
    
}

// Types 

export interface MovieTypes  {
    backdrop_path:  string,
    id:  number,
    original_language:  string,
    original_title:  string,
    overview:  string,
    popularity:  number,
    poster_path:  string,
    release_date:  string,
    title:  string,
    video:  boolean,
    vote_average:  number,
    vote_count:  number
}
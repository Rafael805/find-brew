import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import SearchTab from './TabNavigator/SearchTab';
import FavoritesTab from './TabNavigator/FavoritesTab';

const SearchTabNavigator = TabNavigator({
   SearchTab: { screen: SearchTab },
   FavoritesTab: { screen: FavoritesTab }
},
{
   tabBarPosition: 'bottom',
   tabBarComponent: props => {
      return (
         <Footer>
            <FooterTab>
               <Button
                  vertical
                  active={props.navigationState.index === 0}
                  onPress={() => props.navigation.navigate('SearchTab')}
               >
                  <Icon name="beer" />
                  <Text>Search</Text>
               </Button>

               <Button
                  vertical
                  active={props.navigationState.index === 1}
                  onPress={() => props.navigation.navigate('FavoritesTab')}
               >
                  <Icon name="star" />
                  <Text>Favorites</Text>
               </Button>
            </FooterTab>
         </Footer>
      );
   }
});

export default SearchTabNavigator;

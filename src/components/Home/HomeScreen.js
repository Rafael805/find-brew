import React, { Component } from 'react';
import { Button } from 'native-base';
import { View, Text, StyleSheet, Image } from 'react-native';

const backgroundImage = require('../../../assets/splash.jpg');

export default class HomeScreen extends Component {
   static navigationOptions = {
      header: null
   }

   render() {
      return (
         <View style={styles.homeScreenView}>
            <View style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
               <Image source={backgroundImage} style={{ flex: 1, height: null, width: null }} />
            </View>
            <Button
               block={true}
               onPress={() => this.props.navigation.navigate('SearchTabNavigator')}
            >
               <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, paddingBottom: 8 }}>
                  Search Beers
               </Text>
            </Button>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   homeScreenView: {
      flex: 1,
      justifyContent: 'flex-end'
   }
});

import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/components/Home/HomeScreen';
import SearchTabNavigator from './src/components/Search/SearchTabNavigator';

const App = StackNavigator({
   HomeScreen: { screen: HomeScreen },
   SearchTabNavigator: { screen: SearchTabNavigator },
   },
   {
      initialRouteName: 'HomeScreen'
   });

export default App;

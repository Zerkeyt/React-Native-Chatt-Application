import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import Register from './Register';
import Chat from './Components/Chat';
import Logout from './Logout';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Settings = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

const App = () => { 
  
  return (
     <NavigationContainer> 
      <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Home" component={Register} /> 
        <Drawer.Screen name="Logout" component={Logout} /> 
      </Drawer.Navigator>
    </NavigationContainer> 
  );
};




export default App;

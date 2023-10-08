/* import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import Register from './Register';
import Chat from './Components/Chat';
import ChatDrawerNavigation from './ChatDrawerNavigator';

const Stack = createStackNavigator();

const App = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Chat" component={Chat} /> 
        <Stack.Screen name="ChatDrawerNavigation" component={ChatDrawerNavigation} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default  App;
 */


/* const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; */



/* import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import Register from './Register';
import ChatDrawerNavigation from './ChatDrawerNavigator';  // Adjusted import

const Stack = createStackNavigator();

const App = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ChatDrawer" component={ChatDrawerNavigation} />  // Adjusted screen name
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; */


/* import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import Register from './Register';
import ChatDrawerNavigation from './ChatDrawerNavigator';

const Stack = createStackNavigator();

const App = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ChatDrawer" component={ChatDrawerNavigation} />  // Adjusted screen name
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
 */

/* import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import Register from './Register';
import ChatDrawerNavigation from './ChatDrawerNavigator';
import Chat from './Components/Chat';

const Stack = createStackNavigator();

const App = () => { 
  return (
     <NavigationContainer> 
      <DrawerNavigator />
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ChatDrawer" component={ChatDrawerNavigation} />
        <Stack.Screen name="Chat" component={Chat}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default App;
 */



/* 
???????????????????????????????????? THIS CODE WORKS >>>>>>>>>>>>>>>>
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import Register from './Register';
import ChatDrawerNavigation from './ChatDrawerNavigator';
import Chat from './Components/Chat';

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
      <Drawer.Screen name="Logout" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer> 
  );
};

export default App;
&&&&&&&&&&&&&&&&&&&&&&&&&&& WORKING CODE ABOVE

 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import Register from './Register';
import ChatDrawerNavigation from './ChatDrawerNavigator';
import Chat from './Components/Chat';

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
      <Drawer.Screen name="Logout" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer> 
  );
};

export default App;







/* import React from 'react';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import Register from './Register';
import ChatDrawerNavigation from './ChatDrawerNavigator';
import Chat from './Components/Chat';

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
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('Login');
  };
  return (
     <NavigationContainer> 
      <Drawer.Navigator>
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Logout" component={ChatDrawerNavigation} />
        <button onClick={handleLogout}>Logout</button>
      </Drawer.Navigator>
    </NavigationContainer> 
  );
};

export default App;
 */

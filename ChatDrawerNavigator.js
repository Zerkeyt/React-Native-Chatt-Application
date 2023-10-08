/* import Chat from './Components/Chat';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Button, View, Text } from 'react-native';  


const Drawer = createDrawerNavigator();


const ChatDrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Chat" drawerContent={props => (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <Button 
          title="Log Out" 
          onPress={() => props.navigation.navigate('LoginScreen')} 
        />
      </DrawerContentScrollView>
    )}>
      <Drawer.Screen name="Chat" component={Chat} />
    </Drawer.Navigator>
  );
};

export default ChatDrawerNavigation;
 */

/* import { createDrawerNavigator } from 'react-navigation-drawer'; */
/* import Chat from './Components/Chat';
import LoginScreen from './LoginScreen'; */

/* const Drawer = createDrawerNavigator(); */

/* export default function ChatDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ChatPage" component={Chat} />
      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
    </Drawer.Navigator>
  );
}; */

/* import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="Logout"
        onPress={() => { */
          // Clear any stored user data
          // AsyncStorage.clear();
          // Then navigate to the Login screen
      /*     props.navigation.navigate('Login');
        }}
      />
    </DrawerContentScrollView>
  );
};

const ChatDrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="ChatPage" component={Chat} />
    
    </Drawer.Navigator>
  );
};

export default ChatDrawerNavigation; */


/* import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="Logout"
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
    </DrawerContentScrollView>
  );
};

const ChatDrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="ChatPage" component={Chat} />
    
    </Drawer.Navigator>
  );
};

export default ChatDrawerNavigation;
 */
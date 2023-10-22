import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "./store";
import { View, Text, Alert } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
export default function Logout() {
  const navigation = useNavigation();

  const setHideChat = useStore((state) => state.hideChatPage);
  const setMessages = useStore((state) => state.allMessages);

  const logoutUser = async () => {

    try {
      await AsyncStorage.removeItem("user");
      navigation.navigate("Register");
      setHideChat(true);
      setMessages([]);
      console.log("Logged out");
      
      Alert.alert(
        "Logged out",
        "You have successfully logged out",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed")
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AwesomeButton
        onPress={logoutUser}
        width={150}
        height={50}
        backgroundColor="darkblue"
        backgroundShadow="red"
        backgroundDarker="green"
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Sign out</Text>
      </AwesomeButton>
    </View>
  );
}


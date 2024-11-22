import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from 'react-native';
import NewsView from './components/Newview';
import ShowNews from './components/ShowNews';



export default function App() {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewsView">
        <Stack.Screen
        name="ShowNews"
        component={ShowNews}
        options={{headerShown:false}}
        />
         <Stack.Screen
        name="NewsView"
        component={NewsView}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

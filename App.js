import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen/'
import People from "./screens/People";
import Films from "./screens/Films";
import Serials from "./screens/Serials";
import Top from "./screens/Top";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="People" component={People} />
        <Stack.Screen name="Films" component={Films} />
        <Stack.Screen name="Serials" component={Serials} />
        <Stack.Screen name="Top" component={Top} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
;

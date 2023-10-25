import { createStackNavigator } from '@react-navigation/stack';
import SelectLanguage from '../screens/SelectLanguage';
import ReadyScreen from '../screens/ReadyScreen';
import CppTest from '../screens/CppTest';
import JavaTest from '../screens/JavaTest';
import JavascriptTest from '../screens/JavascriptTest';
import Quiz_Questions from '../screens/Quiz_Questions';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Navigation=()=>{
  return (
    <Stack.Navigator      screenOptions={{
        headerShown: false, // Hide the header for all screens
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
      <Stack.Screen name="ReadyScreen" component={ReadyScreen} />
      <Stack.Screen name="CppTest" component={CppTest} />
      <Stack.Screen name="JavaTest" component={CppTest} />
      <Stack.Screen name="JavascriptTest" component={JavascriptTest} />
      <Stack.Screen name="Quiz_Questions" component={Quiz_Questions} />
    
    </Stack.Navigator>
  );
}
export default Navigation
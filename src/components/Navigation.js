import { createStackNavigator } from '@react-navigation/stack';
import Salectlanguage from '../screens/Salectlanguage';
import ReadyScreen from '../screens/ReadyScreen';
import EnglishTest from '../screens/Englishtest';
import generaltest from '../screens/generaltest';
import Quiz_Questions from '../screens/Quiz_Questions';
import Home from '../screens/Home';
import CStest from '../screens/CStest';
import Mathtest from '../screens/Mathtest';
import Sciencetest from '../screens/sciencetest';
import islamictest from '../screens/islamictest';
import Result from '../screens/Result';
const Stack = createStackNavigator();

const Navigation=()=>{
  return (
    <Stack.Navigator      screenOptions={{
        headerShown: false, // Hide the header for all screens
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Salectlanguage" component={Salectlanguage} />
      <Stack.Screen name="ReadyScreen" component={ReadyScreen} />
      <Stack.Screen name="islamictest"component={islamictest}/>
      <Stack.Screen name="EnglishTest" component={EnglishTest} />
      <Stack.Screen name="generaltest" component={generaltest} />
      <Stack.Screen name="CStest" component={CStest}/>
      <Stack.Screen name="Mathtest" component={Mathtest}/>
      <Stack.Screen name="Sciencetest" component={Sciencetest}/>
      <Stack.Screen name="Quiz_Questions" component={Quiz_Questions} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}
export default Navigation
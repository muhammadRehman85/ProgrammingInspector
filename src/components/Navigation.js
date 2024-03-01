import { createStackNavigator } from '@react-navigation/stack';
import Salectlanguage from '../screens/Salectlanguage';
import ReadyScreen from '../screens/ReadyScreen';
import EnglishTest from '../screens/Englishtest';
import Generaltest from '../screens/Generaltest';
import Quiz_Questions from '../screens/Quiz_Questions';
import Home from '../screens/Home';
import CStest from '../screens/CStest';
import Mathtest from '../screens/Mathtest';
import Sciencetest from '../screens/sciencetest';
import Islamictest from '../screens/Islamictest';
import Result from '../screens/Result';
import login from '../screens/login';
import RegistrationScreen from '../screens/RegistrationScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={login}/>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Salectlanguage" component={Salectlanguage} />
      <Stack.Screen name="ReadyScreen" component={ReadyScreen} />
      <Stack.Screen name="Islamictest" component={Islamictest}/>
      <Stack.Screen name="EnglishTest" component={EnglishTest} />
      <Stack.Screen name="Generaltest" component={Generaltest} />
      <Stack.Screen name="CStest" component={CStest}/>
      <Stack.Screen name="Mathtest" component={Mathtest}/>
      <Stack.Screen name="Sciencetest" component={Sciencetest}/>
      <Stack.Screen name="Quiz_Questions" component={Quiz_Questions} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name='RegestrationScreen'component={RegistrationScreen}/>
    </Stack.Navigator>
  );
}

export default Navigation;

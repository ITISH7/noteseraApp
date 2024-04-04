import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CollegeScreen from './screens/CollegeScreen';
import SubjectScreen from './screens/subjectScreen';

const Stack = createNativeStackNavigator();

const Navigation=()=>{
    return(<NavigationContainer >
        <Stack.Navigator screenOptions={{
            headerShown:false
        }
        }>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CollegeYear" component={CollegeScreen} />
          <Stack.Screen name="subject" component={SubjectScreen} />
        </Stack.Navigator>
      </NavigationContainer>)
}
export default Navigation;
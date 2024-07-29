import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";

const Stack = createNativeStackNavigator();


export type StackParamsList = {
    SignIn: undefined;
  };

function AuthRoutes(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={SignIn} options={{headerShown: false}}/>
        </Stack.Navigator>
         
    )
}


export default AuthRoutes;
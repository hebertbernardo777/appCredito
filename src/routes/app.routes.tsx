import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ListBullets,House,MathOperations, Baseball, BellZ  } from 'phosphor-react-native';

import Home from '../screens/Home/Home';
import Order from '../screens/Order';
import History from '../screens/History';
import { THEME } from '../theme';
import { SendOrder } from '../screens/SendOrder';
import { View,Text } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export type TabParamsList = {
    Home: undefined;
}

type orderProps = {
    parcela: number,
    valorParcela: number,
    valorCredito: number,
    valorMaquina: number,
}

export type StackParamsList = {
    Home: undefined;
    Order: undefined;
    SendOrder: orderProps;
}



function MainStackNavigator() {
    return(
        <Stack.Navigator 
            initialRouteName='Home'
        >
            <Stack.Group screenOptions={{ headerShown: false}}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Order' component={Order} />
                <Stack.Screen name='History' component={History} />
                <Stack.Screen name='SendOrder' component={SendOrder} />
            </Stack.Group>

        </Stack.Navigator>

    )
}


function AppRoutes(){
    return( 
        <Tab.Navigator screenOptions={{tabBarStyle:{
            height: 60,
            position: 'absolute',
            bottom: 16,
            right: 16,
            left: 16,
            borderRadius: 10,
        }}}>
            <Tab.Group screenOptions={
                    {tabBarShowLabel:false,
                     headerShown: false,
                     tabBarInactiveTintColor: THEME.COLORS.BLUE_700,
                    }
            }>
                <Tab.Screen 
                    name="Inicio" 
                    component={MainStackNavigator} 
                    options={{ tabBarIcon: ({color,focused,size}) => {
                    return( <View style={{justifyContent:'center',alignItems:'center'}}>
                            {focused ? <House color={color} weight="fill" size={size*1.2}/> : <House color={color} /> }
                            <Text style={{textAlign:'center',fontFamily: THEME.FONT_FAMILY.REGULAR,fontSize: THEME.FONT_SIZE.SM,color: color}}>Inicio</Text>
                        </View> )
                }}}/>

                <Tab.Screen name="Simulação" component={Order} options={{ tabBarIcon: ({color,focused,size}) => {
                    return <View style={{justifyContent:'center',alignItems:'center',borderRadius: 10}}>
                    {focused ? <MathOperations color={color} weight="fill" size={size*1.2}/> : <MathOperations color={color} /> }
                    <Text style={{textAlign:'center',fontFamily: THEME.FONT_FAMILY.REGULAR,fontSize: THEME.FONT_SIZE.SM,color: color}}>Simulador</Text>
                </View>
                }}}/>
                <Tab.Screen name="Historico" component={History} options={{tabBarIcon: ({color,focused,size}) => {
                    return <View style={{justifyContent:'center',alignItems:'center'}}>
                    {focused ? <ListBullets color={color} weight="fill" size={size*1.2}/> : <ListBullets color={color} /> }
                    <Text style={{textAlign:'center',fontFamily: THEME.FONT_FAMILY.REGULAR,fontSize: THEME.FONT_SIZE.SM,color: color}}>Historico</Text>
                </View>
                }}} />
            </Tab.Group>
        </Tab.Navigator>
    )
    
}


export default AppRoutes;
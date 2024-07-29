import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';


import { THEME} from './src/theme';
import { ThemeProvider } from 'styled-components';

import { useFonts,Roboto_400Regular,Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from './src/components/Loading';
import Routes from './src/routes';

import AuthProvider from './src/context/auth.context';


export default function App() {
  
  const [fontsLoaded] = useFonts({Roboto_400Regular,Roboto_700Bold});
  
  
  if(!fontsLoaded){
    return(
      <Loading />
    );
  }


  return (
    <NavigationContainer>
    <AuthProvider>

    <ThemeProvider theme={THEME}>
        <StatusBar style="light" backgroundColor='transparent' translucent />
        <Routes />
    </ThemeProvider>

    </AuthProvider>
    </NavigationContainer>
  );
}


import { useContext, useEffect } from "react"

import { Header } from "../../components/Header"
import { Container, ImageContainer, NameUser, SafeArea, UserView } from "./styles"
import { HighLight } from "../../components/HighLight"

import Banner1 from '../../assets/banner1.png'
import Banner2 from '../../assets/banner2.png'
import Banner3 from '../../assets/banner3.png'

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSequence,
    withDelay,
    withRepeat,
    Easing,
  } from 'react-native-reanimated';
import { AuthContext } from "../../context/auth.context"
import { View } from "react-native"
import { LogOutButton } from "../../components/LogOutButton"
  


export default function Home(){

    const user = useContext(AuthContext);
    console.log("API_KEY")
    console.log(process.env.TZ)
   
    const scale1 = useSharedValue(0.1);
    const scale2 = useSharedValue(0.1);
    const scale3 = useSharedValue(0.1); 
  
    const opacity1 = useSharedValue(0);
    const opacity2 = useSharedValue(0);
    const opacity3 = useSharedValue(0); 
    
    const rotate1 = useSharedValue(0);
    const rotate2 = useSharedValue(0);
    const rotate3 = useSharedValue(0);

    useEffect(() => {
        const duration = 1000;
        const delayTime = 1500;
        const stayTime = 5000;
    
        // Function to create animation sequence
        const createAnimation = (delay:any, scale:any, opacity:any, rotate:any) => {
          return withDelay(
            delay,
            withRepeat(
              withSequence(
                withTiming(1, { duration: duration, easing: Easing.inOut(Easing.ease) }),
                withTiming(1, { duration: stayTime }),
                withTiming(0.1, { duration: duration, easing: Easing.inOut(Easing.ease) })
              ),
              -1,
              false
            )
          );
        };
    
        // Animate first image
        scale1.value = createAnimation(0, scale1, opacity1, rotate1);
        opacity1.value = createAnimation(0, opacity1, scale1, rotate1);
        rotate1.value = createAnimation(0, rotate1, opacity1, scale1);
    
        // Animate second image
        scale2.value = createAnimation(delayTime, scale2, opacity2, rotate2);
        opacity2.value = createAnimation(delayTime, opacity2, scale2, rotate2);
        rotate2.value = createAnimation(delayTime, rotate2, opacity2, scale2);
    
        // Animate third image
        scale3.value = createAnimation(delayTime * 2, scale3, opacity3, rotate3);
        opacity3.value = createAnimation(delayTime * 2, opacity3, scale3, rotate3);
        rotate3.value = createAnimation(delayTime * 2, rotate3, opacity3, scale3);
    }, []);
    
    const animatedStyle1 = useAnimatedStyle(() => ({
        transform: [
          { scale: scale1.value },
          { rotate: `${rotate1.value * 360}deg` }
        ],
        opacity: opacity1.value,
      }));
    
    const animatedStyle2 = useAnimatedStyle(() => ({
        transform: [
          { scale: scale2.value },
          { rotate: `${rotate2.value * 360}deg` }
        ],
        opacity: opacity2.value,
    }));

    const animatedStyle3 = useAnimatedStyle(() => ({
        transform: [
          { scale: scale3.value },
          { rotate: `${rotate3.value * 360}deg` }
        ],
        opacity: opacity3.value,
    }));
        

    return(
        <SafeArea>
            <Container>
                <Header />
                <HighLight title="Venda Mais" subtitle="Rápido, fácil e seguro!" />

                
                <View>
                  <NameUser> Bem vindo,</NameUser>
                  <NameUser>{user?.user?.NOMEUSU.toUpperCase()}</NameUser>
                  <LogOutButton onPress={ () => user?.Logout}/>
                </View>

                
                <ImageContainer>
                    
                    <Animated.Image  source={Banner1} style={[{height: 200,width: 200},animatedStyle1]}/>
                    <Animated.Image  source={Banner2} style={[{height: 200,width: 200},animatedStyle2]}/>
                    <Animated.Image  source={Banner3} style={[{height: 200,width: 200},animatedStyle3]}/>
                    
                </ImageContainer>

            

            </Container>
        </SafeArea>
    )
}
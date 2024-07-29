import Animated,{ useSharedValue, withRepeat, withTiming,Easing,useAnimatedStyle, BounceIn } from "react-native-reanimated";
import { Container, LeftIcon, SubTitle,TextArea,Title} from "./styles";
import { useEffect } from "react";

type Props = {
    title: string,
    value: number,
    date: string,
}

export function CardHistory({title,value,date}:Props){

    const rotation = useSharedValue(0);
    const waitDuration = 3000; // tempo de espera em milissegundos
    const rotationDuration = 1000; // duração da animação de rotação em milissegundos


    useEffect(() => {
        rotation.value = withRepeat(
          withTiming(360, { duration: 700, easing: Easing.linear }),
          3, // gira duas vezes
          true // reversão ao término de cada repetição
        );
      }, []);
    

    const animatedStyle = useAnimatedStyle( () => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
          };
    })

    return(
        <Container>
            <Animated.View style={animatedStyle}>
                <LeftIcon />
            </Animated.View>
            <TextArea>
                <Title numberOfLines={1}>Cliente : {title}</Title>
                <SubTitle>Valor : {value}</SubTitle>
                <SubTitle>Data: {date}</SubTitle>
            </TextArea>
        </Container>
        
    )
}
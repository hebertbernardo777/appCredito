import { useEffect } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { Canvas, Skia,Path, Circle, BlurMask } from '@shopify/react-native-skia';
import Animated,{ useSharedValue,withTiming,BounceIn,BounceOut } from 'react-native-reanimated';
import { CardView, Container,Title } from './styles';
import { THEME } from '../../theme';
import { TAXAJUROS, calcularParcela } from '../../utils/calculoJuros';

type Props = TouchableOpacityProps & {
  checked: boolean;
  title: string;
}

const CHECK_SIZE = 20;
const CHECK_STROKE = 2;


const RADIUS = (CHECK_SIZE - CHECK_STROKE)/2;

const CENTER_CIRCLE = RADIUS / 2;

export function Radius({ checked, title, ...rest }: Props) {
 
  

  const path = Skia.Path.Make();
  path.addCircle(CHECK_SIZE,CHECK_SIZE,RADIUS)

  const percentage = useSharedValue(0);
  const size = useSharedValue(0);

 


  useEffect( () => {
    if(checked){
        percentage.value = withTiming(1,{duration: 700})
        size.value = withTiming(CENTER_CIRCLE)
        
    }else{
        percentage.value = withTiming(0)
        size.value = withTiming(0)
    }

  },[checked])

  return (
    <Container checked={checked}
      {...rest}
    >
      
      <CardView>
      <Title>
        {title}
      </Title>

      </CardView>


      <Animated.View entering={BounceIn} exiting={BounceOut}>
        <Canvas style={{ height: CHECK_SIZE*2,width: CHECK_SIZE * 2}}>
          <Path 
              path={path}
              color={THEME.COLORS.WHITE}
              style="stroke"
              strokeWidth={CHECK_STROKE}
          />
          <Path 
              path={path}
              color={THEME.COLORS.GREEN_300}
              style="stroke"
              strokeWidth={CHECK_STROKE}
              start={0}
              end={percentage}
          />

          <Circle 
              cx={CHECK_SIZE}
              cy={CHECK_SIZE}
              r={size}
              color={THEME.COLORS.GREEN_300}
          >
              <BlurMask blur={4} style="solid"/>
          </Circle>
        </Canvas>
      </Animated.View>
      
    </Container>
  );
}
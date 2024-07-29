import { BackIcon, Container,Logo,BackButton } from "./styles";

import logoImg from '../../assets/IconeLogo.png'

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackParamsList } from '../../routes/app.routes'

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false}:Props){

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    return(
        <Container>
            {
                showBackButton && 
                <BackButton onPress={() => navigation.goBack()}>
                    <BackIcon />
                </BackButton>
            }
            
            <Logo source={logoImg}/>
        </Container>
    )
}
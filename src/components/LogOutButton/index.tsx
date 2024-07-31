import { SignOut } from "phosphor-react-native";
import { Container } from "./styles";
import { TouchableOpacityProps } from "react-native";



export function LogOutButton({...rest}:TouchableOpacityProps){
    return(
        <Container
        {...rest}
        >
            <SignOut size={32} color="#fff"/>
        </Container>
    )
}
import { Container } from "./styles";
import { Image } from "react-native";
import logo from "../../assets/Logo.png"


export function LogoHome(){
    return(
        <Container>
            <Image  source={logo} style={{height: 100,width: 250}}/>
        </Container>
    )
}
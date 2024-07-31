import React, { useContext } from "react";
import { Container, Slogan, Title, TitleView } from "./styles";
import { Button } from "../../components/Button";
import { LogoHome } from "../../components/LogoHome";



import { THEME } from "../../theme";
import { AuthContext } from "../../context/auth.context";


export default function SignIn(){

    const user = useContext(AuthContext)
    function handleLogin(){
        user?.signIn('hebert','123456')
    }

    return(
        <Container>
            <LogoHome />
                <TitleView>
                    <Slogan>Rápido</Slogan>
                    <Slogan style={{ color: THEME.COLORS.GREEN_300,fontFamily: THEME.FONT_FAMILY.BOLD}}> Fácio</Slogan>
                    <Slogan> e Seguro!</Slogan>
                </TitleView>
            <Button 
                title="Acessar"
                onPress={ () => handleLogin()}
            />
            
        </Container>
    )
}
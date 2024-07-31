import React, { useContext, useState } from "react";
import { Container, Slogan, Title, TitleView } from "./styles";
import { Button } from "../../components/Button";
import { LogoHome } from "../../components/LogoHome";
import { GoogleSignin } from "@react-native-google-signin/google-signin";


import { THEME } from "../../theme";
import { AuthContext } from "../../context/auth.context";
import { Alert } from "react-native";


GoogleSignin.configure({
    scopes: ['email','profile'],
    webClientId: process.env.WEB_CLIENT_ID,
    iosClientId: process.env.IOS_CLIENT_ID,
})

export default function SignIn(){

    const [isAuthenticating,setIsAuthenticating] = useState(false);

    const user = useContext(AuthContext)
    function handleLogin(nome:string,passwd:string){
        user?.signIn(nome,passwd)
    }

    async function handleGoogleSignIn(){
        try {
            setIsAuthenticating(true)

            const request = await GoogleSignin.signIn()
            
            if(request?.user?.name){
                // fazer validacao na minha api do email
                // se ok logar
                
                handleLogin(request?.user?.name,'1112')
                console.log("USER e TOKEN")
                

            } else {
                Alert.alert("Entrar","Não foi possível conectar-se a sua conta google.")
                console.log("dentro do else")
                setIsAuthenticating(false)
            }
        } catch (error) {
            console.log(error)
            setIsAuthenticating(false)
            Alert.alert("Entrar","Não foi possível conectar-se a sua conta google.")            
        }

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
                onPress={ () => handleGoogleSignIn()}
                isLoading={isAuthenticating}
            />
            
        </Container>
    )
}
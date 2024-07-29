import React from "react";
import { Container, Slogan, Title } from "./styles";
import { Button } from "../../components/Button";
import { LogoHome } from "../../components/LogoHome";



import Home from "../Home/Home";


export default function SignIn(){


    return(
        <Container>
            <LogoHome />
            <Slogan>Rápido,Fácio e Seguro!</Slogan>
        </Container>
    )
}
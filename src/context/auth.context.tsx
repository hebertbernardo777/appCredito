import React, { useState,createContext } from 'react';
import { api } from '../services';



interface AuthContextProps {
    signed: boolean;
    user: UserProps | null;
    signIn: (nome:string,senha:string) => void;
    Logout: () => void;

}


type UserProps = {
        CODUSU: number;
        NOMEUSU: string;
        CODVEND: number;
        TOKEN: string;
        PASSWORD: string;
}


export const AuthContext = createContext<AuthContextProps | null>(null);


function AuthProvider({ children }:any){

    const [user,setUser] = useState<UserProps | null>(null);


    async function signIn(nome:string,senha:string){
        const data:UserProps = {
            CODUSU: 1,
            CODVEND: 1,
            NOMEUSU: nome,
            PASSWORD: senha,
            TOKEN: ''
        }

        setUser(data)
    }


    function Logout(){
        setUser(null)
    }

return(
    <AuthContext.Provider value={{signed: !!user,user,signIn,Logout}}>
        {children}
    </AuthContext.Provider>
);

}



export default AuthProvider;
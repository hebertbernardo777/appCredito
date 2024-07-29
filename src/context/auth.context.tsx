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

        try {
            const response = await api.post('/session',{ user:nome,password:senha });
            console.log('tenta buscar dados do servidor!')
            const data:UserProps = response.data;
            console.log('data axios '+ data.CODVEND)
            if(data?.CODUSU && data?.CODVEND){
                setUser(data);
                api.defaults.headers.common = {'Authorization': `Bearer ${data.TOKEN}`}
            }else {
                throw new Error('Dados de usuário incorretos!')
            }   
        } catch(e){
            alert(`Não foi possivel conectar com o servidor! ${e}`);
        } 
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
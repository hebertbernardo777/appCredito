import React,{ useEffect, useState } from 'react'
import { Text } from 'react-native'

import { Container,SafeArea } from './styles'

import { Header } from '../../components/Header'
import { HighLight } from '../../components/HighLight'
import { Input } from '../../components/Input'
import { Option } from '../../components/Option'
import { Button } from '../../components/Button'
import { ResumeOrder } from '../../components/ResumeOrder'

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../../routes/app.routes'


import { TAXAJUROS, calcularParcela } from '../../utils/calculoJuros'




export default function Order(){

    const [selected, setSelected] = useState(0);
    const [valor,setValor] = useState('0');
    const [error, setError] = useState('');

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();


    function handleChangeValue(txt:string){

        const numero = txt.replace(/,/g, '.').replace(/[^0-9.]/g, '');

        let valorFinal;

        const split = numero.split('.');
        if (split.length > 2) {
        valorFinal = split[0] + '.' + split.slice(1).join('');
        }else{
            valorFinal = numero;
        }
            
        setValor(valorFinal);
    }

    function handleSendOrder(){
        
        navigation.navigate('SendOrder',
            { parcela:selected
            , valorCredito:Number(valor)
            , valorMaquina: calcularParcela(Number(valor),TAXAJUROS,selected)*selected
            , valorParcela: calcularParcela(Number(valor),TAXAJUROS,selected) })
    }

    return(
        <SafeArea>
            <Container>

                <Header />

                <HighLight title='Simulação de Crédito' subtitle='Crédito rapido e fácil!'/>

                { error ? <Text>Error</Text> : null}
                <Input style={{marginBottom: 20}} 
                    error={false}
                    value={String(valor)}
                    placeholder='Digite um valor para simular.' 
                    keyboardType='number-pad'
                    onChangeText={ (txt) => handleChangeValue(txt)}
                />
            

                <Option 
                    checked={selected === 12} 
                    title='Opcao de Credito 12x ' 
                    valor={Number(valor)} 
                    parcelas={12} 
                    onPress={ () => setSelected(12)} 
                />

                <Option 
                    checked={selected === 18} 
                    title='Opcao de Credito 18x ' 
                    valor={Number(valor)} 
                    parcelas={18} 
                    onPress={ () => setSelected(18)} 
                />

                <Option 
                    checked={selected === 21} 
                    title='Opcao de Credito 21x ' 
                    valor={Number(valor)} 
                    parcelas={21} 
                    onPress={ () => setSelected(21)} 
                />

                <ResumeOrder 
                    title={ (calcularParcela(Number(valor),TAXAJUROS,selected)*selected).toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}
                />

                
                <Button 
                    title='Continuar'
                    onPress={handleSendOrder}
                    isLoading={false}
                />
                

                
            </Container>
        </SafeArea>
    )
}
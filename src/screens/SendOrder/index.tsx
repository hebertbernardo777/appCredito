import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';

import { SafeArea,Container, Title } from './styles'
import * as ImagePicker from 'expo-image-picker';
import { Image, View } from 'react-native';

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { HighLight } from '../../components/HighLight'

import { useRoute,RouteProp } from "@react-navigation/native";



export function SendOrder(){

    const [image, setImage] = useState<string>('');
    const [vlrCredito,setVlrCredito] = useState(0);
    const [vlrMaquina,setVlrMaquina] = useState(0);
    const [qtdParcela,setQtdParcela] = useState(0);
    const [vlrParcela,setVlrParcela] = useState(0);


type OrderParams = {
    Order:{
           parcela: number,
           valorCredito:number,
           valorMaquina: number,
           valorParcela: number,
        }
}
         
type OrderParamsProps = RouteProp<OrderParams,'Order'>;

    const route = useRoute<OrderParamsProps>();


    useFocusEffect( useCallback( () => {
        const { parcela,valorCredito,valorMaquina,valorParcela } = route.params;
        setQtdParcela(parcela);
        setVlrCredito(valorCredito);
        setVlrMaquina(valorMaquina);
        setVlrParcela(valorParcela);

    },[route]));

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    
    return(
        <SafeArea>
            <Container>
            
            <Header showBackButton/>
            
            <HighLight 
                title='Finalizar Pedido' 
                subtitle='Preencha as informações para concluir o pedido de crédito.'
            />

           <Title>Valor do crédito contratado : {vlrCredito.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}</Title>

           <Title>Valor do debito na máquina de Cartao : {vlrMaquina.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}</Title>

           <Title>Parcelas : {qtdParcela.toString()} X</Title>

           <Title>Valor da parcela a pagar: {vlrParcela.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}</Title>


            
            <Input 
                style={{marginTop: 10}}
                error={false} 
                placeholder='Digite CPF do cliente.'
            />

            <Input 
                error={false} 
                placeholder='Digite o nome do cliente.'
            />

            <Input 
                error={false} 
                placeholder='Digite o Nro. da identidate "RG".'
            />

            <Button 
                isLoading={false} title="Documento de Identificação" onPress={pickImage} />
            {image && <View style={{justifyContent: 'center',alignItems: 'center'}}> 
                        <Image source={{ uri: image }} style={{width:200,height:200,borderRadius: 8}} />
                </View>}

            <Button
                title='Enviar Pedido'
                isLoading={false}
            />

            </Container>
        </SafeArea>
    )
}
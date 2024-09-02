import { Input } from "../Input";

import { FlatList, Modal, Text, TextInput, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Container, FlatCard, FlatTextItem, HeaderModalTitle, HeaderModalView, ModalBodyView, SearchInput, SelectButton, TextLabel } from "./styled";
import { useEffect, useState } from "react";
import { CaretLeft, X,Buildings } from "phosphor-react-native";
import { api } from "../../services";
import { CidadeProps } from "CidadeProps";


type Props = TouchableOpacityProps & {
    title: string;
    handleSelectCity: (city:CidadeProps) => void;
  }
  

export function Select({title,handleSelectCity,...rest}:Props){

    const [isVisible,setIsVisible] = useState(false);
    const [search,setSearch] = useState('')
    const [listaCidades,setListaCidades] = useState<CidadeProps[]>([])

    useEffect( () => {
        async function getData(){

            if(search.length > 3){
                const response = await api.get(`/cidades/${search}`)
                const data = response.data?.listaCidades
                setListaCidades(data)
            }
        }

        getData()

    },[search])
    
    return(
        <Container>
            <SelectButton {...rest} onPress={ () => setIsVisible(true)}> 
                <TextLabel>{title}</TextLabel>
            </SelectButton>

            <Modal
                visible={isVisible}
                animationType="slide"
                onRequestClose={ () => setIsVisible(false)}
            >
                <HeaderModalView>
                    <TouchableOpacity onPress={() => setIsVisible(false)}>
                        <CaretLeft size={32} />
                    </TouchableOpacity>
                    <HeaderModalTitle>Selecione a cidade</HeaderModalTitle>
                    <TouchableOpacity onPress={ () => setIsVisible(false)}>
                        <X size={32} />
                    </TouchableOpacity>
                </HeaderModalView>
                <ModalBodyView>
                    <SearchInput placeholder="Digite uma cidade"
                        onChangeText={setSearch}
                    />

                    

                    <FlatList 
                        data={listaCidades}
                        renderItem={ ({item}) => 
                        <TouchableOpacity onPress={ () => {handleSelectCity(item),setIsVisible(false)} }>
                            <FlatCard>
                                <FlatTextItem>{item.NOMECID + '-' + item.UF}</FlatTextItem>
                                <Buildings size={32} />
                            </FlatCard>
                        </TouchableOpacity>
                        }
                    />
                    
                </ModalBodyView>


            </Modal>

        </Container>
    )
}
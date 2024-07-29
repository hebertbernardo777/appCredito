import { Container } from './styles'
import { Header } from '../../components/Header'
import { HighLight } from '../../components/HighLight'
import { SafeArea } from '../Home/styles'
import { CardHistory } from '../../components/CardHistory'
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated'


export default function History(){

    const data = [
        {
            nome: 'HEBERT VINICIUS GOMES BERNARDO',
            data: '01/01/2024',
            valor: 1000.00,
        },
        {
            nome: 'THAIS CAROLINE THOME',
            data: '20/05/2024',
            valor: 5000.00,
        },
        {
            nome: 'CLAUDEMIR APARECIDO GONCALVES',
            data: '14/02/2024',
            valor: 10000.00,
        },
    ]

    return(
        <SafeArea>
            <Container>
                <Header />
                <HighLight 
                    title='Historico' 
                    subtitle='Relação de créditos realizados'
                />

                <Animated.FlatList 
                    entering={BounceIn}
                    exiting={BounceOut}
                    data={data}
                    renderItem={ ({item}) => <CardHistory date={item.data} title={item.nome} value={item.valor}/>} 
                />

            </Container>
        </SafeArea>
    )
}
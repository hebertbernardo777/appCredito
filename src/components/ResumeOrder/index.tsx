import { Container, Title } from './styles'

type Props = {
    title: string
}

export function ResumeOrder({title}:Props){
    return(
    <Container>
        <Title> Valor para debitar na máquina de crédito : {title}</Title>
    </Container>
    )
}
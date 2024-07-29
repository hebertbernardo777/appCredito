import { Container } from './styles'
import { TextInputProps } from 'react-native'

type Props = TextInputProps & {
    error: boolean;
}

export function Input({error = false,...rest}:Props){
    return(
        <Container error={error}
            {...rest} 
        />
    )
}
import styled from "styled-components/native";
import { CreditCard  } from 'phosphor-react-native'


export const Container = styled.View`
    min-height: 85px;
    max-height: 85px;
    width: 100%;
    flex-direction: row;

    margin-top: 10px;

    padding: 8px;
    border-radius: 6px;

    justify-content: center;
    align-items: center;

    background-color: ${ ({ theme}) => theme.COLORS.BLUE_100};
`

export const TextArea = styled.View`
    flex: 1;
    margin-left: 16px;
`
export const Title = styled.Text`
    font-size: ${({ theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
`

export const SubTitle = styled.Text`
    font-size: ${({ theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
`

export const LeftIcon = styled(CreditCard).attrs(({theme}) => ({
    size: 38,
    color: theme.COLORS.GREEN_300,
}))``;


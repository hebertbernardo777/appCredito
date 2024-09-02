import styled from "styled-components/native";
import { THEME } from "../../theme";
import { TextInput } from "react-native";



export const Container = styled.View`
    flex: 1;
`

export const SelectButton = styled.TouchableOpacity`
    min-height: 56px;
    max-height: 56px;

    background-color: ${ ({ theme}) => theme.COLORS.BLUE_100};
     color: ${({ theme }) => theme.COLORS.WHITE};
     font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
     font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

     padding: 16px;
     border-radius: 6px;
`


export const TextLabel = styled.Text`
    font-size: ${THEME.FONT_SIZE.MD}px;
    font-family: ${THEME.FONT_FAMILY.REGULAR};

    color: ${THEME.COLORS.BLUE_700};
`

export const HeaderModalView = styled.View`
    max-height: 46px;
    min-height: 46px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 6px;
`

export const HeaderModalTitle = styled.Text`
    text-align: center;
    font-size: ${THEME.FONT_SIZE.MD}px;
    font-family: ${THEME.FONT_FAMILY.REGULAR};

`

export const SearchInput = styled(TextInput).attrs({
    placeholderTextColor: THEME.COLORS.BLUE_700,
 })`
     flex: 1;
     min-height: 56px;
     max-height: 56px;

     background-color: ${ ({ theme}) => theme.COLORS.BLUE_100};
     color: ${({ theme }) => theme.COLORS.BLUE_700};
     font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
     font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

     padding: 16px;
     border-radius: 6px;
    `


export const ModalBodyView = styled.View`
    padding: 16px;
    flex: 1;
`

export const FlatCard = styled.View`
    min-height: 56px;
    max-height: 56px;
    padding: 6px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


`

export const FlatTextItem = styled.Text`
    font-family: ${THEME.FONT_FAMILY.REGULAR};
    font-size: ${THEME.FONT_SIZE.MD}px;

    color: ${THEME.COLORS.BLUE_700};
`

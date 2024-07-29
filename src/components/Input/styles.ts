import styled from "styled-components/native";
import { TextInput } from "react-native";
import { Money } from 'phosphor-react-native'

import { THEME } from "../../theme";


  type Props ={
    error: boolean
  }

 export const Container = styled(TextInput).attrs({
    placeholderTextColor: THEME.COLORS.WHITE,
 })<Props>`
     flex: 1;
     min-height: 56px;
     max-height: 56px;

     background-color: ${ ({ theme}) => theme.COLORS.BLUE_100};
     color: ${({ theme }) => theme.COLORS.WHITE};
     font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
     font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

     padding: 16px;
     border-radius: 6px;

     border-color: ${props => props.error ? THEME.COLORS.RED_600 : THEME.COLORS.WHITE};
     border-width: ${props => props.error ? 1 : 0}px;
`

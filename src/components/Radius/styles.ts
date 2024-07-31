import { THEME } from '../../theme/';
import styled from 'styled-components/native';

type Props = {
  checked: boolean;
}



export const Container = styled.TouchableOpacity<Props>`        
flex-direction: row;
align-items: center;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`

export const CardView = styled.View`    
`



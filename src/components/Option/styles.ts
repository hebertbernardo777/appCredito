import { THEME } from '../../theme/';
import styled from 'styled-components/native';

type Props = {
  checked: boolean;
}



export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  min-height: 86px;
  max-height: 86px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-bottom: 12px;

  
  border-width: ${props => props.checked ? 2 : 0}px;
  border-color: ${props => props.checked ? THEME.COLORS.GREEN_300 : THEME.COLORS.WHITE};
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  margin-right: 32px;
  flex: 1;
`

export const RowView = styled.View`
  flex-direction: row;
`
export const CardView = styled.View`
  flex: 1;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  margin-right: 32px;
  text-align: end;
`

export const ValueText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  margin-right: 32px;
  text-align: end;
`


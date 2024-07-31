import styled from "styled-components/native";
import { THEME } from '../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${THEME.COLORS.BLUE_700};
    padding: 53px;
    justify-content: center;
    gap: 6px;
`

export const Title = styled.Text`
    color: ${({ theme }) => THEME.COLORS.BLUE_100};
    font-size: ${({ theme }) => THEME.FONT_SIZE.XXXL}px;
    font-family: ${({ theme }) => THEME.FONT_FAMILY.BOLD};
    text-align: center;
`

export const Slogan = styled.Text`
    color: ${({ theme }) => THEME.COLORS.GRAY_100};
    font-size: ${({ theme }) => THEME.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => THEME.FONT_FAMILY.REGULAR};
    text-align: center;
`

export const TitleView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
`
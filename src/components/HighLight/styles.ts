import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    margin-bottom: 10px;
`

export const Title = styled.Text`
    font-size: ${({ theme}) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};

    text-align: center;
`

export const SubTitle = styled.Text`
    font-size: ${({ theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    
    text-align: center;
`
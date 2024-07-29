import styled from "styled-components/native";
import { Platform,StatusBar } from "react-native";

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const SafeArea = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};
    padding-top: ${statusBarHeight}px;
`  

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`

export const ImageContainer = styled.View`
    justify-content: center;
    align-items: center;
`


export const NameUser = styled.Text`
    text-align: center;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

`
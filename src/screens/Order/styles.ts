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
    
    padding: 16px;
    gap: 10px;
`
import styled from "styled-components/native";
import { Platform,StatusBar } from "react-native";

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};
    padding-top: ${statusBarHeight}px;
    padding: 16px;
`


export const SafeArea = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`
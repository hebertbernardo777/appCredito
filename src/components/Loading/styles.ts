import styled from "styled-components/native";
import { THEME } from "../../theme";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const LoadIndicator = styled.ActivityIndicator.attrs( () => ( {
    color: THEME.COLORS.BLUE_100,
}))``;
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    border-radius: 4px;


    align-items: center;

    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GREEN_300};

`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const LoadIndicator = styled.ActivityIndicator.attrs( ({theme}) => ( {
    color: theme.COLORS.BLUE_100,
}))``;
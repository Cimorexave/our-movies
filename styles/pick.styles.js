import { StyleSheet } from "react-native";
import myColors from "./colors.styles";

export const pickStyles = StyleSheet.create({
    pickRandomButton: {
        backgroundColor: myColors.lightgreen,
        borderRadius: 100,
        paddingVertical: 8,
        paddingHorizontal: 15,
        zIndex: 10,
    },
    spinnerWrapper: {
        position: 'absolute',
    },
    pickPage: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
    },
    genresWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingHorizontal: 10,
        gap: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    selectedGenreButton: {
        opacity: 0.5,
    },
});
import { StyleSheet } from "react-native";
import myColors from "./colors.styles";

export const browseStyles = StyleSheet.create({
    addButton: {
        backgroundColor: myColors.lightgreen,
        position: 'absolute',
        borderRadius: 100,
        top: 0,
        right: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
        zIndex: 10,
    }
});
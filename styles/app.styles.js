import { StyleSheet } from "react-native";
import myColors from "./colors.styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: myColors.darkGreen,
        alignItems: 'center',
        justifyContent: 'center',
    },
    page: {
        width: '100%',
        height: '100%',
        position: 'relative',
        paddingTop: 60,
        paddingHorizontal: 5,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '10%',
        backgroundColor: myColors.lightgreen,
        opacity: 0.9,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    pressable: {
        backgroundColor: myColors.white,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
        minWidth: 'fit-content',
        width: 120,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: myColors.darkGreen,
        elevation: 8,
        borderBlockColor: myColors.darkGreen,
    },
    text: {
        fontWeight: 'bold',
    },
    pressed: {
        elevation: -5,
        borderWidth: 0.25,
        shadowColor: myColors.white,
        opacity: 0.9,
    },
    modal: {
        backgroundColor: myColors.lightgreen,
        borderRadius: 20,
        elevation: 20,
        height: '75%',
        width: 'auto',
    }
});
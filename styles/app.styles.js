import { StyleSheet } from "react-native";

export const myColors = {
    white: '#fff',
    gray: '#d9d9d9',
    darkGreen: '#1c211d',
    lightgreen: '#bfe0c5',
    shadow: '#8d8d8d',
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: myColors.darkGreen,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '10%',
        backgroundColor: myColors.lightgreen,
        opacity: 0.8,
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
        borderWidth: 0.25,
        borderBlockColor: myColors.darkGreen,
    },
    text: {
        fontWeight: 'bold',
    },
    pressed: {
        elevation: 0,
    },
    androidElevationInactive: {
        shadowColor: myColors.shadow,
    },
    androidElevationActive: {
        shadowColor: myColors.shadow,
        elevation: 20,
    },
});
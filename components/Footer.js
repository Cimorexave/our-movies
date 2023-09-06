import { View, Text, Pressable } from "react-native";
import { styles } from "../styles/app.styles";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Pressable style={styles.pressable}>
                <Text style={styles.text}>
                    Pick
                </Text>
            </Pressable>
            <Pressable style={styles.pressable}>
                <Text style={styles.text}>
                    Browse
                </Text>
            </Pressable>
        </View>
    )
}
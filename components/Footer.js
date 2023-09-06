import { View, Text, Pressable } from "react-native";
import { styles } from "../styles/app.styles";
import { useState } from "react";

export default function Footer() {
    const [selectedPageName, setSelectedPageName] = useState("pick");
    return (
        <View style={styles.footer}>
            <Pressable
                style={[styles.pressable, selectedPageName === "pick" ? styles.pressed : {}]}
                // onPress={() => console.log('jhi')}
                onPress={() => setSelectedPageName("pick")}
            >
                <Text style={styles.text}>
                    Pick
                </Text>
            </Pressable>
            <Pressable
                style={[styles.pressable, selectedPageName === "browse" ? styles.pressed : {}]}
                onPress={() => setSelectedPageName("browse")}
            >
                <Text style={styles.text}>
                    Browse
                </Text>
            </Pressable>
        </View>
    )
}
import { View, Text, Pressable } from "react-native";
import { styles } from "../styles/app.styles";
import { useContext, useState } from "react";
import AppContext from "../store/app.context";

export default function Footer() {

    const { appContext, setAppContext } = useContext(AppContext);

    return (
        <View style={styles.footer}>
            <Pressable
                style={[styles.pressable,
                appContext.pageName === "pick" ? styles.pressed : {}
                ]}
                // onPress={() => setSelectedPageName("pick")}
                onPress={() => setAppContext({ ...appContext, pageName: "pick" })}
            >
                <Text style={styles.text}>
                    Pick
                </Text>
            </Pressable>
            <Pressable
                style={[styles.pressable,
                appContext.pageName === "browse" ? styles.pressed : {}
                ]}
                // onPress={() => setSelectedPageName("browse")}
                onPress={() => setAppContext({ ...appContext, pageName: "browse" })}
            >
                <Text style={styles.text}>
                    Browse
                </Text>
            </Pressable>
        </View>
    )
}
import { View, Text, Pressable } from "react-native";
import { styles } from "../styles/app.styles";
import { browseStyles } from "../styles/browse.styles";
import { useState } from "react";

export default Browse = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.page}>
            <Pressable onPress={() => setModalVisible(!isModalVisible)}>
                <Text style={[styles.text, browseStyles.addButton]}>Add +</Text>
            </Pressable>
        </View>
    );
}
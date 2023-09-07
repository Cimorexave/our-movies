import { View, Text, Pressable } from "react-native";
import { styles } from "../styles/app.styles";
import { browseStyles } from "../styles/browse.styles";

export default Browse = () => {
    return (
        <View style={styles.page}>
            <Text>Browse page</Text>
            <Pressable>
                <Text style={[styles.text, browseStyles.addButton]}>Add +</Text>
            </Pressable>
        </View>
    );
}
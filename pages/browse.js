import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { styles } from "../styles/app.styles";
import { browseStyles } from "../styles/browse.styles";
import { useState } from "react";
import Modal from "react-native-modal";

export default Browse = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.page}>
            <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
                <Text style={[styles.text, browseStyles.addButton]}>Add +</Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <Text>Modal Content Goes Here</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text>Close Modal</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Pressable style={styles.pressable} onPress={() => console.log("hi")}>
        <Text>Pressable!</Text>
      </Pressable>
      {/* footer */}
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
      <StatusBar style="auto" />
    </View>
  );
}

const grayColor = '#d9d9d9';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%',
    backgroundColor: grayColor,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  pressable: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    minWidth: 'fit-content',
    width: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {},
  text: {
    fontWeight: 'bold',
  }
});

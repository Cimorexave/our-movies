import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
) => {
  if (Platform.OS === 'ios') {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

export default function App() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Pressable
        style={[styles.pressable, styles.androidElevationActive, styles.iosShadowPropActive]}
        // style={ }
        onPress={setIsPressed(!isPressed)}
      >
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
  },
  androidElevationActive: {
    shadowColor: '#171717',
    elevation: 20,
  },
  iosShadowPropActive: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  androidElevationInactive: {
    shadowColor: '#171717',
    elevation: -20,
  },
  iosShadowPropInactive: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 0,
  },
});

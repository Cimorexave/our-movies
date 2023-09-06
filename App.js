import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Footer from './components/Footer';
import { styles } from './styles/app.styles';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />

      <Footer></Footer>

    </View>
  );
}
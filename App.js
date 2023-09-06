import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Footer from './components/Footer';
import { styles } from './styles/app.styles';
import { AppContext, initialAppContext } from './store/app.context';

export default function App() {

  return (
    <AppContext.Provider value={initialAppContext}>
      <View style={styles.container}>
        <StatusBar style="inverted" />

        <Footer></Footer>

      </View>
    </AppContext.Provider>
  );
}
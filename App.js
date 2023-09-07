import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Footer from './components/Footer';
import { styles } from './styles/app.styles';
import AppContext from './store/app.context';
import StorageContext from './store/storage.context';
import { useState } from 'react';
import Pick from './pages/pick';
import Browse from './pages/browse';

export default function App() {

  // contexts
  const [appContext, setAppContext] = useState({ pageName: "pick", selectedGenres: [] });
  const [storageContext, setStorageContext] = useState({ movies: [] });

  return (
    <StorageContext.Provider>
      <AppContext.Provider value={{ appContext, setAppContext }}>
        <View style={styles.container}>
          <StatusBar style="inverted" />
          {appContext.pageName === "pick" ? <Pick></Pick>
            : appContext.pageName === "browse" ? <Browse></Browse> : null}
          <Footer></Footer>

        </View>
      </AppContext.Provider>
    </StorageContext.Provider>
  );
}
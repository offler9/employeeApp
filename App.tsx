/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';

import AppContainer from './src/screens';
import {store} from './globalStates/storeConfigurations';
// import {PersistGate} from 'redux-persist/integration/react';

function App(props: any): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <NavigationContainer>
          {/* <StatusBar backgroundColor={colors.transparent} barStyle="dark-content" /> */}
          {/* <View
          style={{
            height: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
          }}
        /> */}
          {/* <PersistGate loading={null} persistor={persistor}> */}
          <AppContainer {...props} />
          {/* </PersistGate> */}
        </NavigationContainer>
      </Provider>
    </View>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;

import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen.js';
import GameScreen from './screens/GameScreen.js';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickNumberHandler(number) {
    setUserNumber(number);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={['#0FA3B1', '#D9E5D6']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});

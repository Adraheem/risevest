import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {useCallback} from "react";
import Text from "@/components/Text";
import fonts from "@/assets/fonts";
import {Link} from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts(fonts);

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <Link href="/(auth)/onboard">Go to onboard</Link>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: "800",
    // fontSize: 24,
  }
});

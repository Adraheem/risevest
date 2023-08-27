import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {useCallback} from "react";
import fonts from "@/assets/fonts";
import RootNavigation from "@/navigation/RootNavigation";
import palette from "@/assets/palette";
import {QueryClient, QueryClientProvider} from "react-query";
import {Provider} from "react-redux";
import {store} from "@/redux/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts(fonts);
  const queryClient = new QueryClient()

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
      <StatusBar style="dark"/>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RootNavigation/>
        </QueryClientProvider>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
});

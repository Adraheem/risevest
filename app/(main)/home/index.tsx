import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import Screen from "@/components/Screen";
import {Image} from "expo-image";
import palette from "@/assets/palette";
import Greetings from "@/screenComponents/home/Greetings";
import Balance from "@/screenComponents/home/Balance";
import Plans from "@/screenComponents/home/Plans";
import NeedHelp from "@/screenComponents/home/NeedHelp";
import TodayQuote from "@/screenComponents/home/TodayQuote";
import RiseIcon from "@/assets/images/RiseIcon";

interface IProps {
}

function HomeScreen(props: IProps) {
  return (
    <View style={{flex: 1, backgroundColor: palette.white}}>
      <Image style={styles.bg} source={require("@/assets/images/bg-grad.png")}/>
      <Screen
        style={{zIndex: 2, backgroundColor: "transparent"}}
        contentContainerStyle={{backgroundColor: "transparent"}}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView>
          <View style={styles.container}>
            <Greetings/>
            <Balance/>
            <Plans/>
            <NeedHelp/>
            <TodayQuote/>
            <View style={styles.rise}>
              <RiseIcon/>
            </View>
          </View>
        </SafeAreaView>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  bg: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").width,
    position: "absolute",
    zIndex: 0,
  },
  rise: {
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default HomeScreen;

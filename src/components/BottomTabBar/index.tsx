import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {BottomTabBarProps} from "@react-navigation/bottom-tabs/src/types";
import palette from "@/assets/palette";
import HomeIcon from "@/assets/images/HomeIcon";
import fontSize from "@/assets/fontSize";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import PlansIcon from "@/assets/images/PlansIcon";
import WalletIcon from "@/assets/images/WalletIcon";
import FeedIcon from "@/assets/images/FeedIcon";
import {BlurView} from "expo-blur";
import BottomTabBarItem from "@/components/BottomTabBar/BottomTabBarItem";
import {BottomTabBarOptions} from "@react-navigation/bottom-tabs";

interface IProps extends BottomTabBarProps<BottomTabBarOptions> {
}

function BottomTabBar(props: IProps) {
  const {bottom} = useSafeAreaInsets();
  const Bar = Platform.OS === "ios" ? BlurView : View;

  return (
    <Bar style={[styles.container, {paddingBottom: bottom}]}>
      <View style={styles.wrapper}>
        <BottomTabBarItem
          active={props.state.index}
          name="Home"
          path="Home"
          icon={HomeIcon}
          id={props.state.routeNames.findIndex(r => r === "Home")}
        />

        <BottomTabBarItem
          active={props.state.index}
          name="Plans"
          path="Plans"
          icon={PlansIcon}
          id={props.state.routeNames.findIndex(r => r === "Plans")}
        />

        <BottomTabBarItem
          active={props.state.index}
          name="Wallet"
          path="Wallet"
          icon={WalletIcon}
          id={props.state.routeNames.findIndex(r => r === "Wallet")}
        />

        <BottomTabBarItem
          active={props.state.index}
          name="Feed"
          path="Feed"
          icon={FeedIcon}
          id={props.state.routeNames.findIndex(r => r === "Feed")}
        />

        <BottomTabBarItem
          active={props.state.index}
          name="Account"
          path="Account"
          icon={HomeIcon}
          id={props.state.routeNames.findIndex(r => r === "Account")}
        />
      </View>
    </Bar>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: palette.offWhite,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    flex: 1,
    height: 74,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: fontSize.caption,
    marginTop: 4
  }
});

export default BottomTabBar;

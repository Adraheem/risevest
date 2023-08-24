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

interface IProps extends BottomTabBarProps {
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
          path="/home"
          icon={HomeIcon}
          id={props.state.routeNames.findIndex(r => r === "home/index")}
        />

        <BottomTabBarItem
          active={props.state.index}
          name="Plans"
          path="/plans"
          icon={PlansIcon}
          id={props.state.routeNames.findIndex(r => r === "plans/index")}
        />

        <BottomTabBarItem
          active={props.state.index}
          name="Wallet"
          path="/wallet"
          icon={WalletIcon}
          id={props.state.routeNames.findIndex(r => r === "wallet/index")}
        />

        <BottomTabBarItem
          active={props.state.index}
          name="Feed"
          path="/feed"
          icon={FeedIcon}
          id={props.state.routeNames.findIndex(r => r === "feed/index")}
        />

        <BottomTabBarItem
          active={props.state.index}
          name="Account"
          path="/account"
          icon={HomeIcon}
          id={props.state.routeNames.findIndex(r => r === "account/index")}
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

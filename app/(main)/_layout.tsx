import React from 'react';
import {StyleSheet} from 'react-native';
import {Tabs} from "expo-router";
import BottomTabBar from "@/components/BottomTabBar";

interface IProps {
}

function MainLayout(props: IProps) {
  return (
    <Tabs
      initialRouteName="home"
      tabBar={(props) => <BottomTabBar {...props}/>}
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MainLayout;

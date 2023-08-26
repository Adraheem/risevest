import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "@/screens/home";
import {TabParamList} from "@/types/navigation";
import BottomTabBar from "@/components/BottomTabBar";
import PlansScreen from "@/screens/plans";

interface IProps {
}

const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigation(props: IProps) {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props}/>}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Plans" component={PlansScreen}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TabNavigation;

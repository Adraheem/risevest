import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import OnboardScreen from "@/screens/onboard";
import SigninScreen from "@/screens/signin";
import SignupScreen from "@/screens/signup";
import SignupMoreScreen from "@/screens/signup/more";
import SignupDoneScreen from "@/screens/signup/done";
import {RootStackParamList} from "@/types/navigation";
import TabNavigation from "@/navigation/TabNavigation";
import IndividualPlan from "@/screens/plan";
import NewPlanNavigation from "@/navigation/NewPlanNavigation";

const Stack = createStackNavigator<RootStackParamList>();

interface IProps {
}

function RootNavigation(props: IProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Onboard" component={OnboardScreen}/>
        <Stack.Screen name="Tab" component={TabNavigation}/>
        <Stack.Screen name="Login" component={SigninScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="SignupMore" component={SignupMoreScreen}/>
        <Stack.Screen name="SignupDone" component={SignupDoneScreen}/>
        <Stack.Screen name="Plan" component={IndividualPlan}/>
        <Stack.Screen name="NewPlan" component={NewPlanNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;

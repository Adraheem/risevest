import React from 'react';
import {createStackNavigator, StackNavigationProp} from "@react-navigation/stack";
import {SignupParamList} from "@/types/navigation";
import SignupScreen from "@/screens/signup";
import SignupMoreScreen from "@/screens/signup/more";
import SignupDoneScreen from "@/screens/signup/done";
import SignupContextProvider from "@/context/SignupContext";

const Stack = createStackNavigator<SignupParamList>();

interface IProps {
  navigation: StackNavigationProp<SignupParamList>
}

function SignupNavigation({navigation}: IProps) {
  return (
    <SignupContextProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={SignupScreen}/>
        <Stack.Screen name="SignupMore" component={SignupMoreScreen}/>
        <Stack.Screen name="SignupDone" component={SignupDoneScreen}/>
      </Stack.Navigator>
    </SignupContextProvider>
  );
}

export default SignupNavigation;

import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import OnboardScreen from "@/screens/onboard";
import SigninScreen from "@/screens/signin";
import {RootStackParamList} from "@/types/navigation";
import TabNavigation from "@/navigation/TabNavigation";
import IndividualPlan from "@/screens/plan";
import NewPlanNavigation from "@/navigation/NewPlanNavigation";
import SignupNavigation from "@/navigation/SignupNavigation";
import {useAppSelector} from "@/redux/hooks";

const Stack = createStackNavigator<RootStackParamList>();

interface IProps {
}

function RootNavigation(props: IProps) {
  const {isAuthenticated} = useAppSelector(state => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        {
          isAuthenticated ? (
            <>
              <Stack.Screen name="Tab" component={TabNavigation}/>
              <Stack.Screen name="Plan" component={IndividualPlan}/>
              <Stack.Screen name="NewPlan" component={NewPlanNavigation}/>
            </>
          ) : (
            <>
              <Stack.Screen name="Onboard" component={OnboardScreen}/>
              <Stack.Screen name="Login" component={SigninScreen}/>
              <Stack.Screen name="Signup" component={SignupNavigation}/>
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;

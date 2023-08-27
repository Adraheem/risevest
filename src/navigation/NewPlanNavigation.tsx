import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NewPlanParamList} from "@/types/navigation";
import CreatePlanScreen from "@/screens/createPlan";
import PlanName from "@/screens/createPlan/name";
import PlanAmount from "@/screens/createPlan/amount";
import PlanDate from "@/screens/createPlan/date";
import Review from "@/screens/createPlan/review";
import Done from "@/screens/createPlan/done";
import NewPlanContextProvider from "@/context/NewPlanContext";

const Stack = createStackNavigator<NewPlanParamList>();

interface IProps {
}

function NewPlanNavigation(props: IProps) {
  return (
    <NewPlanContextProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={CreatePlanScreen}/>
        <Stack.Screen name="PlanName" component={PlanName}/>
        <Stack.Screen name="PlanAmount" component={PlanAmount}/>
        <Stack.Screen name="PlanDate" component={PlanDate}/>
        <Stack.Screen name="PlanReview" component={Review}/>
        <Stack.Screen name="PlanDone" component={Done}/>
      </Stack.Navigator>
    </NewPlanContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NewPlanNavigation;

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from "@/components/Header";
import Button from "@/components/Button";
import CreatePlanProgress from "@/screenComponents/createPlan/createPlanProgress";
import palette from "@/assets/palette";
import Screen from "@/components/Screen";
import DatePicker from "@/components/DatePicker";
import {StackNavigationProp} from "@react-navigation/stack";
import {NewPlanParamList} from "@/types/navigation";

interface IProps {
  navigation: StackNavigationProp<NewPlanParamList>
}

function PlanDate({navigation}: IProps) {
  return (
    <View style={styles.container}>
      <Header title="Target date"/>
      <SafeAreaView style={{flex: 1}}>
        <Screen>
          <View style={{padding: 20}}>
            <CreatePlanProgress step={3} total={3}/>

            <View style={{marginVertical: 26}}>
              <DatePicker placeholder="When do you want to withdraw?"/>
            </View>

            <Button text="Continue" onPress={() => navigation.push("PlanReview")}/>
          </View>
        </Screen>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  }
});

export default PlanDate;

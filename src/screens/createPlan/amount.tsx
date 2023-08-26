import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from "@/components/Header";
import Button from "@/components/Button";
import CreatePlanProgress from "@/screenComponents/createPlan/createPlanProgress";
import Input from "@/components/Input";
import palette from "@/assets/palette";
import Screen from "@/components/Screen";
import {StackNavigationProp} from "@react-navigation/stack";
import {NewPlanParamList} from "@/types/navigation";

interface IProps {
  navigation: StackNavigationProp<NewPlanParamList>
}

function PlanAmount({navigation}: IProps) {
  return (
    <View style={styles.container}>
      <Header title="Target amount"/>
      <SafeAreaView style={{flex: 1}}>
        <Screen>
          <View style={{padding: 20}}>
            <CreatePlanProgress step={2} total={3}/>

            <View style={{marginVertical: 26}}>
              <Input placeholder="How much do need?" inputMode="decimal"/>
            </View>

            <Button text="Continue" onPress={() => navigation.push("PlanDate")}/>
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

export default PlanAmount;

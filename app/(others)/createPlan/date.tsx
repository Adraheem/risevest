import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from "@/components/Header";
import Button from "@/components/Button";
import {Link} from "expo-router";
import CreatePlanProgress from "@/screenComponents/createPlan/createPlanProgress";
import palette from "@/assets/palette";
import Screen from "@/components/Screen";
import Input from "@/components/Input";
import DatePicker from "@/components/DatePicker";

interface IProps {
}

function PlanDate(props: IProps) {
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

            <Link href="/createPlan/review" asChild>
              <Button text="Continue"/>
            </Link>
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

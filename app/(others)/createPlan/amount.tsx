import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from "@/components/Header";
import Button from "@/components/Button";
import {Link} from "expo-router";
import CreatePlanProgress from "@/screenComponents/createPlan/createPlanProgress";
import Input from "@/components/Input";
import palette from "@/assets/palette";
import Screen from "@/components/Screen";

interface IProps {
}

function PlanAmount(props: IProps) {
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

            <Link href="/createPlan/date" asChild>
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

export default PlanAmount;

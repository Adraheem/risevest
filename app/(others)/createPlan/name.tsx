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

function PlanName(props: IProps) {
  return (
    <View style={styles.container}>
      <Header title="Goal name"/>
      <SafeAreaView style={{flex: 1}}>
        <Screen>
          <View style={{padding: 20}}>
            <CreatePlanProgress step={1} total={3}/>

            <View style={{marginVertical: 26}}>
              <Input placeholder="What are you saving for"/>
            </View>

            <Link href="/createPlan/amount" asChild>
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

export default PlanName;

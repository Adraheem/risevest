import React from 'react';
import {StyleSheet, View} from 'react-native';
import palette from "@/assets/palette";
import PlanHeader from "@/screenComponents/plan/planHeader";
import Screen from "@/components/Screen";
import Button from "@/components/Button";
import {Entypo} from "@expo/vector-icons";
import PlanBalance from "@/screenComponents/plan/planBalance";
import PlanProgress from "@/screenComponents/plan/planProgress";
import PlanDetails from "@/screenComponents/plan/planDetails";
import RecentTransactions from "@/screenComponents/plan/recentTransactions";

interface IProps {
}

function IndividualPlan(props: IProps) {


  return (
    <View style={styles.container}>
      <PlanHeader/>
      <Screen showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 20, paddingVertical: 26}}>
          <PlanBalance/>

          <PlanProgress/>

          <Button
            text="Fund plan"
            variant="PRIMARY-ALT"
            iconBefore={<Entypo name="plus" size={24} color={palette.brand}/>}
          />

          <PlanDetails/>

          <RecentTransactions/>
        </View>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  progressBar: {
    backgroundColor: palette.offWhite003,
    height: 6,
    borderRadius: 5,
    overflow: "hidden",
    marginVertical: 10,
  },
  progress: {
    height: "100%",
    backgroundColor: palette.brand,
    borderRadius: 5,
  },
});

export default IndividualPlan;

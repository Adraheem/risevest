import React from 'react';
import {StyleSheet, View} from 'react-native';
import palette from "@/assets/palette";
import PlanHeader from "@/screenComponents/plan/planHeader";
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import Screen from "@/components/Screen";
import Button from "@/components/Button";
import {Entypo} from "@expo/vector-icons";
import ProgressBar from "@/components/ProgressBar";

interface IProps {
}

function IndividualPlan(props: IProps) {


  return (
    <View style={styles.container}>
      <PlanHeader/>
      <Screen showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 20, paddingVertical: 26}}>
          <View style={{alignItems: "center", gap: 4}}>
            <Text style={{fontSize: fontSize.small, color: palette.offBlack}}>Plan Balance</Text>
            <Text title style={{fontWeight: "700", fontSize: fontSize.xl}}>$10,930.75</Text>
            <Text style={{color: palette.offBlack}}>~ ₦0.00</Text>

            <View style={{alignItems: "center", marginTop: 10,}}>
              <Text>Gains</Text>
              <Text
                title
                style={{color: palette.green, fontSize: fontSize.medium, textAlign: "center"}}
              >
                +$5,000.43 • +12.4%
              </Text>
            </View>
          </View>

          <View style={{marginVertical: 24}}>
            <View
              style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <Text style={{color: palette.offBlack}}>0.01 achieved</Text>
              <Text style={{color: palette.offBlack}}>Target: $20,053.90</Text>
            </View>

            <ProgressBar percentage={20}/>

            <View style={{
              alignSelf: "center",
              backgroundColor: palette.offWhite003,
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderRadius: 20
            }}>
              <Text style={{color: palette.offBlack}}>Results are updated monthly</Text>
            </View>
          </View>

          <Button
            text="Fund plan"
            variant="PRIMARY-ALT"
            iconBefore={<Entypo name="plus" size={24} color={palette.brand}/>}
          />
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

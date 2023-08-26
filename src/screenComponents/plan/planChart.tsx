import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import palette from "@/assets/palette";
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import ChartDurationSelector from "@/screenComponents/plan/chartDurationSelector";

interface IProps {
}

function PlanChart(props: IProps) {
  return (
    <View style={styles.container}>
      <View style={{alignItems: "center", gap: 4}}>
        <Text style={{fontSize: fontSize.small, color: palette.white}}>Performance</Text>
        <Text title style={{
          fontWeight: "700",
          fontSize: fontSize.xl,
          color: palette.white
        }}>$10,930.75</Text>
        <Text style={{color: palette.white}}>July 26th, 2021</Text>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginTop: 20,
          justifyContent: "space-between"
        }}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <View style={styles.grayCircle}/>
            <Text style={{fontSize: fontSize.small, color: palette.white}}>Investments •
              $50,400</Text>
          </View>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <View style={[styles.grayCircle, {backgroundColor: palette.white + "44"}]}/>
            <Text style={{fontSize: fontSize.small, color: palette.white}}>Returns • $20,803</Text>
          </View>
        </View>
      </View>

      <ChartDurationSelector/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.brand,
    padding: 20,
    borderRadius: 12,
    marginTop: 24,
    shadowColor: palette.offBlack,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.15,
  },
  grayCircle: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: palette.white,
    marginRight: 10,
  },
});

export default PlanChart;

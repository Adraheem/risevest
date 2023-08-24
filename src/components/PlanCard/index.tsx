import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import palette from "@/assets/palette";
import Text from "@/components/Text";
import {AntDesign} from "@expo/vector-icons";
import fontSize from "@/assets/fontSize";

interface IProps {
}

const width = Math.min(250, (Dimensions.get("screen").width * 0.5));

function PlanCard(props: IProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View>
        <Text style={{color: palette.white}}>Build Wealth</Text>
        <Text title style={{fontSize: fontSize.medium, color: palette.white}}>$188.25</Text>
        <Text style={{color: palette.white}}>Mixed assets</Text>
      </View>
    </TouchableOpacity>
  );
}

export function NewPlanCard() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.container, styles.newPlan]}>
      <View style={styles.plusView}>
        <AntDesign name="plus" size={24} color={palette.brand}/>
      </View>
      <Text style={styles.newPlanText}>Create an investment plan</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: width * 4 / 3,
    borderRadius: 15,
    backgroundColor: palette.offBlack,
    padding: 16,
    justifyContent: "flex-end",
  },
  newPlan: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    backgroundColor: palette.offWhite,
  },
  newPlanText: {textAlign: "center", marginTop: 8, fontWeight: "700"},
  plusView: {
    width: 50,
    height: 50,
    backgroundColor: palette.brand + "22",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default PlanCard;

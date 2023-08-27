import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import palette from "@/assets/palette";
import Text from "@/components/Text";
import {AntDesign} from "@expo/vector-icons";
import fontSize from "@/assets/fontSize";
import {ImageBackground} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import {Plan} from "@/types/plan";
import utils from "@/utils";

interface IProps {
  data: Plan
  width?: number,
}

const screenWidth = Math.min(250, (Dimensions.get("screen").width * 0.5));

function PlanCard({data, width = screenWidth}: IProps) {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("Plan", {id: data.id})
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleClick}
      style={[styles.container, {width}]}
    >
      <ImageBackground source={require("@/assets/images/purple-2.png")} style={styles.bg}>
        <View>
          <Text style={{color: palette.white}}>{data.plan_name}</Text>
          <Text title style={{
            fontSize: fontSize.medium,
            color: palette.white
          }}>${utils.numberWithCommas(data.target_amount)}</Text>
          <Text style={{color: palette.white}}>Mixed assets</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export function NewPlanCard() {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("NewPlan")
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleClick}
      style={[styles.container, styles.newPlan]}
    >
      <View style={styles.plusView}>
        <AntDesign name="plus" size={24} color={palette.brand}/>
      </View>
      <Text style={styles.newPlanText}>Create an investment plan</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    aspectRatio: 3 / 4,
    borderRadius: 15,
    backgroundColor: palette.offBlack,
    overflow: "hidden",
  },
  bg: {
    width: "100%",
    flex: 1,
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

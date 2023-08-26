import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import palette from "@/assets/palette";
import Text from "@/components/Text";
import {AntDesign} from "@expo/vector-icons";
import fontSize from "@/assets/fontSize";
import {useRouter} from "expo-router";
import {ImageBackground} from "expo-image";

interface IProps {
}

const width = Math.min(250, (Dimensions.get("screen").width * 0.5));

function PlanCard(props: IProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/plan/duiwuweiwuiiw");
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleClick}
      style={styles.container}
    >
      <ImageBackground source={require("@/assets/images/purple-2.png")} style={styles.bg}>
        <View>
          <Text style={{color: palette.white}}>Build Wealth</Text>
          <Text title style={{fontSize: fontSize.medium, color: palette.white}}>$188.25</Text>
          <Text style={{color: palette.white}}>Mixed assets</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export function NewPlanCard() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/createPlan");
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
    width: width,
    height: width * 4 / 3,
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

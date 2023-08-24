import React from 'react';
import {View, StyleSheet} from 'react-native';
import palette from "@/assets/palette";
import Button from "@/components/Button";
import Text from "@/components/Text";
import {AntDesign} from "@expo/vector-icons";

interface IProps {
}

function NeedHelp(props: IProps) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", alignItems: "center", gap: 6}}>
        <View style={styles.question}>
          <AntDesign name="question" size={24} color={palette.brand}/>
        </View>
        <Text>Need Help?</Text>
      </View>
      <Button text="Contact us"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    padding: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: palette.offBlack,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  question: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: palette.brand + "22",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default NeedHelp;

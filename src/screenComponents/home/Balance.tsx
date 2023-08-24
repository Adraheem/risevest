import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "@/components/Text";
import {Entypo, Feather, MaterialCommunityIcons} from "@expo/vector-icons";
import palette from "@/assets/palette";
import fontSize from "@/assets/fontSize";
import Button from "@/components/Button";

interface IProps {
}

function Balance(props: IProps) {
  return (
    <View style={{marginBottom: 10}}>
      <View style={styles.container}>
        <View style={[styles.row, {gap: 10}]}>
          <Text>Total Balance</Text>
          <MaterialCommunityIcons
            name={"eye-off"}
            size={18}
            color={palette.brand}
          />
        </View>

        <Text title style={{fontSize: fontSize.xxl}}>$287.82</Text>

        <View style={[styles.row, {gap: 0}]}>
          <Text>Total Gains</Text>
          <Feather name="arrow-up-right" size={18} color={palette.green}/>
          <Text style={{color: palette.green}}>0.00%</Text>
        </View>

        <View style={[styles.row, {gap: 6}]}>
          <View
            style={styles.active}/>
          <View style={styles.inactive}/>
          <View style={styles.inactive}/>
        </View>
      </View>

      <Button
        text="Add money"
        variant="PRIMARY-OUTLINE"
        iconBefore={<Entypo name="plus" size={24} color={palette.brand}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: palette.white,
    backgroundColor: palette.white + "66",
    marginVertical: 10,
    alignItems: "center",
    gap: 12,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  active: {
    width: 16,
    height: 5,
    borderRadius: 5,
    backgroundColor: palette.brand,
  },
  inactive: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: palette.offBlack + "77",
  },
});

export default Balance;

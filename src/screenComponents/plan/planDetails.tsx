import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "@/components/Text";
import palette from "@/assets/palette";

interface IProps {
}

function PlanDetails(props: IProps) {

  return (
    <View style={styles.container}>
      <Item label="Total earnings" value="$12,000.09"/>
      <Item label="Total earnings" value="$12,000.09"/>
      <Item label="Total earnings" value="$12,000.09"/>
      <Item label="Total earnings" value="$12,000.09"/>
      <Item label="Total earnings" value="$12,000.09"/>
      <Item label="Total earnings" value="$12,000.09" last/>
    </View>
  );
}

interface ItemProps {
  label: string;
  value: string;
  last?: boolean;
}

function Item({label, value, last}: ItemProps) {
  return (
    <View style={[styles.row, !last ? styles.last : {}]}>
      <Text style={styles.key}>{label}</Text>
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingVertical: 12,
  },
  key: {
    flex: 1,
    color: palette.offBlack,
  },
  last: {
    borderBottomWidth: 1,
    borderColor: palette.offWhite,
  }
});

export default PlanDetails;

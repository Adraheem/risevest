import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import palette from "@/assets/palette";
import {Feather} from "@expo/vector-icons";
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import utils from "@/utils";

interface IProps {
  amount: string,
  positive?: boolean,
  date: Date,
  description: string,
}

function Transaction({amount, positive, date, description}: IProps) {
  const color = useMemo(() => positive ? palette.green : palette.red, [positive]);

  return (
    <View style={styles.container}>
      <View style={[{backgroundColor: color + "22"}, styles.trend]}>
        <Feather name={positive ? "arrow-down-left" : "arrow-up-right"} size={20} color={color}/>
      </View>
      <View style={{flex: 1, marginRight: 6}}>
        <Text>{description}</Text>
        <Text style={{fontSize: fontSize.small, color: palette.offBlack}}>
          {utils.formatDate(date, "MMM dd, yyyy")}
        </Text>
      </View>
      <Text title>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
  },
  trend: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  }
});

export default Transaction;
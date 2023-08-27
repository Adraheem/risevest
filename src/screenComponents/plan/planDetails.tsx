import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Text from "@/components/Text";
import palette from "@/assets/palette";
import {useQuery} from "react-query";
import {Plan} from "@/types/plan";
import utils from "@/utils";
import planService from "@/services/plan.service";

interface IProps {
  id: string
}

function PlanDetails({id}: IProps) {
  const {data} = useQuery<Plan>(["plan", id], () => planService.getPlan(id));
  const {data: rate, isLoading, isError} = useQuery("rate", planService.getRate);

  if (!data || isError) return null;

  return (
    <View style={styles.container}>
      <Item label="Total earnings" value="$12,000.09"/>
      <Item label="Current earnings" value="$12,000.09"/>
      <Item label="Deposit value" value="$12,000.09"/>
      <Item
        label={`Balance in Naira (${isLoading ? "..." : `*₦${utils.numberWithCommas(rate?.buy_rate)}`})`}
        value={isLoading ? "..." : `*₦${utils.numberWithCommas(((rate?.buy_rate ?? 0) * data.target_amount).toFixed(2))}`}
      />
      <Item
        label="Plan created on"
        value={utils.formatDate(new Date(data.created_at), "do MMMM, yyyy")}
      />
      <Item
        label="Maturity date"
        value={utils.formatDate(new Date(data.maturity_date), "do MMMM, yyyy")}
        last
      />
    </View>
  );
}

interface ItemProps {
  label: React.ReactNode;
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

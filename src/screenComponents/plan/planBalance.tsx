import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import palette from "@/assets/palette";
import {useQuery} from "react-query";
import {Plan} from "@/types/plan";
import utils from "@/utils";
import planService from "@/services/plan.service";

interface IProps {
  id: string,
}

function PlanBalance({id}: IProps) {
  const {data} = useQuery<Plan>(["plan", id], () => planService.getPlan(id));

  return (
    <View style={{alignItems: "center", gap: 4}}>
      <Text style={{fontSize: fontSize.small, color: palette.offBlack}}>Plan Balance</Text>
      <Text title style={{
        fontWeight: "700",
        fontSize: fontSize.xl
      }}>
        ${utils.numberWithCommas(data?.target_amount.toFixed(2))}
      </Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PlanBalance;

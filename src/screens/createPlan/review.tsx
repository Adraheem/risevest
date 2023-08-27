import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import Header from "@/components/Header";
import Screen from "@/components/Screen";
import Button from "@/components/Button";
import palette from "@/assets/palette";
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {StackNavigationProp} from "@react-navigation/stack";
import {NewPlanParamList} from "@/types/navigation";
import {useNewPlanContext} from "@/context/NewPlanContext";
import utils from "@/utils";
import {useMutation, useQuery, useQueryClient} from "react-query";
import planService from "@/services/plan.service";

interface IProps {
  navigation: StackNavigationProp<NewPlanParamList>
}

function Review({navigation}: IProps) {
  const {data} = useNewPlanContext();
  const queryClient = useQueryClient();
  const {isLoading, data: projection} = useQuery("newPlan", () => planService.getPlanProjection({
    targetAmount: data?.target_amount,
    maturityDate: data?.maturity_date,
  }));
  const {isLoading: saving, mutate} = useMutation(planService.createPlan, {
    onSuccess(plan) {
      queryClient.invalidateQueries(["plan", plan.id]);
      navigation.push("PlanDone", {id: plan.id});
    }
  });

  const handleAgree = () => {
    data && mutate(data);
  }

  return (
    <View style={styles.container}>
      <Header title="Review"/>
      <SafeAreaView style={{flex: 1}}>
        <Screen>
          <View style={{padding: 20, gap: 30}}>

            <View style={{alignItems: "center", gap: 4}}>
              <Text
                style={{fontSize: fontSize.small, color: palette.offBlack}}>{data?.plan_name}</Text>
              <Text title style={{
                fontWeight: "700",
                fontSize: fontSize.xl
              }}>
                ${utils.numberWithCommas(data?.target_amount)}
              </Text>
              <Text>by {data?.maturity_date && utils.formatDate(data.maturity_date)}</Text>

              <View style={{flexDirection: "row", alignItems: "center", gap: 28, marginTop: 20}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                  <View style={styles.grayCircle}/>
                  <Text style={{fontSize: fontSize.small}}>
                    Investments • {isLoading ?
                    <ActivityIndicator size="small"/> :
                    `$${utils.numberWithCommas(projection?.total_invested)}`}
                  </Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                  <View style={[styles.grayCircle, {backgroundColor: palette.brand}]}/>
                  <Text style={{fontSize: fontSize.small}}>Returns • {isLoading ?
                    <ActivityIndicator size="small"/> :
                    `$${utils.numberWithCommas(projection?.total_returns)}`}</Text>
                </View>
              </View>
            </View>

            <View
              style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <Text style={{color: palette.offBlack}}>Estimated monthly investment</Text>
              <Text>$120</Text>
            </View>

            <View style={{height: 1, backgroundColor: palette.offWhite}}/>

            <View style={styles.disclosure}>
              <MaterialCommunityIcons name="information-outline" size={24} color={palette.brand}/>
              <Text style={{color: palette.offBlack, flex: 1}}>
                Returns not guaranteed. Investing involves risk. Read our Disclosures.
              </Text>
            </View>

            <Text style={{textAlign: "center", color: palette.offBlack}}>
              These are your starting settings, they can always be updated.
            </Text>

            <View style={{gap: 10}}>
              <Button text="Agree & Continue" onPress={handleAgree} loading={saving}/>
              <Button text="Start over" variant="PRIMARY-ALT"
                      onPress={() => navigation.pop(4)}/>
            </View>
          </View>
        </Screen>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  grayCircle: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: palette.offBlack,
    marginRight: 10,
  },
  disclosure: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
    backgroundColor: palette.offWhite004,
    padding: 10,
    borderRadius: 8,
  }
});

export default Review;

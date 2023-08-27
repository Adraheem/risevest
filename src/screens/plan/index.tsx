import React from 'react';
import {ActivityIndicator, RefreshControl, StyleSheet, View} from 'react-native';
import palette from "@/assets/palette";
import PlanHeader from "@/screenComponents/plan/planHeader";
import Screen from "@/components/Screen";
import Button from "@/components/Button";
import {Entypo} from "@expo/vector-icons";
import PlanBalance from "@/screenComponents/plan/planBalance";
import PlanProgress from "@/screenComponents/plan/planProgress";
import PlanDetails from "@/screenComponents/plan/planDetails";
import RecentTransactions from "@/screenComponents/plan/recentTransactions";
import PlanChart from "@/screenComponents/plan/planChart";
import {RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "@/types/navigation";
import {useQuery} from "react-query";
import planService from "@/services/plan.service";

interface IProps {
  route: RouteProp<RootStackParamList, "Plan">
}

function IndividualPlan({route}: IProps) {
  const {
    isLoading,
    isRefetching,
    data,
    isError,
    refetch,
  } = useQuery(["plan", route.params.id], () => planService.getPlan(route.params.id))

  return (
    <View style={styles.container}>
      <PlanHeader loading={isLoading} data={data}/>
      {
        isLoading ? (
          <View style={{marginTop: 120, alignItems: "center"}}>
            <ActivityIndicator color={palette.brand} size="large"/>
          </View>
        ) : data ? (
          <Screen
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch}/>}
          >
            <View style={{paddingHorizontal: 20, paddingVertical: 26}}>
              <PlanBalance id={data.id}/>

              <PlanProgress id={data.id}/>

              <Button
                text="Fund plan"
                variant="PRIMARY-ALT"
                iconBefore={<Entypo name="plus" size={24} color={palette.brand}/>}
              />

              <PlanChart id={data.id}/>

              <PlanDetails id={data.id}/>

              <RecentTransactions id={data.id}/>
            </View>
          </Screen>
        ) : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  progressBar: {
    backgroundColor: palette.offWhite003,
    height: 6,
    borderRadius: 5,
    overflow: "hidden",
    marginVertical: 10,
  },
  progress: {
    height: "100%",
    backgroundColor: palette.brand,
    borderRadius: 5,
  },
});

export default IndividualPlan;

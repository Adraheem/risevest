import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ListHeader from "@/components/ListHeader";
import Text from "@/components/Text";
import palette from "@/assets/palette";
import PlanCard, {NewPlanCard} from "@/components/PlanCard";
import {useQuery} from "react-query";
import planService from "@/services/plan.service";

interface IProps {
}

function Plans(props: IProps) {
  const {isLoading, data, isError} = useQuery("plans", planService.getPlans);

  return (
    <View style={styles.container}>
      <ListHeader title="Create a plan" moreText="View all plans"/>
      <Text style={{color: palette.offBlack, marginTop: 12,}}>
        Start your investment journey by creating a plan
      </Text>

      <FlatList
        horizontal
        data={data?.items}
        renderItem={({item}) => <PlanCard data={item}/>}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{gap: 12}}
        style={{marginTop: 20}}
        ListHeaderComponent={<NewPlanCard/>}
        showsHorizontalScrollIndicator={false}
        scrollEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  }
});

export default Plans;

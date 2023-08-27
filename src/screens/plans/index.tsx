import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import Text from "@/components/Text";
import palette from "@/assets/palette";
import fontSize from "@/assets/fontSize";
import {useQuery} from "react-query";
import planService from "@/services/plan.service";
import Button from "@/components/Button";
import PlanCard from "@/components/PlanCard";
import {AntDesign} from "@expo/vector-icons";
import {CompositeNavigationProp} from "@react-navigation/native";
import {RootStackParamList, TabParamList} from "@/types/navigation";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
  navigation: CompositeNavigationProp<BottomTabNavigationProp<TabParamList, "Plans">, StackNavigationProp<RootStackParamList>>
}

const width = Dimensions.get("screen").width;

function PlansScreen({navigation}: IProps) {
  const {data, isLoading, isError, refetch, isRefetching} = useQuery("plans", planService.getPlans);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: palette.white}}>
      <View style={styles.container}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Text title style={{fontSize: fontSize.xl, fontWeight: "700"}}>Plans</Text>
          <Button
            text="New"
            size="SMALL"
            variant="PRIMARY-ALT"
            iconBefore={<AntDesign name="plus" size={20} color={palette.brand}/>}
            onPress={() => navigation.push("NewPlan")}
          />
        </View>

        {isLoading ? (
          <View style={{marginTop: 30}}>
            <ActivityIndicator size="large" color={palette.brand}/>
          </View>
        ) : isError ? (
          <View style={{
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            gap: 12
          }}>
            <Text style={{color: palette.red}}>Unable to fetch plans</Text>
            <Button text="Reload" onPress={() => refetch()} size="SMALL" loading={isRefetching}/>
          </View>
        ) : (
          <View>
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={isRefetching}
                  onRefresh={refetch}
                />
              }
              data={data?.items}
              renderItem={({item, index}) => (
                <View style={index % 2 === 0 ? {paddingRight: 6} : {paddingLeft: 6}}>
                  <PlanCard data={item} width={(width / 2) - 22}/>
                </View>
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{gap: 12, paddingBottom: 40}}
              style={{marginTop: 20}}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              scrollEnabled
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  }
});

export default PlansScreen;

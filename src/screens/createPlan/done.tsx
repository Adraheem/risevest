import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Check from "@/assets/images/check";
import Text from "@/components/Text";
import Button from "@/components/Button";
import fontSize from "@/assets/fontSize";
import palette from "@/assets/palette";
import {CompositeNavigationProp, RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {NewPlanParamList, RootStackParamList} from "@/types/navigation";
import {useQuery} from "react-query";
import {User} from "@/types/auth";

interface IProps {
  navigation: CompositeNavigationProp<StackNavigationProp<NewPlanParamList, "PlanDone">, StackNavigationProp<RootStackParamList>>
  route: RouteProp<NewPlanParamList, "PlanDone">
}

function Done({navigation, route}: IProps) {
  const {data} = useQuery<User>("session");

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Check/>
          <Text title style={styles.title}>You just created your plan.</Text>
          <Text style={styles.text}>
            Well done, {data?.first_name}
          </Text>
        </View>
        <Button text="View plan" onPress={() => navigation.replace("Plan", {id: route.params.id})}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 240,
    alignSelf: "center"
  },
  title: {
    fontSize: fontSize.large,
    textAlign: "center",
    marginTop: 36,
  },
  text: {
    color: palette.offBlack,
    marginTop: 5,
    textAlign: "center",
  }
});

export default Done;

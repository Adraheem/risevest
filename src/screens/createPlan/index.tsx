import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from "@/components/Header";
import Text from "@/components/Text";
import palette from "@/assets/palette";
import {Image} from "expo-image";
import Button from "@/components/Button";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {StackNavigationProp} from "@react-navigation/stack";
import {NewPlanParamList} from "@/types/navigation";

interface IProps {
  navigation: StackNavigationProp<NewPlanParamList>
}

function CreatePlanScreen({navigation}: IProps) {
  return (
    <View style={styles.container}>
      <Header type="CLOSE" title="Create a plan"/>
      <SafeAreaView style={{flex: 1}}>
        <View style={{padding: 20, gap: 20, justifyContent: "space-between", flex: 1}}>
          <Text style={{textAlign: "center", color: palette.offBlack}}>
            Reach your goals faster
          </Text>

          <Image style={styles.image} source={require("@/assets/images/create-plan.png")}/>

          <View style={{gap: 24}}>
            <Item
              icon={<AntDesign name="question" size={24} color={palette.brand}/>}
              title="Give us a few details"
              description="Tell us what you want to achieve and we will help you get there"
            />
            <Item
              icon={<Ionicons name="calendar-outline" size={24} color={palette.brand}/>}
              title="Turn on auto-invest"
              description="The easiest way to get your investment working for you is to fund to periodically."
            />
            <Item
              icon={<Ionicons name="cog-outline" size={24} color={palette.brand}/>}
              title="Modify as you progress"
              description="You are in charge. Make changes to your plan, from adding funds, funding source, adding money to your wallet and more."
            />
          </View>

          <Button text="Continue" onPress={() => navigation.push("PlanName")}/>
        </View>
      </SafeAreaView>
    </View>
  );
}

interface ItemProps {
  icon: React.ReactNode,
  title: string,
  description: string,
}

function Item({icon, title, description}: ItemProps) {
  return (
    <View style={{flexDirection: "row", gap: 20}}>
      <View style={styles.question}>
        {icon}
      </View>
      <View style={{flex: 1, gap: 4}}>
        <Text style={{fontWeight: "700"}}>{title}</Text>
        <Text style={{color: palette.offBlack}}>
          {description}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  question: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: palette.brand + "22",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default CreatePlanScreen;

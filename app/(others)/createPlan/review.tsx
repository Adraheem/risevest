import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from "@/components/Header";
import Screen from "@/components/Screen";
import {Link} from "expo-router";
import Button from "@/components/Button";
import palette from "@/assets/palette";
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface IProps {
}

function Review(props: IProps) {
  return (
    <View style={styles.container}>
      <Header title="Review"/>
      <SafeAreaView style={{flex: 1}}>
        <Screen>
          <View style={{padding: 20, gap: 30}}>

            <View style={{alignItems: "center", gap: 4}}>
              <Text style={{fontSize: fontSize.small, color: palette.offBlack}}>Kate Ventures</Text>
              <Text title style={{fontWeight: "700", fontSize: fontSize.xl}}>$10,930.75</Text>
              <Text>by 20 June 2021</Text>

              <View style={{flexDirection: "row", alignItems: "center", gap: 28, marginTop: 20}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                  <View style={styles.grayCircle}/>
                  <Text style={{fontSize: fontSize.small}}>Investments • $50,400</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                  <View style={[styles.grayCircle, {backgroundColor: palette.brand}]}/>
                  <Text style={{fontSize: fontSize.small}}>Returns • $20,803</Text>
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
              <Link href="/createPlan/done" replace asChild>
                <Button text="Agree & Continue"/>
              </Link>
              <Link href="/createPlan" asChild>
                <Button text="Start over" variant="PRIMARY-ALT"/>
              </Link>
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

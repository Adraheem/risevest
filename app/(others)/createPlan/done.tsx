import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Check from "@/assets/images/check";
import Text from "@/components/Text";
import {Link} from "expo-router";
import Button from "@/components/Button";
import fontSize from "@/assets/fontSize";
import palette from "@/assets/palette";

interface IProps {
}

function Done(props: IProps) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Check/>
          <Text title style={styles.title}>You just created your plan.</Text>
          <Text style={styles.text}>
            Well done, Deborah
          </Text>
        </View>
        <Link href="/plan/iyeuyuquyueuyeq" replace asChild>
          <Button text="View plan"/>
        </Link>
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

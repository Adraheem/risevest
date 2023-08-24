import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import Button from "@/components/Button";
import palette from "@/assets/palette";
import Check from "@/assets/images/check";
import {Link} from "expo-router";

interface IProps {
}

function DoneScreen(props: IProps) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.main}>
          <Check/>
          <Text title style={styles.title}>You just created your Rise account</Text>
          <Text style={styles.text}>
            Welcome to Rise, let’s take you home
          </Text>
        </View>
        <Link href="/home" replace asChild>
          <Button text="Okay"/>
        </Link>
      </SafeAreaView>
    </View>
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

export default DoneScreen;

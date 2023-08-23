import React from 'react';
import {View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {IOnboard} from "@/types/common";
import {Image} from "expo-image";
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import Button from "@/components/Button";

interface IProps extends IOnboard {
  position: number;
}

const imageSize = Dimensions.get("screen").width - 72;

function Onboard({position, title, body, image, color, bg}: IProps) {
  return (
    <View style={[styles.container, {backgroundColor: bg}]}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: "space-between", marginBottom: 50}}>
          <View style={{alignItems: "center"}}>
            <Image source={image} style={styles.image}/>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("screen").width,
    paddingHorizontal: 16,
  },
  image: {
    width: imageSize,
    height: imageSize,
  }
});

export default Onboard;

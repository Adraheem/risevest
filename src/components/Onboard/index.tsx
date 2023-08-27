import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {IOnboard} from "@/types/common";
import {Image} from "expo-image";
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";

interface IProps extends IOnboard {
}

const imageSize = Dimensions.get("screen").width - 72;

function Onboard({title, body, image, color, bg}: IProps) {
  return (
    <View style={[styles.container]}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: "space-between", marginBottom: 50}}>
          <View style={{alignItems: "center"}}>
            <Image source={image} style={styles.image}/>
          </View>

          <View style={{gap: 20}}>
            <Text title style={{fontSize: fontSize.large, fontWeight: "500", color}}>
              {title}
            </Text>
            <Text>{body}</Text>
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

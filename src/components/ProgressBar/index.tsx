import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import palette from "@/assets/palette";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";

interface IProps {
  percentage?: number,
  height?: number,
}

function ProgressBar({percentage = 0, height = 6}: IProps) {
  const width = useSharedValue(percentage);

  const widthStyle = useAnimatedStyle(() => ({
    width: `${width.value}%`,
  }));

  useEffect(() => {
    width.value = withTiming(percentage, {duration: 500})
  }, [percentage]);

  return (
    <View style={[styles.progressBar, {height}]}>
      <Animated.View style={[styles.progress, widthStyle]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    backgroundColor: palette.offWhite003,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
  },
  progress: {
    height: "100%",
    backgroundColor: palette.brand,
    borderRadius: 20,
  },
});

export default ProgressBar;

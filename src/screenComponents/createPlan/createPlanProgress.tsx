import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "@/components/Text";
import palette from "@/assets/palette";

interface IProps {
  step: number,
  total: number,
}

function CreatePlanProgress({step, total}: IProps) {

  return (
    <View style={styles.container}>
      <Text>Question {step} of {total}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, {width: `${step / total * 100}%`}]}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    marginVertical: 20,
  },
  progressBar: {
    backgroundColor: palette.offWhite003,
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: palette.brand,
    borderRadius: 5,
  },
});

export default CreatePlanProgress;

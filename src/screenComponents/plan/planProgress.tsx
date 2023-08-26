import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "@/components/Text";
import palette from "@/assets/palette";
import ProgressBar from "@/components/ProgressBar";

interface IProps {
}

function PlanProgress(props: IProps) {
  return (
    <View style={{marginVertical: 24}}>
      <View
        style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <Text style={{color: palette.offBlack}}>0.01 achieved</Text>
        <Text style={{color: palette.offBlack}}>Target: $20,053.90</Text>
      </View>

      <ProgressBar percentage={20}/>

      <View style={{
        alignSelf: "center",
        backgroundColor: palette.offWhite003,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20
      }}>
        <Text style={{color: palette.offBlack}}>Results are updated monthly</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PlanProgress;

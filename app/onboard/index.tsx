import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "@/components/Text";

interface IProps {
}

function OnboardScreen(props: IProps) {
  return (
    <View style={styles.container}>
      <Text>Onboard Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default OnboardScreen;

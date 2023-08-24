import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "@/components/Text";

interface IProps {
}

function PlansScreen(props: IProps) {
  return (
    <View style={styles.container}>
      <Text>Plans</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PlansScreen;

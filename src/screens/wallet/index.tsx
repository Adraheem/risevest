import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "@/components/Text";

interface IProps {
}

function WalletScreen(props: IProps) {
  return (
    <View style={styles.container}>
      <Text title style={styles.text}>WalletScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
  }
});

export default WalletScreen;

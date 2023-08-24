import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "@/components/Text";
import palette from "@/assets/palette";
import Screen from "@/components/Screen";

interface IProps {
}

function HomeScreen(props: IProps) {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1000,
    backgroundColor: palette.orange,
  }
});

export default HomeScreen;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "@/components/Text";

interface IProps {
}

function HomeScreen(props: IProps) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default HomeScreen;

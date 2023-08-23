import React from 'react';
import {View, StyleSheet} from 'react-native';

interface IProps {
}

function RootNavigation(props: IProps) {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default RootNavigation;

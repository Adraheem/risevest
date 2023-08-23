import React from 'react';
import {View, StyleSheet} from 'react-native';

interface IProps {
}

function SigninScreen(props: IProps) {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SigninScreen;

import React from 'react';
import {
  Keyboard,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import palette from "@/assets/palette";

interface IProps extends ScrollViewProps {
}

function Screen({children, ...props}: IProps) {
  return (
    <ScrollView
      style={{backgroundColor: palette.white}}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="always"
      contentContainerStyle={styles.container}
      {...props}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        {children}
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  }
});

export default Screen;

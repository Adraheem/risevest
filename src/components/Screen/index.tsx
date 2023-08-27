import React from 'react';
import {
  Keyboard, KeyboardAvoidingView, Platform,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import palette from "@/assets/palette";

interface IProps extends ScrollViewProps {
}

function Screen({children, contentContainerStyle, style, ...props}: IProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style={{flex: 1}}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="interactive"
          contentContainerStyle={[styles.container, contentContainerStyle]}
          style={[{backgroundColor: palette.white, flex: 1}, style]}
          {...props}
        >
          {children}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    // minHeight: "100%",
    backgroundColor: palette.white,
  }
});

export default Screen;

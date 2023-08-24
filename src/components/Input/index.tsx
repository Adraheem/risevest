import React, {useMemo, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import palette from "@/assets/palette";
import fontSize from "@/assets/fontSize";
import Text from "@/components/Text";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated"
import {MaterialCommunityIcons} from "@expo/vector-icons";
import isEmpty from "is-empty";

interface IProps extends TextInputProps {
  error?: string;
}

function Input({placeholder, onFocus, onBlur, secureTextEntry, value, error, ...props}: IProps) {
  const [focused, setFocused] = useState(false);
  const placeholderTranslate = useSharedValue(0);
  const [password, setPassword] = useState(secureTextEntry);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: placeholderTranslate.value}],
  }));

  const focusStyle: { view: ViewStyle, placeholder: TextStyle } = useMemo(() => {
    console.log(value)
    if (focused || !isEmpty(value)) {
      placeholderTranslate.value = withTiming(-30);

      return {
        view: {
          borderColor: error ? palette.red : palette.brand,
        },
        placeholder: {
          fontSize: fontSize.small,
          color: palette.brand,
        }
      }
    } else {
      placeholderTranslate.value = withTiming(0);
      return {
        view: {
          borderColor: error ? palette.red : palette.offWhite,
        },
        placeholder: {
          fontSize: fontSize.normal,
        }
      }
    }
  }, [focused, value, error]);

  return (
    <View>
      <View style={[styles.container, focusStyle.view]}>
        <TextInput
          style={[styles.input]}
          secureTextEntry={password}
          value={value}
          onFocus={(e) => {
            setFocused(true);
            onFocus && onFocus(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur && onBlur(e);
          }}
          {...props}
        />
        {
          secureTextEntry && (
            <TouchableOpacity onPress={() => setPassword(p => !p)} style={styles.eye}>
              <MaterialCommunityIcons
                name={password ? "eye-off" : "eye"}
                size={24}
                color={palette.brand}
              />
            </TouchableOpacity>
          )
        }
        <Animated.View style={[styles.placeholder, animatedStyles]}>
          <Text style={[focusStyle.placeholder]}>{placeholder}</Text>
        </Animated.View>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 14,
    paddingVertical: 18,
    fontSize: fontSize.normal,
    flex: 1,
    position: "relative",
    zIndex: 3,
  },
  placeholder: {
    position: "absolute",
    alignSelf: "center",
    left: 6,
    paddingHorizontal: 8,
    backgroundColor: palette.white,
    zIndex: 2,
  },
  eye: {
    paddingHorizontal: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  error: {
    color: palette.red,
    fontSize: fontSize.small,
    marginTop: 2,
  },
});

export default Input;

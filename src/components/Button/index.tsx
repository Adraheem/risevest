import React, {useMemo} from 'react';
import {
  StyleSheet,
  TextProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle
} from 'react-native';
import Text from "@/components/Text";
import palette from "@/assets/palette";

interface IProps extends TouchableOpacityProps {
  text: string;
  size?: "SMALL" | "DEFAULT",
  variant?: "PRIMARY" | "PRIMARY-ALT",
  textProps?: TextProps,
  loading?: boolean,
}

function Button({
                  children,
                  text,
                  style,
                  size,
                  variant,
                  textProps,
                  loading,
                  disabled,
                  ...props
                }: IProps) {
  const sizeStyle: ViewStyle = useMemo(() => {
    switch (size) {
      case "SMALL":
        return {
          height: 42,
        }

      default:
        return {
          height: 52,
        }
    }
  }, [size]);

  const variantStyle: { view: ViewStyle, text: TextStyle } = useMemo(() => {
    switch (variant) {
      case "PRIMARY-ALT":
        return {
          view: {
            backgroundColor: palette.brand + "22",
          },
          text: {
            color: palette.brand
          }
        }

      default:
        return {
          view: {
            backgroundColor: palette.brand,
          },
          text: {
            color: palette.white,
          },
        }
    }
  }, [variant]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, sizeStyle, variantStyle.view, {opacity: loading || disabled ? 0.3 : 1}, style]}
      disabled={loading || disabled}
      {...props}
    >
      {text ? (
        <Text
          {...textProps}
          style={[styles.text, variantStyle.text, textProps?.style]}
        >
          {text}
        </Text>
      ) : children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  }
});

export default Button;

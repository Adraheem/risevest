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
  text: React.ReactNode;
  size?: "SMALL" | "DEFAULT",
  variant?: "PRIMARY" | "PRIMARY-ALT" | "PRIMARY-OUTLINE",
  textProps?: TextProps,
  loading?: boolean,
  iconBefore?: React.ReactNode,
  iconAfter?: React.ReactNode,
}

const Button = React.forwardRef((allProps: IProps, ref: any) => {
  const {
    children,
    text,
    style,
    size,
    variant,
    textProps,
    loading,
    disabled,
    iconBefore,
    iconAfter,
    ...props
  } = allProps;

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
            backgroundColor: palette.offWhite003,
          },
          text: {
            color: palette.brand
          }
        }

      case "PRIMARY-OUTLINE":
        return {
          view: {
            backgroundColor: palette.white,
            borderWidth: 1,
            borderColor: palette.offWhite,
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
      ref={ref}
      {...props}
    >
      {iconBefore}
      {text ? (
        <Text
          {...textProps}
          style={[styles.text, variantStyle.text, textProps?.style]}
        >
          {text}
        </Text>
      ) : children}
      {iconAfter}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  }
});

export default Button;

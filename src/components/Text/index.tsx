import React, {useMemo} from 'react';
import {Text as RNText, TextProps, TextStyle} from 'react-native';
import fontSize from "@/assets/fontSize";
import textUtils from "@/components/Text/textUtils";

interface IProps extends TextProps {
  title?: boolean;
}

function Text({style, title, ...props}: IProps) {


  const font: TextStyle = useMemo(() => {
    const weight = textUtils.extractWeight(style);
    if (title) {
      switch (weight) {
        case "500":
        case "medium":
        case "semibold":
          return {
            fontFamily: "grotesk-500"
          };

        case "700":
        case "bold":
          return {
            fontFamily: "grotesk-700"
          };

        default:
          return {
            fontFamily: "grotesk-400"
          }
      }
    } else {
      switch (weight) {
        case "700":
        case "bold":
          return {
            fontFamily: "dm-sans-700"
          };

        default:
          return {
            fontFamily: "dm-sans-400"
          };
      }
    }
  }, [style, title])

  return (
    <RNText style={[{fontSize: fontSize.normal}, style, font]} {...props}/>
  );
}

export default Text;

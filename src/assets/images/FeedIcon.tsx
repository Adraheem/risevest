import * as React from "react"
import Svg, {SvgProps, Path} from "react-native-svg"
import palette from "@/assets/palette";

interface IProps extends SvgProps {
  size?: number,
  color?: string,
}

const FeedIcon = ({size = 24, color = palette.offBlack, ...props}: IProps) => (
  <Svg
    viewBox="0 0 32 33"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M5 6.5A1.5 1.5 0 0 1 6.5 5h19A1.5 1.5 0 0 1 27 6.5v4a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 5 10.5v-4Zm0 10A1.5 1.5 0 0 1 6.5 15h10a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 25.5v-9ZM21.5 15a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-4Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default FeedIcon;

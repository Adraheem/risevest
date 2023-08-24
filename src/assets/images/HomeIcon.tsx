import * as React from "react"
import Svg, {SvgProps, Path} from "react-native-svg"
import palette from "@/assets/palette";

interface IProps extends SvgProps {
  size?: number,
  color?: string,
}

const HomeIcon = ({size = 24, color = palette.offBlack, ...props}: IProps) => (
  <Svg
    viewBox="0 0 33 32"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M19.532 25.127v-3.042c0-1.575-1.44-2.852-3.015-2.852h-.435c-1.575 0-3.015 1.277-3.015 2.852v3.042c0 .2.034.392.098.57h-1.429a2.852 2.852 0 0 1-2.852-2.851V14.12l-1.336 1.169a.57.57 0 0 1-.751-.86l9.127-7.985a.57.57 0 0 1 .751 0l9.128 7.986a.57.57 0 0 1-.752.859l-1.335-1.17v8.727a2.852 2.852 0 0 1-2.853 2.852h-1.428a1.71 1.71 0 0 0 .097-.57Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default HomeIcon;

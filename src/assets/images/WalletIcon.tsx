import * as React from "react"
import Svg, {SvgProps, Path, G} from "react-native-svg"
import palette from "@/assets/palette";

interface IProps extends SvgProps {
  size?: number,
  color?: string,
}

const WalletIcon = ({size = 24, color = palette.offBlack, ...props}: IProps) => (
  <Svg
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M5.5 9.675c0-1.063.862-1.925 1.925-1.925h14.85c1.063 0 1.925.862 1.925 1.925v9.35a1.925 1.925 0 0 1-1.925 1.925H7.425A1.925 1.925 0 0 1 5.5 19.025v-9.35Zm3.3-.55v1.1c0 .456-.37.825-.825.825h-1.1v1.65h1.1a2.475 2.475 0 0 0 2.475-2.475v-1.1H8.8Zm6.05 7.975a2.475 2.475 0 1 0 0-4.95 2.475 2.475 0 0 0 0 4.95Zm-7.975.55h1.1c.456 0 .825.37.825.825v1.1h1.65v-1.1A2.475 2.475 0 0 0 7.975 16h-1.1v1.65Zm14.025.825c0-.456.37-.825.825-.825h1.1V16h-1.1a2.475 2.475 0 0 0-2.475 2.475v1.1h1.65v-1.1Zm0-8.25v-1.1h-1.65v1.1a2.475 2.475 0 0 0 2.475 2.475h1.1v-1.65h-1.1a.825.825 0 0 1-.825-.825ZM8.141 22.6A3.299 3.299 0 0 0 11 24.25h11.275a5.225 5.225 0 0 0 5.225-5.225V13.25a3.299 3.299 0 0 0-1.65-2.858v8.633c0 1.974-1.6 3.575-3.575 3.575H8.141Z"
    />
    <Path
      fill={color}
      d="M6.737 8.678h4.022v4.641H6.737zM19.112 8.678h4.022v4.641h-4.022zM19.112 15.175h4.022v4.641h-4.022zM6.737 15.484h4.022v4.641H6.737z"
    />
  </Svg>
)
export default WalletIcon;

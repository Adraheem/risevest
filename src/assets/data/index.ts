import palette from "@/assets/palette";
import {IOnboard} from "@/types/common";

export const onboardList: IOnboard[] = [
  {
    color: palette.orange,
    title: "Quality assets",
    body: "Rise invests your money into the best dollar investments around the world.",
    image: require("../images/onboard1.png"),
    bg: "#FEFAF7",
  },
  {
    color: palette.indigo,
    title: "Superior Selection",
    body: "Our expert team and intelligent algorithms select assets that beat the markets.",
    image: require("../images/onboard2.png"),
    bg: "#FDF4F9",
  },
  {
    color: palette.brand,
    title: "Better Performance",
    body: "You earn more returns, achieve more of your financial goals and protect your money from devaluation.",
    image: require("../images/onboard3.png"),
    bg: "#F6FFFE",
  },
];

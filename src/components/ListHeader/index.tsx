import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "@/components/Text";
import {Feather} from "@expo/vector-icons";
import fontSize from "@/assets/fontSize";
import palette from "@/assets/palette";

interface IProps {
  title: string,
  moreText?: string,
  moreActive?: boolean,
}

function ListHeader({title, moreActive, moreText}: IProps) {
  return (
    <View style={styles.container}>
      <Text title style={styles.title}>
        Create a plan
      </Text>
      {
        moreText && (
          <Text style={[styles.more, {color: moreActive ? palette.brand : palette.offBlack + "77"}]}>
            View all plans<Feather name="chevron-right" size={18} color={moreActive ? palette.brand : palette.offBlack + "77"}/>
          </Text>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: fontSize.medium,
  },
  more: {
    verticalAlign: "middle",
    alignItems: "center",
    fontWeight: "700",
  },
});

export default ListHeader;

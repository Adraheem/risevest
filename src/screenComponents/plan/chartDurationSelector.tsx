import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from "@/components/Text";
import palette from "@/assets/palette";

interface IProps {
}

function ChartDurationSelector(props: IProps) {
  const [active, setActive] = useState(0);

  const options = ["1M", "3M", "6M", "All"];

  return (
    <View style={styles.container}>
      {
        options.map((option, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setActive(index)}
            style={[styles.item, index === active ? styles.activeItem : {}]}
          >
            <Text style={index === active ? styles.activeText : styles.text}>{option}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: palette.white + "22",
    borderRadius: 4,
    height: 28,
    marginTop: 20,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 4,
  },
  text: {
    color: palette.white
  },
  activeText: {
    color: palette.brand
  },
  activeItem: {
    backgroundColor: palette.white,
  }
});

export default ChartDurationSelector;

import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import palette from "@/assets/palette";
import {useNavigation} from "@react-navigation/native";

interface IProps {
  active: number;
  name: string;
  path: string;
  icon: React.FC<any>;
  id: number;
}

function BottomTabBarItem({active, path, name, icon: Icon, id}: IProps) {
  const navigation = useNavigation();
  const isSelected = useMemo(() => active === id, [active, id]);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(path)}
      activeOpacity={0.8}
    >
      <Icon size={32} color={isSelected ? palette.brand : palette.offBlack}/>
      {
        isSelected ? (
          <View style={styles.dot}/>
        ) : (
          <Text style={styles.text}>{name}</Text>
        )
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 74,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: fontSize.caption,
    marginTop: 4
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: palette.brand,
    marginVertical: 5,
  }
});

export default BottomTabBarItem;

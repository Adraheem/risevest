import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {onboardList} from "@/assets/data";
import Onboard from "@/components/Onboard";
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import Button from "@/components/Button";
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface IProps {
}

function OnboardScreen(props: IProps) {
  const [active, setActive] = useState(0);
  const activeItem = useMemo(() => onboardList[active], [active]);

  const {bottom} = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={onboardList}
        renderItem={(item) => <Onboard position={item.index + 1} {...item.item}/>}
        keyExtractor={(_, index) => index.toString()}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <View style={[styles.content, {marginBottom: bottom + 20}]}>
        <View style={{gap: 20}}>
          <Text title style={{fontSize: fontSize.large, color: activeItem.color}}>
            {activeItem.title}
          </Text>
          <Text>{activeItem.body}</Text>
        </View>

        <View style={{gap: 10, height: 114}}>
          <Button text="Sign Up"/>
          <Button text="Sign In" variant="PRIMARY-ALT"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingHorizontal: 16,
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 5,
    gap: 50,
  }
});

export default OnboardScreen;

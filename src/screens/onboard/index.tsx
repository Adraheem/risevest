import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {onboardList} from "@/assets/data";
import Onboard from "@/components/Onboard";
import Button from "@/components/Button";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/types/navigation";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue
} from "react-native-reanimated";
import palette from "@/assets/palette";
import {IOnboard} from "@/types/common";
import {Feather} from "@expo/vector-icons";

const width = Dimensions.get("screen").width;

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, "Onboard">
}

function OnboardScreen({navigation}: IProps) {
  const [scrollX, setScrollX] = useState(0);
  const animatedScrollX = useSharedValue(0);
  const {bottom, top} = useSafeAreaInsets();
  const listRef = useRef<FlatList<IOnboard>>(null);

  const handleSignup = () => {
    navigation.push("Signup")
  }

  const handleLogin = () => {
    navigation.push("Login")
  }

  const handleNext = () => {
    listRef.current?.scrollToOffset({
      animated: true,
      offset: scrollX + width,
    });
  }

  const handlePrev = () => {
    listRef.current?.scrollToOffset({
      animated: true,
      offset: scrollX - width,
    });
  }

  const bgStyle = useAnimatedStyle(() => {
    return ({
      backgroundColor: interpolateColor(
        animatedScrollX.value,
        onboardList.map((_, i) => i * width),
        onboardList.map((o) => o.bg)
      ),
    })
  })

  const Background = useCallback(() => {
    return (
      <Animated.View
        style={[StyleSheet.absoluteFillObject, bgStyle]}
      />
    )
  }, []);

  const Dots = useCallback(() => {
    return (
      <View style={[styles.dots, {top: top + width + 20}]}>
        {onboardList.map((o, i) => {
          const dotBg = useAnimatedStyle(() => ({
            backgroundColor: interpolateColor(
              animatedScrollX.value,
              [(i - 1) * width, i * width, (i + 1) * width],
              [palette.offBlack + "33", o.color, palette.offBlack + "33"]
            )
          }))
          return (
            <Animated.View
              key={`dot-${i}`}
              style={[styles.dot, dotBg]}
            />)
        })}
      </View>
    )
  }, []);

  const position = useMemo(() => Math.round(scrollX / width), [scrollX]);

  const active = useMemo(() => {
    return onboardList[position];
  }, [position]);

  return (
    <View style={styles.container}>
      <Background/>
      <Dots/>
      <FlatList
        ref={listRef}
        horizontal
        data={onboardList}
        renderItem={(item) => <Onboard {...item.item}/>}
        keyExtractor={(_, index) => index.toString()}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}
        bounces={false}
        onScroll={(e) => {
          animatedScrollX.value = e.nativeEvent.contentOffset.x;
          setScrollX(e.nativeEvent.contentOffset.x);
        }}
      />
      <View style={[styles.content, {marginBottom: bottom + 20}]}>
        {
          position > onboardList.length - 2 ? (
            <View style={{gap: 10, height: 114}}>
              <Button text="Sign Up" onPress={handleSignup}/>
              <Button text="Sign In" variant="PRIMARY-ALT" onPress={handleLogin}/>
            </View>
          ) : (
            <View
              style={{gap: 10, height: 114, flexDirection: "row", justifyContent: "space-between"}}>
              <Button
                text=""
                variant="PRIMARY-ALT"
                iconBefore={<Feather name="arrow-left" size={18} color={active.color}/>}
                disabled={Math.floor(scrollX / width) < 1}
                onPress={handlePrev}
              />
              <Button
                text="Next"
                variant="PRIMARY-ALT"
                textProps={{style: {color: active.color}}}
                iconAfter={<Feather name="arrow-right" size={18} color={active.color}/>}
                onPress={handleNext}
              />
            </View>
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 16,
    width: "100%",
  },
  dots: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    alignSelf: "center"
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  }
});

export default OnboardScreen;

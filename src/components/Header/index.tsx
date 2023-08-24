import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import {Ionicons} from "@expo/vector-icons";
import palette from "@/assets/palette";
import {useRouter} from "expo-router";

interface IProps {
  type?: "BACK" | "CLOSE",
  title: string,
}

function Header({type = "BACK", title}: IProps) {
  const router = useRouter();
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  }

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <TouchableOpacity onPress={handleBack} activeOpacity={0.8} style={styles.back}>
          <Ionicons
            name={type === "BACK" ? "arrow-back" : "close"}
            size={24}
            color={palette.brand}
          />
        </TouchableOpacity>
        <Text title style={styles.text}>{title}</Text>
        <View style={{width: 36}}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    gap: 20,
    alignItems: "center"
  },
  text: {
    fontSize: fontSize.xl,
    fontWeight: "700",
    textAlign: "center",
    flex: 1,
  },
  back: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: palette.brand + "22",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default Header;

import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Feather, Ionicons} from "@expo/vector-icons";
import palette from "@/assets/palette";
import Text from "@/components/Text";
import {ImageBackground} from "expo-image";
import fontSize from "@/assets/fontSize";
import {useNavigation} from "@react-navigation/native";
import {Plan} from "@/types/plan";
import {useQuery} from "react-query";
import {User} from "@/types/auth";
import authService from "@/services/auth.service";
import {StatusBar} from "expo-status-bar";
import androidSafeArea from "@/utils/androidSafeArea";

interface IProps {
  loading: boolean,
  data?: Plan,
}

function PlanHeader({loading, data}: IProps) {
  const navigation = useNavigation();
  const {data: user} = useQuery<User>("session", authService.getSession);

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <ImageBackground source={require("@/assets/images/gift.jpg")} blurRadius={30}>
      <StatusBar style="light"/>
      <SafeAreaView style={androidSafeArea}>
        <View style={[styles.headerContainer]}>
          <TouchableOpacity onPress={handleBack} activeOpacity={0.8} style={styles.back}>
            <Ionicons
              name={"arrow-back"}
              size={24}
              color={palette.white}
            />
          </TouchableOpacity>

          <View style={{flex: 1}}>
            {loading ?
              <ActivityIndicator color={palette.white} style={{alignItems: "center"}}/> :
              <Text title style={styles.text}>
                {data?.plan_name}
              </Text>
            }
            <Text style={{
              textAlign: "center",
              color: palette.white
            }}>
              for {user?.first_name} {user?.last_name}
            </Text>
          </View>

          <TouchableOpacity onPress={handleBack} activeOpacity={0.8} style={styles.back}>
            <Feather name="more-vertical" size={24} color={palette.white}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    padding: 20,
    gap: 20,
    alignItems: "center"
  },
  text: {
    fontSize: fontSize.xl,
    fontWeight: "700",
    textAlign: "center",
    color: palette.white,
  },
  back: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: palette.black + "77",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default PlanHeader;

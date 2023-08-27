import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import Button from "@/components/Button";
import palette from "@/assets/palette";
import Check from "@/assets/images/check";
import {SignupParamList} from "@/types/navigation";
import {useMutation, useQueryClient} from "react-query";
import authService from "@/services/auth.service";
import {RouteProp} from "@react-navigation/native";

interface IProps {
  route: RouteProp<SignupParamList, "SignupDone">
}

function SignupDoneScreen({route}: IProps) {
  const queryClient = useQueryClient();
  const {mutate, isLoading} = useMutation(authService.login, {
    onSuccess(data) {
      queryClient.setQueryData("session", data);
    }
  });

  const handleClick = () => {
    mutate(route.params)
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: palette.white}}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Check/>
          <Text title style={styles.title}>You just created your Rise account</Text>
          <Text style={styles.text}>
            Welcome to Rise, let’s take you home
          </Text>
        </View>
        <Button text="Okay" loading={isLoading} onPress={handleClick}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 240,
    alignSelf: "center"
  },
  title: {
    fontSize: fontSize.large,
    textAlign: "center",
    marginTop: 36,
  },
  text: {
    color: palette.offBlack,
    marginTop: 5,
    textAlign: "center",
  }
});

export default SignupDoneScreen;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from "@/components/Text";
import Button from "@/components/Button";
import authService from "@/services/auth.service";

interface IProps {
}

function ProfileScreen(props: IProps) {
  return (
    <View style={styles.container}>
      <Text title style={styles.text}>ProfileScreen</Text>
      <Button text="Logout" onPress={authService.logout}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
  }
});

export default ProfileScreen;

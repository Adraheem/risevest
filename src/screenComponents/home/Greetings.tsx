import React, {useMemo} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import palette from "@/assets/palette";
import {Ionicons} from "@expo/vector-icons";
import {useQuery} from "react-query";
import authService from "@/services/auth.service";
import utils from "@/utils";

interface IProps {
}

function Greetings(props: IProps) {
  const {data} = useQuery("session", authService.getSession);

  const greet = useMemo(() => utils.greet(), []);

  return (
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <View style={{flex: 1}}>
        <Text>{greet}</Text>
        <Text style={{fontSize: fontSize.large}}>{data?.first_name}</Text>
      </View>
      <View style={{
        backgroundColor: palette.brand,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20
      }}>
        <Text style={{color: palette.white, fontSize: fontSize.caption}}>Earn 3%
          bonus</Text>
      </View>
      <View>
        <TouchableOpacity style={{padding: 10, marginLeft: 10}}>
          <Ionicons name="ios-notifications-sharp" size={24} color={palette.brand}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Greetings;

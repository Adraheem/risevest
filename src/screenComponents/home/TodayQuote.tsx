import React from 'react';
import {View, StyleSheet, ActivityIndicator, TouchableOpacity, Share} from 'react-native';
import palette from "@/assets/palette";
import Text from "@/components/Text";
import {Feather} from "@expo/vector-icons";
import {useQuery} from "react-query";
import quoteService from "@/services/quote.service";

interface IProps {
}

function TodayQuote(props: IProps) {
  const {isLoading, data, isError} = useQuery("quote", quoteService.getQuote);

  const share = () => {
    if (!isLoading && data) {
      Share.share({
        message: `${data.quote}\n\nBy ${data.author}`
      })
    }
  }

  if (isError) return null;

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={{color: palette.white}}>TODAY’S QUOTE</Text>
        <View style={styles.line}/>
        <Text style={{color: palette.white}}>
          {
            isLoading ? <ActivityIndicator color={palette.white}/> : data?.quote
          }
        </Text>

        <View style={styles.shareContainer}>
          <Text style={{color: palette.white, fontWeight: "700"}}>
            {
              isLoading ? <ActivityIndicator color={palette.white}/> : data?.author
            }
          </Text>
          <TouchableOpacity activeOpacity={0.8} onPress={share} style={styles.share}>
            <Feather name="share-2" size={24} color={palette.white}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: palette.brand + "22",
    padding: 3,
    borderRadius: 18,
  },
  inner: {
    borderRadius: 15,
    borderColor: "#41BCC4",
    borderWidth: 3,
    padding: 20,
    backgroundColor: palette.brand,
  },
  line: {
    width: 40,
    height: 2,
    backgroundColor: palette.white,
    marginVertical: 20,
  },
  share: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: palette.white + "55",
    alignItems: "center",
    justifyContent: "center",
  },
  shareContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default TodayQuote;

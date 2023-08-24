import React from 'react';
import {View, StyleSheet} from 'react-native';
import palette from "@/assets/palette";
import Text from "@/components/Text";
import {Feather} from "@expo/vector-icons";

interface IProps {
}

function TodayQuote(props: IProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={{color: palette.white}}>TODAY’S QUOTE</Text>
        <View style={styles.line}/>
        <Text style={{color: palette.white}}>
          We have no intention of rotating capital out of strong multi-year investments because
          they’ve recently done well or because ‘growth’ has out performed ‘value’.
        </Text>

        <View style={styles.shareContainer}>
          <Text style={{color: palette.white, fontWeight: "700"}}>Carl Sagan</Text>
          <View style={styles.share}>
            <Feather name="share-2" size={24} color={palette.white}/>
          </View>
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

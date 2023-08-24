import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import palette from "@/assets/palette";
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import {Ionicons} from "@expo/vector-icons";
import DateTimePickerModal, {DateTimePickerProps} from "react-native-modal-datetime-picker";
import utils from "@/utils";

interface IProps extends Omit<DateTimePickerProps, "onCancel" | "onConfirm" | "mode" | "date" | "isVisible"> {
  onChange?: (e: any) => void;
  value?: Date;
  onBlur?: (e?: any) => void;
  placeholder?: string;
  error?: string;
}

function DatePicker({onChange, placeholder, onBlur, error, value, ...props}: IProps) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    onChange && onChange({
      target: {
        value: date
      }
    });
    hideDatePicker();
  };

  return (
    <>
      <TouchableOpacity
        onBlur={onBlur}
        activeOpacity={0.8}
        onPress={showDatePicker}
        style={styles.container}
      >
        <Text style={{flex: 1}}>
          {value ? utils.formatDate(value) : "Choose date"}
        </Text>
        <Ionicons name="calendar-outline" size={24} color={palette.brand}/>
        <View style={styles.placeholder}>
          <Text style={{fontSize: fontSize.small, color: palette.brand}}>
            {placeholder}
          </Text>
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={value}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    borderColor: palette.offWhite,
    height: 55,
    position: "relative",
    paddingHorizontal: 15,
  },
  placeholder: {
    position: "absolute",
    alignSelf: "center",
    left: 6,
    paddingHorizontal: 8,
    backgroundColor: palette.white,
    zIndex: 2,
    transform: [{translateY: -28}]
  },
  error: {
    color: palette.red,
    fontSize: fontSize.small,
    marginTop: 2,
  },
});

export default DatePicker;

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import * as yup from "yup";
import Screen from "@/components/Screen";
import Text from "@/components/Text";
import palette from "@/assets/palette";
import {Formik} from "formik";
import Input from "@/components/Input";
import Button from "@/components/Button";
import fontSize from "@/assets/fontSize";
import DatePicker from "@/components/DatePicker";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/types/navigation";

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, "Onboard">
}

interface InputFields {
  firstName: string,
  lastName: string,
  nickname: string,
  phoneNumber: string,
  dob?: Date,
}

function SignupMoreScreen({navigation}: IProps) {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Required *"),
    lastName: yup.string().required("Required *"),
    nickname: yup.string().required("Required *"),
    phoneNumber: yup.string().required("Required *"),
    dob: yup.date().max(new Date(), "Invalid date").required("Required *"),
  });

  const initialValue: InputFields = {
    firstName: "",
    lastName: "",
    nickname: "",
    phoneNumber: "",
    dob: undefined,
  }

  const onSubmit = () => {
    navigation.push("SignupDone")
  }

  return (
    <Screen>
      <View style={styles.container}>
        <SafeAreaView>
          <Text title style={styles.title}>
            Tell Us More About You
          </Text>
          <Text style={{color: palette.offBlack}}>
            Please use your name as it appears on your ID.
          </Text>

          <Formik
            initialValues={initialValue}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {({
                handleChange,
                handleBlur,
                values,
                isValid,
                errors,
                touched,
                handleSubmit,
                isSubmitting
              }) => (
              <View style={{gap: 20, marginTop: 40}}>
                <Input
                  placeholder="Legal First Name"
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  error={touched.firstName && errors.firstName ? errors.firstName : ""}
                />

                <Input
                  placeholder="Legal Last Name"
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                  error={touched.lastName && errors.lastName ? errors.lastName : ""}
                />

                <Input
                  placeholder="Nick name"
                  onChangeText={handleChange("nickname")}
                  onBlur={handleBlur("nickname")}
                  value={values.nickname}
                  error={touched.nickname && errors.nickname ? errors.nickname : ""}
                />

                <Input
                  placeholder="Phone Number"
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  value={values.phoneNumber}
                  error={touched.phoneNumber && errors.phoneNumber ? errors.phoneNumber : ""}
                  inputMode="tel"
                />

                <DatePicker
                  placeholder="Date of Birth"
                  onChange={handleChange("dob")}
                  onBlur={handleBlur("dob")}
                  value={values.dob}
                  error={touched.dob && errors.dob ? errors.dob : ""}
                  maximumDate={new Date()}
                />

                <Button text="Continue" onPress={() => handleSubmit()} disabled={!isValid}
                        loading={isSubmitting}/>

                <Text style={{textAlign: "center", width: "80%", alignSelf: "center"}}>
                  By clicking Continue, you agree to our{" "}
                  <Text style={{color: palette.brand}}>Terms of Service</Text> and <Text
                  style={{color: palette.brand}}>Privacy Policy.</Text>
                </Text>
              </View>
            )}
          </Formik>
        </SafeAreaView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    paddingHorizontal: 16
  },
  title: {
    fontWeight: "500",
    fontSize: fontSize.large,
    marginBottom: 11,
    marginTop: 75,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  }
});

export default SignupMoreScreen;

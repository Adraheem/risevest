import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import * as yup from "yup";
import Screen from "@/components/Screen";
import Text from "@/components/Text";
import palette from "@/assets/palette";
import {Formik, FormikHelpers} from "formik";
import Input from "@/components/Input";
import Button from "@/components/Button";
import fontSize from "@/assets/fontSize";
import DatePicker from "@/components/DatePicker";
import {StackNavigationProp} from "@react-navigation/stack";
import {SignupParamList} from "@/types/navigation";
import {MoreSignupInfo} from "@/types/auth";
import {useSignupContext} from "@/context/SignupContext";
import authService from "@/services/auth.service";
import utils from "@/utils";

interface IProps {
  navigation: StackNavigationProp<SignupParamList, "SignupMore">
}

function SignupMoreScreen({navigation}: IProps) {
  const {data} = useSignupContext();
  const validationSchema = yup.object().shape({
    first_name: yup.string().required("Required *"),
    last_name: yup.string().required("Required *"),
    date_of_birth: yup.date().max(new Date(), "Invalid date").required("Required *"),
  });

  const initialValue: MoreSignupInfo = {
    first_name: "",
    last_name: "",
    date_of_birth: undefined,
  }

  const onSubmit = (values: MoreSignupInfo, helpers: FormikHelpers<MoreSignupInfo>) => {
    if (data) {
      authService.signup({...data, ...values})
        .then(() => {
          console.log("Signup completed")
          helpers.setSubmitting(false);
          navigation.replace("SignupDone", {
            email_address: data.email_address,
            password: data.password
          });
        })
        .catch(err => utils.handleRequestError(err, helpers))
    }
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: palette.white}}>
      <Screen>
        <View style={styles.container}>
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
                  onChangeText={handleChange("first_name")}
                  onBlur={handleBlur("first_name")}
                  value={values.first_name}
                  error={touched.first_name && errors.first_name ? errors.first_name : ""}
                />

                <Input
                  placeholder="Legal Last Name"
                  onChangeText={handleChange("last_name")}
                  onBlur={handleBlur("last_name")}
                  value={values.last_name}
                  error={touched.last_name && errors.last_name ? errors.last_name : ""}
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
                  onChangeText={handleChange("phone_number")}
                  onBlur={handleBlur("phone_number")}
                  value={values.phone_number}
                  error={touched.phone_number && errors.phone_number ? errors.phone_number : ""}
                  inputMode="tel"
                />

                <DatePicker
                  placeholder="Date of Birth"
                  onChange={handleChange("date_of_birth")}
                  onBlur={handleBlur("date_of_birth")}
                  value={values.date_of_birth}
                  error={touched.date_of_birth && errors.date_of_birth ? errors.date_of_birth : ""}
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
        </View>
      </Screen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    paddingHorizontal: 16,
    paddingBottom: 40
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

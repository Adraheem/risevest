import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import * as yup from "yup";
import {Formik, FormikHelpers} from "formik";
import Screen from "@/components/Screen";
import Text from "@/components/Text";
import palette from "@/assets/palette";
import Input from "@/components/Input";
import Button from "@/components/Button";
import fontSize from "@/assets/fontSize";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/types/navigation";
import authService from "@/services/auth.service";
import {EmailAndPassword} from "@/types/auth";
import utils from "@/utils";

interface IProps {
  navigation: StackNavigationProp<RootStackParamList>
}

function SigninScreen({navigation}: IProps) {
  const validationSchema = yup.object().shape({
    email_address: yup.string().email("Invalid email format").required("Required *"),
    password: yup.string().required("Required *"),
  });

  const initialValue: EmailAndPassword = {
    email_address: "",
    password: "",
  }

  const onSubmit = (values: EmailAndPassword, helpers: FormikHelpers<EmailAndPassword>) => {
    authService.login(values)
      .then()
      .catch(err => utils.handleRequestError(err, helpers));
  }

  const signup = () => {
    navigation.push("Signup")
  }

  return (
    <Screen>
      <View style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          <Text title style={styles.title}>
            Welcome back
          </Text>
          <Text style={{color: palette.offBlack}}>
            Let’s get you logged in to get back to building your dollar-denominated investment
            portfolio.
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
              <View style={{gap: 20, marginTop: 40, flex: 1}}>
                <Input
                  placeholder="Email address"
                  inputMode="email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={handleChange("email_address")}
                  onBlur={handleBlur("email_address")}
                  value={values.email_address}
                  error={touched.email_address && errors.email_address ? errors.email_address : ""}
                />
                <Input
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  error={touched.password && errors.password ? errors.password : ""}
                  secureTextEntry
                />

                <Button
                  text="Sign In"
                  onPress={() => handleSubmit()}
                  disabled={!isValid}
                  loading={isSubmitting}
                />
                <Button
                  text="I forgot my password"
                  variant="PRIMARY-ALT"
                  style={{backgroundColor: "transparent"}}
                />
              </View>
            )}
          </Formik>

          <TouchableOpacity onPress={signup} activeOpacity={0.8} style={{marginVertical: 20}}>
            <Text style={styles.signup}>
              Don't have an account? <Text style={[styles.signup, {color: palette.brand}]}>Sign
              up</Text>
            </Text>
          </TouchableOpacity>
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
  signup: {
    fontWeight: "bold",
    textAlign: "center",
    color: palette.offBlack
  }
});

export default SigninScreen;

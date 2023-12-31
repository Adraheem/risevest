import React, {useMemo} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import palette from "@/assets/palette";
import Text from "@/components/Text";
import fontSize from "@/assets/fontSize";
import Input from "@/components/Input";
import Button from "@/components/Button";
import {Formik, FormikHelpers} from "formik";
import * as yup from "yup";
import {MaterialIcons} from "@expo/vector-icons";
import Screen from "@/components/Screen";
import {StackNavigationProp} from "@react-navigation/stack";
import {SignupParamList} from "@/types/navigation";
import {useSignupContext} from "@/context/SignupContext";
import {EmailAndPassword} from "@/types/auth";
import androidSafeArea from "@/utils/androidSafeArea";

interface IProps {
  navigation: StackNavigationProp<SignupParamList>
}

function SignupScreen({navigation}: IProps) {
  const {save} = useSignupContext();

  const validationSchema = yup.object().shape({
    email_address: yup.string().email("Invalid email format").required("Required *"),
    password: yup.string().test("strongPw", "", (value) => {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/.test(value ?? "");
    })
      .required("Required *"),
  });

  const initialValue: EmailAndPassword = {
    email_address: "",
    password: "",
  }

  const onSubmit = (values: EmailAndPassword, helpers: FormikHelpers<EmailAndPassword>) => {
    save(values);
    navigation.push("SignupMore")
    helpers.setSubmitting(false);
  }

  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: palette.white}, androidSafeArea]}>
      <Screen>
        <View style={styles.container}>
          <Text title style={styles.title}>
            Create Account
          </Text>
          <Text style={{color: palette.offBlack}}>
            Start building your dollar-denominated investment portfolio
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
                  placeholder="Email address"
                  keyboardType="email-address"
                  inputMode="email"
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

                <PasswordValidation password={values.password}/>

                <Button
                  text="Sign Up"
                  onPress={() => handleSubmit()}
                  disabled={!isValid}
                  loading={isSubmitting}
                />
              </View>
            )}
          </Formik>
        </View>
      </Screen>
    </SafeAreaView>
  );
}

function PasswordValidation({password: pw}: { password: string }) {

  const {min, uppercase, special} = useMemo(() => {
    const min = pw.length >= 8;
    const uppercase = /[A-Z]+/.test(pw);
    const special = /[@$!%*?&]+/.test(pw);

    return {min, uppercase, special};
  }, [pw]);

  return (
    <View style={{gap: 12}}>
      <View style={styles.row}>
        <MaterialIcons
          name={min ? "check-circle" : "radio-button-unchecked"}
          size={24}
          color={palette.brand}
        />
        <Text>Minimum of 8 characters</Text>
      </View>
      <View style={styles.row}>
        <MaterialIcons
          name={uppercase ? "check-circle" : "radio-button-unchecked"}
          size={24}
          color={palette.brand}
        />
        <Text>One UPPERCASE character</Text>
      </View>
      <View style={styles.row}>
        <MaterialIcons
          name={special ? "check-circle" : "radio-button-unchecked"}
          size={24}
          color={palette.brand}
        />
        <Text>One unique character (e.g: @$!%*?&)</Text>
      </View>
    </View>
  )
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

export default SignupScreen;

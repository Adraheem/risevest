import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from "@/components/Header";
import Button from "@/components/Button";
import CreatePlanProgress from "@/screenComponents/createPlan/createPlanProgress";
import Input from "@/components/Input";
import palette from "@/assets/palette";
import Screen from "@/components/Screen";
import {StackNavigationProp} from "@react-navigation/stack";
import {NewPlanParamList} from "@/types/navigation";
import {useNewPlanContext} from "@/context/NewPlanContext";
import * as yup from "yup";
import {CreatePlan} from "@/types/plan";
import {Formik} from "formik";

interface IProps {
  navigation: StackNavigationProp<NewPlanParamList>
}

function PlanAmount({navigation}: IProps) {
  const {save} = useNewPlanContext();

  const validationSchema = yup.object().shape({
    target_amount: yup.number().min(1, "Enter valid amount").required("Required *")
  })

  const initialValues: CreatePlan = {}

  const onSubmit = (values: CreatePlan) => {
    save(values);
    navigation.push("PlanDate");
  }

  return (
    <View style={styles.container}>
      <Header title="Target amount"/>
      <SafeAreaView style={{flex: 1}}>
        <Screen>
          <View style={{padding: 20}}>
            <CreatePlanProgress step={2} total={3}/>

            <Formik
              initialValues={initialValues}
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
                }) => (
                <>
                  <View style={{marginVertical: 26}}>
                    <Input
                      placeholder="How much do need?"
                      inputMode="decimal"
                      onChangeText={handleChange("target_amount")}
                      onBlur={handleBlur("target_amount")}
                      value={values.target_amount?.toString()}
                      error={touched.target_amount && errors.target_amount ? errors.target_amount : ""}
                    />
                  </View>

                  <Button text="Continue" disabled={!isValid} onPress={() => handleSubmit()}/>
                </>
              )}
            </Formik>
          </View>
        </Screen>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  }
});

export default PlanAmount;

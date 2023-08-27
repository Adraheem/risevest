import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from "@/components/Header";
import Button from "@/components/Button";
import CreatePlanProgress from "@/screenComponents/createPlan/createPlanProgress";
import palette from "@/assets/palette";
import Screen from "@/components/Screen";
import DatePicker from "@/components/DatePicker";
import {StackNavigationProp} from "@react-navigation/stack";
import {NewPlanParamList} from "@/types/navigation";
import {useNewPlanContext} from "@/context/NewPlanContext";
import * as yup from "yup";
import {CreatePlan} from "@/types/plan";
import {addMonths, addYears} from "date-fns";
import {Formik} from "formik";

interface IProps {
  navigation: StackNavigationProp<NewPlanParamList>
}

function PlanDate({navigation}: IProps) {
  const {save} = useNewPlanContext();

  const validationSchema = yup.object().shape({
    maturity_date: yup.date()
      .min(addYears(addMonths(new Date(), 1), 1), "Maturity date is at least 30 days")
      .required("Required *")
  })

  const initialValues: CreatePlan = {}

  const onSubmit = (values: CreatePlan) => {
    save(values);
    navigation.push("PlanReview");
  }

  return (
    <View style={styles.container}>
      <Header title="Target date"/>
      <SafeAreaView style={{flex: 1}}>
        <Screen>
          <View style={{padding: 20}}>
            <CreatePlanProgress step={3} total={3}/>

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
                    <DatePicker
                      placeholder="When do you want to withdraw?"
                      minimumDate={addYears(addMonths(new Date(), 1), 1)}
                      onChange={handleChange("maturity_date")}
                      onBlur={handleBlur("maturity_date")}
                      value={values.maturity_date}
                      error={touched.maturity_date && errors.maturity_date ? errors.maturity_date : ""}
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

export default PlanDate;

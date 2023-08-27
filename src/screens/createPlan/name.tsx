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
import {CreatePlan} from "@/types/plan";
import {Formik} from "formik";
import * as yup from "yup";
import {useNewPlanContext} from "@/context/NewPlanContext";

interface IProps {
  navigation: StackNavigationProp<NewPlanParamList>
}

function PlanName({navigation}: IProps) {
  const {save} = useNewPlanContext();

  const validationSchema = yup.object().shape({
    plan_name: yup.string().required("Required *")
  })

  const initialValues: CreatePlan = {
    plan_name: "",
  }

  const onSubmit = (values: CreatePlan) => {
    save(values);
    navigation.push("PlanAmount");
  }

  return (
    <View style={styles.container}>
      <Header title="Goal name"/>
      <SafeAreaView style={{flex: 1}}>
        <Screen>
          <View style={{padding: 20}}>
            <CreatePlanProgress step={1} total={3}/>

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
                      placeholder="What are you saving for"
                      onChangeText={handleChange("plan_name")}
                      onBlur={handleBlur("plan_name")}
                      value={values.plan_name}
                      error={touched.plan_name && errors.plan_name ? errors.plan_name : ""}
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

export default PlanName;

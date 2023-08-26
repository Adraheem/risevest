import {format} from "date-fns";
import {FormikHelpers} from "formik";
import {Alert} from "react-native";

class Utils {
  public formatDate(date: Date, pattern?: string): string {
    return format(date, pattern ?? "MMMM dd, yyyy");
  }

  public handleRequestError(err: any, helpers?: FormikHelpers<any>) {
    helpers && helpers.setSubmitting(false);
    if (err?.response?.data?.data && helpers) {
      helpers.setErrors(err.response.data.data);
    } else if (err?.response?.data?.message) {
      Alert.alert("Error", err.response.data.message);
    } else {
      Alert.alert("Error", "An error occurred");
    }
  }
}

const utils = new Utils();
export default utils;

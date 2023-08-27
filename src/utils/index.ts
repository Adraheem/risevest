import {format, getHours} from "date-fns";
import {FormikHelpers} from "formik";
import {Alert} from "react-native";
import isEmpty from "is-empty";

class Utils {
  public formatDate(date: Date, pattern?: string): string {
    return format(date, pattern ?? "MMMM dd, yyyy");
  }

  public handleRequestError(err: any, helpers?: FormikHelpers<any>) {
    console.log(err);
    helpers && helpers.setSubmitting(false);
    if (err?.response?.data?.data && helpers) {
      console.log("err: ", err.response.data)
      helpers.setErrors(err.response.data.data);
    } else if (err?.response?.data?.message) {
      Alert.alert("Error", err.response.data.message);
    } else {
      Alert.alert("Error", "An error occurred");
    }
  }

  public numberWithCommas(val: string | number | undefined) {
    const x = (isEmpty(val) || !val) ? "0" : val.toString().replace(/,/g, "");
    const xArray = x.split(".");
    const f = xArray[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (xArray.length > 1) {
      return f + "." + xArray[1];
    } else {
      return f;
    }
  }

  public greet() {
    const hrs = getHours(Date.now());

    if (0 <= hrs && hrs < 12) {
      return "Good morning 🌅";
    } else if (12 <= hrs && hrs < 16) {
      return "Good afternoon ☀️";
    } else {
      return "Good evening 🌘";
    }
  }
}

const utils = new Utils();
export default utils;

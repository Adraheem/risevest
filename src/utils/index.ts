import {format} from "date-fns";

class Utils {
  public formatDate(date: Date): string {
    return format(date, "MMMM dd, yyyy");
  }
}

const utils = new Utils();
export default utils;

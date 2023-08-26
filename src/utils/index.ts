import {format} from "date-fns";

class Utils {
  public formatDate(date: Date, pattern?: string): string {
    return format(date, pattern ?? "MMMM dd, yyyy");
  }
}

const utils = new Utils();
export default utils;

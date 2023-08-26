import {Quote} from "@/types/quote";
import apiInstance from "@/services/api";
import {AxiosResponse} from "axios";

class QuoteService {
  public getQuote(): Promise<Quote> {
    return new Promise<Quote>((resolve, reject) => {
      apiInstance.get("/quotes")
        .then((res: AxiosResponse<Quote>) => {
          resolve(res.data)
        })
        .catch(err => reject(err));
    })
  }

}

const quoteService = new QuoteService();
export default quoteService;

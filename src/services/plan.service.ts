import {CreatePlan, Plan, PlanProjection, Rate} from "@/types/plan";
import apiInstance from "@/services/api";
import {AxiosResponse} from "axios";
import {PageDto} from "@/types/common";

class PlanService {
  public createPlan(data: CreatePlan): Promise<Plan> {
    return new Promise<Plan>((resolve, reject) => {
      apiInstance.post("/plans", data)
        .then((res: AxiosResponse<Plan>) => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err)
        });
    })
  }

  public getPlan(id: string): Promise<Plan> {
    return new Promise<Plan>((resolve, reject) => {
      apiInstance.get(`/plans/${id}`)
        .then((res: AxiosResponse<Plan>) => {
          resolve(res.data);
        })
        .catch(err => reject(err));
    })
  }

  public getPlans(): Promise<PageDto<Plan>> {
    return new Promise((resolve, reject) => {
      apiInstance.get(`/plans`)
        .then((res: AxiosResponse<PageDto<Plan>>) => {
          resolve(res.data);
        })
        .catch(err => reject(err));
    })
  }

  public getPlanProjection(data: {
    targetAmount?: number,
    maturityDate?: Date
  }): Promise<PlanProjection> {
    return new Promise((resolve, reject) => {
      apiInstance.get(`/plans/projection`, {
        params: {
          target_amount: data.targetAmount,
          maturity_date: data.maturityDate
        }
      })
        .then((res: AxiosResponse<PlanProjection>) => {
          resolve(res.data);
        })
        .catch(err => {
          console.log(err)
          reject(err)
        });
    })
  }

  public getRate(): Promise<Rate> {
    return new Promise((resolve, reject) => {
      apiInstance.get("/rates")
        .then((res: AxiosResponse<Rate>) => {
          resolve(res.data)
        })
        .catch(err => reject(err));
    })
  }

}

const planService = new PlanService();
export default planService;

export type Plan = {
  "id": string,
  "created_at": Date,
  "plan_name": string,
  "invested_amount": number,
  "total_returns": number,
  "target_amount": number,
  "maturity_date": Date,
  "user_id": string,
  "returns": PlanReturn[]
}

export type PlanReturn = {
  "id": string,
  "created_at": Date,
  "amount": number,
  "plan_id": string,
}

export type PlanProjection = {
  "total_invested": number,
  "total_returns"?: number
}

export type Rate = {
  "buy_rate": number,
  "sell_rate": number,
}

export type CreatePlan = {
  "plan_name"?: string,
  "target_amount"?: number,
  "maturity_date"?: Date
}

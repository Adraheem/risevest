import {EmailAndPassword} from "@/types/auth";

export type RootStackParamList = {
  Onboard: undefined,
  Tab: undefined,
  NewPlan: undefined,
  Login: undefined,
  Signup: undefined,
  Plan: { id: string },
};

export type TabParamList = {
  Home: undefined,
  Plans: undefined,
  Wallet: undefined,
  Feed: undefined,
  Account: undefined,
}

export type NewPlanParamList = {
  Main: undefined,
  PlanName: undefined,
  PlanAmount: undefined,
  PlanDate: undefined,
  PlanReview: undefined,
  PlanDone: { id: string },
}

export type SignupParamList = {
  Main: undefined,
  SignupMore: undefined,
  SignupDone: EmailAndPassword,
}

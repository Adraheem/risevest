import React, {useState} from 'react';
import {CreatePlan} from "@/types/plan";

const NewPlanContext = React.createContext<{
  data: CreatePlan,
  setData(e: CreatePlan): void
} | null>(null);

interface IProps {
  children: React.ReactNode,
}

function NewPlanContextProvider({children}: IProps) {
  const [data, setData] = useState<CreatePlan>({});

  return (
    <NewPlanContext.Provider value={{data, setData}}>
      {children}
    </NewPlanContext.Provider>
  );
}

export const useNewPlanContext = () => {
  const context = React.useContext(NewPlanContext);

  const save = (e: any) => {
    context?.setData({...context?.data, ...e});
  }

  return {
    save, data: context?.data
  }
}

export default NewPlanContextProvider;

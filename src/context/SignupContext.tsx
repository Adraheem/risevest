import React, {useState} from 'react';
import {EmailAndPassword, MoreSignupInfo, SignupType} from "@/types/auth";

const SignupContext = React.createContext<{
  data: SignupType,
  setData(e: SignupType): void
} | null>(null);

interface IProps {
  children: React.ReactNode;
}

function SignupContextProvider({children}: IProps) {
  const [data, setData] = useState<SignupType>({
    "first_name": "",
    "last_name": "",
    "email_address": "",
    "password": "",
  });

  return (
    <SignupContext.Provider value={{data, setData}}>
      {children}
    </SignupContext.Provider>
  );
}

export const useSignupContext = () => {
  const context = React.useContext(SignupContext);

  const save = (e: EmailAndPassword | MoreSignupInfo) => {
    context?.setData({...context?.data, ...e});
  }

  return {
    save, data: context?.data
  }
}

export default SignupContextProvider;
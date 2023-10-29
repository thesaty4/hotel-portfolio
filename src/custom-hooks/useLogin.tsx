import { useState } from "react";
import { UserType } from "../components/auth/types/users.type";

export type UserDataResponse = UserType & { "x-token": string };
export default function useLogin() {
  const getInfo = () => {
    const userInfo = localStorage.getItem("userInfo");
    return userInfo ? JSON.parse(userInfo) : null;
  };

  const signOut = () => {
    if (getInfo()) {
      localStorage.removeItem("userInfo");
    }
    return true;
  };

  const [info, setInfo] = useState<UserDataResponse>(getInfo());

  const saveInfo = (userInfo: UserDataResponse) => {
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        ...userInfo,
        "x-token": `Bearer ${userInfo["x-token"]}`,
      })
    );
    setInfo(userInfo);
  };

  return {
    saveLogin: saveInfo,
    info,
    signOut,
  };
}

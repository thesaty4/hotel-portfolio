import { useState } from "react";

interface UserToken {
  token: string;
}

export default function useToken() {
  const getToken = (): string | null => {
    const tokenString = localStorage.getItem("token");
    const userToken: UserToken | null = tokenString
      ? JSON.parse(tokenString)
      : null;
    return userToken?.token || null;
  };

  const [token, setToken] = useState<string | null>(getToken());

  const saveToken = (userToken: UserToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}

import { User } from "@/types";
import React from "react";

type AuthContextType = {
  user?: User;
  updateAuthUser: (data: User) => void;
};

export const AuthContext = React.createContext<AuthContextType>({
  updateAuthUser: () => {},
});

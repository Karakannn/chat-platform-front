import { AuthContext } from "@/context/auth";
import React, { useContext } from "react";

export default function ConversationChannelContainer() {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  
  return <div>{user && <div>{user?.email}</div>}</div>;
}

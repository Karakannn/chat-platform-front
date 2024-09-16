import { getAuthUser } from "@/api/api";
import { AuthContext } from "@/context/auth";
import { useContext, useEffect, useState } from "react";

export default function useAuth() {
  const [loading, setLoading] = useState(true);
  const { user, updateAuthUser } = useContext(AuthContext);
  const controller = new AbortController();

  useEffect(() => {
    getAuthUser()
      .then((res) => {
        updateAuthUser(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { user, loading };
}

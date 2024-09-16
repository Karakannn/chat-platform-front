import { getAuthUser } from "@/api/api";
import { User } from "@/types";
import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

export default function AuthenticationRoute({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | undefined>();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();

  useEffect(() => {
    getAuthUser()
      .then((res) => {
        setUser(res.data);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

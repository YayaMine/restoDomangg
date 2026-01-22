"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // DUMMY USER (FULL FRONTEND)
    const dummyUser = {
      name: "Admin Domang",
      role: "admin",
      email: "admin@domangsushi.com",
    };

    if (middleware === "auth") {
      setUser(dummyUser);
    }

    if (middleware === "guest" && redirectIfAuthenticated) {
      router.push(redirectIfAuthenticated);
    }
  }, [middleware, redirectIfAuthenticated, router]);

  const logout = async () => {
    router.push("/");
  };

  return {
    user,
    logout,
  };
};

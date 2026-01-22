"use client";

import { useEffect, useState } from "react";
import { menuDummy } from "@/lib/data/menuDummy";

export function useMenu() {
  const [menus, setMenus] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setMenus(menuDummy);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  }, []);

  return { menus, error };
}

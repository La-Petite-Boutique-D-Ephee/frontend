/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect } from "react";
import { useStore } from "../providers/store.js";

export default function isConnected() {
  const user = useStore((state) => state.user);
  const fetchUser = useStore((state) => state.fetchUser);
  useEffect(() => {
    if (!user) {
      return;
    }
    fetchUser();
  }, [fetchUser, user]);
  return Boolean(user);
}

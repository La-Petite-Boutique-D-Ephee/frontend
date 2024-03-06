"use client";

import { useRouter } from "next/navigation.js";
import { useEffect } from "react";
import { Button } from "../../../components/ui/button.jsx";
import { deleteToken } from "../../action.js";
import { useStore } from "../../providers/store.js";

export default function Me() {
  const user = useStore((state) => state.user);
  const fetchUser = useStore((state) => state.fetchUser);
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleClick = async () => {
    await deleteToken();
    router.replace("/");
  };

  return (
    <div>
      {user ? (
        <h1>
          Bienvenue, {user.firstname} {user.lastname} !
          <Button variant="destructive" onClick={handleClick}>
            Se déconnecter
          </Button>
        </h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

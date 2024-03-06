"use client";

import { useRouter } from "next/navigation.js";
import { useEffect, useState } from "react";
import { deleteToken, getToken } from "../../action.js";

export default function Me() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Remplacez l'URL de l'API par l'URL réelle de votre API
        const token = await getToken();

        const response = await fetch("https://127.0.0.1:8000/api/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.data.user);
        } else {
          const error = await response.json();
          if (error.codeError === "SessionError") {
            router.replace("/connexion");
            await deleteToken();
          }
        }
      } catch (error) {
        console.error("Erreur réseau :", error.message);
      }
    };
    fetchData();
  }, [router]);
  return (
    <>
      {user ? (
        <div>
          <h1>
            Bienvenue, {user.firstname} {user.lastname} !
          </h1>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </>
  );
}

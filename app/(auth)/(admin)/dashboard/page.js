/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useRouter } from "next/navigation.js";

export default function Dashboard() {
  const router = useRouter();
  // const user = useStore((state) => state.user);
  // const fetchUser = useStore((state) => state.fetchUser);

  // useEffect(() => {
  //   fetchUser()
  //     .then((userData) => {
  //       console.log(userData);
  //       if (userData.roles[1] !== "ROLE_ADMIN") {
  //         router.replace("/");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [fetchUser]);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

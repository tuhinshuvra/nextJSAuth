import auth from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";

const HomePage = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);

  console.log("Firebase user", user);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "15%" }}>Welcome To Next Auth Home Page</h1>
      {/* {session?.user && <> */}
      {user?.email && <>
        {user?.name && <>
          <h2 style={{ textAlign: "center", }}>Logged in User Name:
            {/* {session?.user?.name} */}
            {user?.name}
          </h2>

        </>}
        <h2 style={{ textAlign: "center", }}>Logged in User Email:
          {/* {session?.user?.email} */}
          {user?.email}
        </h2>
      </>}
    </div>
  );
};

export default HomePage;

import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {

  const { data: session } = useSession();
  console.log("From navbar : ", session);

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          NEXT AUTH
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/profile"
        >
          <items>Profile</items>
        </Link>
        {session?.user ? <>
          <items>
            {/* <h3>{user?.user?.name}</h3> */}
            <h4>{session?.user?.name}</h4>
            <Button type="primary" danger onClick={() => signOut()}>
              Logout
            </Button>
          </items>
        </>
          :
          <>
            <Link style={{ textDecoration: "none", color: "white" }} href="/login">
              <items>Login</items>
            </Link>

          </>
        }
      </Menu>
    </Header>
  );
};
export default Navbar;

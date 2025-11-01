import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.css";

const LoginPage = () => {
  const { push, query } = useRouter();

  const handlerLogin = () => {
    push("/products");
  };

  return (
    <div className={styles.login}>
      <h1>Login Page</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <p>
        Belum Punya Akun? registrasi <Link href={"/auth/register"}>disini</Link>{" "}
      </p>
    </div>
  );
};

export default LoginPage;

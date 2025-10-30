import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="">
      <h1>Register Page</h1>
      <p>
        Sudah punya akun? <Link href={"/auth/login"}>login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;

import { Link } from "react-router-dom";
import img from "../../../assets/img2.webp";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const handleLoginButton = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    handleLogin(email, password)
      .then((result) => {
        const User = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        console.log(User);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content flex-col lg:flex-col w-full">
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLoginButton} className="card-body">
            <div className="text-center lg:text-left text-black">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input bg-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input bg-black"
                required
              />
            </div>
            <div>
              <p>
                New Here{" "}
                <Link className="underline text-gray-600" to="/register">
                  Please Register
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

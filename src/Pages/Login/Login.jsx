import { useContext } from "react";
import google from "./../../assets/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data.email, data.password);
    signIn(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true });
    });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = {
          name: result.user.displayName,
          email: result.user.email,
        };
        console.log(loggedUser);
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        });
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <div>
        <div
          style={{
            placeItems: "start",
            paddingLeft: "39%",
            paddingTop: "4%",
            paddingBottom: "3%",
          }}
          className="hero min-h-screen bg-base-200"
        >
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl text-center font-bold">Please Login</h1>
            </div>
            <div
              style={{ minWidth: "400px" }}
              className="card flex-shrink-0 shadow-2xl bg-base-100"
            >
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      {...register("email", { required: true })}
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="input input-bordered"
                    />
                    {errors.email && (
                      <span className="text-red-600">Email is required</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="input input-bordered"
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-red-600">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600">
                        Password must be 6 characters
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="text-red-600">
                        Password must be less than 20 characters
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password must have one Uppercase one lower case, one
                        number and one special character.
                      </p>
                    )}
                  </div>
                  <p className="ml-2 mb-2">
                    <small className="mb-2">
                      New to English Center?
                      <Link to="/signup" className="btn btn-link">
                        Sign Up
                      </Link>
                    </small>
                  </p>
                  <button className="btn mb-5 mt-3 btn-primary" type="submit">
                    Login
                  </button>
                </form>
                <div className="text-center mt-3">
                  <p className="text-center mb-2">
                    <small>Or sign up using</small>
                  </p>
                  <button onClick={handleGoogleLogin} className="mx-auto">
                    <img className="mx-auto" src={google} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

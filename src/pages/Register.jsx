import { Link } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";


const Register = () => {
  return (
    <div>
       <div>
      <div>
        <h2 className="text-3xl my-10 text-center">Please Register</h2>

        <form  className="md:w-3/4 lg:w-1/3 mx-auto px-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-amber-500 text-white" type="submit">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account ? Please{" "}
          <Link to="/login"  className="text-blue-600 font-semibold" >
            Login
          </Link>
        </p>
      </div>
     <div className="flex justify-center"> <SocialLogin></SocialLogin></div>
    </div>
    </div>
  );
};

export default Register;
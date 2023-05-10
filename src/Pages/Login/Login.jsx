import { FaFacebook, FaLinkedin } from "react-icons/fa";
import loginImg from "../../assets/images/login/login.svg"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

  const {signIn}=useContext(AuthContext)


  const handleLogin = event=>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error=>{
      console.log(error.message);
    })

  }


  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col  lg:flex-row">
        <div className="text-center w-1/2 mr-4 lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-1/2 border border-black  w-full max-w-sm shadow-md ">
          <div className="card-body">
          <h1 className="text-5xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn text-white bg-[#FF3811]" value="Login" />
              </div>
              <div className="text-center space-y-2">
                <p className="mt-2">Or Sign In With</p>
                <div>
                    <button className="btn border-none hover:bg-transparent bg-transparent text-xl text-[#0A66C2]" > <FaFacebook></FaFacebook> </button>
                    <button className="btn border-none hover:bg-transparent text-xl bg-transparent text-[#0A66C2]" > <FaLinkedin></FaLinkedin> </button>
                    <button className="btn text-xl border-none hover:bg-transparent bg-transparent" ><FcGoogle></FcGoogle></button>
                </div>
                <p>Do not have an account? <span className="text-[#FF3811]"><Link to="/register">Register</Link></span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

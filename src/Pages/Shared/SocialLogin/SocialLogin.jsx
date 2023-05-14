import React, { useContext } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
    const {googleLogin}=useContext(AuthContext)
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
            console.log(result);
        }).catch(error=>{
            console.log(error);
        })
    }
  return (
    <div className="text-center space-y-2">
      <p className="mt-2">Or Sign In With</p>
      <div>
        <button className="btn border-none hover:bg-transparent bg-transparent text-xl text-[#0A66C2]">
          {" "}
          <FaFacebook></FaFacebook>{" "}
        </button>
        <button className="btn border-none hover:bg-transparent text-xl bg-transparent text-[#0A66C2]">
          {" "}
          <FaLinkedin></FaLinkedin>{" "}
        </button>
        <button onClick={handleGoogleLogin} className="btn text-xl border-none hover:bg-transparent bg-transparent">
          <FcGoogle></FcGoogle>
        </button>
      </div>
      
    </div>
  );
};

export default SocialLogin;

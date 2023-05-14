import { useContext } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import { AuthContext } from "../../../Provider/AuthProvider";
import CallToAction from "../callToAction/CallToAction";
import Products from "./Products/Products";


const Home = () => {
    const {user,loader}=useContext(AuthContext);
    if (loader) {
        console.log("loading...");
    }
    
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <CallToAction></CallToAction>
            <Products></Products>
        </div>
    );
};

export default Home;
import { useContext } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import { AuthContext } from "../../../Provider/AuthProvider";


const Home = () => {
    const {user,loader}=useContext(AuthContext);
    if (loader) {
        console.log("loading...");
    }
    console.log(user);
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;
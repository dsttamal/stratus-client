import Banner from "../../Banner/Banner";
import Accessories from "../Accessories/Accessories";
import Adds from "../Adds/Adds";
import Discover from "../Discover/Discover";
import Future from "../Future/Future";
import OculusQuest from "../OculusQuest/OculusQuest";
import WirelessFreedom from "../WirelessFreedom/WirelessFreedom";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Future></Future>
            <Adds></Adds>
            <WirelessFreedom></WirelessFreedom>
            <Discover></Discover>
            <OculusQuest></OculusQuest>
            <Accessories></Accessories>
        </>
    );
};

export default Home;
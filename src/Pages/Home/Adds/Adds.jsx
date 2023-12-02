import { CgPerformance } from "react-icons/cg";
import { PiBatteryCharging, PiEye, PiHeadphonesLight, PiMonitorLight } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";


const Adds = () => {
    return (
        <div className="bg-white">
            <div className="grid grid-cols-1 gap-20 md:grid-cols-3 lg:grid-cols-3 max-w-screen-xl mx-auto my-28 px-5">
                <div>
                    <PiEye className=' text-5xl ' />
                    <h2 className="font-semibold text-xl my-4">Improved optics</h2>
                    <p className="text-gray-500">Maecenas accumsan, elit id hendrerit convallis, lectus lacus fermentum nisi.</p>
                </div>
                <div>
                    <CgPerformance className=' text-5xl ' />
                    <h2 className="font-semibold text-xl my-4">High performance</h2>
                    <p className="text-gray-500">Maecenas accumsan, elit id hendrerit convallis, lectus lacus fermentum nisi.</p>
                </div>
                <div>
                    <PiBatteryCharging className=' text-5xl ' />
                    <h2 className="font-semibold text-xl my-4">Long battery life</h2>
                    <p className="text-gray-500">Maecenas accumsan, elit id hendrerit convallis, lectus lacus fermentum nisi.</p>
                </div>
                <div>
                    <BsPeople className=' text-5xl ' />
                    <h2 className="font-semibold text-xl my-4">Online multiplayer</h2>
                    <p className="text-gray-500">Maecenas accumsan, elit id hendrerit convallis, lectus lacus fermentum nisi.</p>
                </div>
                <div>
                    <PiMonitorLight className=' text-5xl ' />
                    <h2 className="font-semibold text-xl my-4">Computer link option</h2>
                    <p className="text-gray-500">Maecenas accumsan, elit id hendrerit convallis, lectus lacus fermentum nisi.</p>
                </div>
                <div>
                    <PiHeadphonesLight className=' text-5xl ' />
                    <h2 className="font-semibold text-xl my-4">Immersive 3D audio</h2>
                    <p className="text-gray-500">Maecenas accumsan, elit id hendrerit convallis, lectus lacus fermentum nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default Adds;
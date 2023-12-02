import { IoChatbubbleOutline, IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import CopyRight from "./CopyRight";
const Footer = () => {
    return (
        <>
            <div className="bg-[#292E31]">
                <div className="max-w-screen-xl mx-auto px-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  py-20">
                        <div>
                            <h1 className="text-gray-100 text-xl mb-5">About Us</h1>
                            <hr className="pb-5  border-gray-600" />

                            <p className="text-gray-300 mt-5">Stratus is a powerful WordPress theme designed for app, SaaS, & tech startups, including all the important features you need to make your business successful.</p>
                            <h1 className="py-5 text-gray-100 text-xl mt-4">Payments Accepted</h1>
                            <hr className="pb-5  border-gray-600" />
                            <div className=" flex gap-5">
                                <button className="border py-2 px-2 text-gray-300 hover:text-gray-200">Paypal</button>
                                <button className="border py-2 px-2 text-gray-300 hover:text-gray-200">Visa</button>
                                <button className="border py-2 px-2 text-gray-300 hover:text-gray-200">MasterCard</button>
                            </div>
                        </div>
                        <div >
                            <h1 className="text-gray-100 text-xl mb-5">Contact Info</h1>
                            <hr className="pb-5  border-gray-600" />
                            <p className="flex items-center gap-3 text-gray-300 mb-3">
                                <IoMailOutline className="text-xl"></IoMailOutline>
                                <span className="text-gray-300">
                                    contact@themovation.com
                                </span>

                            </p>

                            <p className="flex items-center gap-3 text-gray-300 mb-3">
                                <IoChatbubbleOutline className="text-xl"></IoChatbubbleOutline>
                                <span className="text-gray-300">
                                    1-800-222-4545
                                </span>

                            </p>
                            <p className="flex items-center gap-3 text-gray-300 mb-8">
                                <CiLocationOn className="text-xl"></CiLocationOn>
                                <span className="text-gray-300">
                                    Location
                                </span>

                            </p>

                            <h1 className="text-gray-100 text-xl mb-5">Be Social</h1>
                            <hr className="pb-5  border-gray-600" />
                            <div className="flex items-center gap-3">
                                <div>
                                    <FaFacebookF className="text-gray-600 hover:text-gray-400 text-4xl"></FaFacebookF>
                                </div>
                                <div>
                                    <FaTwitter className="text-gray-600 hover:text-gray-400 text-4xl"></FaTwitter>
                                </div>
                                <div>
                                    <FaInstagram className="text-gray-600 hover:text-gray-400 text-4xl"></FaInstagram>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-gray-100 text-xl mb-5">Recent Posts</h1>
                            <div>
                                <hr className="pb-3  border-gray-600" />
                                <h2 className="text-gray-300 hover:text-gray-200 hover:cursor-pointer">Envisioning The Future of AGI and Beyond</h2>
                                <p className="text-gray-400 text-xs mb-3">May 13, 2023</p>
                                <hr className="pb-5  border-gray-600" />
                            </div>
                            <div>

                                <h2 className="text-gray-300 hover:text-gray-200 hover:cursor-pointer">The Evolution of Work With AI</h2>
                                <p className="text-gray-400 text-xs mb-3">April 2, 2023</p>
                                <hr className="pb-3  border-gray-600" />
                            </div>
                            <div>

                                <h2 className="text-gray-300 hover:text-gray-200 hover:cursor-pointer">Is The AI Revolution Now Upon Us?</h2>
                                <p className="text-gray-400 text-xs mb-3">March 10, 2023</p>
                                <hr className="pb-3  border-gray-600" />
                            </div>
                            <div>

                                <h2 className="text-gray-300 hover:text-gray-200 hover:cursor-pointer">Banking With Digital Currency</h2>
                                <p className="text-gray-400 text-xs mb-3">March 1, 2022</p>
                                <hr className="pb-3  border-gray-600" />
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <CopyRight></CopyRight>
        </>
    );
};

export default Footer;
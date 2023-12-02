import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`fixed z-10 w-full ${scrolling ? 'bg-[#292E31]' : 'bg-opacity-10'}`}>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 ">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex-shrink-0">
                            <h2 className="text-3xl text-white uppercase">Stratus</h2>
                        </div>
                        <div className="hidden  md:block">
                            <div className=" flex gap-5 items-center space-x-4">
                                <Link className="relative text-white py-2 text-md group">
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                                    Home
                                </Link>
                                <Link className="relative text-white py-2 text-md group">
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                                    Pages
                                </Link>
                                <Link className="relative text-white py-2 text-md group">
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                                    Portfolio
                                </Link>
                                <Link className="relative text-white py-2 text-md group">
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                                    Features
                                </Link>
                                <Link className="relative text-white py-2 text-md group">
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                                    Blog
                                </Link>
                                <Link className="relative text-white py-2 text-md group">
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                                    Shop
                                </Link>
                                <Link className="text-3xl text-white  flex items-center ">
                                    <HiOutlineShoppingBag ></HiOutlineShoppingBag>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <div className=" grid gap-2">
                                <Link className="text-white px-3 py-2  text-md ">
                                    Home
                                </Link>
                                <Link className="text-white px-3 py-2  text-md ">
                                    Pages
                                </Link>
                                <Link className="text-white px-3 py-2  text-md ">
                                    Portfolio
                                </Link>
                                <Link className="text-white px-3 py-2  text-md ">
                                    Features
                                </Link>
                                <Link className="text-white px-3 py-2  text-md ">
                                    Blog
                                </Link>
                                <Link className="text-white px-3 py-2  text-md ">
                                    Shop
                                </Link>
                                <Link className="text-white flex justify-center px-3 py-2 md:py-1 border rounded-full text-md ">
                                    Purchase
                                </Link>
                                <Link className="text-3xl text-white  items-center hidden ">
                                    <HiOutlineShoppingBag />
                                </Link>

                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>



    );
};

export default Navbar
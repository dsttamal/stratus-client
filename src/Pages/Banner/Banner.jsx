import img from '../../../public/img/Quest-1-res.png'
import { MdOutlinePlayCircleOutline } from "react-icons/md"
import Modal from './Modal';
import { PiEye, PiHeadphonesLight } from "react-icons/pi";
import { AiOutlineWifi } from "react-icons/ai";
import { CgPerformance } from "react-icons/cg";
const Banner = () => {
    return (
        <div className=" pt-28 pb-28" style={{ background: 'linear-gradient(to right, #3E2352,  #190E21, #000000)' }}>
            <div className="flex flex-col gap-20 md:flex-row items-center justify-center px-2">
                <div className='md:-ml-[60px]  lg:-ml-[100px] xl:-ml-[100px] 2xl:-ml-[400px] '>
                    <img className='lg:w-[1050px] md:w-[750px]' src={img} alt="" />
                </div>
                <div className="text-white md:ml-20 ml-0 md:px-0 px-3">
                    <p className='uppercase text-lg font-semibold mb-5'>Oculus Quest</p>
                    <h1 className='md:text-7xl lg:text-6xl  font-semibold mb-5'>Defy reality</h1>
                    <p className='text-lg md:text-xl font-semibold mb-5'>Experience true immersion like never before, and <br /> leave the world behind without looking back.</p>
                    <button className='border-2 rounded-full px-14 py-3 border-[#6630FF] hover:bg-[#6630FF]   hover:transform duration-500 text-lg font-semibold'>
                        Explore
                    </button>

                </div>
            </div>

            <div className='mt-12 max-w-screen-lg mx-auto'>

                <div className='flex justify-center'>
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="relative">
                        <img
                            src="https://demo.themovation.com/stratus/wp-content/uploads/2020/12/Quest-2.jpg"
                            alt="Play Video"
                        />
                        <MdOutlinePlayCircleOutline className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl cursor-pointer" />
                    </button>


                </div>
                <Modal></Modal>

                <div className='flex flex-col md:flex-row gap-10 justify-around items-center mt-14'>

                    <div className='flex items-center justify-center flex-col'>
                        <div className='w-24 bg-[#38204A] h-24 flex items-center justify-center rounded-full mb-2'>
                            <AiOutlineWifi className='transform rotate-45 text-5xl text-white' />
                        </div>
                        <h2 className='text-white font-semibold'>Wireless freedom</h2>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <div className='w-24 bg-[#38204A] h-24 flex items-center justify-center rounded-full mb-2'>
                            <PiEye className=' text-5xl text-white' />
                        </div>
                        <h2 className='text-white font-semibold'>Stunning visuals</h2>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <div className='w-24 bg-[#38204A] h-24 flex items-center justify-center rounded-full mb-2'>
                            <PiHeadphonesLight className=' text-5xl text-white' />
                        </div>
                        <h2 className='text-white font-semibold'>Fully immersive</h2>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <div className='w-24 bg-[#38204A] h-24 flex items-center justify-center rounded-full mb-2'>
                            <CgPerformance className=' text-5xl text-white' />
                        </div>
                        <h2 className='text-white font-semibold'>High performance</h2>
                    </div>



                </div>
            </div>
        </div>

    );
};

export default Banner;
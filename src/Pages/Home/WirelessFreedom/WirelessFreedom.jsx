import img from '../../../../public/img/fedom.jpg'

const WirelessFreedom = () => {
    return (
        <div className="flex flex-col md:flex-row w-full bg-slate-100 ">

            <div className='md:w-7/12 w-full relative'>
                <img className='w-full' src={img} alt="" />
                <div className='absolute top-3/4 md:left-1/4 lg:left-75% xl:left-1/3 2xl:left-1/2 whitespace-nowrap mr-5 transform -translate-y-1/4  text-white  bg-gray-800 lg:py-2 lg:px-24 xl:py-8 px-10 py-1'> 
                    <h2 className='text-xl font-bold'>
                        "Now this is a game changer"
                    </h2>
                    <p className='mt-3'>XR Magazine</p>

                </div>
            </div>
            <div className="bg-[#ECECEC] md:w-5/12 w-full flex justify-center items-center  text-black ">
                <div className='flex flex-col  max-w-screen-sm  mx-auto py-5 md:py-0 px-3'>
                    <h1 className='text-5xl font-semibold'>Wireless freedom <br /> like never before</h1>
                    <p className='mt-7 text-lg font-medium text-gray-600'>Lorem ipsum dolor sit amet, consectetur  <br /> adipiscing elit. Fusce aliquet sollicitudin mattis.</p>
                </div>
            </div>

        </div>
    );
};

export default WirelessFreedom;
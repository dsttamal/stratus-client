import banner from '../../../../public/img/banner.jpg'

const Future = () => {
    return (
        <div className="flex flex-col md:flex-row w-full bg-slate-100 mb-10">
            <div className="bg-[#ECECEC] md:w-5/12 w-full flex justify-center items-center  text-black ">
                <div className='flex flex-col  max-w-screen-sm  mx-auto py-5 md:py-0 px-3'>
                    <h1 className='text-5xl font-semibold'>Unlike anything <br /> you've ever seen</h1>
                    <p className='mt-7 text-lg font-medium text-gray-600'>Lorem ipsum dolor sit amet, consectetur  <br /> adipiscing elit. Fusce aliquet sollicitudin mattis.</p>
                </div>
            </div>
            <div className='md:w-7/12 w-full relative'>
                <img className='w-full' src={banner} alt="" />
                <div className='absolute top-3/4 ml-5 transform -translate-y-1/4 text-white   bg-gray-800 lg:py-5 lg:px-24 xl:py-10 px-5 py-1'>
                    <h2 className='text-2xl font-bold'>
                        "The future is here now"
                    </h2>
                    <p className='mt-3'>Wired Magazine</p>

                </div>
            </div>
        </div>


    );
};

export default Future;
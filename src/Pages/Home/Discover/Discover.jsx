import img1 from '../../../../public/img/Quest-7b.jpg'
import img2 from '../../../../public/img/Quest-8b.jpg'
import img3 from '../../../../public/img/Quest-9b.jpg'

const Discover = () => {
    return (
        <div className=" pt-28 pb-28 px-3 lg:px-0" style={{ background: 'linear-gradient(to right, #3E2352,  #190E21, #000000)' }}>
            <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto justify-between mb-10">
                <div className="text-white">

                    <h1 className='md:text-6xl lg:text-5xl  font-semibold mb-5'>Discover new <br /> experiences in VR</h1>
                    <p className='text-lg md:text-xl text-gray-400 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Fusce aliquet sollicitudin mattis.</p>
                </div>
                <div>
                    <button className='border-2 rounded-full px-14 py-3 border-white hover:bg-white text-white hover:text-black hover:transform duration-500 text-lg font-semibold'>
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-8 md:flex-row lg:px-10 px-3">
                <div className='text-white'>
                    <img src={img1} alt="" />
                    <h1 className='text-2xl my-2 font-semibold'>Stormland</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet sollicitudin mattis.</p>
                </div>
                <div className='text-white'>
                    <img src={img2} alt="" />
                    <h1 className='text-2xl my-2 font-semibold'>Echo Combat</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet sollicitudin mattis.</p>
                </div>
                <div className='text-white'>
                    <img src={img3} alt="" />
                    <h1 className='text-2xl my-2 font-semibold'>Asgard's Wrath</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet sollicitudin mattis.</p>
                </div>
            </div>
        </div>
    );
};

export default Discover;
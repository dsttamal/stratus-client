import img1 from '../../../../public/img/Quest-11.jpg'
import img2 from '../../../../public/img/Quest-12.jpg'
import img3 from '../../../../public/img/Quest-13.jpg'

const Accessories = () => {
    return (
        <div className="bg-white">
            <div className="lg:max-w-screen-xl max-w-screen-md mx-auto py-20 px-3">

                <div className="flex flex-col md:flex-row gap-5 justify-between items-center mb-10">
                    <h1 className="text-5xl font-semibold">Accessories</h1>
                    <button className='border-2 rounded-full px-14 py-3 hover:text-white border-[#6630FF] hover:bg-[#6630FF]   hover:transform duration-500 text-lg font-semibold'>
                        Shop accessories
                    </button>
                </div>
                <div className="grid  grid-cols-1 md:grid-cols-3 justify-between  justify-items-center gap-5">
                    <div className="relative">
                        <img src={img1} alt="" className="w-full h-auto" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-40 text-white flex justify-between">
                            <h1 className="text-lg font-semibold">Touch controller</h1>
                            <p className="text-lg font-bold">$69</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={img2} alt="" className="w-full h-auto" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-40 text-white flex justify-between">
                            <h1 className="text-lg font-semibold">Headphones</h1>
                            <p className="text-lg font-bold">$59</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={img3} alt="" className="w-full h-auto" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-40 text-white flex justify-between">
                            <h1 className="text-lg font-semibold">Travel case</h1>
                            <p className="text-lg font-bold">$49</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Accessories;
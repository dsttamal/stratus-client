import { PiShoppingCartThin } from 'react-icons/pi';
import img1 from '../../../../public/img/Quest-10.jpg'
import { MdOutlineBookmarkAdd } from 'react-icons/md';
const OculusQuest = () => {
    return (
        <div className='bg-[#F2F2F2]'>
            <div className="flex flex-col justify-between md:flex-row max-w-screen-xl mx-auto  items-center py-10">
                <div>
                    <img className='w-[700px]' src={img1} alt="" />
                </div>
                <div>
                    <h1 className='text-6xl font-semibold mb-5'>Oculus Quest</h1>
                    <p className='text-gray-500 text-lg font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Fusce aliquet sollicitudin mattis.</p>
                    <div className='flex items-center gap-5 my-5'>
                        <p className='text-3xl font-semibold'>$399</p>
                        <button className='bg-[#6630FF] py-4 px-14 rounded-full font-semibold text-white'>Buy Now</button>
                    </div>
                    <div className='flex gap-5 items-center pt-10'>
                        <div>
                            <PiShoppingCartThin className='text-5xl'></PiShoppingCartThin>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Free delivery</h1>
                            <p>Maecenas accumsan, elit id hendrerit convallis, <br /> lectus lacus fermentum nisi.</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center pt-10'>
                        <div>
                            <MdOutlineBookmarkAdd className='text-5xl'></MdOutlineBookmarkAdd>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Oculus warranty</h1>
                            <p>Maecenas accumsan, elit id hendrerit convallis, <br /> lectus lacus fermentum nisi.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OculusQuest;
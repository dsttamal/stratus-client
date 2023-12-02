
import { RxCross2 } from 'react-icons/rx';

const Modal = () => {
    return (
        <dialog id="my_modal_1" className="modal ">
            <div className="modal-box w-full max-w-7xl mx-auto bg-black bg-opacity-20">
                <div className="modal-action">
                    <form method="dialog">
                        <div className='flex justify-end items-center mb-2'>
                            <button className="text-white text-xl"><RxCross2 /></button>
                        </div>
                        <div className="md:w-[800px] lg:w-[1000px] xl:w-[1200px] sm:w-[600px] xs:w-[500px] w-[370px] h-[700px]">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/5q6BcQq_yhw?si=AauwDw9STIHZGqQr"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </form>
                </div>


            </div>
        </dialog>
    );
};

export default Modal;
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import iconArvore from '../../../../assets/images/iconArvore.webp'
import iconBicicleta from '../../../../assets/images/iconBicicleta.webp'
import iconAsfalto from '../../../../assets/images/iconAsfalto.webp'

export default function SectionFourHome() {
    return (
        <section className='container mx-auto px-5 md:px-10 py-20'>
            <Swiper
                slidesPerView={1.2}
                spaceBetween={10}
                centeredSlides={true}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        centeredSlides:false
                    }
                }}
                className="mySwiper md:!flex md:!justify-center"
            >
                <SwiperSlide className='h-full py-10 !flex justify-center '>
                    <div className='w-[300px] h-full py-10 px-5 flex flex-col gap-5 justify-center items-center bg-[#1e452e] border-2 border-white rounded-[30px] box-icons'>
                        <img src={iconArvore} alt="icone de uma arvore" className='w-[110px] ' />
                        <div className='w-full h-[3px] bg-[#22c55e] rounded-xl '/>
                        <span className='text-2xl text-center font-semibold'>
                            Praça urbanizada com paisagismo
                        </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='!h-full py-10 !flex justify-center '>
                    <div className='w-[300px] !h-full py-10 px-5 flex flex-col gap-5 justify-center items-center bg-[#1e452e] border-2 border-white rounded-[30px] box-icons'>
                        <img src={iconBicicleta} alt="icone de uma bicicleta" className='h-[110px] ' />
                        <div className='w-full h-[3px] bg-[#22c55e] rounded-xl '/>
                        <span className='text-2xl text-center font-semibold'>
                            Sinalização Viária (horizontal e vertical)
                        </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='!h-full py-10 !flex justify-center '>
                    <div className='w-[300px] !h-[300px] py-10 px-5 flex flex-col gap-5 justify-center items-center bg-[#1e452e] border-2 border-white rounded-[30px] box-icons'>
                        <img src={iconAsfalto} alt="icone de um asfalto" className='w-[110px] ' />
                        <div className='w-full h-[3px] bg-[#22c55e] rounded-xl '/>
                        <span className='text-2xl text-center font-semibold'>
                            Asfalto, guias e sarjetas
                        </span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
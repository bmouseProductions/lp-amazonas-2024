import { Swiper, SwiperSlide } from 'swiper/react';
import infraestrutura1 from '../../../../assets/images/infraestrutura1.webp'
import infraestrutura2 from '../../../../assets/images/infraestrutura2.webp'


import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Botao } from '../../../../components/Botao/Botao';

export default function SectionThreeHome() {
    return (
        <section className="container mx-auto px-5 md:px-10 py-20">
            <div className="w-full flex flex-col items-center">
                <span className="mx-auto text-xl xl:text-2xl text-[#22c55e] font-semibold ">
                    Infraestrutura
                </span>
                <h2 className="text-[50px] lg:text-7xl xl:text-8xl text-center font-semibold">
                    Infraestrutura Completa
                </h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    centeredSlides={true}
                    navigation={true}
                    pagination={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="w-full !min-h-[550px] mt-10 lg:mt-20"
                >
                    <SwiperSlide>
                        <div className='w-full flex flex-col md:flex-row gap-5 md:gap-10 xl:gap-28'>
                            <div className='w-full md:w-1/2 relative'>
                                <img 
                                    src={infraestrutura1} 
                                    alt="imagem ilustrativa de um loteamento da Cardel Empreendimentos"
                                    className=''
                                />
                                <div className='absolute bottom-0 right-0 w-fit md:mr-[-150px] xl:mb-10 flex flex-col md:flex-row gap-2 md:gap-5'>
                                    <span className='px-3 md:px-5 py-2 md:py-3 flex justify-center items-center text-sm md:text-base lg:text-xl text-[#22c55e] border-2 border-[#22c55e] rounded-[30px] '>
                                        Conforto
                                    </span>
                                    <span className='px-3 md:px-5 py-2 md:py-3 flex justify-center items-center text-sm md:text-base lg:text-xl text-[#22c55e] border-2 border-[#22c55e] rounded-[30px] '>
                                        Segurança
                                    </span>
                                </div>
                            </div>

                            <div className='w-full md:w-1/2 flex flex-col gap-3 lg:gap-5 xl:gap-10'>
                                <h3 className=' text-3xl md:text-4xl lg:text-5xl font-semibold '>
                                    Iluminação em Led
                                </h3>

                                <p className='max-w-[600px] lg:text-lg'>
                                    Essencial para garantir segurança, eficiência energética e conforto
                                    visual. Com sua durabilidade, baixo consumo de energia e qualidade
                                    de luz, os LEDs proporcionam ambientes mais seguros e agradáveis,
                                    além de contribuir para a redução dos custos de manutenção.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-full flex flex-col md:flex-row gap-5 md:gap-10 xl:gap-28'>
                            <div className='w-full md:w-1/2 relative'>
                                <img 
                                    src={infraestrutura2} 
                                    alt="imagem ilustrativa de um loteamento da Cardel Empreendimentos"
                                    className=''
                                />
                                <div className='absolute bottom-0 right-0 w-fit md:mr-[-150px] xl:mb-10 flex flex-col md:flex-row gap-2 md:gap-5'>
                                    <span className='px-3 md:px-5 py-2 md:py-3 flex justify-center items-center text-sm md:text-base lg:text-xl text-[#22c55e] border-2 border-[#22c55e] rounded-[30px] '>
                                        Bem-Estar
                                    </span>
                                    <span className='px-3 md:px-5 py-2 md:py-3 flex justify-center items-center text-sm md:text-base lg:text-xl text-[#22c55e] border-2 border-[#22c55e] rounded-[30px] '>
                                        Natureza
                                    </span>
                                </div>
                            </div>

                            <div className='w-full md:w-1/2 flex flex-col gap-3 lg:gap-5 xl:gap-10'>
                                <h3 className=' text-3xl md:text-4xl lg:text-5xl font-semibold '>
                                    Praça Urbanizada com Paisagismo
                                </h3>

                                <p className='max-w-[600px] lg:text-lg'>
                                    Oferece um ambiente verde e acolhedor para a comunidade,
                                    promovendo lazer, convívio social e bem-estar. O paisagismo integra
                                    elementos naturais à estrutura urbana, tornando o espaço mais
                                    agradável e sustentável.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-full flex flex-col md:flex-row gap-5 md:gap-10 xl:gap-28'>
                            <div className='w-full md:w-1/2 relative'>
                                <img 
                                    src={infraestrutura1} 
                                    alt="imagem ilustrativa de um loteamento da Cardel Empreendimentos"
                                    className=''
                                />
                                <div className='absolute bottom-0 right-0 w-fit md:mr-[-150px] xl:mb-10 flex flex-col md:flex-row gap-2 md:gap-5'>
                                    <span className='px-3 md:px-5 py-2 md:py-3 flex justify-center items-center text-sm md:text-base lg:text-xl text-[#22c55e] border-2 border-[#22c55e] rounded-[30px] '>
                                        Lifestyle
                                    </span>
                                    <span className='px-3 md:px-5 py-2 md:py-3 flex justify-center items-center text-sm md:text-base lg:text-xl text-[#22c55e] border-2 border-[#22c55e] rounded-[30px] '>
                                        Vida Saudável
                                    </span>
                                </div>
                            </div>

                            <div className='w-full md:w-1/2 flex flex-col gap-3 lg:gap-5 xl:gap-10'>
                                <h3 className=' text-3xl md:text-4xl lg:text-5xl font-semibold '>
                                    Áreas de Convivência
                                </h3>

                                <p className='max-w-[600px] lg:text-lg'>
                                    Ciclovias, pistas de caminhada e playground, são essenciais para
                                    promover um estilo de vida saudável e atividades recreativas ao ar
                                    livre. Elas incentivam a prática de exercícios físicos, o convívio social
                                    e proporcionam momentos de lazer para todas as idades,
                                    contribuindo para a sua qualidade de vida
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
                
                <div className='w-[300px] mt-10 md:mt-16 mx-auto'>
                    <Botao 
                        text='Saiba Mais' 
                        tipo='verde' 
                        link='' 
                    />
                </div>
            </div>
        </section>
    )
}
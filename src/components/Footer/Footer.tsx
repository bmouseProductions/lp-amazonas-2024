import logo from '../../assets/images/logo-cardeal.webp'
import iconsSociais from '../../assets/images/icons-sociais.png'

export default function Footer() {
    return (
        <footer className=" bg-[#22c55e] ">
            <div className='container mx-auto px-5 md:px-10 pt-20 text-lg'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10'>
                    <div className='flex flex-col gap-5'>
                        <img 
                            src={logo} 
                            alt="logo empresa cardeal"
                            className='w-10'
                        />
                        <p>© 2023 CARDEAL EMPREENDIMENTOS - TODOS OS DIREITOS RESERVADOS.</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h3 className='text-4xl font-semibold'>Fale Conosco</h3>
                        <ul className='w-full flex flex-col gap-2'>
                            <li className='flex flex-wrap'>
                                <a 
                                    className='flex gap-2' 
                                    href="tel:+5534996440078"
                                    target='_blank'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>

                                    +55 34 9 9644-0078
                                </a>
                            </li>

                            <li className='flex flex-wrap'>
                                <a 
                                    className='flex gap-2 text-wrap'    
                                    href="mailto:financeiro@empreendimentoscardeal.com.br" 
                                    target='_blank'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>

                                    financeiro@empreendimentos <br /> cardeal.com.br
                                </a>
                            </li>

                            <li className='flex flex-wrap'>
                                <a 
                                    className='flex gap-2' 
                                    href="https://maps.app.goo.gl/UjU1s5PK4MLo41gT7" 
                                    target="_blank" 
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="!w-6 !h-6">
                                        <path className="!w-6 !h-6" strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path className="!w-6 !h-6" strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    Av. Mal. Deodoro, 375 - Sobradinho
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h3 className='text-4xl font-semibold'>Link</h3>
                        <a href="">
                            Politica de Privacidade
                        </a>

                        <a href="">
                        Termos de uso
                        </a>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h3 className='text-4xl font-semibold'>Nos siga aqui!</h3>
                        <div className='relative w-fit h-[50px] '>
                            <img src={iconsSociais} alt="imagem com icone das redes sociais" />
                            <div className='absolute top-0 w-full h-[50px] grid grid-cols-4 gap-4'>
                                <a 
                                    href="https://www.instagram.com/empreendimentoscardeal/"
                                    className='w-[50px] h-[50px]'
                                />
                                <a 
                                    href="https://www.facebook.com/empreendimentoscardeal"
                                    className='w-[50px] h-[50px]'
                                />
                                <a 
                                    href="https://www.youtube.com/@EmpreendimentosCardeal"
                                    className='w-[50px] h-[50px]'
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='w-fit mt-10 mx-auto px-5 md:px-14 pt-5 pb-3 bg-[#1e452e] rounded-t-2xl max-md:text-base'>
                    <a 
                        href=""
                        className='mx-auto '
                    >
                        Desenvolvido por: <strong>BmouseProuctions</strong>
                    </a>
                </div>
            </div>
        </footer>
    )
}
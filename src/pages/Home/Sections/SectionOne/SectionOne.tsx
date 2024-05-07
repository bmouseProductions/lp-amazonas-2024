import { Botao } from '../../../../components/Botao/Botao'

import logo from '../../../../assets/images/logo.png'
import logoResidencial from '../../../../assets/images/logo-residencial.webp'

export default function SectionOneHome(){
    return (
        <section className='container mx-auto px-5 md:px-10 py-[50px] lg:py-[100px] '>
            <div className=' w-full flex justify-center rounded-[20px] banner'>
                <div className=' w-[90%] h-full pt-10 flex flex-col '>
                    <div className='flex justify-between'>
                        <img 
                            src={logo} 
                            alt="logo da empresa cardeal empreendimentos" 
                        />

                        <div className=' '>
                            <Botao 
                                text='Fale Conosco' 
                                tipo='verde'
                                link='#'
                            />
                        </div>
                    </div>

                    <div className='my-[10%] min-h-[300px] sm:min-h-none flex flex-col justify-end'>
                        <img 
                            src={logoResidencial} 
                            alt="logo do residencial amazonas"
                            className='w-full md:w-[60%]  ' 
                        />

                        <div className='my-5 md:my-10 h-[3px] w-full bg-[#22c55e] rounded-xl'/>

                        <span className='text-xl md:text-2xl xl:text-3xl text-white font-semibold'>
                            O lugar perfeito para construir os seus sonhos. <br />
                            Lançamento em breve!
                        </span>
                    </div>
                    
                </div>
            </div>
            
        </section>
    )
}
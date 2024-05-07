import lotes from '../../../../assets/images/lotes.webp'
import parcelas from '../../../../assets/images/parcelas.webp'
import { Botao } from '../../../../components/Botao/Botao'

export default function SectionFiveHome() {
    return (
        <section className="container mx-auto px-5 md:px-10 py-20">
            <div className="flex flex-col md:flex-row gap-10 xl:gap-20">
                <div>
                    <img src={lotes} alt="" />
                    <h3 className='text-4xl leading-[50px] lg:text-5xl lg:!leading-[70px]  font-semibold '>
                        Lotes a partir <br />
                        <span className=' px-2 bg-[#22c55e] rounded-xl normal-case'> 
                            de 180m²
                        </span>
                    </h3>
                    <p>
                        
                    </p>
                </div>

                
                <div>
                    <img src={parcelas} alt="" />
                    <h3 className='text-4xl leading-[50px] lg:text-5xl lg:!leading-[70px]  font-semibold '>
                        Parcelas a partir de<br />
                        <span className=' px-2 bg-[#22c55e] rounded-xl normal-case'> 
                            R$ 350,00
                        </span> mensais
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

            <div className='mt-10 md:mt-16 mx-auto max-w-[300px] '>
                <Botao 
                    link='' 
                    text='Entre em contato' 
                    tipo='verde' 
                />
            </div>
        </section>
    )
}
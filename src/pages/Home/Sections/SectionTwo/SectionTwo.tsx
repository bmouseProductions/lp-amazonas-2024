import loteamento from '../../../../assets/images/loteamento.webp'
import icon from '../../../../assets/images/icon.webp'

export default function SectionTwoHome() {
    return (
        <section className="container mx-auto px-5 md:px-10 py-20">
            <div className="flex flex-col items-center md:flex-row gap-5">
                <div className='w-full md:w-1/2 flex flex-col gap-5'>
                    <span className="text-xl xl:text-2xl text-[#22c55e] font-semibold ">
                        Bem vindo
                    </span>
                    <h2 className='text-6xl lg:text-7xl xl:text-8xl font-semibold'>
                        O Nosso <br /> Loteamento
                    </h2>
                    <div className='lg:max-w-[600px] lg:text-lg'>
                        <p className=''>
                            Nosso loteamento é uma ótima opção para você! Localizado em
                            uma região privilegiada, próximo a uma variedade de
                            comodidades que incluem:
                        </p>

                        <ul className='mt-5 flex flex-wrap gap-5'>
                            <li className='px-5 py-3 text-[#22c55e] border-2 border-[#22c55e] rounded-[30px] '>Escola</li>
                            <li className='px-5 py-3 text-[#22c55e] border-2 border-[#22c55e] rounded-[30px] '>Creches</li>
                            <li className='px-5 py-3 text-[#22c55e] border-2 border-[#22c55e] rounded-[30px] '>Posto de Saúde</li>
                            <li className='px-5 py-3 text-[#22c55e] border-2 border-[#22c55e] rounded-[30px] '>Comércios</li>
                            <li className='px-5 py-3 text-[#22c55e] border-2 border-[#22c55e] rounded-[30px] '>Posto de Gasolina</li>
                        </ul>
                    </div>
                </div>

                <div className="md:w-1/2 flex flex-col items-center gap-5">
                    <img 
                        src={loteamento} 
                        alt="imagem de ilustrativa de um loteamento"
                        className='w-full max-w-[600px] '
                    />

                    <a 
                        href="https://cardealempreendimentos.com.br/tour-amazonas/" 
                        className="w-full max-w-[600px] p-5 flex gap-2 md:gap-5 xl:gap-10 bg-[#22c55e] rounded-[30px] "
                    >
                        <img 
                            src={icon} 
                            alt="icone do loteamento amazonas"
                            className='w-12 lg:w-16'
                        />
                        <p className='text-xl lg:text-2xl font-semibold'>
                            Conheçam nosso tour 
                            em 360 do loteamento!
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
}
import { Botao } from "../../../../components/Botao/Botao";


export default function SectionSevenHome() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 py-20">
                <iframe
                    className="w-full h-[200px] md:h-[515px] xl:h-[620px] rounded-3xl"
                    src="https://www.youtube.com/embed/tOUAucHN7QQ?si=Nc9uLH86B0GShAhF"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </section>

            <section className="py-20">
                <div className="bg-pagar">
                    <div className="container mx-auto px-5 md:px-10 py-20">
                        <div>
                            <h2 className="text-5xl md:text-8xl lg:text-9xl font-semibold">
                                Chega de <br />
                                pagar aluguel!
                            </h2>
                            <div className="mt-10 flex flex-col-reverse md:flex-row gap-5 lg::gap-10">
                                <div className="!w-[300px] ">
                                    <Botao 
                                        link="" 
                                        text="Saiba mais" 
                                        tipo="verde" 
                                    />
                                </div>
                                <p className="w-full">
                                    É a sua chance de comprar um lote financiado e com entrada facilitada! A Cardeal Empreendimentos tem mais
                                    de 15 anos de experiência no mercado imobiliárior especializada em loteamentos e condomínios fechados.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
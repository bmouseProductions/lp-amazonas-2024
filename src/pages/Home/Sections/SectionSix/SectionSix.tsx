import { useInView } from 'react-intersection-observer';

export default function SectionSixHome() {
    const { ref, inView } = useInView({
        threshold: 0.3, // Quando 50% ou mais do elemento estiver visível
    });

    return (
        <section className="container mx-auto px-5 md:px-10 py-20">
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="max-w-[700px] p-5 flex items-center gap-5 bg-[#1e452e] rounded-xl">
                    <div className="w-fit p-1 border-2 border-white rounded-full">
                        <div className="w-[60px] h-[60px] bg-[#37ca6d] rounded-full "/>
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full flex justify-between text-xl">
                            <p className="text-[#37ca6d]">Abertura das ruas</p>

                            <p className="text-[#37ca6d]">
                                45%
                            </p>
                        </div>

                        <div className=" h-[10px] bg-[#bbf8d2] rounded-xl overflow-hidden">
                            <div className={`w-full h-full rounded-xl progress-bar ${inView ? 'animate' : ''}`}/>
                        </div>
                    </div>
                </div>

                <div className="max-w-[700px] p-5 flex items-center gap-5 bg-[#1e452e] rounded-xl">
                    <div className="w-fit p-1 border-2 border-white rounded-full">
                        <div className="w-[60px] h-[60px] bg-[#37ca6d] rounded-full "/>
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full flex justify-between text-xl">
                            <p className="text-[#37ca6d]">Terraplanagem</p>

                            <p className="text-[#37ca6d]">
                                45%
                            </p>
                        </div>

                        <div className=" h-[10px] bg-[#bbf8d2] rounded-xl overflow-hidden">
                            <div className={`w-full h-full rounded-xl progress-bar ${inView ? 'animate' : ''}`}/>
                        </div>
                    </div>
                </div>

                <div className="max-w-[700px] p-5 flex items-center gap-5 bg-[#1e452e] rounded-xl">
                    <div className="w-fit p-1 border-2 border-white rounded-full">
                        <div className="w-[60px] h-[60px] bg-[#37ca6d] rounded-full "/>
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full flex justify-between text-xl">
                            <p className="text-[#37ca6d]">Drenagem Pluvial</p>

                            <p className="text-[#37ca6d]">
                                45%
                            </p>
                        </div>

                        <div className=" h-[10px] bg-[#bbf8d2] rounded-xl overflow-hidden">
                            <div className={`w-full h-full rounded-xl progress-bar ${inView ? 'animate' : ''}`}/>
                        </div>
                    </div>
                </div>

                <div className="max-w-[700px] p-5 flex items-center gap-5 bg-[#1e452e] rounded-xl">
                    <div className="w-fit p-1 border-2 border-white rounded-full">
                        <div className="w-[60px] h-[60px] bg-[#37ca6d] rounded-full "/>
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full flex justify-between text-xl">
                            <p className="text-[#37ca6d]">Rede de Água</p>

                            <p className="text-[#37ca6d]">
                                45%
                            </p>
                        </div>

                        <div className=" h-[10px] bg-[#bbf8d2] rounded-xl overflow-hidden">
                            <div className={`w-full h-full rounded-xl progress-bar ${inView ? 'animate' : ''}`}/>
                        </div>
                    </div>
                </div>

                <div className="max-w-[700px] p-5 flex items-center gap-5 bg-[#1e452e] rounded-xl">
                    <div className="w-fit p-1 border-2 border-white rounded-full">
                        <div className="w-[60px] h-[60px] bg-[#37ca6d] rounded-full "/>
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full flex justify-between text-xl">
                            <p className="text-[#37ca6d]">Rede de Esgoto</p>

                            <p className="text-[#37ca6d]">
                                45%
                            </p>
                        </div>

                        <div className=" h-[10px] bg-[#bbf8d2] rounded-xl overflow-hidden">
                            <div className={`w-full h-full rounded-xl progress-bar ${inView ? 'animate' : ''}`}/>
                        </div>
                    </div>
                </div>

                <div className="max-w-[700px] p-5 flex items-center gap-5 bg-[#1e452e] rounded-xl">
                    <div className="w-fit p-1 border-2 border-white rounded-full">
                        <div className="w-[60px] h-[60px] bg-[#37ca6d] rounded-full "/>
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full flex justify-between text-xl">
                            <p className="text-[#37ca6d]">Pavimentação</p>

                            <p className="text-[#37ca6d]">
                                45%
                            </p>
                        </div>

                        <div className=" h-[10px] bg-[#bbf8d2] rounded-xl overflow-hidden">
                            <div className={`w-full h-full rounded-xl progress-bar ${inView ? 'animate' : ''}`}/>
                        </div>
                    </div>
                </div>

                <div className="max-w-[700px] p-5 flex items-center gap-5 bg-[#1e452e] rounded-xl">
                    <div className="w-fit p-1 border-2 border-white rounded-full">
                        <div className="w-[60px] h-[60px] bg-[#37ca6d] rounded-full "/>
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full flex justify-between text-xl">
                            <p className="text-[#37ca6d]">Rede Elétrica</p>

                            <p className="text-[#37ca6d]">
                                45%
                            </p>
                        </div>

                        <div className=" h-[10px] bg-[#bbf8d2] rounded-xl overflow-hidden">
                            <div className={`w-full h-full rounded-xl progress-bar ${inView ? 'animate' : ''}`}/>
                        </div>
                    </div>
                </div>

                <div className="max-w-[700px] p-5 flex items-center gap-5 bg-[#1e452e] rounded-xl">
                    <div className="w-fit p-1 border-2 border-white rounded-full">
                        <div className="w-[60px] h-[60px] bg-[#37ca6d] rounded-full "/>
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full flex justify-between text-xl">
                            <p className="text-[#37ca6d]">Arborização</p>

                            <p className="text-[#37ca6d]">
                                45%
                            </p>
                        </div>

                        <div className=" h-[10px] bg-[#bbf8d2] rounded-xl overflow-hidden">
                            <div className={`w-full h-full rounded-xl progress-bar ${inView ? 'animate' : ''}`}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[700px] mt-5 mx-auto p-5 flex items-center gap-5 bg-[#1e452e] rounded-xl">
                    <div className="w-fit p-1 border-2 border-white rounded-full">
                        <div className="w-[60px] h-[60px] bg-[#37ca6d] rounded-full "/>
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full flex justify-between text-xl">
                            <p className="text-[#37ca6d]">Sinalização</p>

                            <p className="text-[#37ca6d]">
                                45%
                            </p>
                        </div>

                        <div className=" h-[10px] bg-[#bbf8d2] rounded-xl overflow-hidden">
                            <div className={`w-full h-full rounded-xl progress-bar ${inView ? 'animate' : ''}`}/>
                        </div>
                    </div>
                </div>
        </section>
    )
}

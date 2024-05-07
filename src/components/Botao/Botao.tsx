
interface BtnProps {
  text: string;
  tipo: "verde" | "transparente";
  link: string;
}


export const Botao = ({ text, tipo, link }: BtnProps) => {
  
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const getBackgroundColor = () => {
    if (tipo === "verde") {
      return "bg-[#22c55e] text-white hover:bg-white hover:text-black transition-all shadow-lg";
    } else if (tipo === "transparente") {
      return "bg-transparent text-white border-2 border-[#22c55e] "; // Note que você deve fornecer uma cor válida aqui
    }
  };

  return (
    <a
      href={link}
      onClick={handleBackToTop}
      className={`!h-[60px] px-5 w-full flex justify-center items-center text-xl font-semibold text-center rounded-[57px] font-montserrat transition-all ${getBackgroundColor()}`}
    >
      {text}
    </a>
  );
};

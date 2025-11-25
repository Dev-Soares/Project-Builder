import { useNavigate } from "react-router-dom"

const CallAction = () => {

    const navigate = useNavigate();
    
  return (
    
    <section className='flex flex-col lg:flex-row justify-around items-center min-h-auto w-full p-8 py-16 mb-16 bg-gray-900'>
       <div className='flex flex-col justify-center items-center text-center p-4 gap-6 lg:gap-8 md:max-w-[70%] lg:max-w-[60%] xl:max-w-[40%]'>
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">Pronto para transformar sua  <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-black">infraestrutura?</span></h1>
          <h3 className="text-lg lg:text-xl xl:text-2xl font-normal text-gray-300">Junte-se a milhares de desenvolvedores que já simplificaram seu <span className="font-black text-blue-400" > workflow</span>.</h3>
        </div>
          
          <button onClick={() => navigate('/architecture')} className="w-[65%] lg:w-[50%] 2xl:w-[30%]  bg-gradient-to-br from-blue-600 to bg-blue-950 text-white font-bold p-3 px-4  rounded-4xl md:text-lg xl:text-xl flex justify-center items-center gap-4 cursor-pointer hover:translate-y-[-2px] hover:scale-105 transition-transform duration-500 border-none" > Teste Agora</button>
       </div>
       <div>
        <img src="Up.svg" alt="Svg Ilustrativo" />
       </div>
       
    </section>
  )
}

export default CallAction

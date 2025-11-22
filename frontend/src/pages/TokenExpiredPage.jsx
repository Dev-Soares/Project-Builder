import { useNavigate } from "react-router-dom";

const TokenExpiredPage = () => {

    const navigate = useNavigate();

  return (
    <main className='flex justify-center items-center min-h-screen w-full p-8 '>
       <div className='flex flex-col justify-center items-center text-center p-4 gap-6 lg:gap-8 md:max-w-[70%] lg:max-w-[60%] xl:max-w-[40%]'>
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
            <span className="material-symbols-outlined !text-8xl text-blue-700">nest_clock_farsight_analog </span>
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl  font-bold">Infelizmente sua sessão expirou.</h1>
          <h3 className="text-md md:text-lg lg:text-xl text-blue-700 font-semibold">Clique abaixo para iniciar uma nova!</h3>
        </div>

          <button onClick={() => navigate('/architecture')} className="w-[85%] lg:w-[70%] 2xl:w-[50%]  bg-gradient-to-br from-blue-600 to-blue-950 text-white font-bold p-3 px-4  rounded-4xl md:text-lg xl:text-xl flex justify-center items-center gap-4 cursor-pointer hover:translate-y-[-2px] hover:scale-[1.02]  transform transition-all duration-400 " >  Iniciar nova sessão <span className="material-symbols-outlined"> arrow_forward </span></button>
       </div>
    </main>
  )
}

export default TokenExpiredPage

import { useNavigate } from 'react-router-dom';

const NotAvailablePage = () => {

    const navigate = useNavigate();

    return (
        <main className='w-full h-screen block lg:hidden flex flex-col justify-center items-center gap-4 p-4'>
            <div className='flex flex-col justify-center items-center text-center p-4 gap-6 lg:gap-8 md:max-w-[70%] lg:max-w-[60%] xl:max-w-[40%]'>
                <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
                    <span className="material-symbols-outlined !text-8xl text-blue-700">mimo_disconnect</span>
                    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl  font-bold">Ops, essa Área não está disponível em dispositivos móveis!</h1>
                    <h3 className="text-md md:text-lg lg:text-xl text-blue-700 font-semibold">Clique abaixo para retornar à página principal</h3>
                </div>

                <button onClick={() => navigate('/')} className="w-[55%] md:w-[45%] lg:w-[70%] 2xl:w-[50%]  bg-gradient-to-br from-blue-600 to-blue-950 text-white font-bold p-3 px-4  rounded-4xl md:text-lg xl:text-xl flex justify-center items-center gap-4 cursor-pointer hover:translate-y-[-2px] hover:scale-[1.02]  transform transition-all duration-400 " >  Retornar <span className="material-symbols-outlined"> arrow_forward </span></button>
            </div>
        </main>
    )
}

export default NotAvailablePage

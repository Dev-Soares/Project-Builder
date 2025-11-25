import GuideCard from "../smallComponents/GuideCard"

const Guide = () => {
  return (
    <main id="guide" className='w-full h-auto bg-gray-900 flex flex-col p-8 py-26 '>
        <div className="w-full h-auto flex justify-center items-center flex-col gap-2 md:gap-4 xl:gap-5  mb-20">
            <h2 className=" text-4xl md:text-5xl xl:text-6xl font-bold text-center text-white">Como Funciona?</h2>
            <p className="text-center text-xl xl:text-2xl text-gray-300">De zero a Produção em três passos simples.</p>
        </div>
        <div className="w-full h-auto flex flex-wrap gap-16 xl:gap-10 justify-center items-center">
            <GuideCard number='01' title='Escolha sua Cloud' text='Selecione entre AWS ou Azure para começar seu projeto.' />
            <GuideCard number='02' title='Modele Visualmente' text='Arraste recursos para o canvas e configure suas propriedades.' />
            <GuideCard number='03' title='Estrutura formada' text='Agora o diagrama de sua infraestrutura está pronto.' />
        </div>

    </main>
  )
}

export default Guide

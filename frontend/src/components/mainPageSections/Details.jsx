import DetailCard from "../smallComponents/DetailCard"

const Details = () => {
  return (
    <section id="details" className='flex flex-col min-h-auto w-full p-8 py-26 bg-gradient-to-br from-purple-600 to bg-purple-950  text-white justify-center items-center gap-10 md:gap-14 lg:gap-16 xl:gap-20 '>
        <div className="w-full h-auto flex justify-center items-center flex-col gap-2 md:gap-4 xl:gap-5  mb-20">
            <h2 className=" text-4xl md:text-5xl xl:text-6xl font-bold text-center text-white">Por que usar nossa plataforma?</h2>
            <p className="text-center text-xl xl:text-2xl text-gray-200">Simplifique o processo de criação e gerenciamento da sua infraestrutura em nuvem.</p>
        </div>
        <div className="w-full h-auto flex flex-wrap gap-6 xl:gap-10 justify-center items-center">
            <DetailCard cardIcon='code' cardTitle='Modelagem Visual' cardText='Crie sua infraestrutura arrastando e soltando componentes em um canvas intuitivo.'/>
            <DetailCard cardIcon='bolt' cardTitle='Geração Instantânea' cardText='Exporte seus diagramas com um clique.'/>
            <DetailCard cardIcon='cloud' cardTitle='Flexibilidade' cardText='Escolha seu provedor de acordo com as necessidades de sua infraestrutura'/>
            <DetailCard cardIcon='deployed_code' cardTitle='Modelagem Visual' cardText='Crie sua infraestrutura arrastando e soltando componentes em um canvas intuitivo.'/>
        </div>
        
    </section>
  )
}

export default Details

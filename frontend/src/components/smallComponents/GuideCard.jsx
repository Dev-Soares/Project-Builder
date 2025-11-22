

const GuideCard = ({number, title, text}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4 bg-gray-200 p-6 md:p-8 rounded-xl shadow-xl hover:translate-y-[-10px] hover:shadow-2xl transition-all duration-500 w-64 md:w-72 lg:w-80 xl:w-96">
            <div className=" rounded-lg bg-blue-800 flex justify-center items-center w-14 h-14 md:w-15 md:h-15 xl:w-18 xl:h-18 mb-4 hover:translate-y-[-2px] hover:scale-110 transition-transform duration-500">
                <span className="text-white text-xl font-semibold md:text-2xl  ">{number}</span>
            </div>
            <div className="flex justify-center items-center">
                <h3 className="font-bold text-2xl md:text-3xl text-center ">{title}</h3>
            </div>
            <div className="flex justify-center items-center max-w-[70%]">
                <p className="font-medium text-gray-800 text-center md:text-lg ">{text}</p>
            </div>

        </div>
    )
}

export default GuideCard

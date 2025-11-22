


const DetailCard = ({cardIcon, cardTitle, cardText}) => {
  return (
    <div className=' flex flex-col gap-4 w-full h-auto bg-gray-100 p-6 rounded-2xl max-w-80 min-h-68 hover:translate-y-[-10px] hover:shadow-2xl transition-all duration-500 hover:bg-blue-300 border-4 border-transparent hover:border-blue-600 '>
        <div className='w-full  flex justify-start items-start h-1/3'>
            <div className='bg-blue-600 text-white p-2 rounded-2xl w-18 h-18 flex justify-center items-center '>
                <span className="material-symbols-outlined text-5xl! ">{cardIcon}</span>
            </div>
        </div>
        <div className='w-full  font-bold text-xl text-black h-1/3'>
            <h3>{cardTitle}</h3>
        </div>
        <div className='w-full h-1/3 font-medium text-gray-700 '>
            <p>{cardText}</p>
        </div>
      
    </div>
  )
}

export default DetailCard

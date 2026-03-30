import { CheckCircle, Copy } from '@phosphor-icons/react'

const CopyIdButton = ({ textIsCopied, copyIdToClipboard, id }) => {
    return (
        <button onClick={() => copyIdToClipboard(id)} className={`flex justify-center items-center w-[90%] md:w-[70%] h-auto rounded-xl bg-blue-600
                            border-2 border-blue-600 text-white font-bold py-2 px-3 cursor-pointer text-sm xl:text-lg gap-2
                            hover:text-blue-600 hover:bg-gray-800 hover:border-blue-500 transition-all hover:translate-y-[-3px] duration-600 whitespace-nowrap
                            ${textIsCopied ? 'text-white!' : ''}
                            `}>
            {textIsCopied ? (<>
                <CheckCircle size={22} weight="fill" />
                <span>ID copiado!</span>
            </>) : (
                <>
                    <Copy size={22} weight="bold" />
                    <span>Copiar ID</span>
                </>)}
        </button>
    )
}

export default CopyIdButton

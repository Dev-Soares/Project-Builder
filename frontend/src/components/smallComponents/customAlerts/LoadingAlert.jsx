import { CircleNotch } from '@phosphor-icons/react'

const LoadingAlert = ({ t }) => {
  return (
    <div
      className={`${
        t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
      } max-w-sm w-full bg-[#0a0a1a] border border-violet-500/20 shadow-lg shadow-violet-500/5 rounded-xl pointer-events-auto flex items-center gap-3 px-4 py-3.5 z-50`}
    >
      <CircleNotch size={22} weight="bold" className="text-violet-400 animate-spin shrink-0" />
      <span className="text-sm text-gray-200">Carregando...</span>
    </div>
  )
}

export default LoadingAlert

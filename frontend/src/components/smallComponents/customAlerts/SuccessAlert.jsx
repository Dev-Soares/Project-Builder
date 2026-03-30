import toast from 'react-hot-toast'
import { CheckCircle, X } from '@phosphor-icons/react'

const SuccessAlert = ({ t, message }) => {
  return (
    <div
      className={`${
        t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
      } max-w-sm w-full bg-[#0a0a1a] border border-emerald-500/20 shadow-lg shadow-emerald-500/5 rounded-xl pointer-events-auto flex items-center gap-3 px-4 py-3.5 z-50`}
    >
      <CheckCircle size={22} weight="fill" className="text-emerald-400 shrink-0" />
      <span className="text-sm text-gray-200 flex-1">{message}</span>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="text-gray-500 hover:text-gray-300 transition-colors cursor-pointer shrink-0"
      >
        <X size={16} weight="bold" />
      </button>
    </div>
  )
}

export default SuccessAlert

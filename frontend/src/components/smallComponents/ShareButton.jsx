import { useAlert } from "../../contexts/AlertContext"
import { ShareNetwork } from "@phosphor-icons/react"

const ShareButton = () => {
  const { errorAlert } = useAlert()

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Compartilhar Diagrama',
        text: 'Confira este diagrama que criei!',
        url: window.location.href,
      })
    } else {
      errorAlert('Compartilhamento não suportado neste navegador.')
    }
  }

  return (
    <button
      onClick={handleShare}
      className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-gray-400 bg-white/[0.04] hover:bg-white/[0.08] rounded-xl transition-colors cursor-pointer"
    >
      <ShareNetwork size={16} weight="bold" />
      Compartilhar
    </button>
  )
}

export default ShareButton

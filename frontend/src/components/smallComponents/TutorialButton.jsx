import startTutorial from '../../utils/tutorial'
import { useState } from 'react'
import { Question } from '@phosphor-icons/react'

const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 768
}

const TutorialButton = () => {
  const [screenType] = useState(isMobileDevice() ? 'mobile' : 'desktop')

  return (
    <button
      onClick={() => startTutorial(screenType)}
      className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-violet-400 hover:text-violet-300 bg-violet-500/[0.08] hover:bg-violet-500/[0.12] rounded-xl transition-colors cursor-pointer"
    >
      <Question size={16} weight="bold" />
      Tutorial
    </button>
  )
}

export default TutorialButton

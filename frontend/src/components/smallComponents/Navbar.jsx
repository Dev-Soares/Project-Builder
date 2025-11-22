import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScrollTo } from '../../hooks/useScrollTo';

const Navbar = () => {
  
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollToSection } = useScrollTo(); 

  return (
    <nav className='absolute top-0 left-0 w-full bg-linear-to-br from-purple-950 to-purple-800 shadow-lg z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className='flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity'
          >
            <span className="material-symbols-outlined text-white text-3xl">architecture</span>
            <span className='text-xl font-bold text-white'>DiagramBuilder</span>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-8'>
            <button 
              onClick={() => navigate('/')} 
              className='text-gray-200 hover:text-purple-700 transition-all font-medium hover:bg-white p-2 rounded-xl duration-600 hover:translate-y-[-2px] cursor-pointer'
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('details')} // Aqui você chama a função
              className='text-gray-200 hover:text-purple-700 transition-all font-medium hover:bg-white p-2 rounded-xl duration-600 hover:translate-y-[-2px] cursor-pointer'
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('guide')} // Aqui você chama a função
              className='text-gray-200 hover:text-purple-700 transition-all font-medium hover:bg-white p-2 rounded-xl duration-600 hover:translate-y-[-2px] cursor-pointer'
            >
              Como Funciona
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden text-white p-2'
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden pb-4 flex flex-col gap-4 border-t border-purple-700 pt-4'>
            <button 
              onClick={() => {
                navigate('/');
                setIsMenuOpen(false);
              }} 
              className='text-gray-200 hover:text-purple-700 transition-all font-medium hover:bg-white p-2 rounded-xl duration-600 hover:translate-y-[-2px] text-left'
            >
              Início
            </button>
            <button 
              onClick={() => {
                scrollToSection('details'); // Aqui você chama a função
                setIsMenuOpen(false);
              }}
              className='text-gray-200 hover:text-purple-700 transition-all font-medium hover:bg-white p-2 rounded-xl duration-600 hover:translate-y-[-2px] text-left cursor-pointer'
            >
              Recursos
            </button>
            <button 
              onClick={() => {
                scrollToSection('guide'); // Aqui você chama a função
                setIsMenuOpen(false);
              }}
              className='text-gray-200 hover:text-purple-700 transition-all font-medium hover:bg-white p-2 rounded-xl duration-600 hover:translate-y-[-2px] text-left cursor-pointer'
            >
              Como Funciona
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

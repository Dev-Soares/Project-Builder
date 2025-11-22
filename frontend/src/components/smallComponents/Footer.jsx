import { useNavigate } from "react-router-dom"

const Footer = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full bg-linear-to-br from-purple-950 to-purple-800 text-white'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-8 p-8 lg:p-16 max-w-7xl mx-auto'>
                
                <div className='flex flex-col gap-4 lg:max-w-[30%]'>
                    <h3 className='text-2xl font-bold'>DiagramBuilder</h3>
                    
                    <div className='flex gap-4 mt-2'>
                        <a href="#" className='hover:text-purple-300 transition-colors'>
                            <span className="material-symbols-outlined text-3xl">code</span>
                        </a>
                        <a href="#" className='hover:text-purple-300 transition-colors'>
                            <span className="material-symbols-outlined text-3xl">cloud</span>
                        </a>
                        <a href="#" className='hover:text-purple-300 transition-colors'>
                            <span className="material-symbols-outlined text-3xl">storage</span>
                        </a>
                    </div>
                </div>

                
                <div className='flex flex-col gap-3'>
                    <h4 className='text-lg font-semibold mb-2'>Links Rápidos</h4>
                    <button 
                        onClick={() => navigate('/')} 
                        className='text-gray-300 hover:text-white text-left transition-colors'
                    >
                        Início
                    </button>
                    <button 
                        onClick={() => navigate('/architecture')} 
                        className='text-gray-300 hover:text-white text-left transition-colors'
                    >
                        Criar Diagrama
                    </button>
                    <a href="#details" className='text-gray-300 hover:text-white transition-colors'>
                        Recursos
                    </a>
                    <a href="#guide" className='text-gray-300 hover:text-white transition-colors'>
                        Como Funciona
                    </a>
                </div>

                
                <div className='flex flex-col gap-3'>
                    <h4 className='text-lg font-semibold mb-2'>Recursos</h4>
                    <a href="#" className='text-gray-300 hover:text-white transition-colors'>
                        Documentação
                    </a>
                    <a href="#" className='text-gray-300 hover:text-white transition-colors'>
                        Suporte
                    </a>
                    <a href="#" className='text-gray-300 hover:text-white transition-colors'>
                        API
                    </a>
                    <a href="#" className='text-gray-300 hover:text-white transition-colors'>
                        Blog
                    </a>
                </div>

                
                <div className='flex flex-col gap-3'>
                    <h4 className='text-lg font-semibold mb-2'>Contato</h4>
                    <a href="mailto:contato@example.com" className='text-gray-300 hover:text-white transition-colors flex items-center gap-2'>
                        <span className="material-symbols-outlined">mail</span>
                        contato@example.com
                    </a>
                    <a href="#" className='text-gray-300 hover:text-white transition-colors flex items-center gap-2'>
                        <span className="material-symbols-outlined">location_on</span>
                        Brasil
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-purple-700 py-6'>
                <div className='max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300'>
                    <p>© {currentYear} DiagramBuilder.  Todos os direitos reservados.</p>
                    <div className='flex gap-6'>
                        <a href="#" className='hover:text-white transition-colors'>Privacidade</a>
                        <a href="#" className='hover:text-white transition-colors'>Termos de Uso</a>
                        <a href="#" className='hover:text-white transition-colors'>Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

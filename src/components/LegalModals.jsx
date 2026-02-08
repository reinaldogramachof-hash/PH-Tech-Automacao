import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export function LegalModals({ activeModal, onClose }) {
    if (!activeModal) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-950">
                        <h2 className="text-xl font-bold text-white">
                            {activeModal === 'terms' ? 'Termos de Uso' : 'Política de Privacidade'}
                        </h2>
                        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-6 overflow-y-auto text-slate-300 space-y-4 leading-relaxed">
                        {activeModal === 'terms' ? (
                            <>
                                <p>Bem-vindo ao site da PH Tech Automação.</p>
                                <h3 className="text-white font-semibold mt-4">1. Aceitação dos Termos</h3>
                                <p>Ao acessar e utilizar este site, você aceita e concorda em estar vinculado aos termos e disposições deste acordo.</p>
                                <h3 className="text-white font-semibold mt-4">2. Uso do Site</h3>
                                <p>O conteúdo deste site é para sua informação geral e uso. Está sujeito a alterações sem aviso prévio.</p>
                                <h3 className="text-white font-semibold mt-4">3. Propriedade Intelectual</h3>
                                <p>Este site contém material que é de propriedade ou licenciado para nós. Este material inclui, mas não se limita a, design, layout, aparência e gráficos.</p>
                            </>
                        ) : (
                            <>
                                <p>A sua privacidade é importante para nós.</p>
                                <h3 className="text-white font-semibold mt-4">1. Coleta de Informações</h3>
                                <p>Coletamos informações que você nos fornece diretamente, como quando você solicita um orçamento ou entra em contato conosco.</p>
                                <h3 className="text-white font-semibold mt-4">2. Uso das Informações</h3>
                                <p>Usamos as informações coletadas para fornecer, manter e melhorar nossos serviços, além de responder aos seus comentários e perguntas.</p>
                                <h3 className="text-white font-semibold mt-4">3. Cookies</h3>
                                <p>Utilizamos cookies para melhorar a funcionalidade do site e a sua experiência de navegação.</p>
                            </>
                        )}
                    </div>

                    <div className="p-6 border-t border-white/5 bg-slate-950 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                        >
                            Fechar
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

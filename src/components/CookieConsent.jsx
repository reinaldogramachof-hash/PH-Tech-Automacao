import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie } from 'lucide-react'

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('phtech_cookie_consent')
        if (!consent) {
            // Delay initial show
            const timer = setTimeout(() => setIsVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('phtech_cookie_consent', 'true')
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 w-full bg-slate-900 border-t border-white/10 p-4 md:p-6 z-40 shadow-2xl"
                >
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-sky-500/10 p-3 rounded-full hidden md:block">
                                <Cookie className="text-sky-500 w-6 h-6" />
                            </div>
                            <p className="text-slate-300 text-sm md:text-base">
                                Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{' '}
                                <a href="#terms" className="text-sky-400 hover:underline">Política de Privacidade</a>.
                            </p>
                        </div>

                        <button
                            onClick={handleAccept}
                            className="px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition-colors whitespace-nowrap w-full md:w-auto"
                        >
                            Aceitar e Continuar
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

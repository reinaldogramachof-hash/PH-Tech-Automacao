import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { CookieConsent } from './components/CookieConsent'
import { LegalModals } from './components/LegalModals'
import { BudgetModal } from './components/BudgetModal'
import { useState, useEffect } from 'react'

function App() {
    const [activeModal, setActiveModal] = useState(null)
    const [isBudgetOpen, setIsBudgetOpen] = useState(false)

    useEffect(() => {
        // Expose openModal to window for Footer/Header access
        window.openModal = (modalName) => {
            if (modalName === 'budget') {
                setIsBudgetOpen(true)
            } else {
                setActiveModal(modalName)
            }
        }
        return () => delete window.openModal
    }, [])

    return (
        <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-sky-500/30">
            <Header />
            <main>
                <Hero />
                <Services />
                <Testimonials />
            </main>
            <Footer />
            <WhatsAppButton />
            <CookieConsent />
            <LegalModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
            <BudgetModal isOpen={isBudgetOpen} onClose={() => setIsBudgetOpen(false)} />
        </div>
    )
}

export default App

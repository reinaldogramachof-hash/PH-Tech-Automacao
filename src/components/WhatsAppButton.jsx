import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5512974029717?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20automa%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-green-500/30 flex items-center justify-center transition-all hover:scale-110 animate-bounce-slow"
            aria-label="Fale conosco no WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    )
}

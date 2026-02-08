import { Instagram, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <img
                            src="/logosite.png"
                            alt="PH Tech Automação"
                            className="h-24 w-auto mb-4"
                        />
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Transformando espaços com tecnologia inteligente. Soluções personalizadas em automação residencial e corporativa.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/ph.tech_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-slate-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all group"
                            >
                                <Instagram size={20} />
                                <span className="text-sm font-medium">@ph.tech_</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Navegação</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#home" className="hover:text-sky-400 transition-colors">Início</a></li>
                            <li><a href="#about" className="hover:text-sky-400 transition-colors">Sobre Nós</a></li>
                            <li><a href="#services" className="hover:text-sky-400 transition-colors">Serviços</a></li>
                            <li><a href="#projects" className="hover:text-sky-400 transition-colors">Projetos</a></li>
                            <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Soluções</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Automação Residencial</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Home Theater & Áudio</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Segurança Inteligente</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Rede Wi-Fi de Alta Performance</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Iluminação Automatizada</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contato</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-sky-500 shrink-0" />
                                <span>São José dos Campos - SP<br />Vale do Paraíba</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-sky-500 shrink-0" />
                                <a href="https://wa.me/5512974029717?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20automa%C3%A7%C3%A3o." target="_blank" className="hover:text-white transition-colors">(12) 97402-9717</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-sky-500 shrink-0" />
                                <a href="mailto:automacao@phtechsjc.com.br" className="hover:text-white transition-colors">automacao@phtechsjc.com.br</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} PH Tech Automação. Todos os direitos reservados.</p>

                    <div className="flex gap-6">
                        <button onClick={() => window.openModal('terms')} className="hover:text-sky-500 transition-colors">Termos de Uso</button>
                        <button onClick={() => window.openModal('privacy')} className="hover:text-sky-500 transition-colors">Política de Privacidade</button>
                    </div>

                    <p className="flex items-center gap-1">
                        Desenvolvido por
                        <a
                            href="https://www.plenainformatica.com.br/tecnologia.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-500/80 hover:text-sky-400 transition-colors"
                        >
                            Plena Informática
                        </a>
                    </p>
                </div>
            </div>
        </footer >
    )
}

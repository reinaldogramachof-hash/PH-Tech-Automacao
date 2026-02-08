import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Smartphone } from 'lucide-react'

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-x-0 bottom-0 top-32 md:top-44 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950 z-10" />
                <img
                    src="/hero-dashboard.jpg"
                    alt="Smart Home Dashboard"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
                            Automação Residencial e Corporativa
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Transforme seu ambiente com <span className="text-sky-500">Tecnologia Inteligente</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Controle iluminação, áudio, vídeo e segurança na palma da sua mão.
                            Conforto, economia e sofisticação para sua casa ou empresa.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={() => window.openModal('budget')}
                            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-sky-500/25 flex items-center justify-center gap-2"
                        >
                            Fazer Orçamento <ArrowRight size={20} />
                        </button>
                        <a
                            href="#services"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm"
                        >
                            Conhecer Soluções
                        </a>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {[
                            { icon: Smartphone, title: 'Controle Total', desc: 'App intuitivo para gerenciar tudo' },
                            { icon: Shield, title: 'Segurança', desc: 'Monitoramento 24h integrado' },
                            { icon: Zap, title: 'Eficiência', desc: 'Economia de energia automatizada' },
                        ].map((feature, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors text-left">
                                <feature.icon className="w-10 h-10 text-sky-500 mb-4" />
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

import { motion } from 'framer-motion'

const services = [
    {
        title: 'Iluminação Inteligente',
        desc: 'Crie cenas, agende horários e controle a intensidade das luzes por comando de voz ou app.',
        image: '/service-lighting.jpg',
    },
    {
        title: 'Áudio & Vídeo',
        desc: 'Home Theater e som ambiente integrados para uma experiência de cinema no conforto do seu lar.',
        image: '/service-audio.jpg',
    },
    {
        title: 'Segurança Avançada',
        desc: 'Câmeras, sensores e fechaduras digitais integrados para proteção total da sua família.',
        image: '/service-security.jpg',
    },
    {
        title: 'Cortinas Automatizadas',
        desc: 'Aproveite a luz natural com elegância e praticidade. Controle a abertura das cortinas automaticamente.',
        image: '/service-curtains.jpg',
    },
]

export function Services() {
    return (
        <section id="services" className="py-24 bg-slate-950 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Nossas Soluções</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
                        Tecnologia para cada detalhe
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Integramos os melhores sistemas para proporcionar conforto, segurança e entretenimento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

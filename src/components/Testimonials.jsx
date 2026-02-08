import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Ana Silva',
        role: 'Arquiteta',
        image: '/testimonial-ana.jpg',
        content: 'A PH Tech transformou meus projetos. A integração da iluminação com a automação é impecável. Recomendo a todos os meus clientes.',
    },
    {
        name: 'Carlos Mendes',
        role: 'Empresário',
        image: '/testimonial-carlos.jpg',
        content: 'Segurança e praticidade definem. Consigo monitorar minha empresa e minha casa pelo celular de onde estiver. O atendimento é nota 10.',
    },
    {
        name: 'Maria Oliveira',
        role: 'Designer de Interiores',
        image: '/testimonial-maria.jpg',
        content: 'O sistema de áudio multiroom é fantástico. A instalação foi super limpa e o resultado final superou minhas expectativas.',
    },
]

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Depoimentos</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">O que dizem nossos clientes</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-950 p-8 rounded-2xl border border-white/5 shadow-xl relative"
                        >
                            <Quote className="absolute top-6 right-6 text-sky-500/20 w-12 h-12" />

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-sky-500"
                                />
                                <div>
                                    <h4 className="text-white font-bold">{item.name}</h4>
                                    <p className="text-sky-400 text-sm">{item.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-slate-300 italic leading-relaxed">
                                "{item.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

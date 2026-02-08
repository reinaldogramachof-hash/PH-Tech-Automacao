import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    X, Check, ArrowRight, Smartphone, Home, Building,
    Hammer, Paintbrush, HardHat, Sofa,
    Lightbulb, Speaker, Projector, Shield, Wifi, VenetianMask, Thermometer, Zap
} from 'lucide-react'

export function BudgetModal({ isOpen, onClose }) {
    const [step, setStep] = useState(1)
    const totalSteps = 4 // Tipo -> Estágio -> Serviços -> Identificação

    const [formData, setFormData] = useState({
        type: '', // residencial, corporativo
        stage: '', // planta, obra, reforma, pronto
        services: [],
        name: ''
    })

    // --- CONFIGURAÇÃO DOS DADOS ---
    const projectTypes = [
        { id: 'residencial', label: 'Residencial', icon: Home, desc: 'Casa ou Apartamento' },
        { id: 'corporativo', label: 'Corporativo', icon: Building, desc: 'Escritório ou Comércio' },
    ]

    const projectStages = [
        { id: 'planta', label: 'Na Planta', icon: Paintbrush, desc: 'Ainda não iniciei a obra' },
        { id: 'obra', label: 'Em Obras', icon: HardHat, desc: 'Construção em andamento' },
        { id: 'reforma', label: 'Reforma', icon: Hammer, desc: 'Reformando imóvel pronto' },
        { id: 'pronto', label: 'Imóvel Pronto', icon: Sofa, desc: 'Pequenas adaptações' },
    ]

    const servicesList = [
        { id: 'iluminacao', label: 'Iluminação', icon: Lightbulb },
        { id: 'audio', label: 'Som Ambiente', icon: Speaker },
        { id: 'cinema', label: 'Home Cinema', icon: Projector },
        { id: 'rede', label: 'Rede Wi-Fi', icon: Wifi },
        { id: 'seguranca', label: 'Segurança', icon: Shield },
        { id: 'climatizacao', label: 'Climatização', icon: Thermometer },
        { id: 'cortinas', label: 'Cortinas', icon: VenetianMask },
        { id: 'energia', label: 'Energia', icon: Zap },
    ]

    // --- LÓGICA ---
    const handleServiceToggle = (id) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(id)
                ? prev.services.filter(item => item !== id)
                : [...prev.services, id]
        }))
    }

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1)
    }

    const handleBack = () => {
        if (step > 1) setStep(step - 1)
    }

    const handleSendWhatsApp = () => {
        const servicesText = formData.services.map(s => servicesList.find(i => i.id === s)?.label).join(', ')
        const stageText = projectStages.find(s => s.id === formData.stage)?.label
        const typeText = projectTypes.find(t => t.id === formData.type)?.label

        const message =
            `Olá PH Tech!\n` +
            `Gostaria de solicitar um orçamento personalizado.\n\n` +
            `*Nome:* ${formData.name}\n` +
            `*Tipo:* ${typeText}\n` +
            `*Estágio:* ${stageText}\n` +
            `*Interesses:* ${servicesText || 'A definir'}`

        window.open(`https://wa.me/5512974029717?text=${encodeURIComponent(message)}`, '_blank')
        onClose()

        // Reset após envio
        setTimeout(() => {
            setStep(1)
            setFormData({ type: '', stage: '', services: [], name: '' })
        }, 1000)
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
            >
                <motion.div
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                    className="bg-slate-900/80 border border-white/10 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] relative"
                >
                    {/* Background Glow Effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

                    {/* Header & Progress */}
                    <div className="px-8 pt-8 pb-4">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-1">Configurar Orçamento</h2>
                                <p className="text-slate-400 text-sm">Personalize sua experiência de automação</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-sky-400 to-blue-600"
                                initial={{ width: 0 }}
                                animate={{ width: `${(step / totalSteps) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>

                    {/* Body Content */}
                    <div className="flex-1 overflow-y-auto px-8 py-4">

                        {/* STEP 1: CONTEXTO */}
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <h3 className="text-lg text-white font-medium mb-6">Qual o perfil do imóvel?</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {projectTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setFormData({ ...formData, type: type.id })}
                                            className={`relative group p-6 rounded-2xl border transition-all duration-300 text-left hover:scale-[1.02] ${formData.type === type.id
                                                ? 'bg-sky-500/20 border-sky-500 shadow-[0_0_30px_rgba(14,165,233,0.2)]'
                                                : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                                                }`}
                                        >
                                            <div className={`p-3 rounded-xl w-fit mb-4 transition-colors ${formData.type === type.id ? 'bg-sky-500 text-white' : 'bg-white/10 text-slate-300 group-hover:bg-white/20 group-hover:text-white'
                                                }`}>
                                                <type.icon size={28} />
                                            </div>
                                            <h4 className={`text-lg font-bold mb-1 ${formData.type === type.id ? 'text-white' : 'text-slate-200'}`}>
                                                {type.label}
                                            </h4>
                                            <p className="text-sm text-slate-400">{type.desc}</p>

                                            {formData.type === type.id && (
                                                <div className="absolute top-4 right-4 text-sky-500">
                                                    <Check size={20} />
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: ESTÁGIO DA OBRA */}
                        {step === 2 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <h3 className="text-lg text-white font-medium mb-6">Em que fase está o projeto?</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {projectStages.map((stage) => (
                                        <button
                                            key={stage.id}
                                            onClick={() => setFormData({ ...formData, stage: stage.id })}
                                            className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.01] ${formData.stage === stage.id
                                                ? 'bg-sky-500/20 border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.15)]'
                                                : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                                                }`}
                                        >
                                            <div className={`p-2 rounded-lg ${formData.stage === stage.id ? 'bg-sky-500 text-white' : 'bg-white/10 text-slate-400'
                                                }`}>
                                                <stage.icon size={24} />
                                            </div>
                                            <div className="text-left">
                                                <h4 className={`font-semibold ${formData.stage === stage.id ? 'text-white' : 'text-slate-200'}`}>
                                                    {stage.label}
                                                </h4>
                                                <p className="text-xs text-slate-400">{stage.desc}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: SERVIÇOS */}
                        {step === 3 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <h3 className="text-lg text-white font-medium mb-6">O que deseja automatizar?</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {servicesList.map((service) => (
                                        <button
                                            key={service.id}
                                            onClick={() => handleServiceToggle(service.id)}
                                            className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 aspect-square ${formData.services.includes(service.id)
                                                ? 'bg-sky-500/20 border-sky-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                                                : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20 hover:text-slate-200'
                                                }`}
                                        >
                                            <service.icon size={28} className="mb-3" />
                                            <span className="text-xs font-medium text-center">{service.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: IDENTIFICAÇÃO */}
                        {step === 4 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <h3 className="text-lg text-white font-medium mb-6">Para finalizar, como podemos te chamar?</h3>
                                <div className="mb-8">
                                    <label className="block text-sm text-sky-400 font-medium mb-2 uppercase tracking-wider">Seu Nome / Empresa</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-5 text-white text-lg placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                                        placeholder="Digite seu nome..."
                                        autoFocus
                                    />
                                </div>

                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                                    <h4 className="text-sm font-semibold text-slate-300 border-b border-white/10 pb-2">Resumo do Pedido:</h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-slate-500 block text-xs uppercase">Imóvel</span>
                                            <span className="text-white font-medium">
                                                {projectTypes.find(t => t.id === formData.type)?.label}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-slate-500 block text-xs uppercase">Estágio</span>
                                            <span className="text-white font-medium">
                                                {projectStages.find(s => s.id === formData.stage)?.label}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 block text-xs uppercase mb-1">Interesses</span>
                                        <div className="flex flex-wrap gap-2">
                                            {formData.services.length > 0 ? formData.services.map(s => (
                                                <span key={s} className="px-2 py-1 rounded-md bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/20">
                                                    {servicesList.find(i => i.id === s)?.label}
                                                </span>
                                            )) : <span className="text-slate-500 italic">Nenhum selecionado</span>}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Footer Actions */}
                    <div className="p-8 border-t border-white/5 bg-slate-950/50 flex justify-between items-center backdrop-blur-sm">
                        <button
                            onClick={handleBack}
                            disabled={step === 1}
                            className={`text-slate-400 hover:text-white text-sm font-medium px-4 py-2 transition-opacity ${step === 1 ? 'opacity-0 cursor-default' : 'opacity-100'}`}
                        >
                            Voltar
                        </button>

                        {step < totalSteps ? (
                            <button
                                onClick={handleNext}
                                disabled={(step === 1 && !formData.type) || (step === 2 && !formData.stage)}
                                className="group bg-sky-500 hover:bg-sky-600 disabled:opacity-30 disabled:hover:bg-sky-500 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
                            >
                                Continuar <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        ) : (
                            <button
                                onClick={handleSendWhatsApp}
                                disabled={!formData.name}
                                className="group bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-105"
                            >
                                <Smartphone size={20} />
                                Solicitar Orçamento
                            </button>
                        )}
                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

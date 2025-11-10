import { motion, useMotionValue, useSpring, useTransform, useScroll, useAnimationFrame } from 'framer-motion'
import { ArrowRight, Shield, Star, Clock, PhoneCall, CheckCircle2, FileText, Receipt, Calculator, Building2, ClipboardCheck } from 'lucide-react'
import { useEffect, useRef } from 'react'

const primary = '#042938'
const accent = '#96D4FF'

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[138px] sm:w-[180px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="275" height="62" viewBox="0 0 275 62" fill="none" className="w-full h-auto">
          <path d="M260.993 21.7009C259.659 21.7009 258.455 21.9329 257.381 22.3959C256.306 22.8599 255.398 23.4889 254.658 24.2849C253.916 25.0819 253.342 26.0459 252.935 27.1749C252.527 28.3059 252.323 29.5369 252.323 30.8709C252.323 32.2049 252.527 33.4369 252.935 34.5669C253.342 35.6969 253.916 36.6609 254.658 37.4569C255.398 38.2539 256.306 38.8829 257.381 39.3459C258.455 39.8099 259.659 40.0409 260.993 40.0409C262.327 40.0409 263.53 39.8099 264.605 39.3459C265.68 38.8829 266.587 38.2539 267.329 37.4569C268.07 36.6609 268.644 35.6969 269.052 34.5669C269.459 33.4369 269.663 32.2049 269.663 30.8709C269.663 29.5369 269.459 28.3059 269.052 27.1749C268.644 26.0459 268.07 25.0819 267.329 24.2849C266.587 23.4889 265.68 22.8599 264.605 22.3959C263.53 21.9329 262.327 21.7009 260.993 21.7009ZM247.322 17.6999L251.681 15.9729C251.989 15.8509 252.323 16.0779 252.323 16.4089V20.3589C252.323 20.7709 252.815 20.9839 253.114 20.6999C253.962 19.8979 255.33 18.6969 256.408 18.1999C258.094 17.4219 259.826 17.0329 261.605 17.0329C263.642 17.0329 265.485 17.3849 267.134 18.0889C268.782 18.7929 270.191 19.7749 271.358 21.0339C272.525 22.2939 273.423 23.7669 274.053 25.4519C274.683 27.1389 274.998 28.9449 274.998 30.8709C274.998 32.8349 274.683 34.6599 274.053 36.3449C273.423 38.0319 272.525 39.4949 271.358 40.7359C270.191 41.9779 268.782 42.9499 267.134 43.6539C265.485 44.3569 263.642 44.7089 261.605 44.7089C259.715 44.7089 257.936 44.3109 256.269 43.5149C255.222 43.0149 253.934 41.8599 253.12 41.0709C252.822 40.7809 252.323 40.9909 252.323 41.4069V59.7149L247.974 61.5549C247.664 61.6859 247.322 61.4579 247.322 61.1219V17.6999Z" fill="white"/>
          <path d="M214.088 4.69458V28.8146C214.088 30.0376 214.254 31.3066 214.588 32.6216C214.921 33.9376 215.477 35.1506 216.255 36.2616C217.034 37.3736 218.052 38.2816 219.312 38.9846C220.571 39.6896 222.127 40.0406 223.98 40.0406C225.832 40.0406 227.388 39.6896 228.648 38.9846C229.908 38.2816 230.927 37.3736 231.706 36.2616C232.484 35.1506 233.039 33.9376 233.373 32.6216C233.706 31.3066 233.873 30.0376 233.873 28.8146V4.69458H239.208V29.6486C239.208 31.9456 238.819 34.0306 238.041 35.9006C237.263 37.7716 236.188 39.3936 234.817 40.7636C233.446 42.1346 231.835 43.1906 229.982 43.9316C228.129 44.6726 226.128 45.0426 223.98 45.0426C221.831 45.0426 219.83 44.6726 217.978 43.9316C216.125 43.1906 214.514 42.1346 213.143 40.7636C211.772 39.3936 210.698 37.7716 209.92 35.9006C209.142 34.0306 208.753 31.9456 208.753 29.6486V4.69458H214.088Z" fill="white"/>
          <path d="M186.968 40.041C188.302 40.041 189.505 39.81 190.58 39.346C191.654 38.883 192.562 38.254 193.303 37.457C194.044 36.661 194.619 35.697 195.026 34.567C195.434 33.437 195.638 32.205 195.638 30.871C195.638 29.537 195.434 28.306 195.026 27.175C194.619 26.045 194.044 25.082 193.303 24.285C192.562 23.489 191.654 22.859 190.58 22.396C189.505 21.933 188.302 21.701 186.968 21.701C185.634 21.701 184.43 21.933 183.356 22.396C182.28 22.859 181.373 23.489 180.632 24.285C179.891 25.082 179.317 26.045 178.909 27.175C178.502 28.306 178.298 29.537 178.298 30.871C178.298 32.205 178.502 33.437 178.909 34.567C179.317 35.697 179.891 36.661 180.632 37.457C181.373 38.254 182.28 38.883 183.356 39.346C184.43 39.81 185.634 40.041 186.968 40.041ZM200.639 44.042L196.302 46.015C195.991 46.156 195.638 45.929 195.638 45.588V41.384C195.638 40.971 195.146 40.758 194.847 41.042C193.999 41.844 192.63 43.045 191.553 43.542C189.867 44.32 188.135 44.709 186.357 44.709C184.318 44.709 182.475 44.357 180.826 43.653C179.178 42.95 177.77 41.968 176.603 40.708C175.436 39.449 174.537 37.985 173.908 36.317C173.277 34.65 172.963 32.835 172.963 30.871C172.963 28.908 173.277 27.083 173.908 25.397C174.537 23.711 175.436 22.248 176.603 21.006C177.77 19.765 179.178 18.793 180.826 18.088C182.475 17.385 184.318 17.033 186.357 17.033C188.246 17.033 190.025 17.431 191.692 18.227C192.739 18.728 194.027 19.882 194.841 20.672C195.139 20.961 195.638 20.751 195.638 20.336V2.027L199.975 0.0430011C200.286 -0.0989989 200.639 0.128001 200.639 0.470001V44.042Z" fill="white"/>
          <path d="M162.903 28.7037C162.865 27.5927 162.689 26.5737 162.375 25.6467C162.06 24.7217 161.587 23.9157 160.957 23.2297C160.327 22.5447 159.54 22.0067 158.595 21.6177C157.651 21.2287 156.548 21.0347 155.289 21.0347C154.066 21.0347 152.945 21.2667 151.926 21.7287C150.907 22.1927 150.046 22.7947 149.342 23.5357C148.638 24.2767 148.092 25.1007 147.703 26.0087C147.314 26.9167 147.119 27.8147 147.119 28.7037H162.903ZM147.119 32.7047C147.119 33.8537 147.37 34.9007 147.87 35.8457C148.37 36.7897 149.027 37.5957 149.843 38.2627C150.657 38.9297 151.602 39.4487 152.677 39.8187C153.751 40.1897 154.863 40.3747 156.011 40.3747C157.568 40.3747 158.92 40.0137 160.068 39.2907C161.216 38.5687 162.272 37.6147 163.236 36.4287L167.016 39.3187C164.237 42.9127 160.346 44.7097 155.344 44.7097C153.269 44.7097 151.389 44.3567 149.703 43.6537C148.017 42.9507 146.592 41.9777 145.424 40.7357C144.257 39.4947 143.358 38.0317 142.729 36.3457C142.098 34.6597 141.784 32.8357 141.784 30.8717C141.784 28.9077 142.126 27.0837 142.812 25.3967C143.497 23.7117 144.442 22.2487 145.647 21.0067C146.85 19.7657 148.286 18.7927 149.954 18.0887C151.621 17.3857 153.436 17.0327 155.4 17.0327C157.734 17.0327 159.707 17.4407 161.319 18.2557C162.931 19.0707 164.255 20.1367 165.293 21.4507C166.329 22.7667 167.08 24.2487 167.543 25.8967C168.006 27.5457 168.238 29.2227 168.238 30.9267V32.7047H147.119Z" fill="white"/>
          <path d="M93.8779 4.69458H101.826L114.33 34.4836H114.552L126.946 4.69458H134.893V44.0426H129.558V11.6976H129.446L116.164 44.0426H112.607L99.3239 11.6976H99.2129V44.0426H93.8779V4.69458Z" fill="white"/>
          <path d="M39.7595 24.4699L51.1175 42.7319C51.5525 43.4319 52.2995 44.1689 53.1235 44.1829L71.8975 44.1819C73.8175 44.2139 75.0105 42.1069 73.9965 40.4759L51.6005 4.46494C50.6515 2.93894 48.4305 2.93894 47.4815 4.46394L39.7595 16.8779C38.3145 19.2019 38.3145 22.1459 39.7595 24.4699Z" fill="#96D4FF"/>
          <path d="M34.6068 24.4699L23.2488 42.7319C22.8138 43.4319 22.0668 44.1689 21.2428 44.1829L2.46882 44.1819C0.548816 44.2139 -0.644184 42.1069 0.369816 40.4759L22.7658 4.46494C23.7148 2.93894 25.9358 2.93894 26.8848 4.46394L34.6068 16.8779C36.0518 19.2019 36.0518 22.1459 34.6068 24.4699Z" fill="#96D4FF"/>
        </svg>
      </div>
      <span className="text-white/90 tracking-widest uppercase text-xs">MedUp</span>
    </div>
  )
}

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function Badge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
         style={{ background: 'rgba(150,212,255,0.12)', color: accent, border: `1px solid ${accent}30` }}>
      <CheckCircle2 size={16} /> {children}
    </div>
  )
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <motion.div {...fadeInUp} className="mb-3">
        <Badge>{kicker}</Badge>
      </motion.div>
      <motion.h2 {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.05 }} className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="mt-4 text-white/70">
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

function GlassCard({ icon: Icon, title, desc, delay = 0, hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay }}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      className="relative rounded-2xl p-6 backdrop-blur-xl border will-change-transform"
      style={{
        background: 'linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
        borderColor: 'rgba(150,212,255,0.25)'
      }}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-xl p-3" style={{ background: `${accent}20`, color: accent }}>
          <Icon size={22} />
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-white/70 mt-1 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

function Stat({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-semibold" style={{ color: accent }}>{value}</div>
      <div className="text-white/70 mt-2 text-sm">{label}</div>
    </motion.div>
  )
}

function FloatingOrbs({ mouseX, mouseY }) {
  // Parallax orbs that follow the cursor delicately
  const x = useTransform(mouseX, [0, 1], [-15, 15])
  const y = useTransform(mouseY, [0, 1], [-15, 15])
  const xSlow = useTransform(mouseX, [0, 1], [20, -20])
  const ySlow = useTransform(mouseY, [0, 1], [10, -10])

  return (
    <div className="pointer-events-none absolute inset-0 -z-[1] overflow-hidden">
      <motion.div
        className="absolute w-[36rem] h-[36rem] rounded-full blur-3xl"
        style={{ background: `${accent}1A`, top: '-6rem', right: '-8rem', translateX: x, translateY: y }}
      />
      <motion.div
        className="absolute w-[28rem] h-[28rem] rounded-full blur-3xl"
        style={{ background: `${accent}26`, bottom: '-8rem', left: '-10rem', translateX: xSlow, translateY: ySlow }}
      />
    </div>
  )
}

function ScrollParallaxBackground() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 800], [0, -80])
  const y2 = useTransform(scrollY, [0, 800], [0, 120])
  return (
    <div className="pointer-events-none absolute inset-0 -z-[2]">
      <motion.div className="absolute inset-0" style={{ y: y1, background: `radial-gradient(1200px 800px at 70% -10%, ${accent}15, transparent 60%)` }} />
      <motion.div className="absolute inset-0" style={{ y: y2, background: `radial-gradient(1000px 700px at 0% 100%, ${accent}10, transparent 60%)` }} />
    </div>
  )
}

function HorizontalShowcase() {
  const items = [
    { Icon: ClipboardCheck, title: 'Abertura de CNPJ médica', desc: 'Processo guiado de ponta a ponta com prazos e enquadramento corretos.' },
    { Icon: Receipt, title: 'Notas e impostos', desc: 'Emissão, apuração e guias sempre em dia, com relatórios claros.' },
    { Icon: Calculator, title: 'Planejamento tributário', desc: 'Estratégias para reduzir carga tributária dentro da lei.' },
    { Icon: FileText, title: 'Relatórios inteligentes', desc: 'Visão executiva mensal para decisões rápidas e seguras.' },
    { Icon: Building2, title: 'Clínicas e grupos', desc: 'Estruturação contábil para clínicas, sociedades e multi-CNPJs.' },
  ]

  return (
    <section aria-label="Vitrine horizontal" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          kicker="Experiência fluida"
          title="Role horizontalmente para explorar"
          subtitle="Conteúdo pensado para navegação moderna: suave no mouse e na rolagem."
        />
      </div>

      <div className="mt-10 overflow-x-auto overflow-y-hidden">
        <div className="px-6 flex gap-6 w-max snap-x snap-mandatory">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="snap-start shrink-0 w-[320px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <GlassCard icon={item.Icon} title={item.title} desc={item.desc} delay={0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function App() {
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 40, mass: 0.6 })
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 40, mass: 0.6 })
  const rootRef = useRef(null)

  useEffect(() => {
    function handleMove(e) {
      const rect = rootRef.current?.getBoundingClientRect()
      const x = (e.clientX - (rect?.left || 0)) / (rect?.width || window.innerWidth)
      const y = (e.clientY - (rect?.top || 0)) / (rect?.height || window.innerHeight)
      mouseX.set(Math.min(Math.max(x, 0), 1))
      mouseY.set(Math.min(Math.max(y, 0), 1))
    }
    const el = rootRef.current
    el?.addEventListener('mousemove', handleMove)
    return () => el?.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  // Subtle global tilt based on cursor
  const tiltX = useTransform(smoothY, [0, 1], [6, -6])
  const tiltY = useTransform(smoothX, [0, 1], [-6, 6])

  // Scroll-based parallax for hero heading
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 400], [0, -40])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.85])

  return (
    <motion.div ref={rootRef} className="min-h-screen w-full overflow-x-hidden" style={{ background: `${primary}`, rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' }}>
      <ScrollParallaxBackground />

      {/* Top nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/0">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#servicos" className="text-white/80 hover:text-white transition">Serviços</a>
            <a href="#sobre" className="text-white/80 hover:text-white transition">Sobre</a>
            <a href="#contato" className="text-white/80 hover:text-white transition">Contato</a>
            <a href="/test" className="text-white/60 hover:text-white transition">Status</a>
          </div>
          <a href="https://wa.me/5599999999999" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" style={{ background: accent, color: primary }}>
            Agende uma consultoria <ArrowRight size={16} className="transition -mr-1 group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <FloatingOrbs mouseX={smoothX} mouseY={smoothY} />

        <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-20 sm:pb-28">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <motion.div {...fadeInUp} className="flex items-center gap-3 mb-6">
              <Badge>Escritório de contabilidade para médicos</Badge>
            </motion.div>

            <motion.h1 {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.05 }} className="text-4xl sm:text-6xl font-semibold tracking-tight text-white max-w-4xl">
              Você cuida de vidas, nós cuidamos de você.
            </motion.h1>
            <motion.p {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="mt-6 text-white/75 max-w-2xl text-lg leading-relaxed">
              A MedUp é especializada em atender profissionais da saúde com comodidade e serviço de altíssima qualidade. Simplificamos sua gestão financeira com discrição, precisão e atendimento premium.
            </motion.p>

            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.15 }} className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5599999999999" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium" style={{ background: accent, color: primary }}>
                Falar no WhatsApp
                <ArrowRight size={18} className="transition -mr-1 group-hover:translate-x-0.5" />
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium border border-white/20 text-white/90 hover:text-white transition" style={{ background: 'rgba(255,255,255,0.06)' }}>
                Ver serviços
              </a>
            </motion.div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <Stat value="+450" label="médicos atendidos" />
              <Stat value="< 2h" label="tempo médio de resposta" delay={0.05} />
              <Stat value="99%" label="satisfação" delay={0.1} />
            </div>
          </motion.div>
        </div>

        {/* Subtle downward indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs select-none">role para ver mais</div>
      </section>

      {/* Services */}
      <section id="servicos" className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            kicker="Serviços exclusivos"
            title="Comodidade e precisão em cada detalhe"
            subtitle="Cuidamos da sua contabilidade com processos digitais, atendimento humano e total conformidade regulatória."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard
              icon={Shield}
              title="Compliance e segurança"
              desc="Operamos com rigor técnico e sigilo absoluto. Relatórios claros, obrigações em dia e tranquilidade para você focar no consultório."
              delay={0.05}
            />
            <GlassCard
              icon={Clock}
              title="Tudo sem burocracia"
              desc="Atendimento remoto, processos eletrônicos e assinatura digital para você resolver tudo de onde estiver."
              delay={0.1}
            />
            <GlassCard
              icon={Star}
              title="Atendimento premium"
              desc="Canais dedicados e acompanhamento proativo. Você sempre um passo à frente nas decisões financeiras."
              delay={0.15}
            />
          </div>

          {/* Parallax highlight banner */}
          <ParallaxHighlight />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl p-8 backdrop-blur-xl border" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))', borderColor: 'rgba(150,212,255,0.25)' }}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-white text-2xl font-semibold">Especialistas no setor de saúde</h3>
                  <p className="text-white/70 mt-2 max-w-2xl">Entendemos as particularidades de consultórios, clínicas e plantões. Planejamento tributário, pró-labore, folhas, NF de serviços médicos e muito mais.</p>
                </div>
                <a href="https://wa.me/5599999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium" style={{ background: accent, color: primary }}>
                  Agendar diagnóstico gratuito
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="rounded-2xl p-8 backdrop-blur-xl border" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))', borderColor: 'rgba(150,212,255,0.25)' }}>
              <h4 className="text-white text-lg font-semibold">O que incluímos</h4>
              <ul className="mt-4 space-y-3 text-white/80 text-sm">
                {[
                  'Abertura e regularização de CNPJ',
                  'Emissão de notas e apuração de impostos',
                  'Folha de pagamento e pró-labore',
                  'Relatórios mensais inteligentes',
                  'Atendimento por WhatsApp e e-mail',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5" size={18} style={{ color: accent }} /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <HorizontalShowcase />

      {/* About */}
      <section id="sobre" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <h3 className="text-3xl sm:text-4xl font-semibold text-white">Moderno, luxuoso e de ponta</h3>
            <p className="text-white/70 mt-4 leading-relaxed">Nossa experiência une tecnologia e atendimento boutique. Painéis claros, relatórios em tempo real e uma equipe dedicada a simplificar a sua rotina – sem ruído, sem burocracia, sem stress.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <GlassCard icon={Shield} title="Sigilo absoluto" desc="Dados protegidos e processos auditáveis de ponta a ponta." />
              <GlassCard icon={Clock} title="Agilidade real" desc="Respostas rápidas e prazos cumpridos, sempre." />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border" style={{ borderColor: 'rgba(150,212,255,0.25)' }}>
              <div className="absolute inset-0" style={{
                background: `linear-gradient(120deg, ${primary}, ${primary})`,
              }} />
              <div className="absolute inset-0 opacity-60" style={{ background: `radial-gradient(120% 80% at 20% 10%, ${accent}25, transparent 50%), radial-gradient(120% 80% at 80% 90%, ${accent}25, transparent 50%)` }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="scale-90">
                  <Logo />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contato" className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl p-10 sm:p-14 backdrop-blur-xl border text-center" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))', borderColor: 'rgba(150,212,255,0.25)' }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute -top-24 -left-10 w-[28rem] h-[28rem] rounded-full blur-3xl"
              style={{ background: `${accent}20` }}
            />
            <SectionTitle
              kicker="Fale com a MedUp"
              title="Eleve sua contabilidade a um novo padrão"
              subtitle="Conte com um time que entende a realidade do dia a dia médico. Agende uma conversa e dê o próximo passo."
            />
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/5599999999999" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium" style={{ background: accent, color: primary }}>
                Conversar no WhatsApp
                <PhoneCall size={18} />
              </a>
              <a href="mailto:contato@medup.com" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium border border-white/20 text-white/90 hover:text-white transition" style={{ background: 'rgba(255,255,255,0.06)' }}>
                contato@medup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-28 opacity-90">
              <Logo />
            </div>
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} MedUp. Todos os direitos reservados.</p>
          </div>
          <div className="text-white/60 text-sm flex items-center gap-6">
            <a className="hover:text-white transition" href="#servicos">Serviços</a>
            <a className="hover:text-white transition" href="#sobre">Sobre</a>
            <a className="hover:text-white transition" href="#contato">Contato</a>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

function ParallaxHighlight() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const x = useTransform(scrollYProgress, [0, 1], [-20, 20])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className="mt-10 relative">
      <motion.div
        aria-hidden
        className="absolute -inset-x-6 -top-6 h-40 rounded-3xl blur-2xl"
        style={{ background: `${accent}26`, y, x, opacity }}
      />
    </div>
  )
}

export default App

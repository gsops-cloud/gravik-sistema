import { Link } from 'react-router-dom'
import dashboardShot from '../assets/screens/dashboard.webp'
import faturasShot from '../assets/screens/faturas.webp'
import orcamentosShot from '../assets/screens/orcamentos.webp'

const GITHUB_URL = 'https://github.com/gsops-cloud/gravik-sistema'

const iconProps = {
  width: 22,
  height: 22,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

const FEATURES = [
  {
    titulo: 'Orçamentos precisos',
    texto: 'Calcule por metro quadrado ou unidade, personalize o documento e envie ao cliente em poucos cliques.',
    icon: <svg {...iconProps} viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></svg>,
  },
  {
    titulo: 'Faturas e pagamentos',
    texto: 'Transforme orçamentos em faturas, acompanhe pagamentos parciais e facilite a cobrança com PIX.',
    icon: <svg {...iconProps} viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></svg>,
  },
  {
    titulo: 'Produção organizada',
    texto: 'Visualize cada pedido no kanban e acompanhe as etapas da arte à entrega.',
    icon: <svg {...iconProps} viewBox="0 0 24 24"><rect x="3" y="3" width="5" height="18" rx="1" /><rect x="10" y="3" width="5" height="12" rx="1" /><rect x="17" y="3" width="5" height="8" rx="1" /></svg>,
  },
  {
    titulo: 'Clientes e catálogo',
    texto: 'Mantenha contatos, produtos e serviços em um só lugar, prontos para o próximo orçamento.',
    icon: <svg {...iconProps} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  },
  {
    titulo: 'Financeiro em dia',
    texto: 'Tenha contas a pagar e receber, vencimentos e fluxo financeiro em uma visão clara.',
    icon: <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5" /></svg>,
  },
  {
    titulo: 'Indicadores e relatórios',
    texto: 'Acompanhe resultados e movimentações para tomar decisões com mais contexto.',
    icon: <svg {...iconProps} viewBox="0 0 24 24"><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></svg>,
  },
]

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black tracking-tight text-white shadow-lg shadow-blue-600/20">
        g.
      </span>
      {!compact && <span className="text-xl font-bold tracking-tight text-slate-950">gravik</span>}
    </span>
  )
}

function FeatureCard({ icon, titulo, texto }: { icon: React.ReactNode; titulo: string; texto: string }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{titulo}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{texto}</p>
    </article>
  )
}

function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] animate-[fade-up_0.7s_ease-out_both]">
      <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl shadow-slate-950/40">
        <div className="flex h-12 items-center gap-2 border-b border-slate-200 bg-white px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 flex-1 rounded-md bg-slate-100 px-3 py-1 text-left text-[11px] text-slate-500">app.gravik.com.br</span>
        </div>
        <img
          src={dashboardShot}
          alt="Prévia do painel de gestão Gravik com indicadores, recebimentos e orçamentos"
          loading="eager"
          decoding="async"
          width={1440}
          height={900}
          className="block w-full"
        />
      </div>
      <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xl sm:flex">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
          <svg {...iconProps} viewBox="0 0 24 24"><path d="M20 7 10 17l-5-5" /><path d="M12 22a10 10 0 1 0-10-10" /></svg>
        </span>
        <span><span className="block text-xs font-semibold text-slate-950">Tudo conectado</span><span className="mt-0.5 block text-[11px] text-slate-500">Do orçamento ao recebimento</span></span>
      </div>
    </div>
  )
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" aria-label="Gravik — início"><BrandMark /></a>
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
            <a href="#recursos" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">Recursos</a>
            <a href="#visao" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">Como funciona</a>
            <a href="#seguranca" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">Segurança</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-950 sm:inline-flex">GitHub</a>
            <Link to="/login" className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
              Acessar sistema <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden bg-[#0b1220] text-white">
          <div className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-64 left-1/4 -z-10 h-[460px] w-[460px] rounded-full bg-indigo-500/10 blur-[110px]" />
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:py-32">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> GESTÃO FEITA PARA GRÁFICAS
              </span>
              <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Sua gráfica em sintonia. <span className="text-blue-400">Do orçamento à entrega.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                A Gravik reúne clientes, orçamentos, produção e financeiro em um só lugar — para você ter mais clareza em cada etapa do trabalho.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/login" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300/30">
                  Entrar na plataforma <span aria-hidden="true">→</span>
                </Link>
                <a href="#recursos" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
                  Conhecer recursos
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2"><svg {...iconProps} className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6" /></svg> Visão integrada da operação</span>
                <span className="inline-flex items-center gap-2"><svg {...iconProps} className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6" /></svg> Acesso com login</span>
              </div>
            </div>
            <ProductPreview />
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 text-xs font-medium uppercase tracking-[0.16em] text-slate-400 sm:px-8 sm:text-sm">
              <span>Orçamentos</span><span className="hidden text-blue-400 sm:inline">/</span><span>Produção</span><span className="hidden text-blue-400 sm:inline">/</span><span>Financeiro</span><span className="hidden text-blue-400 sm:inline">/</span><span>Relacionamento</span>
            </div>
          </div>
        </section>

        <section id="recursos" className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Uma plataforma, toda a operação</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Organização em cada etapa do seu trabalho</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">Menos informação espalhada. Mais visão do que está acontecendo na gráfica.</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
              {FEATURES.map((feature) => <FeatureCard key={feature.titulo} icon={feature.icon} titulo={feature.titulo} texto={feature.texto} />)}
            </div>
          </div>
        </section>

        <section id="visao" className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10 lg:order-1">
              <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2.5">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-xs font-medium text-slate-500">Fluxo de trabalho Gravik</span>
              </div>
              <div className="grid gap-3 p-3 sm:grid-cols-2">
                <img src={orcamentosShot} alt="Tela de orçamentos com status e ações de acompanhamento" loading="lazy" decoding="async" className="w-full rounded-lg border border-slate-100" />
                <img src={faturasShot} alt="Tela de faturas e acompanhamento de pagamentos" loading="lazy" decoding="async" className="w-full rounded-lg border border-slate-100 sm:mt-8" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Do início ao fim</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">O pedido avança. A informação acompanha.</h2>
              <p className="mt-5 text-base leading-7 text-slate-600">Crie o orçamento, transforme em fatura quando aprovado e acompanhe a produção e os recebimentos sem perder o contexto do cliente.</p>
              <ul className="mt-8 space-y-4">
                {['Cadastros prontos para agilizar novos pedidos', 'Etapas de produção visíveis para a equipe', 'Contas, vencimentos e recebimentos organizados'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="seguranca" className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-7 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:flex-row sm:items-center sm:p-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4M12 15v3" /></svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-slate-950">Acesso protegido e dados separados por usuário</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">A Gravik usa autenticação e políticas de acesso no banco para restringir os registros ao usuário autenticado. Cada equipe acessa seus próprios dados.</p>
            </div>
            <Link to="/login" className="shrink-0 text-sm font-semibold text-blue-700 hover:text-blue-900">Acessar com login <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="bg-[#0b1220] px-5 py-20 text-center text-white sm:px-8 sm:py-24">
          <div className="mx-auto max-w-2xl">
            <BrandMark compact />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">Sua gráfica pronta para o próximo pedido.</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">Entre na Gravik e acompanhe a operação em um só lugar.</p>
            <Link to="/login" className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500">Entrar na plataforma <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <BrandMark />
          <p className="text-center text-xs text-slate-500">Gestão para gráficas. Orçamentos, produção e financeiro em sintonia.</p>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </div>
  )
}

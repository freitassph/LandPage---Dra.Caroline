import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MapPin, Calendar, Clock, Brain, 
  Quote, ExternalLink, ArrowRight, MessageCircle, 
  Wifi, ShieldCheck, ChevronDown, ChevronUp, AlertCircle, HeartPulse,
  Phone, CheckCircle2, Instagram, Sparkles, Star, ArrowUp, Video, Lock, Map, Hourglass
} from 'lucide-react';
import FadeIn from './components/FadeIn';
import Button from './components/Button';

// Configurações Globais
const LINKS = {
  whatsapp: "https://wa.me/556333010307?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Caroline.",
  whatsappCampinas: "https://wa.me/556333010307?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20presencial%20em%20Campinas%20com%20a%20Dra.%20Caroline.",
  waitingList: "https://wa.me/556333010307?text=Olá,%20gostaria%20de%20entrar%20na%20lista%20de%20espera%20para%20o%20atendimento%20presencial%20em%20Campinas.",
  doctoralia: "https://www.doctoralia.com.br/caroline-aires-henrique-de-santana/psiquiatra/gurupi",
  instagram: "https://instagram.com/dra.carolineaireshs",
  escavador: "https://www.escavador.com/sobre/197407363/caroline-aires-de-santana"
};

// Componente isolado da Imagem Hero para reutilização responsiva
const HeroImage: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative w-[280px] h-[320px] sm:w-[350px] sm:h-[400px] md:w-[450px] md:h-[520px] lg:w-[500px] lg:h-[600px] animate-float mx-auto ${className}`}>
    {/* Organic Shapes Background - Tons mais suaves e "Nude" */}
    <div className="absolute top-6 -right-6 md:top-12 md:-right-12 w-full h-full bg-[#E8E2DE] rounded-[30px] md:rounded-[40px] -z-10 rotate-3 transition-transform duration-1000 ease-luxury hover:rotate-6 shadow-2xl shadow-[#D8D2CE]/50"></div>
    
    <img 
      src="https://lh3.googleusercontent.com/d/1cxOqxGx4rkeH_DpMv9eYP5bqdgQ9f_G0" 
      alt="Dra. Caroline Aires - Psiquiatra especialista em Esquizofrenia e Psicose Maníaco Depressiva Online e em Campinas" 
      className="w-full h-full object-cover rounded-[20px] md:rounded-[30px] shadow-[0_25px_50px_-12px_rgba(78,54,41,0.2)] z-10 relative select-none ring-1 ring-white/40"
      loading="eager"
    />
    
    {/* Glassmorphism Floating Badge - REFINADO (Light Refraction Effect) */}
    <div className="absolute -bottom-8 left-0 w-full flex justify-center z-20">
      <div className="backdrop-blur-xl bg-white/70 p-5 md:p-6 rounded-[24px] shadow-[0_30px_60px_-15px_rgba(184,115,85,0.25)] border-t border-l border-white/40 border-b border-r border-lux-text/5 w-[90%] md:w-auto md:max-w-[340px] animate-float flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-2 justify-center">
           <div className="p-2 bg-lux-secondary/10 rounded-full">
             <HeartPulse size={16} className="text-lux-secondary" strokeWidth={2.5} />
           </div>
           <span className="font-serif text-lux-primary font-bold text-sm md:text-lg tracking-tight">Atendimento Humanizado</span>
        </div>
        <p className="font-serif text-lux-textSoft text-xs md:text-sm italic leading-relaxed">
          "Onde a ciência encontra o acolhimento."
        </p>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);
      setShowBackToTop(scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock Body Scroll when Menu is Open (Fix for "Menu sobe/some")
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lógica de scroll genérica
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 110; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); 
    scrollToSection(id);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const navItems = [
    { label: 'Especialista', id: 'sobre' },
    { label: 'Pilares', id: 'diferenciais' },
    { label: 'Atuação', id: 'tratamentos' },
    { label: 'Agendamento', id: 'contato' },
    { label: 'Dúvidas', id: 'faq' },
  ];

  const treatments = [
    "Esquizofrenia",
    "Transtorno Bipolar",
    "Borderline",
    "Tratamento com Canabidiol",
    "Transtornos do Sono",
    "TOC",
    "TDAH",
    "Autismo",
    "Compulsão Alimentar",
    "Obesidade"
  ];

  const faqItems = [
    {
      question: "Atende por planos de saúde?",
      answer: "Para garantir a qualidade, a duração estendida das consultas e a pontualidade, o atendimento é exclusivamente particular."
    },
    {
      question: "Qual a faixa etária de atendimento?",
      answer: "O atendimento acolhe pacientes a partir de 12 anos, abrangendo adolescentes, adultos e idosos, permitindo um acompanhamento especializado nas diferentes fases da vida."
    },
    {
      question: "Como funciona a Telemedicina e a Receita?",
      answer: "A consulta online ocorre via plataforma segura (Google Meet ou Doctoralia). Receitas digitais são enviadas instantaneamente. Para medicações que exigem notificação A (Amarela) ou B (Azul), o envio da receita física é realizado via Correios para todo o Brasil."
    },
    {
      question: "Qual a duração da consulta?",
      answer: "A primeira consulta tem duração média de 90 minutos, permitindo uma anamnese detalhada e escuta ativa. As consultas de manutenção têm duração de 60 minutos, garantindo a continuidade do cuidado com excelência."
    },
    {
      question: "Vocês emitem laudos e atestados?",
      answer: "Sim. A emissão de laudos, relatórios para INSS, atestados e outros documentos médicos é realizada mediante avaliação clínica detalhada durante a consulta, sempre prezando pela ética e veracidade técnica."
    }
  ];

  // Determine Header Classes logic to prevent jumping when menu is open
  const getHeaderClasses = () => {
    if (mobileMenuOpen) {
      return 'bg-transparent py-4 border-b border-transparent';
    }
    if (isScrolled) {
      return 'bg-lux-bg/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4 border-b border-lux-primary/5 border-t border-white/50';
    }
    // Default state
    return 'bg-transparent py-5 md:py-6 lg:py-8 border-b border-transparent';
  };

  return (
    <div className="min-h-screen font-sans text-lux-text bg-lux-bg overflow-x-hidden selection:bg-lux-secondary selection:text-white">
      
      {/* --- BACK TO TOP BUTTON --- */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-[60] bg-white/90 backdrop-blur-md border border-lux-secondary/20 text-lux-secondaryStrong p-3 rounded-full shadow-lg transition-all duration-700 ease-luxury hover:bg-lux-secondaryStrong hover:text-white hover:-translate-y-1 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>

      {/* --- FLOATING WHATSAPP (CONCIERGE) --- */}
      <a 
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 bg-lux-secondaryStrong text-white rounded-full shadow-[0_10px_30px_rgba(158,82,52,0.4)] hover:scale-105 transition-all duration-500 ease-luxury hover:bg-lux-secondary hover:shadow-[0_15px_35px_rgba(184,115,85,0.5)] group active:scale-95 ring-2 ring-white/20"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute right-16 bg-white/95 backdrop-blur-sm text-lux-text text-xs px-4 py-2 rounded-xl shadow-soft opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap hidden sm:block border border-lux-primary/5 translate-x-4 group-hover:translate-x-0 font-medium tracking-wide">
          Falar com a secretária
        </span>
        <MessageCircle size={28} fill="white" className="text-white relative z-10" />
      </a>

      {/* --- HEADER --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-luxury ${getHeaderClasses()}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="z-[60] relative">
            <h1 
              className="font-serif text-lg md:text-xl lg:text-2xl font-bold tracking-tight cursor-pointer bg-gradient-to-r from-lux-primary via-lux-secondary to-lux-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shimmer hover:scale-[1.02] transition-transform duration-500" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              Dra. Caroline Aires
            </h1>
          </div>

          {/* Desktop Nav - Hidden on LG (Tablet Landscape), Visible on XL (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-12">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className="text-sm font-medium text-lux-textSoft hover:text-lux-primary transition-colors duration-500 relative group py-2 tracking-wide cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 w-0 h-px bg-lux-secondary transition-all duration-500 ease-luxury group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
            <Button 
              variant="primary" 
              className="!py-3 !px-6 xl:!px-8 !text-xs !tracking-widest shadow-none hover:shadow-lg active:scale-95 ml-2 xl:ml-4"
              onClick={() => scrollToSection('contato')}
            >
              AGENDAR CONSULTA
            </Button>
          </nav>

          {/* Mobile/Tablet Menu Button - Visible until LG */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden text-lux-primary p-2 z-[60] relative hover:bg-lux-secondary/10 rounded-full transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Nav Overlay */}
        <div 
          className={`fixed top-0 left-0 w-full h-[100dvh] bg-[#FAF9F6] z-50 flex flex-col transition-all duration-700 ease-luxury ${
            mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
          }`}
        >
           <div className="absolute top-0 right-0 w-full h-full bg-noise opacity-30 pointer-events-none"></div>

           <div className="flex-1 flex flex-col items-center justify-center gap-8 md:gap-10 overflow-y-auto pb-32">
             {navItems.map((item, idx) => (
              <a 
                key={item.label}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`text-3xl md:text-4xl font-serif text-lux-primary hover:text-lux-secondary transition-all duration-700 transform relative z-10 ${mobileMenuOpen ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm'}`}
              >
                {item.label}
              </a>
            ))}
            
            <div className="text-center opacity-40 z-10 mt-8">
               <p className="text-xs font-serif tracking-widest">RQE SP 104664 • CRM SP 166488</p>
            </div>
           </div>

           <div className={`p-6 border-t border-lux-primary/5 bg-[#FAF9F6]/90 backdrop-blur-md w-full shrink-0 z-50 absolute bottom-0 transition-all duration-700 delay-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              <Button onClick={() => scrollToSection('contato')} fullWidth className="!text-sm !py-5 shadow-lg">
                Agendar Consulta
              </Button>
           </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-3/4 md:w-2/3 h-full bg-gradient-to-l from-[#F2EFED] to-transparent -z-10 rounded-l-[50px] md:rounded-l-[150px] opacity-80"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-28">
            
            {/* Text Content - Stacked on LG, Side by side on XL */}
            <div className="flex-1 space-y-8 text-center xl:text-left relative z-10 w-full">
              <FadeIn>
                <div className="flex items-center justify-center xl:justify-start gap-4 mb-6 select-none">
                  <div className="w-12 h-px bg-lux-secondary"></div>
                  <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-lux-primary uppercase">
                    Psiquiatria Especializada
                  </span>
                </div>
                
                {/* Responsive Typography */}
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-lux-primary leading-relaxed md:leading-tight lg:leading-[1.2] tracking-tight mb-6">
                  Sua mente merece <br/>
                  <span className="relative inline-block mt-2">
                    <span className="relative z-10 italic text-lux-secondary font-light">acolhimento</span>
                    <svg className="absolute -bottom-2 w-[110%] -left-[5%] h-3 md:h-4 -z-10 opacity-30 text-lux-secondary" viewBox="0 0 100 15" preserveAspectRatio="none">
                      <path d="M0 10 Q 50 18 100 10" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                  {' '}e <br className="md:hidden xl:block" />ciência.
                </h2>
                
                <p className="text-base md:text-lg lg:text-xl text-lux-textSoft font-light leading-relaxed max-w-lg mx-auto xl:mx-0 text-balance opacity-90 mb-6">
                  Um espaço seguro para tratamento de esquizofrenia e psicose maníaco depressiva.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start w-full sm:w-auto mb-10 xl:mb-0">
                  <Button 
                    variant="primary" 
                    icon={<Calendar size={18} />}
                    onClick={() => scrollToSection('contato')}
                    className="w-full sm:w-auto active:scale-95 shadow-lg hover:shadow-xl !py-4 !px-10"
                  >
                    Agendar consulta
                  </Button>
                </div>

                {/* Mobile & Tablet Portrait/Landscape Image (Visible up to XL) */}
                <div className="block xl:hidden pb-4 pt-4">
                  <HeroImage className="scale-95 md:scale-100 lg:scale-110" />
                </div>

                <div className="pt-6 lg:pt-12 flex flex-wrap items-center justify-center xl:justify-start gap-6 md:gap-10 opacity-70">
                   <div className="text-xs font-medium text-lux-text flex items-center gap-3">
                     <ShieldCheck size={18} className="text-lux-secondary" /> Especialista | RQE SP 104664
                   </div>
                   <div className="hidden sm:block h-1 w-1 rounded-full bg-lux-text/20"></div>
                   <div className="text-xs font-medium text-lux-text flex items-center gap-3">
                     <MapPin size={18} className="text-lux-secondary" /> Campinas & Online
                   </div>
                </div>
              </FadeIn>
            </div>

            {/* Desktop Hero Image (Visible only on XL+) */}
            <div className="hidden xl:flex flex-1 w-full justify-center xl:justify-end relative">
              <FadeIn direction="right" delay={200} blur={true}>
                <HeroImage />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

       {/* --- SOBRE A DRA --- */}
       <section className="py-20 md:py-28 lg:py-32 xl:py-48 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-16 md:gap-20 items-center">
            
            <div className="w-full max-w-5xl mx-auto mb-4 md:mb-10">
              <FadeIn blur={true}>
                <div className="relative group w-full h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-[40px] md:rounded-[60px] shadow-soft">
                  <div className="absolute inset-0 bg-lux-secondary/5 transition-transform group-hover:scale-105 pointer-events-none z-10"></div>
                  <img 
                    src="https://pixel-p1.s3.sa-east-1.amazonaws.com/facility/photos/111ab037/111ab037-ea50-46e3-bff8-d4e324631f78_large.jpg" 
                    alt="Dra. Caroline Aires - Especialista em Esquizofrenia e Psicose Maníaco Depressiva" 
                    className="w-full h-full object-cover object-bottom transition-transform duration-[2s] ease-luxury group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4E3629]/90 via-[#4E3629]/40 to-transparent p-8 md:p-12 lg:p-16 z-20">
                     <p className="text-white/95 font-serif italic text-lg md:text-2xl lg:text-3xl text-center font-medium tracking-wide leading-relaxed">"Um ambiente pensado para o seu acolhimento e saúde mental."</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div id="sobre" className="max-w-4xl mx-auto w-full">
              <FadeIn delay={200}>
                <div className="flex flex-col items-center text-center xl:text-left xl:items-start">
                   <span className="text-lux-secondary text-xs font-bold tracking-[0.25em] uppercase mb-8 block flex items-center justify-center xl:justify-start gap-4">
                    <span className="w-16 h-px bg-lux-secondary/50 hidden xl:block"></span>
                    Sobre a especialista
                    <span className="w-16 h-px bg-lux-secondary/50 block xl:hidden"></span>
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-lux-primary mb-12 text-center xl:text-left w-full tracking-tight">Dra. Caroline Aires</h2>
                  
                  <div className="space-y-6 md:space-y-8 text-lux-textSoft leading-loose font-light text-base md:text-lg text-justify xl:text-left px-4 md:px-0">
                    <p>
                      Acredito que a psiquiatria vai muito além da prescrição. É sobre devolver a autonomia e a capacidade de sentir a vida em sua plenitude, tratando as doenças da mente com respeito e ciência.
                    </p>
                    <p>
                      Com formação sólida em <strong className="text-lux-primary font-medium">Psiquiatria pelo IAMSPE-SP</strong>, minha prática une o rigor técnico à sensibilidade humana. Especialista no manejo de condições complexas como esquizofrenia e transtornos de humor graves, busco sempre o equilíbrio entre evidência científica e empatia.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 my-12 md:my-16 w-full max-w-2xl xl:max-w-none mx-auto">
                    <div className="bg-lux-bg p-8 rounded-3xl border border-lux-secondary/5 hover:border-lux-secondary/20 transition-all duration-500 text-center xl:text-left group cursor-default">
                      <h4 className="font-serif text-lux-primary font-bold text-2xl md:text-3xl mb-3 group-hover:text-lux-secondary transition-colors">RQE SP 104664</h4>
                      <p className="text-[11px] text-lux-textSoft uppercase tracking-widest">Especialista Registrada</p>
                    </div>
                    <div className="bg-lux-bg p-8 rounded-3xl border border-lux-secondary/5 hover:border-lux-secondary/20 transition-all duration-500 text-center xl:text-left group cursor-default">
                      <h4 className="font-serif text-lux-primary font-bold text-2xl md:text-3xl mb-3 group-hover:text-lux-secondary transition-colors">+10 Anos</h4>
                      <p className="text-[11px] text-lux-textSoft uppercase tracking-widest">Trajetória Médica</p>
                    </div>
                  </div>

                  <div className="mb-12 w-full text-center xl:text-left">
                     <a 
                        href={LINKS.escavador}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-lux-secondaryStrong hover:text-lux-primary tracking-widest uppercase border-b border-lux-secondaryStrong/30 hover:border-lux-primary pb-2 transition-all duration-500"
                     >
                       Ver Currículo Completo <ExternalLink size={12} className="ml-3" />
                     </a>
                  </div>

                  <div className="w-full mt-6 md:mt-10 pt-10 border-t border-lux-secondary/10">
                    <div className="relative pl-0 md:pl-0 xl:pl-12 text-center xl:text-left">
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-lux-secondary/30 rounded-full hidden xl:block"></div>
                      <p className="font-serif text-xl md:text-2xl lg:text-3xl text-lux-primary font-medium italic leading-relaxed">
                        <span className="text-lux-secondary text-2xl md:text-4xl lg:text-5xl mr-2 opacity-60">"</span>
                        Compromisso inegociável com a dignidade humana no tratamento das patologias mais profundas da mente.
                        <span className="text-lux-secondary text-2xl md:text-4xl lg:text-5xl ml-2 opacity-60">"</span>
                      </p>
                    </div>
                  </div>

                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- DIFERENCIAIS (Filosofia) --- */}
      <section id="diferenciais" className="py-20 md:py-28 lg:py-32 xl:py-48 bg-lux-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20 lg:mb-28 max-w-3xl mx-auto">
              <span className="text-lux-secondary text-xs font-bold tracking-[0.25em] uppercase mb-6 block">Nossos Pilares</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-lux-primary mb-8 tracking-tight">Uma medicina que escuta.</h2>
              <p className="text-lux-textSoft font-light leading-loose px-4 text-lg md:text-xl">
                Mais do que diagnósticos, oferecemos um porto seguro. Uma prática médica que valoriza sua história e constrói o tratamento junto com você.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {[
              { 
                icon: <Clock strokeWidth={1} size={36} />, 
                title: "Tempo de Qualidade", 
                text: "Consultas com duração estendida. O tempo necessário para você ser ouvido sem pressa e compreendido em profundidade." 
              },
              { 
                icon: <Brain strokeWidth={1} size={36} />, 
                title: "Diagnóstico de Precisão", 
                text: "Avaliação minuciosa para diferenciar condições complexas, focada na redução de danos e na prescrição racional de medicamentos." 
              },
              { 
                icon: <HeartPulse strokeWidth={1} size={36} />, 
                title: "Estilo de Vida", 
                text: "A medicação é uma ferramenta, não o todo. Orientamos sobre sono, nutrição e rotina como pilares inegociáveis da saúde mental." 
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 150} blur={true} className={idx === 2 ? "md:col-span-2 xl:col-span-1 md:w-2/3 xl:w-full md:mx-auto" : ""}>
                <div className="p-10 md:p-12 bg-white rounded-[32px] border border-transparent hover:border-lux-secondary/10 transition-all duration-700 ease-luxury hover:shadow-[0_20px_40px_-10px_rgba(184,115,85,0.15)] group h-full flex flex-col items-center text-center relative overflow-hidden hover:-translate-y-3">
                  <div className="text-lux-secondary mb-8 md:mb-10 p-6 bg-[#FAF9F6] rounded-full shadow-sm group-hover:scale-110 group-hover:bg-lux-primary group-hover:text-white transition-all duration-700 ease-luxury">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-lux-primary mb-6">{item.title}</h3>
                  <p className="text-lux-textSoft text-sm md:text-base leading-loose opacity-80">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRATAMENTOS --- */}
      <section id="tratamentos" className="py-20 md:py-28 lg:py-32 xl:py-48 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-lux-secondary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col xl:flex-row gap-16 xl:gap-32">
            <div className="w-full xl:w-1/3 xl:sticky xl:top-40 self-start text-center xl:text-left">
              <FadeIn>
                <div className="inline-flex items-center gap-3 mb-8 justify-center xl:justify-start w-full">
                  <Sparkles size={18} className="text-lux-secondary" />
                  <span className="text-lux-secondary text-xs font-bold tracking-[0.25em] uppercase">Áreas de Atuação</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-lux-primary mb-8 md:mb-12 tracking-tight leading-tight">
                  Como posso te <span className="text-lux-secondary italic tracking-normal font-light">ajudar</span>?
                </h2>
                <p className="text-lux-textSoft mb-10 md:mb-14 leading-loose text-lg font-light max-w-2xl mx-auto xl:mx-0">
                  O tratamento adequado para transtornos graves devolve a funcionalidade e o equilíbrio. A ciência é nossa maior aliada no reestabelecimento da saúde mental.
                </p>
                <Button 
                  onClick={() => scrollToSection('contato')}
                  icon={<ArrowRight size={18} />}
                  className="w-full sm:w-auto md:px-12 active:scale-95 shadow-lg py-4"
                >
                  Solicitar Avaliação
                </Button>
              </FadeIn>
            </div>
            
            <div className="w-full xl:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
                {treatments.map((treatment, idx) => (
                  <FadeIn key={idx} delay={idx * 50} direction="left" className="h-full" blur={true}>
                    <div className="group flex items-center gap-6 px-6 py-6 md:px-8 md:py-8 rounded-3xl bg-lux-bg/50 border border-lux-primary/5 hover:border-lux-secondary/20 hover:bg-white hover:shadow-card hover:-translate-y-2 transition-all duration-500 ease-luxury cursor-default select-none h-full">
                      <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-lux-secondary/5 flex items-center justify-center text-lux-secondary shadow-sm group-hover:bg-lux-secondary group-hover:text-white transition-colors duration-500">
                        <CheckCircle2 size={20} strokeWidth={2} />
                      </div>
                      <span className="text-base md:text-lg lg:text-xl text-lux-primary font-medium group-hover:text-lux-secondary transition-colors duration-300">{treatment}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 md:py-28 lg:py-32 xl:py-48 bg-[#4E3629] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20 lg:mb-28">
               <Quote size={56} className="text-lux-secondary mx-auto mb-8 opacity-60" />
               <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4 tracking-tight">Histórias Reais</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {[
              "Desde a primeira consulta com a Dra. Caroline me senti acolhido e ouvido de verdade. Ela é uma profissional extremamente atenciosa, humana e competente, que transmite segurança e confiança mesmo em diagnósticos complexos. Sempre demonstra paciência para explicar os detalhes e conduz o tratamento de forma clara. Recomendo de coração!",
              "Quero deixar meu reconhecimento à Dra. Caroline, uma psiquiatra de excelência, cuja dedicação e profissionalismo em casos de esquizofrenia são admiráveis. Sua escuta atenta e sensibilidade no cuidado transmitem segurança desde o primeiro contato. Uma profissional rara, que inspira confiança e faz toda a diferença.",
              "Comecei meu acompanhamento com a Dra. Caroline há cerca de dois meses para tratar transtorno bipolar e me sinto muito mais tranquilo desde então. Ela é uma profissional extremamente atenciosa, que escuta com sensibilidade e acolhe com respeito. Sou muito grato por tê-la encontrado nesse momento da minha vida."
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 150} blur={true} className={i === 2 ? "md:col-span-2 xl:col-span-1 md:w-2/3 xl:w-full md:mx-auto" : ""}>
                <div className="bg-white/5 p-8 md:p-10 lg:p-12 rounded-[32px] backdrop-blur-md border border-white/5 hover:bg-white/10 transition-all duration-700 hover:-translate-y-3 h-full flex flex-col justify-between hover:shadow-[0_0_40px_rgba(184,115,85,0.2)] group">
                  <div>
                    <div className="flex gap-2 mb-8 opacity-100 text-lux-secondary group-hover:text-[#E8BAA4] transition-colors duration-500">
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                    </div>
                    <p className="font-light italic text-white/90 leading-relaxed text-base tracking-wide">"{text}"</p>
                  </div>
                  <div className="mt-10 flex items-center gap-5 border-t border-white/10 pt-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lux-secondary to-lux-secondaryStrong flex items-center justify-center text-base font-bold text-white shrink-0 shadow-lg ring-2 ring-white/10">
                      {["M", "R", "L"][i]}
                    </div>
                    <div>
                      <span className="text-xs text-white/60 block uppercase tracking-wider mb-1">Paciente Verificado</span>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-green-400"/>
                        <span className="text-sm font-medium text-white">Consulta Confirmada</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOCALIZAÇÃO --- */}
      <section id="contato" className="py-20 md:py-28 lg:py-32 xl:py-48 bg-lux-bg relative">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20 lg:mb-28">
               <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-lux-primary mb-8 tracking-tight">Onde nos encontrar</h2>
               <p className="text-lux-textSoft max-w-xl mx-auto text-lg md:text-xl font-light">Escolha a modalidade de atendimento ideal para o seu momento.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
             
             {/* CARD 1: TELEMEDICINA */}
             <FadeIn delay={100} className="h-full">
               <div className="relative bg-white rounded-[48px] p-8 md:p-12 lg:p-16 border border-lux-secondary/20 shadow-float flex flex-col h-full overflow-hidden group hover:border-lux-secondary/40 transition-colors duration-500">
                  <div className="absolute -top-32 -right-32 w-80 h-80 bg-lux-secondary/5 rounded-full blur-[80px] group-hover:bg-lux-secondary/10 transition-colors duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8 md:mb-10">
                       <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FAF9F6] rounded-3xl flex items-center justify-center text-lux-secondary border border-lux-secondary/20 shadow-sm">
                          <Video size={32} className="md:w-10 md:h-10" strokeWidth={1.5} />
                       </div>
                       <span className="bg-green-50 text-green-800 text-[10px] md:text-xs font-bold px-4 md:px-5 py-2 rounded-full border border-green-200 uppercase tracking-wider flex items-center gap-2 shadow-sm">
                         <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                         Disponível
                       </span>
                    </div>

                    <h3 className="font-serif text-3xl md:text-4xl text-lux-primary font-bold mb-6">Telemedicina</h3>
                    <p className="text-lux-textSoft mb-10 md:mb-12 leading-loose text-base md:text-lg flex-grow font-light">
                      Atendimento para todo o Brasil. Conforto, sigilo e praticidade com a mesma profundidade do presencial para acompanhamento psiquiátrico de excelência.
                    </p>

                    <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 text-sm md:text-base text-lux-textSoft/80">
                      <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-green-500 shrink-0" /> Receita digital aceita em todo território nacional</li>
                      <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-green-500 shrink-0" /> Atestados e Laudos com certificação digital</li>
                    </ul>

                    <div className="mt-auto flex flex-col gap-4">
                      <Button 
                        variant="primary" 
                        fullWidth 
                        onClick={() => window.open(LINKS.whatsapp, '_blank')}
                        className="shadow-xl justify-center py-5 bg-lux-secondaryStrong hover:bg-lux-secondary text-base"
                        icon={<MessageCircle size={22} />}
                      >
                        Falar com a secretária
                      </Button>
                      <Button
                        variant="outline"
                        fullWidth
                        onClick={() => window.open(LINKS.doctoralia, '_blank')}
                        className="justify-center py-4 border-lux-secondary/30 text-lux-secondaryStrong hover:bg-lux-bg/50 text-sm"
                        icon={<Calendar size={18} />}
                      >
                         Agendamento via Doctoralia
                      </Button>
                    </div>
                  </div>
               </div>
             </FadeIn>

             {/* CARD 2: CAMPINAS */}
             <FadeIn delay={300} className="h-full">
                <div className="relative bg-[#FAF9F6] rounded-[48px] p-8 md:p-12 lg:p-16 border border-lux-primary/5 flex flex-col h-full overflow-hidden hover:bg-white hover:border-lux-secondary/10 hover:shadow-lg transition-all duration-700 group">
                   
                   <div className="relative z-10 flex flex-col h-full">
                     <div className="flex items-center justify-between mb-8 md:mb-10">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FAF9F6] rounded-3xl flex items-center justify-center text-lux-secondary border border-lux-secondary/20 shadow-sm">
                           <MapPin size={32} className="md:w-10 md:h-10" strokeWidth={1.5} />
                        </div>
                        <span className="bg-green-50 text-green-800 text-[10px] md:text-xs font-bold px-4 md:px-5 py-2 rounded-full border border-green-200 uppercase tracking-wider flex items-center gap-2 shadow-sm">
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                          Disponível
                        </span>
                     </div>

                     <h3 className="font-serif text-3xl md:text-4xl text-lux-primary font-bold mb-6">Campinas - SP</h3>
                     <p className="text-lux-textSoft mb-10 md:mb-12 leading-loose text-base md:text-lg flex-grow font-light">
                       Atendimento presencial no Espaço Nür, um ambiente preparado cuidadosamente para o seu acolhimento e conforto.
                     </p>
                     
                     <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 text-sm md:text-base text-lux-textSoft/80">
                       <li className="flex items-start gap-3">
                         <MapPin size={20} className="text-lux-secondary shrink-0 mt-0.5" /> 
                         <span><strong>Espaço Nür</strong><br/>Rua Percílio Neto, 293<br/>Parque Taquaral, Campinas - SP</span>
                       </li>
                     </ul>

                     <div className="mt-auto flex flex-col gap-4">
                        <Button 
                          variant="primary" 
                          fullWidth 
                          onClick={() => window.open(LINKS.whatsappCampinas, '_blank')}
                          className="shadow-xl justify-center py-5 bg-lux-secondaryStrong hover:bg-lux-secondary text-base"
                          icon={<MessageCircle size={22} />}
                        >
                          Falar com a secretária
                        </Button>
                        <Button
                          variant="outline"
                          fullWidth
                          onClick={() => window.open(LINKS.doctoralia, '_blank')}
                          className="justify-center py-4 border-lux-secondary/30 text-lux-secondaryStrong hover:bg-lux-bg/50 text-sm"
                          icon={<Calendar size={18} />}
                        >
                           Agendamento via Doctoralia
                        </Button>
                     </div>
                   </div>
                </div>
             </FadeIn>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-20 md:py-28 lg:py-32 xl:py-48 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
             <div className="text-center mb-16 md:mb-20 lg:mb-28">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-lux-primary mb-8 tracking-tight">Dúvidas Frequentes</h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div 
                  className={`bg-lux-bg rounded-3xl overflow-hidden transition-all duration-700 ease-luxury border ${openFaqIndex === index ? 'border-lux-secondary/30 shadow-card bg-white' : 'border-transparent shadow-sm hover:shadow-md hover:bg-white/50'}`}
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 md:p-10 text-left focus:outline-none"
                  >
                    <span className={`font-medium text-lg md:text-xl lg:text-2xl transition-colors pr-4 md:pr-8 font-serif ${openFaqIndex === index ? 'text-lux-secondary' : 'text-lux-primary'}`}>
                      {item.question}
                    </span>
                    <div className={`transition-transform duration-500 ease-luxury p-2 rounded-full shrink-0 ${openFaqIndex === index ? 'rotate-180 bg-lux-secondary/10 text-lux-secondary' : 'text-lux-textSoft'}`}>
                       {openFaqIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-700 ease-luxury overflow-hidden ${
                      openFaqIndex === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 md:p-10 pt-0 text-lux-textSoft leading-loose text-base md:text-lg lg:text-xl border-t border-transparent font-light">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-lux-primary text-white pt-20 md:pt-32 lg:pt-40 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-16 lg:gap-24 xl:gap-32 mb-16 md:mb-24">
            <div className="space-y-8 text-center md:text-left">
              <h4 className="font-serif text-2xl font-bold text-lux-bg">Dra. Caroline Aires</h4>
              <div className="text-white/70 text-base leading-loose max-w-sm mx-auto md:mx-0 font-light">
                <span className="block mb-4 text-white font-medium">Médica Psiquiatra</span>
                <span className="block text-xs uppercase tracking-[0.25em] leading-loose opacity-80">
                  CRM-SP 166488 - MÉDICA<br/>
                  PSIQUIATRA - RQE-SP 104664
                </span>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-serif text-xl font-bold text-lux-bg mb-8 md:mb-10">Navegação</h4>
              <ul className="space-y-5 text-sm md:text-base text-white/70 font-light">
                <li><a href="#sobre" onClick={(e) => handleScrollTo(e, 'sobre')} className="hover:text-lux-secondary transition-colors block tracking-wide">Especialista</a></li>
                <li><a href="#diferenciais" onClick={(e) => handleScrollTo(e, 'diferenciais')} className="hover:text-lux-secondary transition-colors block tracking-wide">Pilares</a></li>
                <li><a href="#tratamentos" onClick={(e) => handleScrollTo(e, 'tratamentos')} className="hover:text-lux-secondary transition-colors block tracking-wide">Atuação</a></li>
                <li><a href="#contato" onClick={(e) => handleScrollTo(e, 'contato')} className="hover:text-lux-secondary transition-colors block tracking-wide">Agendamento</a></li>
                <li><a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')} className="hover:text-lux-secondary transition-colors block tracking-wide">Dúvidas</a></li>
              </ul>
            </div>

            <div className="md:col-span-2 xl:col-span-1">
              <h4 className="font-serif text-xl font-bold text-lux-bg mb-8 md:mb-10 text-center md:text-left">Aviso Legal</h4>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex gap-5 items-start hover:bg-white/10 transition-colors group">
                <AlertCircle size={24} className="text-lux-secondaryStrong shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-lux-secondaryStrong group-hover:text-white transition-colors">Emergência</span>
                  <p className="text-sm text-white/80 leading-relaxed font-light">
                    Este site não oferece atendimento de emergência. Em caso de risco à vida, ligue <strong>188 (CVV)</strong> ou <strong>192 (SAMU)</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-12 flex flex-col items-center justify-center gap-4 text-center">
             <p className="text-xs text-white/30 tracking-wider">
               © {new Date().getFullYear()} Dra. Caroline Aires. Todos os direitos reservados.
             </p>
             <div className="flex flex-col items-center gap-2">
               <span className="text-xs text-white/30 uppercase tracking-[0.2em]">Designed for Excellence</span>
               <a 
                 href="https://instagram.com/freitas.lab" 
                 target="_blank" 
                 rel="noreferrer"
                 className="text-xs text-white/50 hover:text-lux-secondary transition-colors font-medium tracking-wide"
               >
                 @freitas.lab
               </a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
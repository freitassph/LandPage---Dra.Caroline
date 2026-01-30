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
  waitingList: "https://wa.me/556333010307?text=Olá,%20gostaria%20de%20entrar%20na%20lista%20de%20espera%20para%20o%20atendimento%20presencial%20em%20Campinas.",
  doctoralia: "https://www.doctoralia.com.br/caroline-aires-henrique-de-santana/psiquiatra/gurupi",
  instagram: "https://instagram.com/dra.carolineaireshs",
  escavador: "https://www.escavador.com/sobre/197407363/caroline-aires-de-santana"
};

// Componente isolado da Imagem Hero para reutilização responsiva
const HeroImage: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative w-[280px] h-[320px] sm:w-[350px] sm:h-[400px] md:w-[480px] md:h-[550px] animate-float mx-auto ${className}`}>
    {/* Organic Shapes Background - Tons mais suaves e "Nude" */}
    <div className="absolute top-6 -right-6 md:top-8 md:-right-8 w-full h-full bg-[#E8E2DE] rounded-[30px] md:rounded-[40px] -z-10 rotate-3 transition-transform duration-1000 ease-luxury hover:rotate-6 shadow-2xl shadow-[#D8D2CE]/50"></div>
    
    <img 
      src="https://lh3.googleusercontent.com/d/1cxOqxGx4rkeH_DpMv9eYP5bqdgQ9f_G0" 
      alt="Dra. Caroline Aires - Psiquiatra Especialista em Ansiedade e TDAH Online e em Campinas" 
      className="w-full h-full object-cover rounded-[20px] md:rounded-[30px] shadow-[0_25px_50px_-12px_rgba(78,54,41,0.2)] z-10 relative select-none ring-1 ring-white/40"
      loading="eager"
    />
    
    {/* Glassmorphism Floating Badge - REFINADO */}
    <div className="absolute -bottom-6 left-0 w-full flex justify-center z-20">
      <div className="backdrop-blur-xl bg-white/80 p-4 md:p-5 rounded-[20px] shadow-[0_30px_60px_-15px_rgba(184,115,85,0.25)] border border-white/60 w-[90%] md:w-auto md:max-w-[320px] animate-float flex flex-col items-center text-center ring-1 ring-white/60">
        <div className="flex items-center gap-2 mb-1 justify-center">
           <div className="p-1.5 bg-lux-secondary/10 rounded-full">
             <HeartPulse size={14} className="text-lux-secondary" strokeWidth={2.5} />
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); 
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

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const navItems = [
    { label: 'Sobre', id: 'sobre' },
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Tratamentos', id: 'tratamentos' },
    { label: 'Locais', id: 'contato' }, // Renomeado para Locais
    { label: 'Dúvidas', id: 'faq' },
  ];

  const treatments = [
    "Depressão & Humor",
    "Ansiedade Generalizada",
    "TDAH em Adultos",
    "Transtorno Bipolar",
    "Insônia & Sono",
    "TOC",
    "Burnout Profissional",
    "Saúde Mental da Mulher"
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

      {/* --- FLOATING WHATSAPP --- */}
      <a 
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 bg-lux-secondaryStrong text-white rounded-full shadow-[0_10px_30px_rgba(158,82,52,0.4)] hover:scale-105 transition-all duration-500 ease-luxury hover:bg-lux-secondary hover:shadow-[0_15px_35px_rgba(184,115,85,0.5)] group active:scale-95 ring-2 ring-white/20"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute right-16 bg-white/95 backdrop-blur-sm text-lux-text text-xs px-4 py-2 rounded-xl shadow-soft opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap hidden sm:block border border-lux-primary/5 translate-x-4 group-hover:translate-x-0 font-medium tracking-wide">
          Agendar agora
        </span>
        <MessageCircle size={28} fill="white" className="text-white relative z-10" />
      </a>

      {/* --- HEADER --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-luxury ${
          isScrolled 
            ? 'bg-lux-bg/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3 border-b border-lux-primary/5' 
            : 'bg-transparent py-5 md:py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="z-50 relative">
            <h1 className="font-serif text-lg md:text-2xl font-bold text-lux-primary tracking-tight cursor-pointer flex flex-col items-start gap-0.5" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              Dra. Caroline Aires
              <span className="font-sans text-[10px] font-medium text-lux-secondary tracking-[0.2em] uppercase opacity-90">
                Psiquiatria
              </span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
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
              className="!py-2.5 !px-6 !text-xs !tracking-widest shadow-none hover:shadow-lg active:scale-95"
              onClick={() => window.open(LINKS.doctoralia, '_blank')}
            >
              AGENDAR
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden text-lux-primary p-2 z-50 hover:bg-lux-secondary/10 rounded-full transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div 
          className={`fixed inset-0 bg-[#FAF9F6]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-luxury ${
            mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
          }`}
        >
           {navItems.map((item, idx) => (
            <a 
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`text-4xl font-serif text-lux-primary hover:text-lux-secondary transition-all duration-700 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm'}`}
            >
              {item.label}
            </a>
          ))}
          <div className={`transition-all duration-700 delay-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button onClick={() => window.open(LINKS.doctoralia, '_blank')} className="mt-8 w-64 !text-sm">
              Agendar Consulta
            </Button>
          </div>
          
          <div className="absolute bottom-12 text-center opacity-40">
             <p className="text-xs font-serif tracking-widest">RQE SP 104664 • CRM SP 166488</p>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-36 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Elements - Softer Gradient */}
        <div className="absolute top-0 right-0 w-3/4 md:w-2/3 h-full bg-gradient-to-l from-[#F2EFED] to-transparent -z-10 rounded-l-[50px] md:rounded-l-[150px] opacity-80"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            <div className="flex-1 space-y-8 text-center lg:text-left relative z-10 w-full">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-sm border border-lux-primary/5 rounded-full mb-6 shadow-sm cursor-default">
                  <Star size={10} className="text-lux-secondary fill-lux-secondary" />
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-lux-textSoft uppercase">Psiquiatria Especializada</span>
                </div>
                
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-lux-primary leading-[1.1] tracking-tight">
                  Sua mente merece <br/>
                  <span className="relative inline-block">
                    <span className="relative z-10 italic text-lux-secondary font-light">acolhimento</span>
                    {/* Risco ajustado para ficar bem abaixo da palavra e com design orgânico */}
                    <svg className="absolute -bottom-1 w-[110%] -left-[5%] h-3 md:h-4 -z-10 opacity-30 text-lux-secondary" viewBox="0 0 100 15" preserveAspectRatio="none">
                      <path d="M0 10 Q 50 18 100 10" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                  e ciência.
                </h2>
                
                <p className="text-base md:text-xl text-lux-textSoft font-light leading-relaxed max-w-lg mx-auto lg:mx-0 text-balance opacity-90">
                  Um espaço seguro para transformar angústia em autonomia. Diagnóstico preciso e plano terapêutico individualizado.
                </p>

                {/* Mobile Hero Image */}
                <div className="block lg:hidden py-8">
                  <HeroImage />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-5 pt-4 md:pt-8 justify-center lg:justify-start w-full sm:w-auto">
                  <Button 
                    variant="primary" 
                    icon={<MessageCircle size={18} />}
                    onClick={() => window.open(LINKS.whatsapp, '_blank')}
                    className="w-full sm:w-auto active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    Agendar consulta
                  </Button>
                  <Button 
                    variant="outline" 
                    icon={<Calendar size={18} />}
                    onClick={() => window.open(LINKS.doctoralia, '_blank')}
                    className="w-full sm:w-auto active:scale-95 bg-white/40 backdrop-blur-sm hover:bg-white"
                  >
                    Verificar agenda
                  </Button>
                </div>

                <div className="pt-10 md:pt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 opacity-70">
                   <div className="text-xs font-medium text-lux-text flex items-center gap-2">
                     <ShieldCheck size={16} className="text-lux-secondary" /> Especialista | RQE SP 104664
                   </div>
                   <div className="hidden sm:block h-1 w-1 rounded-full bg-lux-text/20"></div>
                   <div className="text-xs font-medium text-lux-text flex items-center gap-2">
                     <MapPin size={16} className="text-lux-secondary" /> Campinas & Online
                   </div>
                </div>
              </FadeIn>
            </div>

            {/* Desktop Hero Image */}
            <div className="hidden lg:flex flex-1 w-full justify-center lg:justify-end relative">
              <FadeIn direction="right" delay={200} blur={true}>
                <HeroImage />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

       {/* --- SOBRE A DRA --- */}
       <section className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-16 items-center">
            
            <div className="w-full">
              <FadeIn blur={true}>
                <div className="relative group w-full h-[350px] md:h-[550px] overflow-hidden rounded-[40px] shadow-soft">
                  <div className="absolute inset-0 bg-lux-secondary/5 transition-transform group-hover:scale-105 pointer-events-none z-10"></div>
                  <img 
                    src="https://pixel-p1.s3.sa-east-1.amazonaws.com/facility/photos/111ab037/111ab037-ea50-46e3-bff8-d4e324631f78_large.jpg" 
                    alt="Ambiente de acolhimento e escuta" 
                    className="w-full h-full object-cover object-bottom transition-transform duration-[2s] ease-luxury group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4E3629]/90 via-[#4E3629]/40 to-transparent p-8 md:p-14 z-20">
                     <p className="text-white/95 font-serif italic text-lg md:text-3xl text-center font-medium tracking-wide leading-relaxed">"Um ambiente pensado para o seu acolhimento."</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div id="sobre" className="max-w-4xl mx-auto w-full">
              <FadeIn delay={200}>
                <div className="flex flex-col items-center text-center md:text-left md:items-start">
                   <span className="text-lux-secondary text-xs font-bold tracking-[0.2em] uppercase mb-6 block flex items-center gap-4">
                    <span className="w-12 h-px bg-lux-secondary/50"></span>
                    Sobre a especialista
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl text-lux-primary mb-8 text-center md:text-left w-full tracking-tight">Dra. Caroline Aires</h2>
                  
                  <div className="space-y-6 text-lux-textSoft leading-loose font-light text-base md:text-lg text-justify md:text-left">
                    <p>
                      Acredito que a psiquiatria vai muito além da prescrição. É sobre devolver a autonomia e a capacidade de sentir a vida em sua plenitude.
                    </p>
                    <p>
                      Com formação sólida em <strong className="text-lux-primary font-medium">Psiquiatria pelo IAMSP-SP</strong>, minha prática une o rigor técnico à sensibilidade humana. Cada paciente traz um universo único, e o tratamento deve refletir essa singularidade, respeitando seus valores, sua história e seu tempo.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 my-12 w-full">
                    <div className="bg-lux-bg p-6 rounded-2xl border border-lux-secondary/5 hover:border-lux-secondary/20 transition-all duration-500 text-center md:text-left group cursor-default">
                      <h4 className="font-serif text-lux-primary font-bold text-2xl md:text-3xl mb-2 group-hover:text-lux-secondary transition-colors">RQE SP 104664</h4>
                      <p className="text-[10px] text-lux-textSoft uppercase tracking-widest">Especialista Registrada</p>
                    </div>
                    <div className="bg-lux-bg p-6 rounded-2xl border border-lux-secondary/5 hover:border-lux-secondary/20 transition-all duration-500 text-center md:text-left group cursor-default">
                      <h4 className="font-serif text-lux-primary font-bold text-2xl md:text-3xl mb-2 group-hover:text-lux-secondary transition-colors">+10 Anos</h4>
                      <p className="text-[10px] text-lux-textSoft uppercase tracking-widest">Trajetória Médica</p>
                    </div>
                  </div>

                  <div className="mb-8 w-full text-center md:text-left">
                     <a 
                        href={LINKS.escavador}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-lux-secondaryStrong hover:text-lux-primary tracking-widest uppercase border-b border-lux-secondaryStrong/30 hover:border-lux-primary pb-1 transition-all duration-500"
                     >
                       Ver Currículo Completo <ExternalLink size={12} className="ml-2" />
                     </a>
                  </div>

                  {/* New Quote Integration */}
                  <div className="w-full mt-2 md:mt-4 pt-8 border-t border-lux-secondary/10">
                    <div className="relative pl-6 md:pl-0">
                      {/* Decorative vertical line for mobile */}
                      <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-lux-secondary/30 rounded-full"></div>
                      
                      <p className="font-serif text-xl md:text-2xl text-lux-primary font-medium italic leading-relaxed md:leading-normal">
                        <span className="text-lux-secondary text-2xl md:text-4xl mr-1.5 opacity-60">"</span>
                        Transformando ansiedade em futuro brilhante através de uma medicina baseada em evidências e empatia.
                        <span className="text-lux-secondary text-2xl md:text-4xl ml-1.5 opacity-60">"</span>
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
      <section id="diferenciais" className="py-20 md:py-32 bg-lux-bg relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
              <span className="text-lux-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Nossos Pilares</span>
              <h2 className="font-serif text-3xl md:text-5xl text-lux-primary mb-6 tracking-tight">Uma medicina que escuta.</h2>
              <p className="text-lux-textSoft font-light leading-relaxed px-4 text-lg">
                Mais do que diagnósticos, oferecemos um porto seguro. Uma prática médica que valoriza sua história e constrói o tratamento junto com você.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {[
              { 
                icon: <Clock strokeWidth={1} size={32} />, 
                title: "Tempo de Qualidade", 
                text: "Consultas com duração estendida. O tempo necessário para você ser ouvido sem pressa e compreendido em profundidade." 
              },
              { 
                icon: <Brain strokeWidth={1} size={32} />, 
                title: "Diagnóstico de Precisão", 
                text: "Avaliação minuciosa para diferenciar condições complexas, focada na redução de danos e na prescrição racional de medicamentos." 
              },
              { 
                icon: <HeartPulse strokeWidth={1} size={32} />, 
                title: "Estilo de Vida", 
                text: "A medicação é uma ferramenta, não o todo. Orientamos sobre sono, nutrição e rotina como pilares inegociáveis da saúde mental." 
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 150} blur={true}>
                <div className="p-8 md:p-10 bg-white rounded-3xl border border-transparent hover:border-lux-secondary/10 transition-all duration-700 ease-luxury hover:shadow-[0_20px_40px_-10px_rgba(184,115,85,0.15)] group h-full flex flex-col items-center text-center relative overflow-hidden hover:-translate-y-2">
                  <div className="text-lux-secondary mb-6 md:mb-8 p-5 bg-[#FAF9F6] rounded-full shadow-sm group-hover:scale-110 group-hover:bg-lux-primary group-hover:text-white transition-all duration-700 ease-luxury">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-lux-primary mb-4">{item.title}</h3>
                  <p className="text-lux-textSoft text-sm leading-loose opacity-80">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRATAMENTOS --- */}
      <section id="tratamentos" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-lux-secondary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="md:w-1/3 md:sticky md:top-32 self-start">
              <FadeIn>
                <div className="inline-flex items-center gap-2 mb-6">
                  <Sparkles size={16} className="text-lux-secondary" />
                  <span className="text-lux-secondary text-xs font-bold tracking-widest uppercase">Áreas de Atuação</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-lux-primary mb-6 md:mb-8 tracking-tight">
                  Como posso te <span className="text-lux-secondary italic tracking-normal font-light">ajudar</span>?
                </h2>
                <p className="text-lux-textSoft mb-8 md:mb-10 leading-loose text-lg font-light">
                  Identificar o problema é o primeiro passo para a cura. O tratamento adequado devolve cores à vida e silencia o ruído da angústia.
                </p>
                <Button 
                  onClick={() => window.open(LINKS.whatsapp, '_blank')}
                  icon={<ArrowRight size={18} />}
                  className="w-full md:w-auto active:scale-95 shadow-lg"
                >
                  Solicitar Avaliação
                </Button>
              </FadeIn>
            </div>
            
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {treatments.map((treatment, idx) => (
                  <FadeIn key={idx} delay={idx * 50} direction="left" className="h-full" blur={true}>
                    <div className="group flex items-center gap-5 px-6 py-6 rounded-2xl bg-lux-bg/50 border border-lux-primary/5 hover:border-lux-secondary/20 hover:bg-white hover:shadow-card hover:-translate-y-1 transition-all duration-500 ease-luxury cursor-default select-none h-full">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-lux-secondary/5 flex items-center justify-center text-lux-secondary shadow-sm group-hover:bg-lux-secondary group-hover:text-white transition-colors duration-500">
                        <CheckCircle2 size={18} strokeWidth={2} />
                      </div>
                      <span className="text-lg text-lux-primary font-medium group-hover:text-lux-secondary transition-colors duration-300">{treatment}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (SOCIAL PROOF - REFINED) --- */}
      <section className="py-20 md:py-32 bg-[#4E3629] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
               <Quote size={48} className="text-lux-secondary mx-auto mb-6 opacity-60" />
               <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 tracking-tight">Histórias Reais</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "A Dra. Caroline é de uma sensibilidade ímpar. Me senti acolhida desde o primeiro momento. O tratamento mudou minha relação com a ansiedade.",
              "Profissional excelente, atualizada e muito humana. A consulta foi extremamente esclarecedora e nos deixa muito à vontade. Recomendo de olhos fechados.",
              "Fiz minha consulta por telemedicina e foi surpreendente. Atenção total, sem pressa. Sinto que finalmente acertei no tratamento."
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 150} blur={true}>
                <div className="bg-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-md border border-white/5 hover:bg-white/10 transition-all duration-700 hover:-translate-y-2 h-full flex flex-col justify-between hover:shadow-[0_0_30px_rgba(184,115,85,0.2)] group">
                  <div>
                    <div className="flex gap-1.5 mb-6 opacity-100 text-lux-secondary group-hover:text-[#E8BAA4] transition-colors duration-500">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                    <p className="font-light italic text-white/90 leading-loose text-base md:text-lg tracking-wide">"{text}"</p>
                  </div>
                  <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lux-secondary to-lux-secondaryStrong flex items-center justify-center text-sm font-bold text-white shrink-0 shadow-lg ring-2 ring-white/10">
                      {["M", "R", "L"][i]}
                    </div>
                    <div>
                      <span className="text-xs text-white/60 block uppercase tracking-wider mb-0.5">Paciente Verificado</span>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-green-400"/>
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

      {/* --- LOCALIZAÇÃO: HUB DE ATENDIMENTO (FIXED CONTRADICTION) --- */}
      <section id="contato" className="py-20 md:py-32 bg-lux-bg relative">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
               <h2 className="font-serif text-3xl md:text-5xl text-lux-primary mb-6 tracking-tight">Onde nos encontrar</h2>
               <p className="text-lux-textSoft max-w-xl mx-auto text-lg font-light">Escolha a modalidade de atendimento ideal para o seu momento.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             
             {/* CARD 1: TELEMEDICINA (ALTA CONVERSÃO) */}
             <FadeIn delay={100} className="h-full">
               <div className="relative bg-white rounded-[40px] p-8 md:p-12 border border-lux-secondary/20 shadow-float flex flex-col h-full overflow-hidden group hover:border-lux-secondary/40 transition-colors duration-500">
                  <div className="absolute -top-32 -right-32 w-80 h-80 bg-lux-secondary/5 rounded-full blur-[80px] group-hover:bg-lux-secondary/10 transition-colors duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                       <div className="w-16 h-16 bg-[#FAF9F6] rounded-2xl flex items-center justify-center text-lux-secondary border border-lux-secondary/20 shadow-sm">
                          <Video size={32} strokeWidth={1.5} />
                       </div>
                       <span className="bg-green-50 text-green-800 text-xs font-bold px-4 py-1.5 rounded-full border border-green-200 uppercase tracking-wider flex items-center gap-2 shadow-sm">
                         <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                         Disponível Agora
                       </span>
                    </div>

                    <h3 className="font-serif text-3xl text-lux-primary font-bold mb-4">Telemedicina</h3>
                    <p className="text-lux-textSoft mb-10 leading-relaxed text-base md:text-lg flex-grow font-light">
                      Atendimento para todo o Brasil. Conforto, sigilo e praticidade com a mesma profundidade do presencial.
                    </p>

                    <ul className="space-y-3 mb-8 text-sm text-lux-textSoft/80">
                      <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Receita digital aceita em todo território nacional</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Atestados e Laudos com certificação digital</li>
                    </ul>

                    <div className="mt-auto">
                      <Button 
                        variant="primary" 
                        fullWidth 
                        onClick={() => window.open(LINKS.whatsapp, '_blank')}
                        className="shadow-xl justify-center py-4 bg-lux-secondaryStrong hover:bg-lux-secondary"
                        icon={<MessageCircle size={20} />}
                      >
                        Agendar Teleconsulta
                      </Button>
                    </div>
                  </div>
               </div>
             </FadeIn>

             {/* CARD 2: CAMPINAS (EM BREVE / LISTA DE ESPERA) */}
             <FadeIn delay={300} className="h-full">
                <div className="relative bg-[#FAF9F6] rounded-[40px] p-8 md:p-12 border border-lux-primary/5 flex flex-col h-full overflow-hidden hover:bg-white hover:border-lux-secondary/10 hover:shadow-lg transition-all duration-700 group">
                   
                   <div className="relative z-10 flex flex-col h-full">
                     <div className="flex items-center justify-between mb-8">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-lux-textSoft border border-lux-primary/5 shadow-sm group-hover:text-amber-700 transition-colors">
                           <MapPin size={32} strokeWidth={1.5} />
                        </div>
                        {/* Status: Em Breve */}
                        <span className="bg-amber-50 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full border border-amber-200 uppercase tracking-wider flex items-center gap-2 shadow-sm">
                           <Hourglass size={12} /> Em Breve
                        </span>
                     </div>

                     <h3 className="font-serif text-3xl text-lux-primary font-bold mb-4">Campinas - SP</h3>
                     <p className="text-lux-textSoft mb-10 leading-relaxed text-base md:text-lg font-light">
                       Um novo espaço de acolhimento está sendo preparado cuidadosamente para você no coração de Campinas.
                     </p>
                     
                     <div className="bg-white/60 p-4 rounded-xl border border-lux-primary/5 mb-8">
                        <p className="text-xs text-lux-textSoft uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                           <Lock size={12} /> Lista de espera
                        </p>
                        <p className="text-sm text-lux-textSoft/80 font-light">
                           Cadastre-se para ser avisado sobre a data de inauguração.
                        </p>
                     </div>

                     <div className="mt-auto">
                        <Button 
                          variant="outline" 
                          fullWidth 
                          onClick={() => window.open(LINKS.waitingList, '_blank')}
                          className="justify-center border-lux-primary/20 text-lux-primary hover:bg-amber-900 hover:border-amber-900 hover:text-white py-4"
                        >
                          Entrar na Lista de Espera
                        </Button>
                     </div>
                   </div>
                </div>
             </FadeIn>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
             <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl text-lux-primary mb-6 tracking-tight">Dúvidas Frequentes</h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div 
                  className={`bg-lux-bg rounded-2xl overflow-hidden transition-all duration-700 ease-luxury border ${openFaqIndex === index ? 'border-lux-secondary/30 shadow-card bg-white' : 'border-transparent shadow-sm hover:shadow-md hover:bg-white/50'}`}
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  >
                    <span className={`font-medium text-lg md:text-xl transition-colors pr-6 font-serif ${openFaqIndex === index ? 'text-lux-secondary' : 'text-lux-primary'}`}>
                      {item.question}
                    </span>
                    <div className={`transition-transform duration-500 ease-luxury p-1 rounded-full ${openFaqIndex === index ? 'rotate-180 bg-lux-secondary/10 text-lux-secondary' : 'text-lux-textSoft'}`}>
                       {openFaqIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-700 ease-luxury overflow-hidden ${
                      openFaqIndex === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 md:p-8 pt-0 text-lux-textSoft leading-loose text-base md:text-lg border-t border-transparent font-light">
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
      <footer className="bg-lux-primary text-white pt-24 md:pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 md:gap-24 mb-20">
            <div className="space-y-6">
              <h4 className="font-serif text-2xl font-bold text-lux-bg">Dra. Caroline Aires</h4>
              <div className="text-white/70 text-sm leading-relaxed max-w-sm font-light">
                <span className="block mb-4 text-white font-medium">Médica Psiquiatra</span>
                <span className="block text-xs uppercase tracking-widest leading-loose opacity-80">
                  CRM-SP 166488 - MÉDICA<br/>
                  PSIQUIATRA - RQE-SP 104664
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-xl font-bold text-lux-bg mb-8">Navegação</h4>
              <ul className="space-y-4 text-sm text-white/70 font-light">
                <li><a href="#sobre" className="hover:text-lux-secondary transition-colors block tracking-wide">Sobre a Dra.</a></li>
                <li><a href="#diferenciais" className="hover:text-lux-secondary transition-colors block tracking-wide">Nossa Filosofia</a></li>
                <li><a href="#tratamentos" className="hover:text-lux-secondary transition-colors block tracking-wide">Tratamentos</a></li>
                <li><a href={LINKS.doctoralia} target="_blank" rel="noreferrer" className="hover:text-lux-secondary transition-colors block tracking-wide">Agendar Consulta</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl font-bold text-lux-bg mb-8">Aviso Legal</h4>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex gap-4 items-start hover:bg-white/10 transition-colors group">
                <AlertCircle size={20} className="text-lux-secondaryStrong shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-lux-secondaryStrong group-hover:text-white transition-colors">Emergência</span>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    Este site não oferece atendimento de emergência. Em caso de risco à vida, ligue <strong>188 (CVV)</strong> ou <strong>192 (SAMU)</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-10 flex flex-col items-center justify-center gap-3 text-center">
             <p className="text-xs text-white/30 tracking-wider">
               © 2026 Dra. Caroline Aires. Todos os direitos reservados.
             </p>
             <div className="flex flex-col items-center gap-1">
               <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Designed for Excellence</span>
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
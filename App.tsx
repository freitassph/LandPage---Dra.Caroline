import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MapPin, Calendar, Clock, Brain, 
  Quote, ExternalLink, ArrowRight, MessageCircle, 
  Wifi, ShieldCheck, ChevronDown, ChevronUp, AlertCircle, HeartPulse,
  Phone, CheckCircle2, Instagram, Sparkles, Star, ArrowUp
} from 'lucide-react';
import FadeIn from './components/FadeIn';
import Button from './components/Button';

// Configurações Globais
const LINKS = {
  whatsapp: "https://wa.me/556333010307?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Caroline.",
  doctoralia: "https://www.doctoralia.com.br/caroline-aires-henrique-de-santana/psiquiatra/gurupi",
  maps: "https://www.google.com/maps/search/?api=1&query=Clínica+HS+Gurupi",
  instagram: "https://instagram.com/dra.carolineaireshs",
  escavador: "https://www.escavador.com/sobre/197407363/caroline-aires-de-santana"
};

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

  // Função robusta para rolagem suave com cálculo de Offset manual
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Previne o comportamento padrão
    setMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      // Altura do Header (aprox 80-90px) + Respiro visual (20px) = ~110px
      // Isso garante que o título da seção não fique escondido atrás do header fixo
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

  // REORDERED NAV ITEMS: Contato now comes before Dúvidas
  const navItems = [
    { label: 'Sobre', id: 'sobre' },
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Tratamentos', id: 'tratamentos' },
    { label: 'Localização', id: 'contato' },
    { label: 'Dúvidas', id: 'faq' },
  ];

  const treatments = [
    "Depressão",
    "Ansiedade",
    "TDAH",
    "Transtorno Bipolar",
    "Insônia",
    "TOC",
    "Burnout",
    "Transtornos de Humor"
  ];

  const faqItems = [
    {
      question: "Atende por planos de saúde?",
      answer: "Para garantir a qualidade e a duração estendida das consultas, o atendimento é exclusivamente particular. Emitimos nota fiscal para solicitação de reembolso junto ao seu convênio."
    },
    {
      question: "Como funciona a Telemedicina?",
      answer: "A consulta online tem a mesma duração e validade da presencial. A receita digital é enviada via SMS/E-mail e aceita em farmácias de todo o Brasil. A videochamada ocorre por plataforma segura e criptografada."
    },
    {
      question: "Qual a duração da consulta?",
      answer: "A primeira consulta tem duração média de 60 a 90 minutos, permitindo uma anamnese detalhada, escuta ativa e planejamento terapêutico completo."
    },
    {
      question: "Realiza retorno?",
      answer: "Sim, o retorno é avaliado caso a caso dependendo da necessidade clínica do paciente e do plano de tratamento proposto."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-lux-text bg-lux-bg overflow-x-hidden selection:bg-lux-secondary selection:text-white">
      
      {/* --- BACK TO TOP BUTTON --- */}
      {/* Z-Index aumentado para 60 para ficar acima do bg-noise (50) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-[60] bg-white/80 backdrop-blur-md border border-lux-secondary/20 text-lux-secondary p-3 rounded-full shadow-lg transition-all duration-500 ease-luxury hover:bg-lux-secondary hover:text-white hover:-translate-y-1 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>

      {/* --- FLOATING WHATSAPP --- */}
      {/* Z-Index aumentado para 60 */}
      <a 
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-float hover:scale-105 transition-all duration-300 ease-luxury hover:shadow-[#25D366]/40 group active:scale-95"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute right-16 bg-white/95 backdrop-blur-sm text-lux-text text-xs px-3 py-1.5 rounded-lg shadow-soft opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap hidden sm:block border border-lux-primary/5 translate-x-2 group-hover:translate-x-0">
          Agendar agora
        </span>
        <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
        <MessageCircle size={28} fill="white" className="text-white relative z-10" />
      </a>

      {/* --- HEADER --- */}
      {/* Z-Index aumentado para 60 para garantir interatividade */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-luxury ${
          isScrolled 
            ? 'bg-lux-bg/90 backdrop-blur-xl shadow-sm py-3 border-b border-lux-primary/5' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="z-50 relative">
            <h1 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-lux-primary tracking-tight cursor-pointer flex flex-col md:flex-row md:items-center gap-1 md:gap-3" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              Dra. Caroline Aires 
              <span className="hidden md:inline w-px h-6 bg-lux-primary/20"></span>
              <span className="font-sans text-[11px] md:text-xs font-medium text-lux-secondary tracking-widest uppercase">
                Psiquiatra
              </span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)} // Uso da função handleScrollTo
                className="text-sm font-medium text-lux-textSoft hover:text-lux-primary transition-colors duration-300 relative group py-2 tracking-wide cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-lux-secondary transition-all duration-300 ease-luxury group-hover:w-1/2 group-hover:-translate-x-1/2"></span>
              </a>
            ))}
            <Button 
              variant="primary" 
              className="!py-2.5 !px-6 !text-xs shadow-none hover:shadow-lg active:scale-95"
              onClick={() => window.open(LINKS.doctoralia, '_blank')}
            >
              Agendar Consulta
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
          className={`fixed inset-0 bg-lux-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 transition-all duration-700 ease-luxury ${
            mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
          }`}
        >
           {navItems.map((item, idx) => (
            <a 
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)} // Uso da função handleScrollTo
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-3xl font-serif text-lux-primary hover:text-lux-secondary transition-all duration-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              {item.label}
            </a>
          ))}
          <div className={`transition-all duration-500 delay-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button onClick={() => window.open(LINKS.doctoralia, '_blank')} className="mt-4 w-64">
              Agendar Consulta
            </Button>
          </div>
          
          <div className="absolute bottom-10 text-center opacity-50">
             <p className="text-sm">RQE 3262</p>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
        {/* Background Elements - Updated to a Stone/Sand tone */}
        <div className="absolute top-0 right-0 w-3/4 md:w-2/3 h-full bg-gradient-to-l from-[#F0ECE9] to-transparent -z-10 rounded-l-[50px] md:rounded-l-[100px]"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left relative z-10 w-full">
              <FadeIn>
                {/* REFINED COPY: Authority > Scarcity for Luxury Medical Markets */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-lux-primary/5 rounded-full mb-4 md:mb-6 shadow-sm cursor-default">
                  <Star size={12} className="text-lux-secondary fill-lux-secondary" />
                  <span className="text-xs font-bold tracking-widest text-lux-textSoft uppercase">Psiquiatria | Atendimento Especializado</span>
                </div>
                
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-lux-primary leading-[1.15] md:leading-[1.1] tracking-tighter">
                  Saúde mental com <br/>
                  <span className="relative inline-block">
                    <span className="relative z-10 italic text-lux-secondary pr-3 tracking-normal">acolhimento</span>
                    <svg className="absolute bottom-2 left-0 w-full h-2 md:h-3 -z-0 opacity-20 text-lux-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>
                  e ciência.
                </h2>
                
                <p className="text-base md:text-xl text-lux-textSoft font-light leading-relaxed max-w-lg mx-auto lg:mx-0 text-balance">
                  Um espaço seguro para transformar angústia em autonomia. Diagnóstico preciso e plano terapêutico individualizado na Clínica HS ou via Telemedicina.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6 md:pt-8 justify-center lg:justify-start w-full sm:w-auto">
                  <Button 
                    variant="primary" 
                    icon={<MessageCircle size={18} />}
                    onClick={() => window.open(LINKS.whatsapp, '_blank')}
                    className="w-full sm:w-auto active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    Agendar via WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    icon={<Calendar size={18} />}
                    onClick={() => window.open(LINKS.doctoralia, '_blank')}
                    className="w-full sm:w-auto active:scale-95 bg-white/50 backdrop-blur-sm"
                  >
                    Ver Disponibilidade
                  </Button>
                </div>

                <div className="pt-8 md:pt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 opacity-80">
                   <div className="text-xs font-medium text-lux-text flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full border border-lux-primary/5">
                     <ShieldCheck size={16} className="text-lux-secondary" /> Especialista | RQE 3262
                   </div>
                   <div className="hidden sm:block h-4 w-[1px] bg-lux-text/20"></div>
                   <div className="text-xs font-medium text-lux-text flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full border border-lux-primary/5">
                     <Wifi size={16} className="text-lux-secondary" /> Telemedicina Brasil
                   </div>
                </div>
              </FadeIn>
            </div>

            <div className="flex-1 w-full flex justify-center lg:justify-end relative">
              <FadeIn direction="right" delay={200}>
                <div className="relative w-[280px] h-[320px] sm:w-[350px] sm:h-[400px] md:w-[480px] md:h-[550px] animate-float mx-auto">
                  {/* Organic Shapes Background */}
                  <div className="absolute top-6 -right-6 md:top-8 md:-right-8 w-full h-full bg-[#EBE7E4] rounded-[30px] md:rounded-[40px] -z-10 rotate-3 transition-transform duration-1000 ease-luxury hover:rotate-6 shadow-2xl shadow-[#EBE7E4]"></div>
                  
                  <img 
                    src="https://lh3.googleusercontent.com/d/1cxOqxGx4rkeH_DpMv9eYP5bqdgQ9f_G0" 
                    alt="Dra. Caroline Aires Psiquiatra" 
                    className="w-full h-full object-cover rounded-[20px] md:rounded-[30px] shadow-[0_25px_50px_-12px_rgba(78,54,41,0.25)] z-10 relative select-none ring-1 ring-white/20"
                    loading="eager"
                  />
                  
                  {/* Glassmorphism Floating Badge - Improved Design for Luxury */}
                  <div className="absolute -bottom-6 left-0 w-full flex justify-center z-20">
                    <div className="backdrop-blur-xl bg-white/90 p-6 md:p-8 rounded-[24px] shadow-[0_30px_60px_-15px_rgba(184,115,85,0.2)] border border-white/60 w-[90%] md:w-auto md:max-w-[340px] animate-float flex flex-col items-center text-center ring-1 ring-white/40">
                      <div className="flex items-center gap-3 mb-3 justify-center">
                         <div className="p-2.5 bg-lux-secondary/10 rounded-full">
                           <HeartPulse size={20} className="text-lux-secondary" strokeWidth={2.5} />
                         </div>
                         <span className="font-serif text-lux-primary font-bold text-lg md:text-xl tracking-tight">Tratamento humanizado</span>
                      </div>
                      <p className="font-serif text-lux-textSoft text-base md:text-lg italic leading-relaxed">
                        "Ciência e humanização."
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

       {/* --- SOBRE A DRA (IMAGEM EXPANDIDA) --- */}
       <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-12 items-center">
            {/* Imagem Full Width / Centralizada */}
            <div className="w-full">
              <FadeIn>
                <div className="relative group w-full h-[400px] md:h-[600px] overflow-hidden rounded-3xl shadow-soft">
                  <div className="absolute inset-0 bg-lux-secondary/5 transition-transform group-hover:scale-105 pointer-events-none z-10"></div>
                  <img 
                    src="https://pixel-p1.s3.sa-east-1.amazonaws.com/facility/photos/111ab037/111ab037-ea50-46e3-bff8-d4e324631f78_large.jpg" 
                    alt="Consultório Clínica HS" 
                    className="w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-luxury group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-lux-primary/80 via-lux-primary/40 to-transparent p-8 md:p-12 z-20">
                     <p className="text-white/95 font-serif italic text-lg md:text-2xl text-center font-medium tracking-wide">"Um ambiente pensado para o seu acolhimento."</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Texto Centralizado Abaixo */}
            <div id="sobre" className="max-w-4xl mx-auto w-full">
              <FadeIn delay={200}>
                <div className="flex flex-col items-center text-center md:text-left md:items-start">
                   <span className="text-lux-secondary text-xs font-bold tracking-widest uppercase mb-4 block flex items-center gap-2">
                    <span className="w-8 h-px bg-lux-secondary"></span>
                    Conheça sua médica
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl text-lux-primary mb-6 md:mb-8 text-center md:text-left w-full tracking-tight">Dra. Caroline Aires</h2>
                  
                  <div className="space-y-4 md:space-y-6 text-lux-textSoft leading-relaxed font-light text-base md:text-lg text-justify">
                    <p>
                      Médica Psiquiatra, idealizadora da Clínica HS e apaixonada por entender a mente humana. 
                    </p>
                    <p>
                      Minha prática é fundamentada na <strong className="text-lux-primary font-medium">Psiquiatria Baseada em Evidência</strong>, que integra a melhor evidência científica disponível à experiência clínica e aos valores e preferências de cada paciente.
                    </p>
                    <p>
                      Acredito que o tratamento psiquiátrico não deve ser apenas sobre silenciar sintomas, mas sobre devolver a autonomia e a qualidade de vida. Cada paciente é único, e seu tratamento também deve ser.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 md:gap-6 my-8 md:my-10 w-full">
                    <div className="bg-lux-bg p-4 md:p-5 rounded-xl border border-lux-secondary/10 hover:border-lux-secondary/30 transition-colors text-center md:text-left group cursor-default">
                      <h4 className="font-serif text-lux-primary font-bold text-xl md:text-2xl mb-1 group-hover:text-lux-secondary transition-colors">RQE 3262</h4>
                      <p className="text-xs text-lux-textSoft uppercase tracking-widest mt-1">Registro de Especialista</p>
                    </div>
                    <div className="bg-lux-bg p-4 md:p-5 rounded-xl border border-lux-secondary/10 hover:border-lux-secondary/30 transition-colors text-center md:text-left group cursor-default">
                      <h4 className="font-serif text-lux-primary font-bold text-xl md:text-2xl mb-1 group-hover:text-lux-secondary transition-colors">+10 Anos</h4>
                      <p className="text-xs text-lux-textSoft uppercase tracking-widest mt-1">Dedicação à Medicina</p>
                    </div>
                  </div>

                  <div className="mb-8 w-full text-center md:text-left">
                     <a 
                        href={LINKS.escavador}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-lux-secondaryStrong hover:text-lux-primary tracking-widest uppercase border-b border-lux-secondaryStrong/30 hover:border-lux-primary pb-0.5 transition-all duration-300"
                     >
                       Ver Currículo Completo (Escavador) <ExternalLink size={12} className="ml-1" />
                     </a>
                  </div>

                  <div className="relative pl-8 py-2 border-l-2 border-lux-secondary/20 w-full">
                    <Quote className="absolute top-0 left-2 text-lux-secondary/20 w-4 h-4 -translate-x-full rotate-180" />
                    <p className="italic text-lux-text font-serif text-lg md:text-xl leading-relaxed text-left">
                      "Transformando ansiedade em futuro brilhante através de uma medicina baseada em evidências e empatia."
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- DIFERENCIAIS (Filosofia) --- */}
      <section id="diferenciais" className="py-16 md:py-24 bg-lux-bg">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              <span className="text-lux-secondary text-xs font-bold tracking-widest uppercase mb-2 block">Por que escolher a Clínica HS?</span>
              <h2 className="font-serif text-3xl md:text-4xl text-lux-primary mb-4 tracking-tight">Medicina Acolhedora e Humanizada</h2>
              <p className="text-lux-textSoft font-light leading-relaxed px-4">
                Mais do que diagnósticos, oferecemos um porto seguro. Uma prática médica que valoriza sua história, respeita seu tempo e constrói o tratamento junto com você.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: <Clock strokeWidth={1} size={32} />, 
                title: "Tempo de Escuta", 
                text: "Consultas com duração estendida. O tempo necessário para você ser ouvido sem pressa e compreendido em profundidade." 
              },
              { 
                icon: <Brain strokeWidth={1} size={32} />, 
                title: "Diagnóstico Preciso", 
                text: "Avaliação minuciosa para diferenciar condições complexas (como Bipolaridade vs Depressão), evitando medicações desnecessárias." 
              },
              { 
                icon: <HeartPulse strokeWidth={1} size={32} />, 
                title: "Medicina do Estilo de Vida", 
                text: "Orientações sobre sono, nutrição e rotina como pilares fundamentais do tratamento, não apenas a prescrição farmacológica." 
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="p-6 md:p-8 bg-white rounded-2xl border border-transparent hover:border-lux-secondary/10 transition-all duration-700 ease-luxury hover:shadow-float group h-full flex flex-col items-center text-center relative overflow-hidden active:scale-[0.98] transform">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lux-secondary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-luxury"></div>
                  
                  <div className="text-lux-secondary mb-4 md:mb-6 p-4 md:p-5 bg-[#F0ECE9] rounded-full shadow-sm group-hover:scale-110 group-hover:bg-lux-primary group-hover:text-white transition-all duration-500 ease-luxury">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-lux-primary mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-lux-textSoft text-sm leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRATAMENTOS --- */}
      <section id="tratamentos" className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-lux-secondary/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="md:w-1/3 md:sticky md:top-32 self-start">
              <FadeIn>
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles size={16} className="text-lux-secondary" />
                  <span className="text-lux-secondary text-xs font-bold tracking-widest uppercase">Áreas de Atuação</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl text-lux-primary mb-4 md:mb-6 tracking-tight">
                  Como posso te <span className="text-lux-secondary italic tracking-normal">ajudar</span>?
                </h2>
                <p className="text-lux-textSoft mb-6 md:mb-8 leading-relaxed">
                  O tratamento psiquiátrico é indicado para diversas condições que afetam o bem-estar mental. Se você se identifica com algum destes quadros, saiba que existe tratamento eficaz.
                </p>
                <Button 
                  onClick={() => window.open(LINKS.whatsapp, '_blank')}
                  icon={<ArrowRight size={18} />}
                  className="w-full md:w-auto active:scale-95"
                >
                  Solicitar Avaliação
                </Button>
              </FadeIn>
            </div>
            
            <div className="md:w-2/3">
              {/* REFINED: Grid Layout for Luxury Structure (Order > Chaos) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {treatments.map((treatment, idx) => (
                  <FadeIn key={idx} delay={idx * 50} direction="left" className="h-full">
                    <div className="group flex items-center gap-4 px-5 py-5 rounded-xl bg-lux-bg/30 border border-lux-primary/5 hover:border-lux-secondary/20 hover:bg-white hover:shadow-card hover:-translate-y-1 transition-all duration-500 ease-luxury cursor-default select-none h-full">
                      <div className="w-8 h-8 shrink-0 rounded-full bg-lux-secondary/5 flex items-center justify-center text-lux-secondary shadow-sm group-hover:bg-lux-secondary group-hover:text-white transition-colors duration-500">
                        <CheckCircle2 size={16} strokeWidth={2.5} />
                      </div>
                      <span className="text-base text-lux-primary font-medium group-hover:text-lux-secondary transition-colors duration-300">{treatment}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (SOCIAL PROOF) --- */}
      <section className="py-16 md:py-24 bg-lux-primary text-white relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
               <Quote size={40} className="text-lux-secondary mx-auto mb-4 opacity-50 md:w-12 md:h-12" />
               <h2 className="font-serif text-3xl md:text-4xl text-white mb-2 tracking-tight">Histórias de Transformação</h2>
               <p className="text-white/80 text-sm md:text-base">O que nossos pacientes dizem sobre a experiência HS.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "A Dra. Caroline é de uma sensibilidade ímpar. Me senti acolhida desde o primeiro momento. O tratamento mudou minha relação com a ansiedade.",
              "Profissional excelente, atualizada e muito humana. A estrutura da clínica é linda e nos deixa muito à vontade. Recomendo de olhos fechados.",
              "Fiz minha consulta por telemedicina e foi surpreendente. Atenção total, sem pressa. Sinto que finalmente acertei no tratamento."
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col justify-between hover:shadow-glow hover:border-white/20 group">
                  <div>
                    <div className="flex gap-1 mb-4 opacity-100 text-lux-secondary group-hover:scale-105 transition-transform duration-500 origin-left">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </div>
                    <p className="font-light italic text-white/90 leading-relaxed text-sm md:text-base">"{text}"</p>
                  </div>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="w-8 h-8 rounded-full bg-lux-secondary flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-lg border border-white/10">
                      {["M", "R", "L"][i]}
                    </div>
                    <div>
                      <span className="text-xs text-white/60 block uppercase tracking-wider">Paciente</span>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 size={10} className="text-green-400"/>
                        <span className="text-sm text-white/90">Verificado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOCALIZAÇÃO & CTA FINAL (MOVIDO PARA CIMA) --- */}
      <section id="contato" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-lux-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative group">
             <div className="p-8 md:p-16 text-white md:w-1/2 flex flex-col justify-center relative z-10 backdrop-blur-sm bg-lux-primary/95">
               <h3 className="font-serif text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight">Inicie sua jornada de cuidado.</h3>
               <p className="text-white/80 mb-8 text-base md:text-lg font-light">
                 Sua saúde mental é seu bem mais precioso. Agende sua consulta e dê o primeiro passo.
               </p>
               
               <div className="space-y-6 mb-10 md:mb-12">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                     <MapPin className="text-lux-secondary" size={20} />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg">Clínica HS</h4>
                     <p className="text-white/80 text-sm">Gurupi - TO</p>
                     <a href={LINKS.maps} target="_blank" rel="noreferrer" className="text-lux-secondary text-sm underline mt-1 block hover:text-white transition-colors">Ver no mapa</a>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                       <Phone className="text-lux-secondary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Contato</h4>
                      <p className="text-white/80 text-sm">+55 63 3301-0307</p>
                    </div>
                 </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="secondary" 
                    fullWidth
                    onClick={() => window.open(LINKS.whatsapp, '_blank')}
                    className="justify-center active:scale-95 shadow-lg"
                  >
                    Falar com Secretária
                  </Button>
                  <Button 
                    variant="outline" 
                    fullWidth 
                    className="border-white/20 text-white hover:bg-white hover:text-lux-primary justify-center active:scale-95"
                    onClick={() => window.open(LINKS.doctoralia, '_blank')}
                  >
                    Doctoralia
                  </Button>
               </div>
             </div>
             
             <div className="md:w-1/2 h-64 md:h-auto relative bg-[#E6E1DC]">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31633.90483488836!2d-49.0710252!3d-11.7290193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQzJzQ0LjUiUyA0OcKwMDQnMTUuNyJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                 width="100%" 
                 height="100%" 
                 style={{border:0, filter: 'grayscale(1) contrast(1.1) brightness(0.9)'}} 
                 allowFullScreen 
                 loading="lazy"
                 title="Mapa Clínica HS"
                 className="transition-all duration-700 ease-luxury group-hover:filter-none group-hover:scale-105"
               ></iframe>
             </div>
           </div>
        </div>
      </section>

      {/* --- FAQ SECTION (MOVIDO PARA BAIXO) --- */}
      <section id="faq" className="py-16 md:py-24 bg-lux-bg">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
             <div className="text-center mb-10 md:mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-lux-primary mb-4 tracking-tight">Perguntas Frequentes</h2>
            </div>
          </FadeIn>

          <div className="space-y-3 md:space-y-4">
            {faqItems.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div 
                  className={`bg-white rounded-xl overflow-hidden transition-all duration-500 ease-luxury border ${openFaqIndex === index ? 'border-lux-secondary/30 shadow-card' : 'border-transparent shadow-sm hover:shadow-md'}`}
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none active:bg-gray-50"
                  >
                    <span className={`font-medium text-base md:text-lg transition-colors pr-4 ${openFaqIndex === index ? 'text-lux-secondary' : 'text-lux-primary'}`}>
                      {item.question}
                    </span>
                    <div className={`transition-transform duration-500 ease-luxury ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                       {openFaqIndex === index ? <ChevronUp className="text-lux-secondary shrink-0" /> : <ChevronDown className="text-lux-textSoft shrink-0" />}
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-500 ease-luxury overflow-hidden ${
                      openFaqIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-5 md:p-6 pt-0 text-lux-textSoft leading-relaxed mt-2 text-sm md:text-base border-t border-transparent">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER (DARK THEME) --- */}
      <footer className="bg-lux-primary text-white pt-16 md:pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-12 md:mb-16">
            <div className="space-y-4 md:space-y-6">
              <h4 className="font-serif text-xl md:text-2xl font-bold text-lux-bg">Dra. Caroline Aires</h4>
              <div className="text-white/80 text-sm leading-relaxed max-w-sm">
                <strong className="font-bold text-white">Médica Psiquiatra</strong>
                <span className="block mt-2 text-xs text-white/60 uppercase tracking-widest leading-relaxed">
                  CRM-TO 7024 - MÉDICO<br/>
                  Psiquiatria - RQE-TO 3262
                </span>
                
                <span className="block mt-6">
                   <strong className="font-bold text-white">Clinica HS | Gurupi-TO</strong>
                </span>
                
                <span className="block mt-2 text-xs text-white/60 uppercase tracking-widest leading-relaxed">
                   Diretor Técnico-Médico: <br/> 
                   Caroline Aires Henrique de Santana <br/>
                   CRM-TO 7024 - MÉDICO <br/>
                   Psiquiatria - RQE-TO 3262
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lux-bg mb-4 md:mb-6 text-lg">Navegação</h4>
              <ul className="space-y-3 md:space-y-4 text-sm text-white/80">
                <li><a href="#sobre" className="hover:text-lux-secondary transition-colors block py-1">Sobre Mim</a></li>
                <li><a href="#diferenciais" className="hover:text-lux-secondary transition-colors block py-1">Nossa Filosofia</a></li>
                <li><a href="#tratamentos" className="hover:text-lux-secondary transition-colors block py-1">Tratamentos</a></li>
                <li><a href={LINKS.doctoralia} target="_blank" rel="noreferrer" className="hover:text-lux-secondary transition-colors block py-1">Agendar Consulta</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lux-bg mb-4 md:mb-6 text-lg">Importante</h4>
              <div className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-lg flex gap-4 items-start hover:bg-white/10 transition-colors group">
                <AlertCircle size={20} className="text-lux-secondaryStrong shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-lux-secondaryStrong group-hover:text-white transition-colors">Emergência</span>
                  <p className="text-xs text-white/95 leading-relaxed">
                    Este site não oferece atendimento de emergência. Em caso de crise ou risco à vida, ligue para o <strong>CVV 188</strong> ou dirija-se ao pronto-socorro mais próximo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-xs text-white/50 font-light tracking-wide">
              © 2026 Dra. Caroline Aires. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 items-center">
              <a 
                href={LINKS.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/70 hover:text-lux-secondary transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-medium"
              >
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
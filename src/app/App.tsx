import { useState } from 'react';
import svgPathsDesktop from "@/imports/svg-lf93d8sd47";
import svgPathsTablet from "@/imports/svg-dxkbn4btzq";
import svgPathsMobile from "@/imports/svg-m1c5zeu25d";
import imgNavItem from "@/assets/16ea04cf7635cf8568a15abf32c149f41ad2afcb.png";
import imgNavItem1 from "@/assets/61071de1ff7e1016fb34de249accc9aa62fdec08.png";
import imgNavItem2 from "@/assets/5442b942da457deeb180237c6c3ce2cd8c7cb76a.png";
import imgLogo from "@/assets/ac10c0d1bde583437f1e360fdfd8715b06bf6477.png";
import imgArticlesItem from "@/assets/b49e3b214fd4defc11a623af10b336ba4c5e3910.png";
import imgArticlesItem1 from "@/assets/508cce5b8ca923952642e9230c8a34bf056931af.png";
import imgArticlesItem2 from "@/assets/83bc94e7880d759cc5a44eb2aa20e410862a0583.png";
import imgArticlesItem3 from "@/assets/e42b0990278acbb590da999badfeefc90991ef44.png";
import imgButtonLarge from "@/assets/f5defbf95e8cade70cb3b5c3b8f9798395aa3548.png";
import imgImage from "@/assets/379cb7a36ea0a29c2f4b8af1bf39404f14c71ca3.png";
import imgFeaturedAlbumSection from "@/assets/84605de7d005df13f35abed23177a6a5e6466d35.png";
import imgCinemaSelectsSection from "@/assets/aca0cf5e16dde9722dea1a92e8c1a240b58f1e6a.png";
import imgButtonSmall from "@/assets/ed5b3d31828c41c6b40cd0ce216d9cf6052ef2d8.png";
import imgSubscribeContainer from "@/assets/243ad2cec4bbe48d8c5bc25518aea4722ff70dd5.png";
import ArchivePage from '@/app/components/ArchivePage.js';
import AboutPage from '@/app/components/AboutPage.js';
import VideoHome from '@/assets/videoHome.mp4'

// Data for articles
const articles = [
  {
    title: "Explorando Horizontes Cinematográficos",
    category: "Cine",
    date: "15 Ene",
    image: imgArticlesItem
  },
  {
    title: "La Magia del Cine Independiente",
    category: "Arte",
    date: "22 Ene",
    image: imgArticlesItem1
  },
  {
    title: "Narrativas Visuales Contemporáneas",
    category: "Cultura",
    date: "8 Feb",
    image: imgArticlesItem2
  },
  {
    title: "Minimalismo en el Séptimo Arte",
    category: "Diseño",
    date: "18 Feb",
    image: imgArticlesItem3
  }
];

// Data for cinema list
const cinemaList = [
  { title: "Luz Eterna", year: "2024", mood: "Contemplativo, sereno", reason: "Por su fotografía cautivadora y ritmo pausado" },
  { title: "Sombras Urbanas", year: "2023", mood: "Intenso, reflexivo", reason: "Por su narrativa envolvente y actuaciones poderosas" },
  { title: "Ecos del Pasado", year: "2024", mood: "Nostálgico, emotivo", reason: "Por su banda sonora memorable y dirección artística" },
  { title: "Horizontes Lejanos", year: "2023", mood: "Aventurero, épico", reason: "Por sus paisajes impresionantes y profundidad emocional" },
  { title: "Silencios Profundos", year: "2024", mood: "Melancólico, introspectivo", reason: "Por su uso magistral del silencio y composición visual" },
  { title: "Ritmos Nocturnos", year: "2023", mood: "Misterioso, atmosférico", reason: "Por su cinematografía experimental y narrativa única" },
  { title: "Fragmentos de Luz", year: "2024", mood: "Poético, delicado", reason: "Por su sensibilidad visual y momentos contemplativos" },
  { title: "Reflejos del Alma", year: "2023", mood: "Profundo, conmovedor", reason: "Por su exploración de la condición humana" }
];

function NavButton({ 
  children, 
  bgImage, 
  bgColor, 
  rounded = '',
  onClick 
}: { 
  children: React.ReactNode; 
  bgImage?: string; 
  bgColor: string; 
  rounded?: string;
  onClick?: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className={`
        px-4 py-3 relative shrink-0 transition-all duration-300 
        hover:scale-105 hover:shadow-lg active:scale-95
        ${rounded}
      `}
      style={{ 
        backgroundImage: bgImage ? `url('${bgImage}'), linear-gradient(90deg, ${bgColor} 0%, ${bgColor} 100%)` : `linear-gradient(90deg, ${bgColor} 0%, ${bgColor} 100%)`,
        backgroundSize: bgImage ? '1280px 600px, auto auto' : 'auto',
        backgroundPosition: 'top left'
      }}
    >
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#0f0e0e] text-lg md:text-xl tracking-tight" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        {children}
      </p>
    </button>
  );
}

function Navigation({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <nav className="flex items-center justify-between md:justify-center gap-2 md:gap-4 pointer-events-auto pt-2.5 sticky top-0 z-[5] px-4 md:px-0">
      <div className="hidden md:block relative shrink-0 size-11">
        <img alt="Cine Archive logo" className="absolute inset-0 max-w-none object-cover size-full" src={imgLogo} />
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center flex-1 md:flex-initial">
        <NavButton bgImage={imgNavItem} bgColor="rgb(255, 87, 0)" onClick={() => onNavigate('home')}>Inicio</NavButton>
        <NavButton bgImage={imgNavItem1} bgColor="rgb(50, 206, 87)" rounded="rounded-full" onClick={() => onNavigate('archive')}>Archivo</NavButton>
        <NavButton bgImage={imgNavItem2} bgColor="rgb(163, 202, 255)" rounded="rounded-md" onClick={() => onNavigate('about')}>Acerca</NavButton>
      </div>
      <div className="hidden md:block shrink-0 size-11" />
    </nav>
  );
}

function HeroSection() {
  return (
    <header className="flex flex-col h-[640px] md:h-[800px] items-center justify-end relative rounded-lg shrink-0 w-full overflow-hidden">
      <video 
        aria-label="Compilación de escenas cinematográficas" 
        autoPlay 
        className="absolute max-w-none object-cover rounded-lg size-full" 
        controlsList="nodownload" 
        loop 
        muted
        playsInline
      >
        <source src={VideoHome} />
      </video>
      <div className="relative shrink-0 w-full pb-4 px-4 md:pb-5 md:px-5">
        <div className="flex flex-col items-start w-full">
          <div className="w-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1220 172.332">
              <path d={svgPathsDesktop.p6c53100} fill="#F6F8FB" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

function ArticleCard({ title, category, date, image }: { title: string; category: string; date: string; image: string }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <article 
      className="flex-1 min-w-[280px] md:min-w-[380px] lg:min-w-[600px] h-[460px] md:h-[500px] lg:h-[700px] relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center justify-end size-full">
        <div className="flex flex-col items-center justify-end p-2.5 relative size-full">
          <img 
            alt={title} 
            className={`absolute inset-0 max-w-none object-cover size-full transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            src={image} 
          />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" />
          <div className={`backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] rounded-md w-full transition-all duration-300 ${isHovered ? 'bg-[rgba(255,255,255,0.3)]' : ''}`}>
            <div className="flex flex-col justify-end size-full">
              <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold items-start justify-end p-3 text-[#f6f8fb] text-lg md:text-xl">
                <h2 className="whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
                  {title}
                </h2>
                <div className="flex gap-1 items-center">
                  <p style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>{category}</p>
                  <p style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>·</p>
                  <p style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>{date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ArticlesList() {
  return (
    <section className="flex flex-wrap gap-2.5 items-start justify-center w-full">
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </section>
  );
}

function ViewAllButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      aria-label="Ver todos los artículos" 
      className={`cursor-pointer min-w-full md:min-w-[600px] lg:min-w-[800px] relative rounded-lg shrink-0 w-full transition-all duration-300 hover:shadow-2xl active:scale-95 ${isHovered ? 'scale-105' : 'scale-100'}`}
      style={{ 
        backgroundImage: `url('${imgButtonLarge}'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)`,
        backgroundSize: '1280px 600px, auto auto',
        backgroundPosition: 'top left'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center size-full">
        <div className="flex items-center justify-center px-6 py-6 md:py-8 w-full">
          <p className="flex-1 font-['Instrument_Serif:Italic',sans-serif] italic leading-[0.9] text-[#0f0e0e] text-5xl md:text-6xl lg:text-[80px] text-center tracking-tight">
            Ver todo
          </p>
        </div>
      </div>
    </button>
  );
}

function FeaturedAlbumSection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="relative rounded-lg shrink-0 w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none rounded-lg">
        <div className="absolute bg-[#141414] inset-0 rounded-lg" />
        <img 
          alt="" 
          className="absolute max-w-none mix-blend-screen object-cover opacity-60 rounded-lg size-full" 
          src={imgFeaturedAlbumSection} 
        />
      </div>
      <div className="flex flex-col items-center size-full">
        <div className="flex flex-col items-center pb-10 md:pb-15 pt-40 md:pt-72 px-2.5 relative w-full">
          <h2 
            className="absolute block font-['Tilt_Warp:Regular',sans-serif] leading-[0.8] left-2.5 max-w-[335px] md:max-w-[760px] lg:max-w-[1000px] text-[#f6f8fb] text-7xl md:text-9xl lg:text-[160px] top-10 md:top-15 tracking-tighter" 
            style={{ fontVariationSettings: "'XROT' 0, 'YROT' 0" }}
          >
            Álbum Destacado
          </h2>
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center size-full">
              <div className="flex flex-col gap-8 items-center px-10 md:px-20 lg:px-[200px] relative w-full">
                <div 
                  className={`aspect-square max-h-[300px] md:max-h-[600px] lg:max-h-[1000px] max-w-[300px] md:max-w-[600px] lg:max-w-[1000px] relative shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25),0px_4px_80px_0px_rgba(0,0,0,0.5)] shrink-0 w-full transition-transform duration-500 cursor-pointer ${isHovered ? 'scale-105 rotate-2' : 'scale-100 rotate-0'}`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img 
                    alt="Portada del álbum 'Memorias Etéreas' de Resonancia" 
                    className="absolute inset-0 max-w-none object-cover size-full" 
                    src={imgImage} 
                  />
                </div>
                <div className="flex flex-col gap-2 items-center max-w-[640px] w-full">
                  <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#f6f8fb] text-lg md:text-xl text-center" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
                    Memorias Etéreas por Resonancia
                  </p>
                  <a 
                    className="flex gap-1.5 items-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95" 
                    href="#"
                  >
                    <div className="flex h-3.5 items-center justify-center relative shrink-0 w-2.5">
                      <div className="flex-none rotate-90">
                        <div className="h-2.5 relative w-3.5">
                          <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1244 7.5">
                              <path d={svgPathsDesktop.p6ddeb00} fill="#F6F8FB" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#f6f8fb] text-lg md:text-xl text-center" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
                      Escuchar ahora
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CinemaItem({ title, year, mood, reason }: { title: string; year: string; mood: string; reason: string }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`flex gap-4 items-start py-4 relative shrink-0 w-full cursor-pointer transition-colors duration-300 ${isHovered ? 'bg-[rgba(0,0,0,0.02)]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute border-[#555659] border-b border-dashed border-t inset-0 pointer-events-none" />
      <p className="hidden lg:block flex-1 font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#0f0e0e] text-lg md:text-xl" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        {title}
      </p>
      <p className="lg:hidden flex-1 font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#0f0e0e] text-lg md:text-xl" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        {title}
      </p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#0f0e0e] text-lg md:text-xl w-20 md:w-40 shrink-0 text-right lg:text-left" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        {year}
      </p>
      <p className="hidden lg:block flex-1 font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#0f0e0e] text-lg md:text-xl" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        {mood}
      </p>
      <p className="hidden lg:block flex-1 font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#0f0e0e] text-lg md:text-xl text-right" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        {reason}
      </p>
    </div>
  );
}

function CinemaSelectsSection() {
  return (
    <section 
      className="relative rounded-lg shrink-0 w-full" 
      style={{ 
        backgroundImage: `url('${imgCinemaSelectsSection}'), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)`,
        backgroundSize: '1280px 600px, auto auto',
        backgroundPosition: 'top left'
      }}
    >
      <div className="flex flex-col gap-12 md:gap-20 items-start px-2.5 py-10 md:py-16 w-full">
        <h2 
          className="block font-['Tilt_Warp:Regular',sans-serif] leading-[0.8] max-w-[335px] md:max-w-[760px] lg:max-w-[1000px] text-[#0f0e0e] text-7xl md:text-9xl lg:text-[160px] tracking-tighter" 
          style={{ fontVariationSettings: "'XROT' 0, 'YROT' 0" }}
        >
          Selección Cinematográfica
        </h2>
        <div className="flex flex-col gap-3 items-start w-full overflow-x-auto">
          <div className="flex gap-4 items-center w-full font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#0f0e0e] text-lg md:text-xl">
            <p className="hidden lg:block flex-1 opacity-60" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>Película</p>
            <p className="lg:hidden flex-1 opacity-60" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>Película</p>
            <p className="opacity-60 w-20 md:w-40 shrink-0 text-right lg:text-left" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>Año</p>
            <p className="hidden lg:block flex-1 opacity-60" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>Ambiente</p>
            <p className="hidden lg:block flex-1 opacity-60 text-right" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>Por qué ver</p>
          </div>
          <div className="flex flex-col items-start w-full">
            {cinemaList.map((item, index) => (
              <CinemaItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Suscripción:', email);
    setEmail('');
  };
  
  return (
    <section 
      className="relative rounded-lg shrink-0 w-full overflow-hidden" 
      style={{ 
        backgroundImage: `url('${imgSubscribeContainer}'), linear-gradient(90deg, rgb(255, 136, 0) 0%, rgb(255, 136, 0) 100%)`,
        backgroundSize: '1280px 600px, auto auto',
        backgroundPosition: 'top left'
      }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-16 md:py-24 w-full">
        <div className="flex flex-col gap-6 md:gap-8 items-center max-w-[640px] w-full">
          <h2 className="font-['Instrument_Serif:Italic',sans-serif] italic leading-[0.9] text-[#0f0e0e] text-4xl md:text-5xl lg:text-6xl text-center">
            Sumérgete en la experiencia
          </h2>
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#0f0e0e] text-base md:text-lg text-center" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Recibe las últimas actualizaciones y contenido exclusivo directamente en tu correo
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-5 py-3.5 rounded-lg border-2 border-[#0f0e0e] bg-white text-[#0f0e0e] font-['Geist:SemiBold',sans-serif] font-semibold text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] transition-all"
              required
            />
            <button
              type="submit"
              className={`px-8 py-3.5 rounded-lg bg-[#0f0e0e] text-white font-['Geist:SemiBold',sans-serif] font-semibold text-base md:text-lg transition-all duration-300 hover:bg-[#2f2e2e] active:scale-95 ${isHovered ? 'scale-105 shadow-xl' : 'scale-100'}`}
              style={{ 
                backgroundImage: `url('${imgButtonSmall}'), linear-gradient(90deg, rgb(15, 14, 14) 0%, rgb(15, 14, 14) 100%)`,
                backgroundSize: '1280px 600px, auto auto',
                backgroundPosition: 'top left'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative shrink-0 w-full bg-[#0f0e0e] rounded-t-lg">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 px-6 md:px-12 py-12 md:py-16 w-full">
        <div className="flex flex-col gap-4">
          <h3 className="font-['Tilt_Warp:Regular',sans-serif] text-[#f6f8fb] text-2xl md:text-3xl tracking-tight">
            Cine Archive
          </h3>
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#8c8d92] text-sm md:text-base max-w-xs" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Descubriendo y celebrando el arte cinematográfico en todas sus formas
          </p>
        </div>
        <div className="flex flex-wrap gap-8 md:gap-12">
          <div className="flex flex-col gap-3">
            <h4 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[#f6f8fb] text-sm md:text-base" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
              Explorar
            </h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="font-['Geist:SemiBold',sans-serif] font-semibold text-[#8c8d92] text-sm md:text-base hover:text-[#f6f8fb] transition-colors" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>Artículos</a></li>
              <li><a href="#" className="font-['Geist:SemiBold',sans-serif] font-semibold text-[#8c8d92] text-sm md:text-base hover:text-[#f6f8fb] transition-colors" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>Películas</a></li>
              <li><a href="#" className="font-['Geist:SemiBold',sans-serif] font-semibold text-[#8c8d92] text-sm md:text-base hover:text-[#f6f8fb] transition-colors" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>Música</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[#f6f8fb] text-sm md:text-base" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
              Conectar
            </h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="font-['Geist:SemiBold',sans-serif] font-semibold text-[#8c8d92] text-sm md:text-base hover:text-[#f6f8fb] transition-colors" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>Twitter</a></li>
              <li><a href="#" className="font-['Geist:SemiBold',sans-serif] font-semibold text-[#8c8d92] text-sm md:text-base hover:text-[#f6f8fb] transition-colors" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>Instagram</a></li>
              <li><a href="#" className="font-['Geist:SemiBold',sans-serif] font-semibold text-[#8c8d92] text-sm md:text-base hover:text-[#f6f8fb] transition-colors" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#2f2e2e] px-6 md:px-12 py-6">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold text-[#8c8d92] text-xs md:text-sm text-center" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
          © 2026 Cine Archive. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen w-full bg-[#0f0e0e] flex flex-col">
      <div className="flex-1 flex flex-col items-center w-full">
        <main className="max-w-[1800px] relative shrink-0 w-full z-[3]">
          <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
            <div className="flex flex-col gap-2.5 items-center justify-center max-w-[inherit] px-2.5 w-full">
              <Navigation onNavigate={handleNavigation} />
              {currentPage === 'home' ? (
                <>
                  <HeroSection />
                  <ArticlesList />
                  <ViewAllButton />
                  <FeaturedAlbumSection />
                  <CinemaSelectsSection />
                  <SubscribeSection />
                  <Footer />
                </>
              ) : currentPage === 'archive' ? (
                <ArchivePage />
              ) : currentPage === 'about' ? (
                <AboutPage />
              ) : null}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
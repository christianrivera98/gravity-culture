import { useState } from 'react';
import imgArticlesItem from "@/assets/b49e3b214fd4defc11a623af10b336ba4c5e3910.png";
import imgArticlesItem1 from "@/assets/508cce5b8ca923952642e9230c8a34bf056931af.png";
import imgArticlesItem2 from "@/assets/83bc94e7880d759cc5a44eb2aa20e410862a0583.png";
import imgArticlesItem3 from "@/assets/e42b0990278acbb590da999badfeefc90991ef44.png";
import imgButtonSmall from "@/assets/ed5b3d31828c41c6b40cd0ce216d9cf6052ef2d8.png";
import imgSubscribeContainer from "@/assets/243ad2cec4bbe48d8c5bc25518aea4722ff70dd5.png";
import imgNavItem from "@/assets/16ea04cf7635cf8568a15abf32c149f41ad2afcb.png";
import imgNavItem1 from "@/assets/61071de1ff7e1016fb34de249accc9aa62fdec08.png";
import imgNavItem2 from "@/assets/5442b942da457deeb180237c6c3ce2cd8c7cb76a.png";
import imgLogo from "@/assets/ac10c0d1bde583437f1e360fdfd8715b06bf6477.png";

// Datos de artículos de muestra para el archivo
const archiveArticles = [
  { title: "Escuchando películas que derivan", category: "Cine", date: "12 Ago", image: imgArticlesItem },
  { title: "Escuchando películas que derivan", category: "Cine", date: "12 Ago", image: imgArticlesItem1 },
  { title: "Escuchando películas que derivan", category: "Cine", date: "12 Ago", image: imgArticlesItem2 },
  { title: "Escuchando películas que derivan", category: "Cine", date: "12 Ago", image: imgArticlesItem3 },
  { title: "Escuchando películas que derivan", category: "Cine", date: "12 Ago", image: imgArticlesItem },
  { title: "Escuchando películas que derivan", category: "Cine", date: "12 Ago", image: imgArticlesItem1 },
  { title: "Escuchando películas que derivan", category: "Cine", date: "12 Ago", image: imgArticlesItem2 },
  { title: "Escuchando películas que derivan", category: "Cine", date: "12 Ago", image: imgArticlesItem3 },
];

interface ArchiveCardProps {
  title: string;
  category: string;
  date: string;
  image: string;
}

function ArchiveCard({ title, category, date, image }: ArchiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <article 
      className="flex-1 min-w-[280px] sm:min-w-[380px] lg:min-w-[600px] h-[460px] sm:h-[500px] lg:h-[700px] relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
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
              <div className="flex flex-col font-semibold items-start justify-end p-3 text-[#f6f8fb] text-base sm:text-lg lg:text-xl">
                <h2 className="whitespace-pre-wrap">{title}</h2>
                <div className="flex gap-1 items-center text-sm sm:text-base">
                  <p>{category}</p>
                  <p>·</p>
                  <p>{date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function HeaderSection() {
  return (
    <header className="flex flex-col items-center py-20 sm:py-32 lg:py-44 relative rounded-lg shrink-0 w-full">
      <h1 className="block leading-[0.8] relative shrink-0 text-[#f6f8fb] text-6xl sm:text-8xl lg:text-[160px] text-center tracking-tighter w-full">
        Archivo
      </h1>
    </header>
  );
}

function ArchiveGrid() {
  return (
    <section className="flex flex-wrap gap-2.5 items-start justify-center w-full">
      {archiveArticles.map((article, index) => (
        <ArchiveCard key={index} {...article} />
      ))}
    </section>
  );
}

function EndOfReel() {
  return (
    <div className="flex flex-col items-center gap-6 py-16 sm:py-24 w-full">
      <p className="italic leading-[0.9] text-[#f6f8fb] text-3xl sm:text-4xl lg:text-5xl text-center">
        Fin de la cinta · Fin ·
      </p>
      <div className="w-full h-px bg-[#f6f8fb] opacity-20" />
    </div>
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
      <div className="flex flex-col items-center justify-center px-6 py-12 sm:py-16 lg:py-24 w-full">
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center max-w-[640px] w-full">
          <h2 className="italic leading-[0.9] text-[#0f0e0e] text-3xl sm:text-4xl lg:text-6xl text-center">
            Sintoniza la señal
          </h2>
          <p className="font-semibold leading-[1.4] text-[#0f0e0e] text-sm sm:text-base lg:text-lg text-center">
            No importa el qué— solo asegúrate de que sea claro, rápido y refinado
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg border-2 border-[#0f0e0e] bg-white text-[#0f0e0e] font-semibold text-sm sm:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] transition-all"
              required
            />
            <button
              type="submit"
              className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-[#0f0e0e] text-white font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-[#2f2e2e] active:scale-95 ${isHovered ? 'scale-105 shadow-xl' : 'scale-100'}`}
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
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 w-full">
        <div className="flex flex-col gap-3 sm:gap-4">
          <h3 className="text-[#f6f8fb] text-xl sm:text-2xl lg:text-3xl tracking-tight">
            Grain Archive
          </h3>
          <p className="font-semibold leading-[1.4] text-[#8c8d92] text-xs sm:text-sm lg:text-base max-w-xs">
            Coleccionando momentos visuales y experiencias atmosféricas
          </p>
        </div>
        <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12">
          <div className="flex flex-col gap-2 sm:gap-3">
            <h4 className="font-semibold text-[#f6f8fb] text-xs sm:text-sm lg:text-base">
              Explorar
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2">
              <li><a href="#" className="font-semibold text-[#8c8d92] text-xs sm:text-sm lg:text-base hover:text-[#f6f8fb] transition-colors">Películas</a></li>
              <li><a href="#" className="font-semibold text-[#8c8d92] text-xs sm:text-sm lg:text-base hover:text-[#f6f8fb] transition-colors">Música</a></li>
              <li><a href="#" className="font-semibold text-[#8c8d92] text-xs sm:text-sm lg:text-base hover:text-[#f6f8fb] transition-colors">Visuales</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <h4 className="font-semibold text-[#f6f8fb] text-xs sm:text-sm lg:text-base">
              Conectar
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2">
              <li><a href="#" className="font-semibold text-[#8c8d92] text-xs sm:text-sm lg:text-base hover:text-[#f6f8fb] transition-colors">Twitter</a></li>
              <li><a href="#" className="font-semibold text-[#8c8d92] text-xs sm:text-sm lg:text-base hover:text-[#f6f8fb] transition-colors">Instagram</a></li>
              <li><a href="#" className="font-semibold text-[#8c8d92] text-xs sm:text-sm lg:text-base hover:text-[#f6f8fb] transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#2f2e2e] px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
        <p className="font-semibold text-[#8c8d92] text-xs sm:text-sm text-center">
          © 2024 Grain Archive. Momentos, preservados y compartidos.
        </p>
      </div>
    </footer>
  );
}

export default function ArchivePage() {
  return (
    <>
      <HeaderSection />
      <ArchiveGrid />
      <EndOfReel />
      <SubscribeSection />
      <Footer />
    </>
  );
}
import { useState } from 'react';
import imgPolaroid from "@/assets/327ebb9059b8517233897d8ffac701871904fbaf.png";
import imgPaperScrap from "@/assets/129c223734af1592772734ca8e5453081e997d68.png";
import imgVinylRecord from "@/assets/f7cbd3934cbe4b562514fe48a4ee01021ff6a99d.png";
import imgVhsTape from "@/assets/9267a2179c30f9b313986c8e295e0d6ffb577258.png";
import imgTelegram from "@/assets/be2e3a0488089f1c66c3bede8a0d732badfdf701.png";
import imgCasette from "@/assets/ca77a98addcee84e4b287b148809a23bbecdacf6.png";
import imgPostcard from "@/assets/79867e892cba4608bf371365b70d76e8c929c1e0.png";
import imgFloppyDisk from "@/assets/ec418c5c239d4ab529ec310aa7e1a6473030621d.png";
import imgImage from "@/assets/f2017e56bdc3fe5182c38c5f7e51b1a9013a49fe.png";
import imgButtonSmall from "@/assets/ed5b3d31828c41c6b40cd0ce216d9cf6052ef2d8.png";
import imgSubscribeContainer from "@/assets/243ad2cec4bbe48d8c5bc25518aea4722ff70dd5.png";

function HeaderSection() {
  return (
    <header className="flex flex-col items-center py-20 sm:py-32 lg:py-44 relative rounded-lg shrink-0 w-full">
      <h1 className="block leading-[0.8] relative shrink-0 text-[#f6f8fb] text-6xl sm:text-8xl lg:text-[160px] text-center tracking-tighter w-full">
        About
      </h1>
    </header>
  );
}

function ObjectsMarquee() {
  return (
    <section 
      aria-label="A scrolling row of vintage media objects" 
      className="flex gap-6 sm:gap-9 items-center justify-center overflow-x-auto overflow-y-hidden py-5 relative shrink-0 px-4"
    >
      <div className="h-32 sm:h-52 lg:h-[270px] relative shrink-0 w-28 sm:w-44 lg:w-56">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[112.83%] left-[-4.85%] max-w-none top-[-7.19%] w-[108.84%]" src={imgPolaroid} />
        </div>
      </div>
      <div className="h-44 sm:h-64 lg:h-[350px] relative shrink-0 w-24 sm:w-36 lg:w-48">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgPaperScrap} />
      </div>
      <div className="relative shrink-0 size-40 sm:size-56 lg:size-80">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[109.93%] left-[-5.06%] max-w-none top-[-5.33%] w-[110.12%]" src={imgVinylRecord} />
        </div>
      </div>
      <div className="h-20 sm:h-32 lg:h-44 relative shrink-0 w-32 sm:w-52 lg:w-[313px]">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[173.06%] left-[-22.94%] max-w-none top-[-37.55%] w-[149.65%]" src={imgVhsTape} />
        </div>
      </div>
      <div className="h-28 sm:h-44 lg:h-60 relative shrink-0 w-36 sm:w-56 lg:w-[348px]">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[125.43%] left-[-6.85%] max-w-none top-[-12.71%] w-[113.7%]" src={imgTelegram} />
        </div>
      </div>
      <div className="h-20 sm:h-28 lg:h-40 relative shrink-0 w-32 sm:w-48 lg:w-64">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[192.77%] left-[-36.44%] max-w-none top-[-54.47%] w-[181.71%]" src={imgCasette} />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-rotate-4">
          <div className="h-32 sm:h-48 lg:h-[280px] relative w-44 sm:w-64 lg:w-[425px]">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[205.31%] left-[-40.59%] max-w-none top-[-52.5%] w-[178.5%]" src={imgPostcard} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="rotate-6">
          <div className="h-24 sm:h-36 lg:h-56 relative w-24 sm:w-32 lg:w-[212.896px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgFloppyDisk} />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <main className="max-w-[1280px] relative shrink-0 w-full">
      <div className="flex flex-col lg:flex-row justify-center max-w-[inherit] size-full">
        <div className="flex flex-col lg:flex-row font-semibold gap-6 sm:gap-8 lg:gap-10 items-start justify-center leading-[1.4] px-6 sm:px-12 lg:px-[50px] py-12 sm:py-20 lg:py-[120px] relative text-[#f6f8fb] text-base sm:text-lg lg:text-xl w-full">
          <h2 className="block relative shrink-0 lg:w-[200px] w-full">
            Why this exists
          </h2>
          <p className="flex-1 relative">
            Grain Archive is a running record of the fuzz, fragments, and found moments in music, film, and visual culture. From washed-out shoegaze to sun-faded celluloid, we document the tones that don't always get clean airtime. Not everything needs to be polished to mean something. Independently run by me, Casey Moth, and updated at the mercy of mood, memory, and whatever's looping at 3am.
          </p>
        </div>
      </div>
    </main>
  );
}

function ContactSection() {
  return (
    <section className="max-w-[1800px] relative shrink-0 w-full">
      <div className="flex flex-col lg:flex-row justify-center max-w-[inherit] size-full">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10 items-stretch lg:items-start justify-center px-4 sm:px-6 lg:px-10 pb-12 sm:pb-20 lg:pb-[120px] relative w-full">
          <div className="flex-1 h-64 sm:h-96 lg:h-[700px] relative rounded-lg overflow-hidden">
            <img 
              alt="Portrait of the blog owner" 
              className="absolute inset-0 max-w-none object-cover size-full" 
              src={imgImage} 
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start justify-center">
            <div className="flex flex-col gap-4 sm:gap-6 items-start max-w-[400px] text-[#f6f8fb] w-full">
              <h2 className="block text-2xl sm:text-3xl tracking-tight">
                Contact
              </h2>
              <div className="flex flex-col font-semibold text-base sm:text-lg lg:text-xl">
                <p className="mb-4">Got a dusty VHS, a lost record, or a film no one talks about?</p>
                <p>
                  Send recs, love letters, or questions to{' '}
                  <a 
                    className="cursor-pointer underline hover:text-[#a3caff] transition-colors" 
                    href="mailto:mail@grainarchive.com"
                  >
                    mail@grainarchive.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaperHoles({ orientation = 'horizontal' }: { orientation?: 'horizontal' | 'vertical' }) {
  const isHorizontal = orientation === 'horizontal';
  
  return (
    <div className={`flex ${isHorizontal ? 'flex-row justify-between items-center px-5 py-4' : 'flex-col justify-between items-start px-5 py-12'} relative shrink-0 ${isHorizontal ? 'w-full h-[52px]' : 'w-16 h-full'}`}>
      <div className="relative shrink-0 size-5 sm:size-6">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="#0F0E0E" r="11.5" stroke="#0F0E0E" />
        </svg>
      </div>
      <div className="relative shrink-0 size-5 sm:size-6">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="#0F0E0E" r="11.5" stroke="#0F0E0E" />
        </svg>
      </div>
      <div className="relative shrink-0 size-5 sm:size-6">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="#0F0E0E" r="11.5" stroke="#0F0E0E" />
        </svg>
      </div>
    </div>
  );
}

function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription:', email);
    setEmail('');
  };
  
  return (
    <aside className="relative shrink-0 w-full z-[2] py-12 sm:py-20 lg:py-32">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="flex flex-col items-center justify-end px-6 sm:px-10 relative w-full max-w-[1400px]">
          <div 
            className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-10 items-center relative w-full"
            style={{ 
              backgroundImage: `url('${imgSubscribeContainer}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Paper graphics top (mobile/tablet) */}
            <div className="lg:hidden w-full">
              <div className="relative border-b-[1.5px] border-dashed border-[#0f0e0e]">
                <PaperHoles orientation="horizontal" />
              </div>
            </div>
            
            {/* Paper graphics left (desktop) */}
            <div className="hidden lg:flex h-full">
              <div className="relative border-r-[1.5px] border-dashed border-[#0f0e0e]">
                <PaperHoles orientation="vertical" />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-1 flex-col gap-6 sm:gap-8 items-center justify-center py-8 sm:py-12 px-6 sm:px-10">
              <div className="flex flex-col gap-4 items-center text-[#0f0e0e] text-center w-full">
                <h2 className="italic leading-[0.9] text-4xl sm:text-5xl lg:text-[80px] tracking-tight">
                  Tune into the signal
                </h2>
                <p className="font-normal leading-[1.4] text-base sm:text-lg lg:text-xl">
                  No noise—just deep cuts on music, film, and culture
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
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
                  Subscribe
                </button>
              </form>
            </div>
            
            {/* Paper graphics right (desktop) */}
            <div className="hidden lg:flex h-full">
              <div className="relative border-l-[1.5px] border-dashed border-[#0f0e0e]">
                <PaperHoles orientation="vertical" />
              </div>
            </div>
            
            {/* Paper graphics bottom (mobile/tablet) */}
            <div className="lg:hidden w-full">
              <div className="relative border-t-[1.5px] border-dashed border-[#0f0e0e]">
                <PaperHoles orientation="horizontal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="relative shrink-0 w-full z-[1]">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between size-full px-6 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-20 gap-8 lg:gap-10">
        <div className="flex flex-col leading-[0.85] text-[#f6f8fb] text-6xl sm:text-8xl lg:text-[300px] ">
          <h2 className="block">Grain</h2>
          <h2 className="block">Archive</h2>
        </div>
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-[100px] items-start lg:items-end">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-start px-1.5 py-0.5 rounded-full border border-[#d1d2d8]">
                <h3 className="font-semibold leading-[1.4] text-[#d1d2d8] text-[10px] uppercase tracking-wide">
                  Links
                </h3>
              </div>
              <div className="flex flex-col font-normal leading-[1.4] text-[#d1d2d8] text-lg sm:text-xl underline">
                <p>Home</p>
                <p>Archive</p>
                <p>About</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-start px-1.5 py-0.5 rounded-full border border-[#d1d2d8]">
                <h3 className="font-semibold leading-[1.4] text-[#d1d2d8] text-[10px] uppercase tracking-wide">
                  Connect
                </h3>
              </div>
              <div className="flex flex-col font-normal leading-[1.4] text-[#d1d2d8] text-lg sm:text-xl underline">
                <a href="https://www.instagram.com/figma" className="hover:text-[#f6f8fb] transition-colors">Instagram</a>
                <a href="https://www.threads.com/@figma" className="hover:text-[#f6f8fb] transition-colors">Threads</a>
                <a href="https://www.youtube.com/@Figma" className="hover:text-[#f6f8fb] transition-colors">YouTube</a>
                <a href="mailto:hello@grainarchive.com" className="hover:text-[#f6f8fb] transition-colors">Email</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-normal leading-[1.4] text-[#d1d2d8] text-sm sm:text-base">
            <p>©2025 Grain Archive</p>
            <p>Words, images, and signals from the edge</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <>
      <HeaderSection />
      <ObjectsMarquee />
      <AboutSection />
      <ContactSection />
      <SubscribeSection />
      <Footer />
    </>
  );
}

import svgPaths from "./svg-m1c5zeu25d";
import imgNavItem from "figma:asset/16ea04cf7635cf8568a15abf32c149f41ad2afcb.png";
import imgNavItem1 from "figma:asset/61071de1ff7e1016fb34de249accc9aa62fdec08.png";
import imgNavItem2 from "figma:asset/5442b942da457deeb180237c6c3ce2cd8c7cb76a.png";
import imgArticlesItem from "figma:asset/b49e3b214fd4defc11a623af10b336ba4c5e3910.png";
import imgArticlesItem1 from "figma:asset/508cce5b8ca923952642e9230c8a34bf056931af.png";
import imgArticlesItem2 from "figma:asset/83bc94e7880d759cc5a44eb2aa20e410862a0583.png";
import imgArticlesItem3 from "figma:asset/e42b0990278acbb590da999badfeefc90991ef44.png";
import imgButtonLarge from "figma:asset/f5defbf95e8cade70cb3b5c3b8f9798395aa3548.png";
import imgImage from "figma:asset/379cb7a36ea0a29c2f4b8af1bf39404f14c71ca3.png";
import imgFeaturedAlbumSection from "figma:asset/84605de7d005df13f35abed23177a6a5e6466d35.png";
import imgCinemaSelectsSection from "figma:asset/aca0cf5e16dde9722dea1a92e8c1a240b58f1e6a.png";
import imgButtonSmall from "figma:asset/ed5b3d31828c41c6b40cd0ce216d9cf6052ef2d8.png";
import imgSubscribeContainer from "figma:asset/243ad2cec4bbe48d8c5bc25518aea4722ff70dd5.png";
import imgSubscribeSection from "figma:asset/250bac27b70108a77f6137c877d072ae2b4362a3.png";

function NavItem() {
  return (
    <button aria-label="Navigate to homepage" className="bg-size-[1280px_600px,auto_auto] bg-top-left content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Nav item" style={{ backgroundImage: `url('${imgNavItem}'), linear-gradient(90deg, rgb(255, 87, 0) 0%, rgb(255, 87, 0) 100%)` }}>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#0f0e0e] text-[18px] text-left tracking-[-0.36px]" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Home
      </p>
    </button>
  );
}

function NavItem1() {
  return (
    <button aria-label="Browse article archive" className="bg-size-[1280px_600px,auto_auto] bg-top-left content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Nav item" style={{ backgroundImage: `url('${imgNavItem1}'), linear-gradient(90deg, rgb(50, 206, 87) 0%, rgb(50, 206, 87) 100%)` }}>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#0f0e0e] text-[18px] text-left tracking-[-0.36px]" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Archive
      </p>
    </button>
  );
}

function NavItem2() {
  return (
    <button aria-label="Learn more about Grain Archive" className="bg-size-[1280px_600px,auto_auto] bg-top-left content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Nav item" style={{ backgroundImage: `url('${imgNavItem2}'), linear-gradient(90deg, rgb(163, 202, 255) 0%, rgb(163, 202, 255) 100%)` }}>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#0f0e0e] text-[18px] text-left tracking-[-0.36px]" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        About
      </p>
    </button>
  );
}

function Links() {
  return (
    <div className="content-center cursor-pointer flex flex-[1_0_0] flex-wrap gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="Links">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="content-stretch flex items-start justify-center pointer-events-auto pt-[10px] sticky top-0 z-[5]" data-name="Navigation">
      <Links />
    </nav>
  );
}

function Marquee() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0 w-full z-[4]" data-name="Marquee">
      <div className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[0] min-h-px min-w-px text-[#8c8d92] text-[20px] text-center tracking-[-0.4px]" style={{ fontFeatureSettings: "'ss01', 'ss03'" }} />
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Logo container">
      <div className="content-stretch flex flex-col items-start pb-[10px] px-[10px] relative w-full">
        <div aria-hidden="true" className="aspect-[1218.568603515625/172.13067626953125] relative shrink-0 w-full" data-name="Grain Archive Logo" role="presentation">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 47.3213">
            <path d={svgPaths.p35def500} fill="var(--fill-0, #F6F8FB)" id="Grain Archive Logo" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <header className="content-stretch flex flex-col h-[640px] items-center justify-end relative rounded-[8px] shrink-0 w-full" data-name="Hero section">
      <video aria-label="Video reel of many film scenes cut together" autoPlay className="absolute max-w-none object-cover rounded-[8px] size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/027c42043d74a9859913b7bda5625e98f4000c64" />
      </video>
      <h1 className="block font-['Geist:SemiBold',sans-serif] font-semibold h-[25px] leading-[1.4] relative shrink-0 text-[20px] text-[rgba(255,255,255,0)] text-center tracking-[-0.4px] w-[112px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Grain Archive
      </h1>
      <LogoContainer />
    </header>
  );
}

function MetaData() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Meta data">
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Film
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        ·
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Aug 12
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold items-start justify-end leading-[1.4] p-[12px] relative text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-full">
          <h2 className="block min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Listening to Films That Drift
          </h2>
          <MetaData />
        </div>
      </div>
    </div>
  );
}

function ArticlesItem() {
  return (
    <article className="h-[460px] relative rounded-[8px] shrink-0 w-full" data-name="Articles item">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[10px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArticlesItem} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content />
        </div>
      </div>
    </article>
  );
}

function MetaData1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Meta data">
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Film
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        ·
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Aug 12
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold items-start justify-end leading-[1.4] p-[12px] relative text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-full">
          <h2 className="block min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Listening to Films That Drift
          </h2>
          <MetaData1 />
        </div>
      </div>
    </div>
  );
}

function ArticlesItem1() {
  return (
    <article className="h-[460px] relative rounded-[8px] shrink-0 w-full" data-name="Articles item">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[10px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArticlesItem1} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content1 />
        </div>
      </div>
    </article>
  );
}

function MetaData2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Meta data">
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Film
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        ·
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Aug 12
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold items-start justify-end leading-[1.4] p-[12px] relative text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-full">
          <h2 className="block min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Listening to Films That Drift
          </h2>
          <MetaData2 />
        </div>
      </div>
    </div>
  );
}

function ArticlesItem2() {
  return (
    <article className="h-[460px] relative rounded-[8px] shrink-0 w-full" data-name="Articles item">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[10px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArticlesItem2} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content2 />
        </div>
      </div>
    </article>
  );
}

function MetaData3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Meta data">
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Film
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        ·
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Aug 12
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold items-start justify-end leading-[1.4] p-[12px] relative text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-full">
          <h2 className="block min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Listening to Films That Drift
          </h2>
          <MetaData3 />
        </div>
      </div>
    </div>
  );
}

function ArticlesItem3() {
  return (
    <article className="h-[460px] relative rounded-[8px] shrink-0 w-full" data-name="Articles item">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[10px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArticlesItem3} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content3 />
        </div>
      </div>
    </article>
  );
}

function ArticlesList() {
  return (
    <section className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Articles list">
      <ArticlesItem />
      <ArticlesItem1 />
      <ArticlesItem2 />
      <ArticlesItem3 />
    </section>
  );
}

function ButtonLarge() {
  return (
    <button aria-label="View all articles" className="bg-size-[1280px_600px,auto_auto] bg-top-left cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="Button - large" style={{ backgroundImage: `url('${imgButtonLarge}'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)` }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Instrument_Serif:Italic',sans-serif] italic leading-[0.9] min-h-px min-w-px relative text-[#0f0e0e] text-[80px] text-center tracking-[-1.6px] whitespace-pre-wrap">View all</p>
        </div>
      </div>
    </button>
  );
}

function CallToAction() {
  return (
    <a className="content-stretch cursor-pointer flex gap-[6px] items-center relative shrink-0" data-name="Call to action" href="https://www.figma.com/sites/">
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-[10px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[10px] relative w-[14px]" data-name="Play icon">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1244 7.5">
                <path d={svgPaths.p6ddeb00} fill="var(--fill-0, #F6F8FB)" id="Play icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#f6f8fb] text-[20px] text-center tracking-[-0.4px]" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Listen now
      </p>
    </a>
  );
}

function AlbumInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Album info">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#f6f8fb] text-[20px] text-center tracking-[-0.4px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        False Memory by Artifact
      </p>
      <CallToAction />
    </div>
  );
}

function AlbumDisplay() {
  return (
    <div className="relative shrink-0 w-full" data-name="Album display">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center px-[40px] relative w-full">
          <div className="aspect-[2000/2000] relative shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25),0px_4px_80px_0px_rgba(0,0,0,0.5)] shrink-0 w-full" data-name="Image">
            <img alt="Album cover for \'False Memory\' by Artifact — abstract blue and white geometric blur with gothic-style typography" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
          </div>
          <AlbumInfo />
        </div>
      </div>
    </div>
  );
}

function FeaturedAlbumSection() {
  return (
    <section className="relative rounded-[8px] shrink-0 w-full" data-name="Featured album section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#141414] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none mix-blend-screen object-cover opacity-60 rounded-[8px] size-full" src={imgFeaturedAlbumSection} />
      </div>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[40px] pt-[155px] px-[10px] relative w-full">
          <h2 className="absolute block font-['Tilt_Warp:Regular',sans-serif] leading-[0.8] left-[10px] max-w-[360px] text-[#f6f8fb] text-[160px] top-[60px] tracking-[-8px] w-[335px] whitespace-pre-wrap" style={{ fontVariationSettings: "'XROT' 0, 'YROT' 0" }}>
            Featured Album
          </h2>
          <AlbumDisplay />
        </div>
      </div>
    </section>
  );
}

function Labels() {
  return (
    <div className="relative shrink-0 w-full" data-name="Labels">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Geist:SemiBold',sans-serif] font-semibold gap-[16px] items-center leading-[1.4] pr-[10px] relative text-[#0f0e0e] text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap">
          <p className="flex-[1_0_0] min-h-px min-w-px opacity-60 relative" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Film
          </p>
          <p className="opacity-60 relative shrink-0 text-right w-[160px]" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Year
          </p>
        </div>
      </div>
    </div>
  );
}

function CinemaSelectsItem() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[16px] relative shrink-0 w-full" data-name="Cinema selects item">
      <div aria-hidden="true" className="absolute border-[#555659] border-b border-dashed border-t inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Static Bloom
      </p>
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] text-right tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        2023
      </p>
    </div>
  );
}

function CinemaSelectsItem1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[16px] relative shrink-0 w-full" data-name="Cinema selects item">
      <div aria-hidden="true" className="absolute border-[#555659] border-b border-dashed inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Static Bloom
      </p>
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] text-right tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        2023
      </p>
    </div>
  );
}

function CinemaSelectsItem2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[16px] relative shrink-0 w-full" data-name="Cinema selects item">
      <div aria-hidden="true" className="absolute border-[#555659] border-b border-dashed inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Static Bloom
      </p>
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] text-right tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        2023
      </p>
    </div>
  );
}

function CinemaSelectsItem3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[16px] relative shrink-0 w-full" data-name="Cinema selects item">
      <div aria-hidden="true" className="absolute border-[#555659] border-b border-dashed inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Static Bloom
      </p>
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] text-right tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        2023
      </p>
    </div>
  );
}

function CinemaSelectsItem4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[16px] relative shrink-0 w-full" data-name="Cinema selects item">
      <div aria-hidden="true" className="absolute border-[#555659] border-b border-dashed inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Static Bloom
      </p>
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] text-right tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        2023
      </p>
    </div>
  );
}

function CinemaSelectsItem5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[16px] relative shrink-0 w-full" data-name="Cinema selects item">
      <div aria-hidden="true" className="absolute border-[#555659] border-b border-dashed inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Static Bloom
      </p>
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] text-right tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        2023
      </p>
    </div>
  );
}

function CinemaSelectsItem6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[16px] relative shrink-0 w-full" data-name="Cinema selects item">
      <div aria-hidden="true" className="absolute border-[#555659] border-b border-dashed inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Static Bloom
      </p>
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] text-right tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        2023
      </p>
    </div>
  );
}

function CinemaSelectsItem7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[16px] relative shrink-0 w-full" data-name="Cinema selects item">
      <div aria-hidden="true" className="absolute border-[#555659] border-b border-dashed inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Static Bloom
      </p>
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-h-px min-w-px relative text-[#0f0e0e] text-[20px] text-right tracking-[-0.4px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        2023
      </p>
    </div>
  );
}

function CinemaSelectsList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Cinema selects list">
      <CinemaSelectsItem />
      <CinemaSelectsItem1 />
      <CinemaSelectsItem2 />
      <CinemaSelectsItem3 />
      <CinemaSelectsItem4 />
      <CinemaSelectsItem5 />
      <CinemaSelectsItem6 />
      <CinemaSelectsItem7 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="Content">
      <Labels />
      <CinemaSelectsList />
    </div>
  );
}

function CinemaSelectsSection() {
  return (
    <section className="bg-size-[1280px_600px,auto_auto] bg-top-left relative rounded-[8px] shrink-0 w-full" data-name="Cinema selects section" style={{ backgroundImage: `url('${imgCinemaSelectsSection}'), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)` }}>
      <div className="content-stretch flex flex-col gap-[80px] items-start px-[10px] py-[40px] relative w-full">
        <h2 className="block font-['Tilt_Warp:Regular',sans-serif] leading-[0.8] max-w-[360px] relative shrink-0 text-[#0f0e0e] text-[160px] tracking-[-8px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'XROT' 0, 'YROT' 0" }}>
          Cinema Selects
        </h2>
        <Content4 />
      </div>
    </section>
  );
}

function BodyContentContainer() {
  return (
    <main className="max-w-[1800px] relative shrink-0 w-full z-[3]" data-name="Body content container" tabIndex="-1">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center max-w-[inherit] px-[10px] relative w-full">
          <HeroSection />
          <ArticlesList />
          <ButtonLarge />
          <FeaturedAlbumSection />
          <CinemaSelectsSection />
        </div>
      </div>
    </main>
  );
}

function Holes() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Holes">
      <div className="content-stretch flex items-start justify-between px-[20px] py-[16px] relative size-full">
        <div aria-hidden="true" className="relative shrink-0 size-[20px]" data-name="Ellipse" role="presentation">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="9.5" stroke="var(--stroke-0, #0F0E0E)" />
          </svg>
        </div>
        <div aria-hidden="true" className="relative shrink-0 size-[20px]" data-name="Ellipse" role="presentation">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="9.5" stroke="var(--stroke-0, #0F0E0E)" />
          </svg>
        </div>
        <div aria-hidden="true" className="relative shrink-0 size-[20px]" data-name="Ellipse" role="presentation">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="9.5" stroke="var(--stroke-0, #0F0E0E)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PaperGraphics() {
  return (
    <div className="content-stretch flex h-[52px] items-center relative shrink-0 w-full" data-name="Paper graphics 1">
      <div aria-hidden="true" className="absolute border-[#0f0e0e] border-b-[1.5px] border-dashed inset-0 pointer-events-none" />
      <Holes />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#0f0e0e] text-center w-full whitespace-pre-wrap" data-name="Paragraph">
      <h2 className="block font-['Instrument_Serif:Italic',sans-serif] italic leading-[0.9] relative shrink-0 text-[80px] tracking-[-1.6px] w-full">Tune into the signal</h2>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[20px] tracking-[-0.4px] w-full" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        No noise—just deep cuts on music, film, and culture
      </p>
    </div>
  );
}

function ButtonSmall() {
  return (
    <a className="bg-size-[1280px_600px,auto_auto] bg-top-left content-stretch cursor-pointer flex h-[56px] items-center justify-center px-[16px] relative shrink-0" data-name="Button - small" href="https://www.figma.com/sites/" style={{ backgroundImage: `url('${imgButtonSmall}'), linear-gradient(90deg, rgb(15, 14, 14) 0%, rgb(15, 14, 14) 100%)` }}>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#f6f8fb] text-[20px] text-left tracking-[-0.4px]" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Subscribe
      </p>
    </a>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[40px] relative w-full">
          <Paragraph />
          <ButtonSmall />
        </div>
      </div>
    </div>
  );
}

function Holes1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Holes">
      <div className="content-stretch flex items-start justify-between px-[20px] py-[16px] relative size-full">
        <div aria-hidden="true" className="relative shrink-0 size-[20px]" data-name="Ellipse" role="presentation">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="9.5" stroke="var(--stroke-0, #0F0E0E)" />
          </svg>
        </div>
        <div aria-hidden="true" className="relative shrink-0 size-[20px]" data-name="Ellipse" role="presentation">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="9.5" stroke="var(--stroke-0, #0F0E0E)" />
          </svg>
        </div>
        <div aria-hidden="true" className="relative shrink-0 size-[20px]" data-name="Ellipse" role="presentation">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="9.5" stroke="var(--stroke-0, #0F0E0E)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PaperGraphics1() {
  return (
    <div className="content-stretch flex h-[52px] items-center relative shrink-0 w-full" data-name="Paper graphics 2">
      <div aria-hidden="true" className="absolute border-[#0f0e0e] border-dashed border-t-[1.5px] inset-0 pointer-events-none" />
      <Holes1 />
    </div>
  );
}

function SubscribeContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1400px] relative shrink-0 w-full" data-name="Subscribe container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubscribeContainer} />
      <PaperGraphics />
      <Content5 />
      <PaperGraphics1 />
    </div>
  );
}

function SubscribeSection() {
  return (
    <aside className="relative shrink-0 w-full z-[2]" data-name="Subscribe section">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubscribeSection} />
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end pb-[40px] pt-[180px] px-[40px] relative w-full">
          <SubscribeContainer />
        </div>
      </div>
    </aside>
  );
}

function LogoContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Logo container">
      <div className="aspect-[1218.568603515625/172.13067626953125] relative shrink-0 w-full" data-name="Grain Archive Logo">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 47.3213">
          <path d={svgPaths.p3eeedd00} fill="var(--fill-0, #F6F8FB)" id="Grain Archive Logo" />
        </svg>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-end px-[5px] py-[2px] relative rounded-[999px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#d1d2d8] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <h2 className="block font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#d1d2d8] text-[10px] text-right tracking-[0.4px] uppercase" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Links
      </h2>
    </div>
  );
}

function LinkList() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal items-start leading-[1.4] relative shrink-0 text-[#d1d2d8] text-[20px] text-right tracking-[-0.4px] underline w-full" data-name="Link list">
      <p className="decoration-solid relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Home
      </p>
      <p className="decoration-solid relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Archive
      </p>
      <p className="decoration-solid relative shrink-0" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        About
      </p>
    </div>
  );
}

function LinksColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="Links column">
      <Label />
      <LinkList />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-end px-[5px] py-[2px] relative rounded-[999px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#d1d2d8] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <h2 className="block font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#d1d2d8] text-[10px] text-right tracking-[0.4px] uppercase" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Connect
      </h2>
    </div>
  );
}

function LinkList1() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col font-['Geist:Regular',sans-serif] font-normal items-start leading-[1.4] relative shrink-0 text-[#d1d2d8] text-[20px] text-right tracking-[-0.4px] underline w-full" data-name="Link list">
      <a className="block decoration-solid relative shrink-0" href="https://www.instagram.com/figma" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Instagram
      </a>
      <a className="block decoration-solid relative shrink-0" href="https://www.threads.com/@figma" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Threads
      </a>
      <a className="block decoration-solid relative shrink-0" href="https://www.youtube.com/@Figma" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        YouTube
      </a>
      <a className="block decoration-solid relative shrink-0" href="mailto:mail@grainarchive.com" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Email
      </a>
    </div>
  );
}

function ConnectColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="Connect column">
      <Label1 />
      <LinkList1 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Footer links">
      <LinksColumn />
      <ConnectColumn />
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Footer content">
      <FooterLinks />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-end leading-[1.4] relative shrink-0 text-[#d1d2d8] text-[16px] tracking-[-0.32px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        <p className="mb-0">©2025 Grain Archive</p>
        <p>Words, images, and signals from the edge</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative shrink-0 w-full z-[1]" data-name="Footer">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center justify-end pb-[20px] pt-[40px] px-[20px] relative w-full">
          <LogoContainer1 />
          <FooterContent />
        </div>
      </div>
    </footer>
  );
}

export default function Mobile() {
  return (
    <div className="bg-size-[1280px_600px,auto_auto] bg-top-left content-stretch flex flex-col isolate items-center relative size-full" data-name="Mobile" style={{ backgroundImage: `url('${imgButtonSmall}'), linear-gradient(90deg, rgb(15, 14, 14) 0%, rgb(15, 14, 14) 100%)` }}>
      <div className="absolute h-[5050.3212890625px] inset-[60px_20px_0_20px] pointer-events-none">
        <Navigation />
      </div>
      <Marquee />
      <BodyContentContainer />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
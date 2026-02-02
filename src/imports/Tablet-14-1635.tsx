import svgPaths from "./svg-7c13egp39u";
import imgNavItem from "figma:asset/16ea04cf7635cf8568a15abf32c149f41ad2afcb.png";
import imgNavItem1 from "figma:asset/61071de1ff7e1016fb34de249accc9aa62fdec08.png";
import imgNavItem2 from "figma:asset/5442b942da457deeb180237c6c3ce2cd8c7cb76a.png";
import imgLogo from "figma:asset/ac10c0d1bde583437f1e360fdfd8715b06bf6477.png";
import imgPolaroid from "figma:asset/327ebb9059b8517233897d8ffac701871904fbaf.png";
import imgPaperScrap from "figma:asset/129c223734af1592772734ca8e5453081e997d68.png";
import imgVinylRecord from "figma:asset/f7cbd3934cbe4b562514fe48a4ee01021ff6a99d.png";
import imgVhsTape from "figma:asset/9267a2179c30f9b313986c8e295e0d6ffb577258.png";
import imgTelegram from "figma:asset/be2e3a0488089f1c66c3bede8a0d732badfdf701.png";
import imgCasette from "figma:asset/ca77a98addcee84e4b287b148809a23bbecdacf6.png";
import imgPostcard from "figma:asset/79867e892cba4608bf371365b70d76e8c929c1e0.png";
import imgFloppyDisk from "figma:asset/ec418c5c239d4ab529ec310aa7e1a6473030621d.png";
import imgImage from "figma:asset/f2017e56bdc3fe5182c38c5f7e51b1a9013a49fe.png";
import imgButtonSmall from "figma:asset/ed5b3d31828c41c6b40cd0ce216d9cf6052ef2d8.png";
import imgSubscribeContainer from "figma:asset/243ad2cec4bbe48d8c5bc25518aea4722ff70dd5.png";
import imgSubscribeSection from "figma:asset/d0e3c8c699748935cb2f37b831027faffffbaab2.png";

function NavItem() {
  return (
    <button aria-label="Navigate to homepage" className="bg-size-[1280px_600px,auto_auto] bg-top-left content-stretch flex items-center justify-center p-[12px] relative shrink-0" data-name="Nav item" style={{ backgroundImage: `url('${imgNavItem}'), linear-gradient(90deg, rgb(255, 87, 0) 0%, rgb(255, 87, 0) 100%)` }}>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#0f0e0e] text-[20px] text-left tracking-[-0.4px]" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Home
      </p>
    </button>
  );
}

function NavItem1() {
  return (
    <button aria-label="Browse article archive" className="bg-size-[1280px_600px,auto_auto] bg-top-left content-stretch flex items-center justify-center p-[12px] relative rounded-[999px] shrink-0" data-name="Nav item" style={{ backgroundImage: `url('${imgNavItem1}'), linear-gradient(90deg, rgb(50, 206, 87) 0%, rgb(50, 206, 87) 100%)` }}>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#0f0e0e] text-[20px] text-left tracking-[-0.4px]" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Archive
      </p>
    </button>
  );
}

function NavItem2() {
  return (
    <button aria-label="Learn more about Grain Archive" className="bg-size-[1280px_600px,auto_auto] bg-top-left content-stretch flex items-center justify-center p-[12px] relative rounded-[6px] shrink-0" data-name="Nav item" style={{ backgroundImage: `url('${imgNavItem2}'), linear-gradient(90deg, rgb(163, 202, 255) 0%, rgb(163, 202, 255) 100%)` }}>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#0f0e0e] text-[20px] text-left tracking-[-0.4px]" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        About
      </p>
    </button>
  );
}

function Links() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Links">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
    </div>
  );
}

function Spacer() {
  return <div className="shrink-0 size-[44px]" data-name="Spacer" />;
}

function Navigation() {
  return (
    <nav className="content-stretch flex items-start justify-between pointer-events-auto pt-[10px] sticky top-0 z-[5]" data-name="Navigation">
      <div className="relative shrink-0 size-[44px]" data-name="Logo">
        <img alt="Grain Archive logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <Links />
      <Spacer />
    </nav>
  );
}

function HeaderSection1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[80px] pt-[180px] relative rounded-[8px] shrink-0 w-full" data-name="Header section">
      <h1 className="block font-['Tilt_Warp:Regular',sans-serif] leading-[0.8] relative shrink-0 text-[#f6f8fb] text-[160px] text-center tracking-[-8px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'XROT' 0, 'YROT' 0" }}>
        About
      </h1>
    </div>
  );
}

function HeaderSection() {
  return (
    <header className="relative shrink-0 w-full z-[4]" data-name="Header section">
      <div className="content-stretch flex flex-col items-start px-[10px] relative w-full">
        <HeaderSection1 />
      </div>
    </header>
  );
}

function ObjectsMarquee() {
  return (
    <section aria-hidden="true" aria-label="A scrolling row of vintage media objects, including a Polaroid photo, a green vinyl record, a VHS tape, a telegram slip, an audio cassette, a postcard, and a floppy disk." className="content-stretch flex gap-[36px] items-center justify-center overflow-clip pr-[36px] py-[20px] relative shrink-0" data-name="Objects marquee">
      <div aria-hidden="true" className="h-[270px] relative shrink-0 w-[224px]" data-name="Polaroid" role="presentation">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[112.83%] left-[-4.85%] max-w-none top-[-7.19%] w-[108.84%]" src={imgPolaroid} />
        </div>
      </div>
      <div aria-hidden="true" className="h-[350px] relative shrink-0 w-[192px]" data-name="Paper scrap" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPaperScrap} />
      </div>
      <div aria-hidden="true" className="relative shrink-0 size-[320px]" data-name="Vinyl record" role="presentation">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.93%] left-[-5.06%] max-w-none top-[-5.33%] w-[110.12%]" src={imgVinylRecord} />
        </div>
      </div>
      <div aria-hidden="true" className="h-[180px] relative shrink-0 w-[313px]" data-name="VHS tape" role="presentation">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[173.06%] left-[-22.94%] max-w-none top-[-37.55%] w-[149.65%]" src={imgVhsTape} />
        </div>
      </div>
      <div aria-hidden="true" className="h-[240px] relative shrink-0 w-[348px]" data-name="Telegram" role="presentation">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.43%] left-[-6.85%] max-w-none top-[-12.71%] w-[113.7%]" src={imgTelegram} />
        </div>
      </div>
      <div aria-hidden="true" className="h-[160px] relative shrink-0 w-[255px]" data-name="Casette" role="presentation">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[192.77%] left-[-36.44%] max-w-none top-[-54.47%] w-[181.71%]" src={imgCasette} />
        </div>
      </div>
      <div className="flex h-[308.964px] items-center justify-center relative shrink-0 w-[443.497px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "3106" } as React.CSSProperties}>
        <div className="-rotate-4 flex-none">
          <div aria-hidden="true" className="h-[280px] relative w-[425px]" data-name="Postcard" role="presentation">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[205.31%] left-[-40.59%] max-w-none top-[-52.5%] w-[178.5%]" src={imgPostcard} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[241.049px] items-center justify-center relative shrink-0 w-[234.726px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "1924" } as React.CSSProperties}>
        <div className="flex-none rotate-6">
          <div aria-hidden="true" className="h-[220px] relative w-[212.896px]" data-name="Floppy disk" role="presentation">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFloppyDisk} />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <main className="max-w-[1280px] relative shrink-0 w-full" data-name="About section" tabIndex="-1">
      <div className="flex flex-row justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex font-['Geist:SemiBold',sans-serif] font-semibold gap-[40px] items-start justify-center leading-[1.4] max-w-[inherit] px-[50px] py-[120px] relative text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap">
          <h2 className="block relative shrink-0 w-[200px]" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Why this exists
          </h2>
          <p className="flex-[1_0_0] min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Grain Archive is a running record of the fuzz, fragments, and found moments in music, film, and visual culture. From washed-out shoegaze to sun-faded celluloid, we document the tones that don’t always get clean airtime. Not everything needs to be polished to mean something. Independently run by me, Casey Moth, and updated at the mercy of mood, memory, and whatever’s looping at 3am.
          </p>
        </div>
      </div>
    </main>
  );
}

function ContactParagraph() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[240px] relative shrink-0 text-[#f6f8fb] w-full whitespace-pre-wrap" data-name="Contact paragraph">
      <h2 className="block font-['Tilt_Warp:Regular',sans-serif] h-[34px] leading-[1.4] relative shrink-0 text-[24px] tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'XROT' 0, 'YROT' 0" }}>
        Contact
      </h2>
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] tracking-[-0.4px] w-full" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        <p className="leading-[1.4] mb-0">Got a dusty VHS, a lost record, or a film no one talks about?</p>
        <p className="leading-[1.4] mb-0">&nbsp;</p>
        <p>
          <span className="leading-[1.4]">{`Send recs, love letters, or questions to `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[1.4] underline" href="mailto:mail@grainarchive.com">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.4]" href="mailto:mail@grainarchive.com">
              mail@grainarchive.com
            </span>
          </a>
          <span className="leading-[1.4]">.</span>
        </p>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative self-stretch" data-name="Content container">
      <ContactParagraph />
    </div>
  );
}

function ContactSection() {
  return (
    <section className="max-w-[1800px] relative shrink-0 w-full" data-name="Contact section">
      <div className="flex flex-row justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center max-w-[inherit] pb-[120px] px-[10px] relative w-full">
          <div className="flex-[1_0_0] h-[254px] min-h-px min-w-px relative rounded-[8px]" data-name="Image">
            <img alt="Portrait of the blog owner with face partially distorted through two clear glasses of water on a white table" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
          </div>
          <ContentContainer />
        </div>
      </div>
    </section>
  );
}

function BodyContent() {
  return (
    <main className="content-stretch flex flex-col items-center relative shrink-0 w-full z-[3]" data-name="Body content" tabIndex="-1">
      <ObjectsMarquee />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

function Holes() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between px-[20px] py-[50px] relative shrink-0" data-name="Holes">
      <div aria-hidden="true" className="relative shrink-0 size-[24px]" data-name="Ellipse" role="presentation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="11.5" stroke="var(--stroke-0, #0F0E0E)" />
        </svg>
      </div>
      <div aria-hidden="true" className="relative shrink-0 size-[24px]" data-name="Ellipse" role="presentation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="11.5" stroke="var(--stroke-0, #0F0E0E)" />
        </svg>
      </div>
      <div aria-hidden="true" className="relative shrink-0 size-[24px]" data-name="Ellipse" role="presentation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="11.5" stroke="var(--stroke-0, #0F0E0E)" />
        </svg>
      </div>
    </div>
  );
}

function PaperGraphics() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[64px]" data-name="Paper graphics 1">
      <div aria-hidden="true" className="absolute border-[#0f0e0e] border-dashed border-r-[1.5px] inset-0 pointer-events-none" />
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
    <a className="bg-size-[1280px_600px,auto_auto] bg-top-left content-stretch cursor-pointer flex h-[68px] items-center justify-center px-[24px] relative shrink-0" data-name="Button - small" href="https://www.figma.com/sites/" style={{ backgroundImage: `url('${imgButtonSmall}'), linear-gradient(90deg, rgb(15, 14, 14) 0%, rgb(15, 14, 14) 100%)` }}>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#f6f8fb] text-[20px] text-left tracking-[-0.4px]" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Subscribe
      </p>
    </a>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <Paragraph />
      <ButtonSmall />
    </div>
  );
}

function Holes1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between px-[20px] py-[50px] relative shrink-0" data-name="Holes">
      <div aria-hidden="true" className="relative shrink-0 size-[24px]" data-name="Ellipse" role="presentation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="11.5" stroke="var(--stroke-0, #0F0E0E)" />
        </svg>
      </div>
      <div aria-hidden="true" className="relative shrink-0 size-[24px]" data-name="Ellipse" role="presentation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="11.5" stroke="var(--stroke-0, #0F0E0E)" />
        </svg>
      </div>
      <div aria-hidden="true" className="relative shrink-0 size-[24px]" data-name="Ellipse" role="presentation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="11.5" stroke="var(--stroke-0, #0F0E0E)" />
        </svg>
      </div>
    </div>
  );
}

function PaperGraphics1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[64px]" data-name="Paper graphics 2">
      <div aria-hidden="true" className="absolute border-[#0f0e0e] border-dashed border-l-[1.5px] inset-0 pointer-events-none" />
      <Holes1 />
    </div>
  );
}

function SubscribeContainer() {
  return (
    <div className="content-stretch flex gap-[40px] h-[360px] items-center max-w-[1400px] relative shrink-0 w-full" data-name="Subscribe container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubscribeContainer} />
      <PaperGraphics />
      <Content />
      <PaperGraphics1 />
    </div>
  );
}

function SubscribeSection() {
  return (
    <aside className="relative shrink-0 w-full z-[2]" data-name="Subscribe section">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubscribeSection} />
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end pb-[80px] pt-[180px] px-[40px] relative w-full">
          <SubscribeContainer />
        </div>
      </div>
    </aside>
  );
}

function LogoContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Logo container">
      <div className="aspect-[760/130.201171875] relative shrink-0 w-full" data-name="Grain Archive Logo">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 760 130.201">
          <path d={svgPaths.p14003900} fill="var(--fill-0, #F6F8FB)" id="Grain Archive Logo" />
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
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[140px]" data-name="Links column">
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
      <a className="block decoration-solid relative shrink-0" href="mailto:hello@grainarchive.com" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
        Email
      </a>
    </div>
  );
}

function ConnectColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[140px]" data-name="Connect column">
      <Label1 />
      <LinkList1 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0" data-name="Footer links">
      <LinksColumn />
      <ConnectColumn />
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex gap-[81px] items-start relative shrink-0 w-full" data-name="Footer content">
      <FooterLinks />
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-end leading-[1.4] min-h-px min-w-px relative text-[#d1d2d8] text-[16px] text-right tracking-[-0.32px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
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
          <LogoContainer />
          <FooterContent />
        </div>
      </div>
    </footer>
  );
}

export default function Tablet() {
  return (
    <div className="bg-size-[1280px_600px,auto_auto] bg-top-left content-stretch flex flex-col isolate items-center relative size-full" data-name="Tablet" style={{ backgroundImage: `url('${imgButtonSmall}'), linear-gradient(90deg, rgb(15, 14, 14) 0%, rgb(15, 14, 14) 100%)` }}>
      <div className="absolute h-[2614.201171875px] inset-[0_20px] pointer-events-none">
        <Navigation />
      </div>
      <HeaderSection />
      <BodyContent />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
import svgPaths from "./svg-juukvu0q38";
import imgNavItem from "figma:asset/16ea04cf7635cf8568a15abf32c149f41ad2afcb.png";
import imgNavItem1 from "figma:asset/61071de1ff7e1016fb34de249accc9aa62fdec08.png";
import imgNavItem2 from "figma:asset/5442b942da457deeb180237c6c3ce2cd8c7cb76a.png";
import imgLogo from "figma:asset/ac10c0d1bde583437f1e360fdfd8715b06bf6477.png";
import imgArticlesItem from "figma:asset/b49e3b214fd4defc11a623af10b336ba4c5e3910.png";
import imgArticlesItem1 from "figma:asset/508cce5b8ca923952642e9230c8a34bf056931af.png";
import imgArticlesItem2 from "figma:asset/83bc94e7880d759cc5a44eb2aa20e410862a0583.png";
import imgArticlesItem3 from "figma:asset/e42b0990278acbb590da999badfeefc90991ef44.png";
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

function HeaderSection() {
  return (
    <header className="content-stretch flex flex-col items-center py-[180px] relative rounded-[8px] shrink-0 w-full" data-name="Header section">
      <h1 className="block font-['Tilt_Warp:Regular',sans-serif] leading-[0.8] relative shrink-0 text-[#f6f8fb] text-[160px] text-center tracking-[-8px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'XROT' 0, 'YROT' 0" }}>
        Archive
      </h1>
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
    <article className="flex-[1_0_0] h-[500px] min-h-px min-w-[380px] relative rounded-[8px]" data-name="Articles item">
      <div className="flex flex-col items-center justify-end min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end min-w-[inherit] p-[10px] relative size-full">
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
    <article className="flex-[1_0_0] h-[500px] min-h-px min-w-[380px] relative rounded-[8px]" data-name="Articles item">
      <div className="flex flex-col items-center justify-end min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end min-w-[inherit] p-[10px] relative size-full">
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
    <article className="flex-[1_0_0] h-[500px] min-h-px min-w-[380px] relative rounded-[8px]" data-name="Articles item">
      <div className="flex flex-col items-center justify-end min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end min-w-[inherit] p-[10px] relative size-full">
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
    <article className="flex-[1_0_0] h-[500px] min-h-px min-w-[380px] relative rounded-[8px]" data-name="Articles item">
      <div className="flex flex-col items-center justify-end min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end min-w-[inherit] p-[10px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArticlesItem3} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content3 />
        </div>
      </div>
    </article>
  );
}

function MetaData4() {
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

function Content4() {
  return (
    <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold items-start justify-end leading-[1.4] p-[12px] relative text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-full">
          <h2 className="block min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Listening to Films That Drift
          </h2>
          <MetaData4 />
        </div>
      </div>
    </div>
  );
}

function ArticlesItem4() {
  return (
    <article className="flex-[1_0_0] h-[500px] min-h-px min-w-[380px] relative rounded-[8px]" data-name="Articles item">
      <div className="flex flex-col items-center justify-end min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end min-w-[inherit] p-[10px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArticlesItem3} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content4 />
        </div>
      </div>
    </article>
  );
}

function MetaData5() {
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

function Content5() {
  return (
    <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold items-start justify-end leading-[1.4] p-[12px] relative text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-full">
          <h2 className="block min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Listening to Films That Drift
          </h2>
          <MetaData5 />
        </div>
      </div>
    </div>
  );
}

function ArticlesItem5() {
  return (
    <article className="flex-[1_0_0] h-[500px] min-h-px min-w-[380px] relative rounded-[8px]" data-name="Articles item">
      <div className="flex flex-col items-center justify-end min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end min-w-[inherit] p-[10px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArticlesItem3} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content5 />
        </div>
      </div>
    </article>
  );
}

function MetaData6() {
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

function Content6() {
  return (
    <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold items-start justify-end leading-[1.4] p-[12px] relative text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-full">
          <h2 className="block min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Listening to Films That Drift
          </h2>
          <MetaData6 />
        </div>
      </div>
    </div>
  );
}

function ArticlesItem6() {
  return (
    <article className="flex-[1_0_0] h-[500px] min-h-px min-w-[380px] relative rounded-[8px]" data-name="Articles item">
      <div className="flex flex-col items-center justify-end min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end min-w-[inherit] p-[10px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArticlesItem3} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content6 />
        </div>
      </div>
    </article>
  );
}

function MetaData7() {
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

function Content7() {
  return (
    <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold items-start justify-end leading-[1.4] p-[12px] relative text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-full">
          <h2 className="block min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss01', 'ss03'" }}>
            Listening to Films That Drift
          </h2>
          <MetaData7 />
        </div>
      </div>
    </div>
  );
}

function ArticlesItem7() {
  return (
    <article className="flex-[1_0_0] h-[500px] min-h-px min-w-[380px] relative rounded-[8px]" data-name="Articles item">
      <div className="flex flex-col items-center justify-end min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end min-w-[inherit] p-[10px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArticlesItem3} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content7 />
        </div>
      </div>
    </article>
  );
}

function ArticlesList() {
  return (
    <main className="content-start flex flex-wrap gap-[10px] h-[2030px] items-start justify-center relative shrink-0 w-full" data-name="Articles list" tabIndex="-1">
      <ArticlesItem />
      <ArticlesItem1 />
      <ArticlesItem2 />
      <ArticlesItem3 />
      <ArticlesItem4 />
      <ArticlesItem5 />
      <ArticlesItem6 />
      <ArticlesItem7 />
    </main>
  );
}

function BodyContentContainer() {
  return (
    <main className="max-w-[1800px] relative shrink-0 w-full z-[4]" data-name="Body content container" tabIndex="-1">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center max-w-[inherit] px-[10px] relative w-full">
          <HeaderSection />
          <ArticlesList />
        </div>
      </div>
    </main>
  );
}

function Marquee() {
  return (
    <div className="content-stretch flex items-center justify-center py-[80px] relative shrink-0 w-full z-[3]" data-name="Marquee">
      <div className="flex-[1_0_0] font-['Instrument_Serif:Italic',sans-serif] italic leading-[0] min-h-px min-w-px text-[#f6f8fb] text-[80px] text-center tracking-[-1.6px]" />
    </div>
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

function Content8() {
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
      <Content8 />
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
          <path d={svgPaths.p3a3bb00} fill="var(--fill-0, #F6F8FB)" id="Grain Archive Logo" />
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
      <div className="absolute h-[3744.201171875px] inset-[0_20px] pointer-events-none">
        <Navigation />
      </div>
      <BodyContentContainer />
      <Marquee />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
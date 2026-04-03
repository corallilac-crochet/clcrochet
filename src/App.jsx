import { useState, useEffect } from "react";

const P = {
  orangeLight: "#FFF0E8",
  orangeMid:   "#FDDBC7",
  orangeAccent:"#E8945A",
  purpleLight: "#F3EEFF",
  purpleMid:   "#DDD0F8",
  purpleAccent:"#9B7FD4",
  purpleDark:  "#6B52A8",
  text:        "#3D2C2C",
  textMuted:   "#8C7070",
  white:       "#FFFAF7",
};

const NAV_H = 58; // px — must match header height below

/* ── icons ─────────────────────────────────────────── */
function IGIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function LineIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5C21 7.36 16.97 4 12 4C7.03 4 3 7.36 3 11.5C3 15.2 6.03 18.25 10.2 19.3L12 21L13.8 19.3C17.97 18.25 21 15.2 21 11.5Z"/>
      <line x1="8" y1="11.5" x2="16" y2="11.5" strokeWidth="1.5"/>
      <line x1="12" y1="8.5" x2="12" y2="14.5" strokeWidth="1.5"/>
    </svg>
  );
}
function ShopIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  );
}
function ShareIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  );
}
function EmailIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
function FormIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="8" y1="13" x2="16" y2="13"/>
      <line x1="8" y1="17" x2="12" y2="17"/>
    </svg>
  );
}


/* ── data ───────────────────────────────────────────── */
const SOCIAL_LINKS = [
  { Icon: IGIcon,   href: "https://instagram.com/corallilac.crochet", label: "Instagram" },
  { Icon: LineIcon, href: "https://line.me/ti/p/xR7t2pHASN",       label: "LINE"      },
  { Icon: ShopIcon, href: "https://myship.7-11.com.tw/home/Main",     label: "拍賣"      },
];

const NEWS_ITEMS = [
  { icon: "⏳", text: "一人作業，不接急單，請提前安排時間" },
  { icon: "📦", text: "商品完成後會提前出貨，不另行通知，若有任何問題請留言備註" },
  { icon: "🕙", text: "聯絡時間：平日 10:00 – 17:00" },
  { icon: "🌸", text: "假日不定時回覆，請耐心等候" },
  { icon: "✏️", text: "有特定需求，客製化訂製，請透過 LINE 聯繫" },
];

const PHOTOS = [//以下照片跟網址皆為測試用，待補
  { id:1, title:"手作皮革小包", desc:"植鞣革 · 手縫 · 限量款",  color:"#F5D9C8", src:"/images/IMG_1553.jpg" ,buyUrl:"https://myship.7-11.com.tw/home/Main"},
  { id:2, title:"壓花書籤組",   desc:"真花標本 · 樹脂封存",      color:"#DFD0F5", src:"/images/IMG_1553.jpg" ,buyUrl:"https://myship.7-11.com.tw/home/Main"},
  { id:3, title:"刺繡髮夾",     desc:"法式刺繡 · 手工貼布",      color:"#F0C8D8" },
  /*{ id:4, title:"陶土耳環",     desc:"手塑 · 無鉛釉料",          color:"#D4E8D0" },
  { id:5, title:"蠟燭禮盒",     desc:"大豆蠟 · 精油調香",        color:"#F0E8C8" },
  { id:6, title:"乾燥花框",     desc:"永生花 · 木框裝飾",        color:"#C8DFF0" },*/
];

const IG_VIDEOS = [
  "https://www.instagram.com/p/DWqRsCqkW8z/" ,
  "https://www.instagram.com/zhichuan_design/reel/DG2mFiLt6t-/",
  /*以上影片為測試用，待補上
  "https://www.instagram.com/reel/影片二ID/",
  "https://www.instagram.com/reel/影片三ID/",*/
];

const QA_ITEMS = [
  { q:"如何下單購買？",       a:"請前往拍賣頁面選購，或透過 LINE 私訊洽詢客製化訂單。" },
  { q:"製作時間大約多久？",   a:"一般商品約 7–14 個工作天；客製化商品視難度而定，洽詢後確認。" },
  { q:"可以更改顏色或尺寸嗎？",a:"客製化訂製皆可調整，請透過 LINE 聯繫並說明需求，報價後確認再製作。" },
  { q:"出貨與運費說明",       a:"使用黑貓或郵寄方式寄送，運費依重量計算，購買前會告知。" },
  { q:"收到有問題怎麼辦？",   a:"收到商品後請於 48 小時內拍照聯繫，確認後安排補寄或退換。" },
];

/* ── small components ───────────────────────────────── */
function Section({ id, title, accent, children, bg }) {
  return (
    <section id={id} style={{ padding:"2.5rem 1.25rem", background: bg || "transparent" }}>
      <div style={{ maxWidth:680, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:"1.5rem" }}>
          <div style={{ width:4, height:22, borderRadius:4, background: accent || P.purpleAccent }}/>
          <h2 style={{ fontSize:"clamp(16px,4.5vw,20px)", fontWeight:600, margin:0, letterSpacing:"0.1em", color:P.text }}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

// IG embed 元件：自動載入 IG script 並渲染貼文
function IGEmbed({ url }) {
  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ margin:"0 auto", width:"100%", minWidth:"unset", maxWidth:"100%",
               border:"none", boxShadow:"none", borderRadius:16 }}
    />
  );
}
// IGScript — 統一在所有 blockquote 都進 DOM 後才呼叫 process()
function IGScript({ count }) {
  useEffect(() => {
    const run = () => { if (window.instgrm) window.instgrm.Embeds.process(); };
    const timer = setTimeout(run, 500);
    if (!document.querySelector("script[src*='instagram.com/embed']")) {
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      s.onload = () => setTimeout(run, 300);
      document.body.appendChild(s);
    }
    return () => clearTimeout(timer);
  }, [count]);
  return null;
}

function Lightbox({ photo, onClose }) {
  if (!photo) return null;
  return (
    <div onClick={onClose} style={{
      position:"fixed", inset:0, zIndex:300,
      background:"rgba(30,20,20,0.72)", backdropFilter:"blur(10px)",
      display:"flex", alignItems:"center", justifyContent:"center", padding:"1.5rem",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:P.white, borderRadius:24, width:"min(420px,92vw)",
        overflow:"hidden", boxShadow:"0 24px 64px rgba(0,0,0,0.28)",
        border:"1px solid rgba(255,255,255,0.7)",
      }}>
        {/* 放大圖片 */}
        {photo.src
          ? <img src={photo.src} alt={photo.title} style={{ width:"100%", aspectRatio:"3/4", objectFit:"cover", display:"block" }}/>
          : <div style={{ aspectRatio:"3/4", background:photo.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:60, opacity:0.22 }}>◆</div>
        }
        <div style={{ padding:"1.25rem 1.5rem 1.5rem" }}>
          <p style={{ fontWeight:600, fontSize:17, margin:"0 0 4px", color:P.text, letterSpacing:"0.06em" }}>{photo.title}</p>
          <p style={{ fontSize:13, color:P.textMuted, margin:"0 0 1.25rem", letterSpacing:"0.05em" }}>{photo.desc}</p>
          <div style={{ display:"flex", gap:10 }}>
            <button onClick={onClose} style={{
              flex:1, padding:"10px 0", borderRadius:999,
              border:`1.5px solid ${P.purpleMid}`, background:"transparent",
              color:P.purpleAccent, cursor:"pointer", fontFamily:"inherit", fontSize:13,
            }}>關閉</button>
            <a href={photo.buyUrl || "#"} target="_blank" rel="noopener noreferrer" style={{
              flex:2, padding:"10px 0", borderRadius:999, background:P.orangeAccent,
              color:"white", textAlign:"center", textDecoration:"none",
              fontSize:13, display:"flex", alignItems:"center", justifyContent:"center", letterSpacing:"0.06em",
              opacity: photo.buyUrl ? 1 : 0.4, pointerEvents: photo.buyUrl ? "auto" : "none",
            }}>前往購買 →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function QAItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderRadius:14, marginBottom:10, overflow:"hidden",
      border:`1px solid ${open ? P.purpleMid : "rgba(221,208,248,0.45)"}`,
      background: open ? "rgba(243,238,255,0.6)" : "rgba(255,250,247,0.5)",
      transition:"all 0.22s",
    }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width:"100%", textAlign:"left", padding:"14px 16px",
        background:"none", border:"none", cursor:"pointer",
        display:"flex", justifyContent:"space-between", alignItems:"center", gap:12,
        fontFamily:"inherit",
      }}>
        <span style={{ fontSize:"clamp(13px,3.5vw,15px)", color:P.text, letterSpacing:"0.05em" }}>{item.q}</span>
        <span style={{ fontSize:20, color:P.purpleAccent, flexShrink:0, transition:"transform 0.22s", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>＋</span>
      </button>
      {open && (
        <div style={{ padding:"0 16px 16px" }}>
          <p style={{ fontSize:"clamp(12px,3.2vw,14px)", color:P.textMuted, lineHeight:1.7, margin:0, letterSpacing:"0.04em" }}>{item.a}</p>
        </div>
      )}
    </div>
  );
}

function ShareBtn() {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    const url = window.location.href;
    if (navigator.share) { try { await navigator.share({ title:"作品集", url }); } catch (_) {} }
    else { try { await navigator.clipboard.writeText(url); } catch (_) {} setCopied(true); setTimeout(() => setCopied(false), 2200); }
  };
  return (
    <div style={{ position:"fixed", bottom:24, right:20, zIndex:200, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:6 }}>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="回到頂端"
        style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "rgba(255,250,247,0.88)",
          border: `1px solid ${P.orangeMid}`,
          cursor: "pointer", color: P.orangeAccent,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 12px rgba(232,148,90,0.25)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="18,15 12,9 6,15"/>
        </svg>
      </button>
      {copied && <span style={{ background:P.text, color:"white", borderRadius:8, padding:"5px 12px", fontSize:11, whiteSpace:"nowrap", letterSpacing:"0.06em" }}>已複製連結！</span>}
      <button onClick={handle} title="分享此頁面" style={{
        width:48, height:48, borderRadius:"50%",
        background:`linear-gradient(135deg,${P.orangeAccent},${P.purpleAccent})`,
        border:"none", cursor:"pointer", color:"white",
        display:"flex", alignItems:"center", justifyContent:"center",
        boxShadow:"0 4px 18px rgba(155,127,212,0.4)", transition:"transform 0.2s",
      }}
        onMouseEnter={e => e.currentTarget.style.transform="scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
      ><ShareIcon size={20}/></button>
    </div>
  );
}

/* ── main ───────────────────────────────────────────── */
export default function Portfolio() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div style={{ minHeight:"100vh", background:P.white, fontFamily:"'Georgia','Noto Serif TC',serif", color:P.text, overflowX:"hidden" }}>
      <style>{`
        @keyframes bobDown { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(7px)} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:none} }
      `}</style>

      {/* ══ FIXED NAV ══════════════════════════════════ */}
      <header style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100,
        height: NAV_H,
        backdropFilter:"blur(16px)",
        WebkitBackdropFilter:"blur(16px)",
        background:"rgba(255,250,247,0.92)",
        borderBottom:`1px solid ${P.orangeMid}`,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 1.25rem",
      }}>
        <div>
          <p style={{ fontSize:"clamp(15px,4vw,19px)", fontWeight:600, letterSpacing:"0.1em", margin:0, color:P.orangeAccent }}>
            CoralLilac澄紫手織
          </p>
          <p style={{ fontSize:9, letterSpacing:"0.22em", color:P.textMuted, margin:0, textTransform:"uppercase" }}>Portfolio</p>
        </div>
        <div style={{ display:"flex", gap:22, alignItems:"center" }}>
          {SOCIAL_LINKS.map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} style={{
              color:P.purpleAccent, display:"flex", textDecoration:"none", transition:"color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e=>{ e.currentTarget.style.color=P.orangeAccent; e.currentTarget.style.transform="scale(1.15)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.color=P.purpleAccent; e.currentTarget.style.transform="scale(1)"; }}
            ><Icon size={21}/></a>
          ))}
        </div>
      </header>

      {/* spacer so content starts below fixed nav */}
      <div style={{ height: NAV_H }}/>

      {/* ══ HERO ═══════════════════════════════════════ */}
      <div style={{
        position:"relative", height:"50vh", minHeight:280, maxHeight:500,
        background:`linear-gradient(155deg, rgba(253,219,199,0.55) 0%, rgba(237,216,248,0.55) 100%), url('/IMG_1543.jpg') center/cover no-repeat`,
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
        overflow:"hidden",
      }}>
        <div style={{ position:"absolute", top:"-20%", left:"-12%", width:"55%", aspectRatio:"1", borderRadius:"50%", background:"rgba(232,148,90,0.2)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:"-20%", right:"-12%", width:"60%", aspectRatio:"1", borderRadius:"50%", background:"rgba(155,127,212,0.2)", pointerEvents:"none" }}/>

        <div style={{ position:"relative", zIndex:1, textAlign:"center", padding:"0 1.5rem", animation:"fadeUp 0.7s ease both" }}>
          <h1 style={{ fontSize:"clamp(28px,8vw,48px)", fontWeight:400, letterSpacing:"0.18em", margin:"0 0 8px", color:P.text }}>
            CoralLilac澄紫手織
          </h1>
          <p style={{ fontSize:"clamp(12px,3.5vw,15px)", letterSpacing:"0.22em", color:P.textMuted, margin:"0 0 1.75rem" }}>
            用影像記錄每一個溫柔的瞬間
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:18 }}>
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} style={{
                width:46, height:46, borderRadius:"50%",
                background:"rgba(255,255,255,0.55)", backdropFilter:"blur(8px)",
                border:"1px solid rgba(255,255,255,0.85)",
                display:"flex", alignItems:"center", justifyContent:"center",
                color:P.purpleDark, textDecoration:"none", transition:"transform 0.2s, background 0.2s",
              }}
                onMouseEnter={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.85)"; e.currentTarget.style.transform="scale(1.12)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.55)"; e.currentTarget.style.transform="scale(1)"; }}
              ><Icon size={22}/></a>
            ))}
          </div>
        </div>

        <div style={{ position:"absolute", bottom:16, left:"50%", display:"flex", flexDirection:"column", alignItems:"center", gap:3, animation:"bobDown 1.8s ease-in-out infinite" }}>
          <span style={{ fontSize:9, letterSpacing:"0.22em", color:P.textMuted, textTransform:"uppercase" }}>scroll</span>
          <svg width="14" height="10" viewBox="0 0 20 12" fill="none" stroke={P.textMuted} strokeWidth="2" strokeLinecap="round"><polyline points="2,2 10,10 18,2"/></svg>
        </div>
      </div>

      {/* ══ 最新資訊 ═══════════════════════════════════ */}
      <Section id="news" title="最新資訊" accent={P.orangeAccent} bg={P.orangeLight}>
        <div style={{ borderRadius:20, background:"rgba(255,255,255,0.58)", backdropFilter:"blur(14px)", border:`1px solid rgba(253,219,199,0.85)`, padding:"0.5rem 1.5rem" }}>
          {NEWS_ITEMS.map((item, i) => (
            <div key={i} style={{
              display:"flex", alignItems:"center", gap:14, padding:"13px 0",
              borderBottom: i < NEWS_ITEMS.length-1 ? `1px solid rgba(253,219,199,0.8)` : "none",
            }}>
              <span style={{ fontSize:15, flexShrink:0, width:32, height:32, borderRadius:"50%", background:P.orangeMid, display:"flex", alignItems:"center", justifyContent:"center" }}>{item.icon}</span>
              <p style={{ fontSize:"clamp(13px,3.5vw,15px)", lineHeight:1.6, margin:0, color:P.text, letterSpacing:"0.04em" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign:"right", fontSize:11, color:P.textMuted, marginTop:8, letterSpacing:"0.08em" }}>＊ 資訊隨時更新，以最新為準</p>
      </Section>

      {/* ══ 作品照片 ════════════════════════════════════ */}
      <Section id="photos" title="作品照片" accent={P.purpleAccent}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
          {PHOTOS.map(photo => (
            <div key={photo.id} onClick={() => setActivePhoto(photo)} style={{
              borderRadius:16, overflow:"hidden", cursor:"pointer",
              background:photo.color, border:"1px solid rgba(255,255,255,0.7)",
              boxShadow:"0 2px 10px rgba(0,0,0,0.07)", transition:"transform 0.22s, box-shadow 0.22s",
            }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 10px 28px rgba(0,0,0,0.13)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 2px 10px rgba(0,0,0,0.07)"; }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                style={{ width:"100%", aspectRatio:"3/4", objectFit:"cover", display:"block" }}
              />
              <div style={{ padding:"10px 12px 14px", background:"rgba(255,255,255,0.55)", backdropFilter:"blur(4px)" }}>
                <p style={{ fontSize:"clamp(12px,3.2vw,14px)", fontWeight:600, margin:"0 0 3px", letterSpacing:"0.06em", color:P.text }}>{photo.title}</p>
                <p style={{ fontSize:"clamp(10px,2.5vw,12px)", color:P.textMuted, margin:0, letterSpacing:"0.04em" }}>{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ══ 作品影片 ════════════════════════════════════ */}
      <Section id="videos" title="作品影片" accent={P.orangeAccent} bg={P.purpleLight}>
        <IGScript videos={IG_VIDEOS} />
        {/*
          每部影片一欄，卡片水平排列：左邊是 9:16 的影片框，右邊是說明文字。
          這樣電腦和手機都不會太寬，視覺比例剛好。
          手機上 (<480px) 卡片會自動換成上下排列。
        */}
        {/*
          每部影片直接讓 IG embed 自己渲染，不加自訂 header/footer。
          maxWidth:480 讓畫面在電腦上不會太寬，置中對齊。
          把佔位符換成 <IGEmbed url={v.url} /> 後即可播放。
        */}
        <div style={{ display:"flex", flexDirection:"column", gap:8, alignItems:"center" }}>
          {IG_VIDEOS.map((url, i) => (
            <div key={i} style={{ width:"100%", maxWidth:480 }}>
              <IGEmbed url={url} />
            </div>
          ))}
        </div>
      </Section>

      {/* ══ Q&A ════════════════════════════════════════ */}
      <Section id="qa" title="Q &amp; A" accent={P.purpleAccent}>
        {QA_ITEMS.map((item,i) => <QAItem key={i} item={item}/>)}
      </Section>

      {/* ══ Support ════════════════════════════════════ */}
      <Section id="support" title="Support" accent={P.orangeAccent} bg={P.orangeLight}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(260px,100%),1fr))", gap:16 }}>
          <div style={{ borderRadius:20, padding:"1.5rem 1.5rem 1.75rem", background:"rgba(255,255,255,0.62)", backdropFilter:"blur(12px)", border:`1px solid ${P.orangeMid}` }}>
            <p style={{ fontSize:15, fontWeight:600, margin:"0 0 8px", letterSpacing:"0.08em", color:P.text }}>🛍 售後服務</p>
            <p style={{ fontSize:"clamp(12px,3.2vw,13px)", color:P.textMuted, lineHeight:1.75, margin:"0 0 1.25rem", letterSpacing:"0.04em" }}>
              收到商品後如有任何問題，請於 <strong>48 小時內</strong>拍照說明，填寫回報表單或透過 LINE 聯繫，我們會盡快處理。
            </p>
            <div style={{ display:"flex", gap:10 }}>
              <a href="https://docs.google.com/forms/d/1yctnbkXJna3fgYNdeghqqriMJssHRbI0YNfIT4Ipzd8/edit?hl=zh-tw&pli=1" target="_blank" rel="noopener noreferrer" style={{ flex:1, padding:"10px 0", borderRadius:999, textAlign:"center", background:P.orangeAccent, color:"white", textDecoration:"none", fontSize:13, letterSpacing:"0.06em", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}><FormIcon size={15}/>回報表單</a>
              <a href="https://line.me/ti/p/xR7t2pHASN" target="_blank" rel="noopener noreferrer" style={{ flex:1, padding:"10px 0", borderRadius:999, textAlign:"center", background:"#06C755", color:"white", textDecoration:"none", fontSize:13, letterSpacing:"0.06em", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}><LineIcon size={15}/>LINE</a>
            </div>
          </div>

          <div style={{ borderRadius:20, padding:"1.5rem 1.5rem 1.75rem", background:"rgba(255,255,255,0.62)", backdropFilter:"blur(12px)", border:`1px solid ${P.purpleMid}` }}>
            <p style={{ fontSize:15, fontWeight:600, margin:"0 0 8px", letterSpacing:"0.08em", color:P.text }}>✉ 商業合作</p>
            <p style={{ fontSize:"clamp(12px,3.2vw,13px)", color:P.textMuted, lineHeight:1.75, margin:"0 0 1.25rem", letterSpacing:"0.04em" }}>
              歡迎品牌合作、活動邀約、聯名企劃等提案，請在主旨註明合作類型，將於三個工作天內回覆。
            </p>
            <a href="mailto:coral.lilac0401@email.com" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"10px 0", borderRadius:999, background:P.purpleAccent, color:"white", textDecoration:"none", fontSize:13, letterSpacing:"0.06em" }}>
              <EmailIcon size={15}/>coral.lilac0401@gmail.com
            </a>
          </div>
        </div>
      </Section>

      {/* ══ FOOTER ═════════════════════════════════════ */}
      <footer style={{ textAlign:"center", padding:"1.75rem 1rem", borderTop:`1px solid ${P.orangeMid}`, fontSize:11, color:P.textMuted, letterSpacing:"0.15em", background:P.white }}>
        <div style={{ display:"flex", justifyContent:"center", gap:22, marginBottom:10 }}>
          {SOCIAL_LINKS.map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ color:P.textMuted, textDecoration:"none" }}><Icon size={17}/></a>
          ))}
        </div>
        © 2025 · CoralLilac澄紫手織 · All rights reserved
      </footer>

      <Lightbox photo={activePhoto} onClose={() => setActivePhoto(null)}/>
      <ShareBtn/>
    </div>
  );
}

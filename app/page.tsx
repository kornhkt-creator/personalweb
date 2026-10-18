import { createClient } from "@/lib/supabase/server";
import { ArrowUpRight, Sparkles, Cpu, Code2, PanelsTopLeft, Video, Mail, Phone, ArrowRight } from "lucide-react";

type SiteContent = {
  name: string; role: string; tagline: string; about: string; email: string; phone: string;
  skills: string[]; projects: { title: string; category: string; description: string; link: string }[];
  experience: { role: string; organization: string; period: string; details: string }[];
  education: string; university: string; articlesIntro: string; socialLinks: { label: string; url: string }[];
};
const defaults: SiteContent = {
  name: "Chayakorn Wimoonchart",
  role: "Managing Director / AI & Digital Innovation",
  tagline: "ผสาน AI เทคโนโลยี และความคิดสร้างสรรค์ เพื่อพัฒนาการทำงาน การตลาด และโอกาสใหม่ให้กับธุรกิจ",
  about: "ชยากรณ์ วิมูลชาติ เป็นผู้บริหารที่สนใจการประยุกต์ใช้เทคโนโลยีดิจิทัลและ AI ในการดำเนินธุรกิจ ครอบคลุมการวางแผนการจำหน่าย การสร้างสื่อประชาสัมพันธ์ และการนำระบบดิจิทัลมาช่วยเพิ่มประสิทธิภาพการทำงาน รวมถึงการถ่ายทอดความรู้ด้าน Generative AI และ AI Automation",
  email: "Chayakorn.wim@gmail.com", phone: "081-855-1560",
  skills: ["Generative AI for Marketing", "AI Automation", "Database Design", "Programming", "Web Design", "Product Design", "Video Editing"],
  projects: [
    {title:"[ชื่อโปรเจกต์ AI Automation]",category:"AI & AUTOMATION",description:"เพิ่มรายละเอียดปัญหา แนวทางแก้ไข เครื่องมือ และผลลัพธ์ที่วัดผลได้",link:""},
    {title:"[ชื่อโปรเจกต์ดิจิทัล]",category:"DIGITAL BUSINESS",description:"เพิ่มรายละเอียดเว็บไซต์ ระบบ หรือการปรับปรุงกระบวนการทางธุรกิจ",link:""},
    {title:"[ชื่อโปรเจกต์สื่อสร้างสรรค์]",category:"CREATIVE MEDIA",description:"เพิ่มตัวอย่างสื่อ วัตถุประสงค์ กลุ่มเป้าหมาย และลิงก์ผลงาน",link:""}
  ],
  experience: [
    {role:"กรรมการผู้จัดการ",organization:"บริษัท เทราริช จำกัด",period:"ปัจจุบัน",details:"วางแผนกลยุทธ์การจำหน่ายสินค้า • จัดทำสื่อประชาสัมพันธ์ • นำระบบดิจิทัลมาเพิ่มประสิทธิภาพการทำงาน"},
    {role:"ผู้ช่วยผู้จัดการ",organization:"หจก.โรงสีไฟหันคาธัญญกิจ",period:"2554",details:"บริหารคลังสินค้า การผลิต และบุคลากร • วางแผนจัดซื้อและจัดจำหน่าย • พัฒนาระบบงานภายใน"}
  ],
  education:"ปริญญาตรี สาขาวิชาคอมพิวเตอร์ธุรกิจ", university:"คณะบริหารธุรกิจ · มหาวิทยาลัยกรุงเทพ",
  articlesIntro:"พื้นที่แบ่งปันความรู้ด้าน AI และ Digital Business — เพิ่มบทความ เทคนิค เครื่องมือ หรือกรณีศึกษาที่ต้องการเผยแพร่ได้ที่นี่",
  socialLinks:[]
};

async function getContent(): Promise<SiteContent> {
  try {
    const supabase = await createClient();
    const { data } = await supabase.from("site_content").select("content").eq("id", 1).maybeSingle();
    if (data?.content) return { ...defaults, ...data.content };
  } catch {}
  return defaults;
}
export const revalidate = 0;

export default async function Home() {
  const c = await getContent();
  return <main>
    <header className="header"><nav className="nav wrap"><a className="brand" href="#home"><span className="brand-mark">C<span>.</span></span><span className="brand-name">CHAYAKORN<small>AI & DIGITAL INNOVATION</small></span></a><div className="nav-links"><a href="#about">About</a><a href="#skills">Skills</a><a href="#portfolio">Portfolio</a><a href="#experience">Experience</a><a className="nav-cta" href="#contact">Let&apos;s talk ↗</a></div></nav></header>
    <section className="hero wrap" id="home"><div className="hero-copy"><div className="eyebrow"><i/> BUILDING WHAT&apos;S NEXT</div><p className="hello">Hello, I&apos;m</p><h1>{c.name.split(" ").slice(0,-1).join(" ")}<br/><span>{c.name.split(" ").slice(-1).join("")}<b>.</b></span></h1><p className="role">{c.role}</p><p className="intro">{c.tagline}</p><div className="actions"><a className="button dark-button" href="#portfolio">Explore my work <ArrowUpRight size={17}/></a><a className="simple-link" href="#contact">ติดต่อพูดคุย →</a></div><div className="meta"><span>● Generative AI</span><span>● Automation</span><span>● Digital Business</span></div></div><div className="art" aria-label="Abstract orange and purple design"><div className="orbit"/><div className="sun"/><div className="purple-ball"/><div className="art-card card-a"><small>FOCUS / 01</small><strong>Think<br/>Forward.</strong></div><div className="art-card card-b"><small>IDEAS INTO ACTION</small><strong>Human × AI</strong></div><Sparkles className="spark" size={34}/></div></section>
    <div className="ticker"><span>GENERATIVE AI　✳　AI AUTOMATION　✳　DIGITAL MARKETING　✳　PRODUCT & WEB DESIGN　✳　GENERATIVE AI　✳　AI AUTOMATION　✳　DIGITAL MARKETING　✳</span></div>
    <section className="section wrap" id="about"><p className="section-index">01 / ABOUT ME</p><h2>Curiosity drives.<br/><em>Technology empowers.</em></h2><div className="about-grid"><p className="lead">“เปลี่ยนเทคโนโลยีให้เป็นเครื่องมือที่ใช้งานได้จริง สร้างคุณค่าให้กับธุรกิจและผู้คน”</p><div><p>{c.about}</p><div className="stat-row"><div><strong>AI</strong><small>Applied AI & Automation</small></div><div><strong>Digital</strong><small>Business Transformation</small></div><div><strong>Learn</strong><small>Training & Knowledge Sharing</small></div></div></div></div></section>
    <section className="section tinted" id="skills"><div className="wrap"><p className="section-index">02 / WHAT I DO</p><h2>Skills & <em>toolkit.</em></h2><p className="muted">ความสามารถจากประวัติและประสบการณ์</p><div className="skill-grid">{c.skills.map((s,i)=><article className={`skill-card ${i===0?"featured":""}`} key={s}><span className="skill-num">0{i+1}</span><div className="skill-icon">{[<Sparkles key="s"/>,<Cpu key="c"/>,<Code2 key="d"/>,<PanelsTopLeft key="p"/>,<Video key="v"/>][i%5]}</div><h3>{s}</h3><small>{["AI · CONTENT · MARKETING","WORKFLOW · PROCESS","LOGIC · DATA","WEB · PRODUCT","VIDEO · STORYTELLING"][i%5]}</small></article>)}</div></div></section>
    <section className="section wrap" id="portfolio"><p className="section-index">03 / SELECTED WORK</p><h2>Ideas into <em>impact.</em></h2><div className="notice">✳　<strong>พื้นที่สำหรับผลงานของคุณ</strong><p>โปรเจกต์ด้านล่างแก้ไขได้จากหน้า Admin ไม่จำเป็นต้องแก้โค้ด</p></div><div className="project-grid">{c.projects.map((p,i)=><article className={`project project-${i%3}`} key={`${p.title}-${i}`}><div className="project-art"><span>PROJECT 0{i+1}</span><div>{["AI","↗","✳"][i%3]}</div><small>{p.category}</small></div><div className="project-copy"><small>{p.category}</small><h3>{p.title}</h3><p>{p.description}</p>{p.link&&<a href={p.link} target="_blank" rel="noreferrer">ดูผลงาน ↗</a>}</div></article>)}</div></section>
    <section className="section dark-section" id="experience"><div className="wrap"><p className="section-index">04 / EXPERIENCE</p><h2>Experience & <em>sharing.</em></h2><div className="experience-grid"><div className="timeline">{c.experience.map((e,i)=><article className="timeline-item" key={`${e.role}-${i}`}><span>{e.period}</span><div><small>EXPERIENCE</small><h3>{e.role}</h3><p className="org">{e.organization}</p><p>{e.details}</p></div></article>)}</div><aside className="speaker"><Sparkles/><small>KNOWLEDGE SHARING</small><h3>AI Training<br/>& Workshops</h3><p>วิทยากรด้าน AI และเทคโนโลยีดิจิทัลในกิจกรรมอบรมของหน่วยงานและองค์กรต่าง ๆ</p><div className="speaker-list">Generative AI · AI Automation · n8n · AI Content Creator</div></aside></div></div></section>
    <section className="section wrap" id="education"><p className="section-index">05 / EDUCATION</p><h2>Always <em>learning.</em></h2><div className="education"><div className="edu-icon">B</div><div><small>BACHELOR&apos;S DEGREE</small><h3>{c.education}</h3><p>{c.university}</p></div><div className="languages"><small>LANGUAGES</small><p>ภาษาไทย <b>ดีเยี่ยม</b></p><p>ภาษาอังกฤษ <b>ปานกลาง</b></p></div></div></section>
    <section className="section tinted" id="articles"><div className="wrap"><p className="section-index">06 / NOTES & IDEAS</p><h2>Articles & <em>insights.</em></h2><div className="article-box"><Sparkles/><div><small>KNOWLEDGE / IDEAS</small><h3>AI & Digital Business</h3><p>{c.articlesIntro}</p></div></div></div></section>
    <section className="contact" id="contact"><div className="wrap contact-grid"><div><p className="section-index">07 / GET IN TOUCH</p><h2>Have an idea?<br/><b>Let&apos;s make it real.</b></h2><p>สนใจร่วมงาน เชิญเป็นวิทยากร หรือแลกเปลี่ยนแนวคิดด้าน AI และเทคโนโลยีดิจิทัล</p><a className="button light-button" href={`mailto:${c.email}`}>Start a conversation ↗</a></div><div className="contact-links"><a href={`mailto:${c.email}`}><small>EMAIL</small><strong>{c.email}</strong><ArrowUpRight/></a><a href={`tel:${c.phone.replace(/[^0-9+]/g,"")}`}><small>PHONE</small><strong>{c.phone}</strong><ArrowUpRight/></a>{c.socialLinks.map(s=><a href={s.url} key={s.label} target="_blank" rel="noreferrer"><small>SOCIAL / PROFESSIONAL</small><strong>{s.label}</strong><ArrowUpRight/></a>)}</div></div></section>
    <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">C<span>.</span></span><span className="brand-name">CHAYAKORN<small>AI & DIGITAL INNOVATION</small></span></a><p>© {new Date().getFullYear()} {c.name}. All rights reserved.</p><a href="/admin/login">ADMIN ↗</a></div></footer>
  </main>;
}
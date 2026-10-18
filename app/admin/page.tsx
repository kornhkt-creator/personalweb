import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminEditor from "./editor";
import { ArrowLeft, LogOut } from "lucide-react";
import LogoutButton from "./logout-button";

const initialContent = {
  name:"Chayakorn Wimoonchart", role:"Managing Director / AI & Digital Innovation",
  tagline:"ผสาน AI เทคโนโลยี และความคิดสร้างสรรค์ เพื่อพัฒนาการทำงาน การตลาด และโอกาสใหม่ให้กับธุรกิจ",
  about:"ชยากรณ์ วิมูลชาติ เป็นผู้บริหารที่สนใจการประยุกต์ใช้เทคโนโลยีดิจิทัลและ AI ในการดำเนินธุรกิจ ครอบคลุมการวางแผนการจำหน่าย การสร้างสื่อประชาสัมพันธ์ และการนำระบบดิจิทัลมาช่วยเพิ่มประสิทธิภาพการทำงาน รวมถึงการถ่ายทอดความรู้ด้าน Generative AI และ AI Automation",
  email:"Chayakorn.wim@gmail.com", phone:"081-855-1560",
  skills:["Generative AI for Marketing","AI Automation","Database Design","Programming","Web Design","Product Design","Video Editing"],
  projects:[
    {title:"[ชื่อโปรเจกต์ AI Automation]",category:"AI & AUTOMATION",description:"เพิ่มรายละเอียดปัญหา แนวทางแก้ไข เครื่องมือ และผลลัพธ์ที่วัดผลได้",link:""},
    {title:"[ชื่อโปรเจกต์ดิจิทัล]",category:"DIGITAL BUSINESS",description:"เพิ่มรายละเอียดเว็บไซต์ ระบบ หรือการปรับปรุงกระบวนการทางธุรกิจ",link:""},
    {title:"[ชื่อโปรเจกต์สื่อสร้างสรรค์]",category:"CREATIVE MEDIA",description:"เพิ่มตัวอย่างสื่อ วัตถุประสงค์ กลุ่มเป้าหมาย และลิงก์ผลงาน",link:""}
  ],
  experience:[
    {role:"กรรมการผู้จัดการ",organization:"บริษัท เทราริช จำกัด",period:"ปัจจุบัน",details:"วางแผนกลยุทธ์การจำหน่ายสินค้า • จัดทำสื่อประชาสัมพันธ์ • นำระบบดิจิทัลมาเพิ่มประสิทธิภาพการทำงาน"},
    {role:"ผู้ช่วยผู้จัดการ",organization:"หจก.โรงสีไฟหันคาธัญญกิจ",period:"2554",details:"บริหารคลังสินค้า การผลิต และบุคลากร • วางแผนจัดซื้อและจัดจำหน่าย • พัฒนาระบบงานภายใน"}
  ],
  education:"ปริญญาตรี สาขาวิชาคอมพิวเตอร์ธุรกิจ", university:"คณะบริหารธุรกิจ · มหาวิทยาลัยกรุงเทพ",
  articlesIntro:"พื้นที่แบ่งปันความรู้ด้าน AI และ Digital Business — เพิ่มบทความ เทคนิค เครื่องมือ หรือกรณีศึกษาที่ต้องการเผยแพร่ได้ที่นี่",
  socialLinks:[]
};

export default async function AdminPage(){
 const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();
 if(!user) redirect("/admin/login");
 if(user.app_metadata?.role!=="admin") redirect("/admin/login");
 const {data}=await supabase.from("site_content").select("content").eq("id",1).maybeSingle();
 const content={...initialContent,...(data?.content||{})};
 return <main className="admin-dashboard"><header className="admin-top"><a href="/" className="brand"><span className="brand-mark">C<span>.</span></span><span className="brand-name">PORTFOLIO CMS<small>CONTENT MANAGEMENT</small></span></a><div className="admin-top-actions"><a href="/" target="_blank">ดูเว็บไซต์ ↗</a><LogoutButton/></div></header><div className="admin-main"><div className="admin-heading"><div><p className="section-index">WEBSITE SETTINGS</p><h1>แก้ไขเว็บไซต์</h1><p className="muted">แก้ไขข้อความในฟอร์ม แล้วกดบันทึก ระบบจะอัปเดตหน้าเว็บไซต์โดยไม่ต้องแก้โค้ด</p></div><a href="/" className="preview-link"><ArrowLeft size={15}/> กลับหน้าเว็บ</a></div><AdminEditor initialContent={content}/></div></main>;
}